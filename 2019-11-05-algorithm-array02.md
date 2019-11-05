
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



