import asyncio
import json
import os
import signal
from wordle import Wordle

import websockets


async def start(websocket):
    # Initialize a Wordle game
    game = Wordle()

    print("a player started a game")
    await play(websocket, game)

async def play(websocket, game):

    async for message in websocket:
        event = json.loads(message)
        assert event["type"] == "guess"
        word = event["word"]

        try:
            # make the guess
            result = game.checkGuess(word)
        except RuntimeError as exc:
            # Send an "error" event if the guess was illegal
            event = {
                "type": "error",
                "message": str(exc),
            }
            await websocket.send(json.dumps(event))
            continue
            
        # Send a result move to the user interface
        event = {
            "type": "guessResult",
            "result": result,
        }
        await websocket.send(json.dumps(event))


async def handler(websocket):
    # Receive and parse the "init" event from the UI.
    message = await websocket.recv()
    event = json.loads(message)
    print(event)
    assert event["type"] == "init"

    # First player starts a new game.
    await start(websocket)


async def main():
    # Set the stop condition when reciving SIGTERM.
    loop = asyncio.get_running_loop()
    stop = loop.create_future()
    loop.add_signal_handler(signal.SIGTERM, stop.set_result, None)

    port = int(os.environ.get("PORT", "8001"))
    async with websockets.serve(handler, "", port):
        await stop

if __name__ == "__main__":
    asyncio.run(main())