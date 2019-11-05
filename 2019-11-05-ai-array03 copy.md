

Tip

행렬 회전에서는 인덱스의 활용이 중요하다. [행][열]



20
[0][0] [0][1] [0][2] [0][3]
[1][0] [1][1] [1][2] [1][3]
[2][0] [2][1] [2][2] [2][3]
[3][0] [3][1] [3][2] [3][3]
 
Top = [0][0]
[0][0] = [3][0]
[3][0] = [3][3]
[3][3] = [0][3]
[0][3] = Top
 
Top = [0][1]
[0][1] = [2][0]
[2][0] = [3][2]
[3][2] = [1][3]
[1][3] = Top
 
.
.
.
cs




예를 들어, 

7, 13 번 째 줄 

→ [a][b] = [c][d]에서 b + c는 N - 1로 일정.(배열 시작을 0부터 시작할 경우) 그래서 b가 j 일 경우, c는 MAX - 1 - j이다. 

그리고 a와 d는 같다.



8, 14 번 째 줄 

→ [a][b] = [c][d]에서 b + c는 N - 1로 일정.(배열 시작을 0부터 시작할 경우) 그래서 b가 i 일 경우, c는 MAX - 1 - i이다.

.

.

.













출력 화면 결과

1
2
3
4
5
6
7
8
9
10
11
12
 1  2  3  4  5
 6  7  8  9 10
11 12 13 14 15
16 17 18 19 20
21 22 23 24 25
 
 
21 16 11  6  1
22 17 12  7  2
23 18 13  8  3
24 19 14  9  4
25 20 15 10  5
cs








#include <iostream>
#include <queue>
#include <stack>
#include <cstdio>
#include <vector>
#include <cstring>
#include <string>
#include <math.h>
#include <algorithm>
#include <map>
#include <set>
#include <sstream>
#include <tuple>
 
#pragma warning(disable:4996)  
#pragma comment(linker, "/STACK:336777216")
 
using namespace std;
 
#define MAX 5
 
int arr[MAX][MAX] = { 0, };
 
void rotate()
{
    for (int i = 0; i < MAX / 2; i++)
        for (int j = i; j < MAX - 1 - i; j++)
        {
            int Top = arr[i][j]; // Top ← 위쪽
 
            arr[i][j] = arr[MAX - 1 - j][i]; // 위쪽 ← 왼쪽
 
            arr[MAX - 1 - j][i] = arr[MAX - 1 - i][MAX - 1 - j]; // 왼쪽 ← 아래쪽
 
            arr[MAX - 1 - i][MAX - 1 - j] = arr[j][MAX - 1 - i]; // 아래쪽 ← 오른쪽
 
            arr[j][MAX - 1 - i] = Top; // 오른쪽 ← Top(위쪽)
        }
}
 
void print()
{
    printf("\n\n");
 
    for (int i = 0; i < MAX; i++)
    {
        for (int j = 0; j < MAX; j++)
            printf("%2d ", arr[i][j]);
        
        printf("\n");
    }
}
 
int main(void)
{
    int n = 1;
 
    for (int i = 0; i < MAX; i++)
        for (int j = 0; j < MAX; j++)
            arr[i][j] = n++;
 
    print();
 
    rotate();
 
    print();
 
    return 0;
}
Colored by Color Scripter
cs



