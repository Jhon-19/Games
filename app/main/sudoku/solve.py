import numpy as np
import sys  
sys.setrecursionlimit(100000) # python默认的递归深度1000,当递归深度超过999会引发异常。

def value_set(A , x , y):
    i, j = x//3, y//3           
    #计算块（宫）
    grid = [A[i*3+r][j*3+c] for r in range(3) for c in range(3)]
    #集合运算，（1-9） - 宫 - 行 - 列
    v = set([x for x in range(1,10)]) - set(grid) - set(A[x]) - set(list(zip(*A))[y]) 
    return list(v)

def exclusion(A):
    for x in range(9):
        for y in range(9):
            if A[x][y] == 0:
                #获取合法的取值范围
                v = value_set(A , x , y)
                #是否具有可判断唯一解
                if len(v) == 1 :
                    A[x][y] = v[0]

#寻找下一个空
def next_space(A , x , y):
    #判断同行
    for j in range(y+1 , 9):
        if A[x][j] == 0:
            return x , j
    #判断之后的所有列
    for i in range(x+1 , 9):
        for j in range(0 , 9):
            if A[i][j] == 0:
                return i , j
    return -1 , -1

def find(A , x , y):
    #在合法取值范围中遍历
    for v in value_set(A , x , y):
        A[x][y] = v
        #跳到下一个空位进行递归
        i , j = next_space(A , x , y)
        #循环终止条件
        if i == -1 or j == -1:
            return True
        else:
            #递归
            next = find(A , i , j)
            if next:
                return True
            #回溯归0
            A[i][j] = 0
        

def solve(A):
    #唯一确定解
    exclusion(A)
    #通过技巧计算唯一确定解
    
    #递归回溯
    x , y = next_space(A , 0 , -1)
    find(A , x , y)
    #print(A)
    return A
