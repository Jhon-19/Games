import numpy as np


def judgeAcceptThree(A):
    valid = np.ones(3)
    Re = np.zeros((1,3))
    for i in range(3):
        if A[i] == 0:
            return -1 , Re
    Num = 0
    for i in range(3):
        if valid[i] == 0:
            continue
        for j in range(i + 1 , 3):
            if A[i] == A[j]:
                valid[j] = 0
                #print("valid = ",valid)
                Num += 1
                tmp = np.array([[i + 1 , j + 1 ,A[i] ,],])
                #print("tmp = ",tmp)
                Re = np.concatenate((Re , tmp) , 0)
                #print("Re,tmp = \n",Re)
    return Num , Re


def judgeAcceptNine(A):
    valid = np.ones(9)
    #print("valid = ",valid)
    Re = np.zeros((1,3))
    #print("Re = ",Re)
    for i in range(9):
        if A[i] == 0:
            return -1 , Re
    Num = 0
    for i in range(9):
        if valid[i] == 0:
            continue
        for j in range(i + 1 , 9):
            if A[i] == A[j]:
                valid[j] = 0
                #print("valid = ",valid)
                Num += 1
                tmp = np.array([[i + 1 , j + 1 ,A[i] ,],])
                #print("tmp = ",tmp)
                Re = np.concatenate((Re , tmp) , 0)
                #print("Re,tmp = \n",Re)
    return Num , Re


def judgeAcceptfifteen(A):
    if A[4] != 5:
        return -1
    if A[0]+A[1]+A[2] != 15:
        return 11
    if A[3]+A[4]+A[5] != 15:
        return 12
    if A[6]+A[7]+A[8] != 15:
        return 13
    if A[0]+A[3]+A[6] != 15:
        return 21
    if A[1]+A[4]+A[7] != 15:
        return 22
    if A[2]+A[5]+A[8] != 15:
        return 23
    if A[0]+A[4]+A[8] != 15:
        return 31
    if A[2]+A[4]+A[6] != 15:
        return 32       
    return 0


if __name__ == "__main__":
    #读入一个标准9*9数独矩阵
    A = np.array([2,2,2,])
    ans , line = judgeAcceptThree(A)
    print(ans)
    print(line)

    B = np.array([1,1,1,1,1,1,2,2,2,])
    ans , line = judgeAcceptNine(B)
    print(ans,"\n",line)
