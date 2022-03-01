import twl
from numpy.random import Generator, PCG64

__all__ = [ "Wordle" ]

class Wordle:

    def __init__(self):
        self.list_of_words = self.getFiveLetterWords()
        self.word_of_the_day = self.get_word_of_the_day() 
        print("word of the day: " + self.word_of_the_day)               

    def getFiveLetterWords(self):
        words = list(twl.iterator())
        fiveletterwords = []
        for word in words:
            if len(word) == 5:
                fiveletterwords.append(word)
        return fiveletterwords

    def get_word_of_the_day(self):
        bitGen = PCG64()
        gen = Generator(bitGen)
        return self.list_of_words[gen.integers(0, len(self.list_of_words))]


    def checkGuess(self, guess):
        """
        check a guess.

        Returns the result of the guess
        letters, each position of the list
        indicating the result of the letters 
        guessed. 
        format of result is a list containing 
        1, 0 or -1
        1  = correct spot
        0  = wrong spot
        -1 = not in word 

        Raises :exe:`RuntimeError` if the move is 
        illegal, i.e guess is not a word

        """
        # guess is not a word
        if len(guess) != 5:
            raise RuntimeError("Not a 5 letter word")

        if not guess in self.list_of_words:
            raise RuntimeError("Not a word")

        # return result of comparison
        return self.compare_strings(self.word_of_the_day, guess)
    
    def compare_strings(self, a, b):
        # a is the word_of_the_day
        # b is word to check
        aList = self.convert(a)
        #aListToPop = aList
        bList = self.convert(b)
        result = []
        iterator = 0

        for letter in bList:
            
            if letter in aList:
                if letter == aList[iterator]:
                    result.append(1)
                else:
                    result.append(0)
                aList.pop(0)
            else:
                iterator += 1
                result.append(-1)
        return result

    # Python code to convert string 
    # to list character-wise
    def convert(self, string):
        list1=[]
        list1[:0]=string
        return list1