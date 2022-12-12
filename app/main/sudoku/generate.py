import random
import numpy as np
import app.main.sudoku.solve as solve
import app.main.sudoku.solveReverse as solveReverse

# 生成一个随机的数组
def get_random_unit():
    _num_list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    random.shuffle(_num_list)
    return _num_list

def generate(level = 2):
    # 初始化一个9行9列的数组
    matrix = np.zeros((9,9))

    num_list = get_random_unit()
    for row in range(3):
        for col in range(3):
            matrix[row][col] = num_list.pop(0)

    num_list = get_random_unit()
    for row in range(3, 6):
        for col in range(3, 6):
            matrix[row][col] = num_list.pop(0)

    num_list = get_random_unit()
    for row in range(6, 9):
        for col in range(6, 9):
            matrix[row][col] = num_list.pop(0)
    #左上，中，右下三宫可以直接构造

    #pre：初始的数独,由matrixStart记录
    pre = solveReverse.solve(np.array(matrix))
    matrixStart = np.array(pre)
    #挖空,pre变成题目本身
    for serial in range(9):
        num_list = get_random_unit()
        num = random.randint(3+level,4+level)#难度控制
        for i in range(num):
            j = num_list.pop(0) - 1
            x = serial//3*3 + j//3 
            y = serial%3*3  + j%3
            pre[x][y] = 0
    problem = np.array(pre)
    #exc使用唯一确定解法得到的（部分）解
    exc = np.array(pre)
    solveReverse.exclusion(exc)
    #顺序解解出的值
    solve.solve(pre)
    #cmp表示逆序构造与顺序求解是否一致
    cmp = (matrixStart == pre)
    TF = cmp.all()
    return TF , problem , pre , exc
"""    print("------------------------------------------")
    print(matrixStart,"\n")
    print(problem,"\n")
    print(pre,"\n")
    print(cmp.all())
    print(exc)"""
    
def zeroNum(Zero):
    step = 0
    for i in range(9):
        for j in range(9):
            if Zero[i][j] == 0:
                step = step + 1
    return step

def getSudoku():
    while True:
        TF , Sudoku , Answer , Zero = generate()
        if TF and zeroNum(Zero)>15:
            break
    return Sudoku , Answer


if __name__ == "__main__":
    A , B  = getSudoku()
    print(A,"\n\n")
    print(B,"\n\n")