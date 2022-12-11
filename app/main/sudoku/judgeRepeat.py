import numpy as np
import sys  
sys.setrecursionlimit(100000) # python默认的递归深度1000,当递归深度超过999会引发异常。

def value_set(A , x , y):
    i, j = x//3, y//3           #s计算块（宫）
    grid = [A[i*3+r][j*3+c] for r in range(3) for c in range(3)]
    #集合运算，（1-9） - 宫 - 行 - 列
    v = set([x for x in range(1,10)]) - set(grid) - set(A[x]) - set(list(zip(*A))[y]) 
    return list(v)

def exclusion(A):
    line = np.zeros((1 , 3))
    #print(line)
    #最糟糕的情况也大概在20轮的范围，这是可以通过唯一确定值求解的情况
    for i in range(20):
        #print(A)
        #print("round ",i,"_______________________________" )
        step = 0
        for x in range(9):
            for y in range(9):
                if A[x][y] == 0:
                    v = value_set(A , x , y)
                    #print("x y v = ",x+1,y+1,len(v))
                    #print(v)
                    #是否具有可判断唯一解
                    if len(v) == 1 :
                        step += 1
                        line_tmp = np.array([[x+1 , y+1 , v[0]],])
                        #print("line_tmp = ",line_tmp)
                        #print("line = ",line)
                        line = np.concatenate((line , line_tmp), 0 )
                        A[x][y] = v[0]
        #没有修改即停止
        if step == 0:
            break
    return np.array(line)
