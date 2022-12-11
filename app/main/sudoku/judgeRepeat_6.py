import numpy as np

def judgeRepeatThree(A , x , v):
    setIn = {0 , 1 , 2 }
    setIn.discard(x-1)
    listIn = list(setIn)
    #print(setIn)
    #print(listIn)
    for i in range(len(listIn)):
        if A[listIn[i]] == v:
            return listIn[i] + 1     
    return -1

def judgeRepeatNine(A , x , v):
    setIn = set([i for i in range(9)])
    setIn.discard(x-1)
    listIn = list(setIn)
    """print(setIn)
    print(listIn)"""
    for i in range(len(listIn)):
        if A[listIn[i]] == v:
            return listIn[i] + 1     
    return -1

