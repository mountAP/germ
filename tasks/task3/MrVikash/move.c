//You are given two positive integers a and b. In one move you can increase a by 1 (replace a with a+1).
// Your task is to find the minimum number of moves you need to do in order to make a divisible by b. 
#include <stdio.h>
int main(int argc, char const *argv[])
{
    int a, b, t, x;
    printf("enter number of test cases t: ");
    scanf("%d", &t);
    // loop for executing the code t times.
    for (int i = 1; i <= t; i++)
    {

        printf("enter value of a b: \n");
        scanf("%d %d", &a, &b);
        x = a % b;  //x will store the remainder of a/b.
        if (x == 0) 
        {
            printf("%d\n", x);//if the remainder is zero it means a is divisible by b so the minimum move is zero.
        }
        else
        {
            printf("%d\n ", b - x); //if remainder is >0 then the difference of its remainder and "b" will give 
        }                //the minimum no. of moves because if the difference is added to "a" it will be divisible by "b".
    }

    return 0;
}
