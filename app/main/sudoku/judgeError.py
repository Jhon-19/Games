import numpy as np
import sys  
sys.setrecursionlimit(100000) # python默认的递归深度1000,当递归深度超过999会引发异常。

def judgeError(A , i , j , v):
    #矩阵从[0,0]开始
    i-=1
    j-=1
    #表示列
    for x in range(9):
        if A[x][j] == v:
            #print("Error in Row ",j+1," repitition number",v)
            #print("[",i+1,",",j+1,"]"," and ","[",x+1,",",j+1,"]")
            return x+1 , j+1 , 1
    #表示行
    for y in range(9):
        if A[i][y] == v:
            #print("Error in Column ",i+1," repitition number",v)
            #print("[",i+1,",",j+1,"]"," and ","[",i+1,",",y+1,"]")
            return i+1 , y+1 , 0
    #表示宫
    bi , bj = i//3*3 , j//3*3
    for x in range(3):
        for y in range(3):
            if A[bi+x][bj+y] == v:
                #print("Error in block ",i+1," repitition number",v)
                #print("[",i+1,",",j+1,"]"," and ","[",bi+x+1,",",bj+y+1,"]")
                return bi+x+1 , bj+y+1 , 2 
    return 0 , 0 , -1
