#include <iostream>
#include <math.h>

using namespace std;

int length(int * arr) {

    int total = 0;
    while(*arr != 0) {
        total++;
        arr++;
    }
    
    return total;
}


void printArray(int * arr, int size) {
    cout << " --- " << arr << " --- " << endl;
    for ( int i = 0; i < size; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
}

int partition(int low, int high) {
    return ceil((float)(low+high)/2);
}

int * arrayMergeLeftAndRightArray(int* leftArr, int leftArrLength,
            int* rightArr, int rightArrLength) {
    
    int * leftEndMarker = &leftArr[leftArrLength];
    int * rightEndMarker = &rightArr[rightArrLength];
    
    int * leftTemp = leftArr;
    int * rightTemp = rightArr;

    int * container = new int[88];
    memset(container, 0, 88 * sizeof(int));
    
    int containerIndex = 0;
    
    
    while(*leftTemp && *rightTemp) { // while both elements are valid
        
        if (*leftTemp < *rightTemp) {
            container[containerIndex++] = *leftTemp;
            leftTemp++;
        } else {
            container[containerIndex++] = *rightTemp;
            rightTemp++;
        }
        
        if (leftTemp == leftEndMarker || rightTemp == rightEndMarker) {
            break;
        }
        
    }
    
    // one of the arrays is done
    if (leftTemp == leftEndMarker) {
        while(rightTemp!=rightEndMarker) {
            container[containerIndex++] = *rightTemp;
            rightTemp++;
        }
    }
    else if (rightTemp == rightEndMarker) {
        while (leftTemp!=leftEndMarker) {
            container[containerIndex++] = *leftTemp;
            leftTemp++;
        }
    }
    
    cout << "\n\nContainer constructed and filled: " << endl;
    printArray(container, length(container));
    
    cout << "\n Deleting left and right..." << endl;
    printArray(leftArr, length(leftArr));
    delete [] leftArr;
    
    printArray(rightArr, length(rightArr));
    delete [] rightArr;
    cout << "----------------------------\n" << endl;
    
    return container;
}

int * divideAndConquor(int * intArray, int low, int high) {
    
    if (low == high) {
        cout << "\n\nlow " << low << " == high " << high << " ∏ Hit bottom at: " << intArray[low];
        return new int (intArray[low]);
    }
    
    if (low < high) {
        
        int mid = partition(low, high);
        cout << "\n\nlow " << low << ", high " << high << ",  --> mid: " << mid << endl;
        
        int * leftArr = divideAndConquor(intArray, low, mid-1);
        int * rightArr = divideAndConquor(intArray, mid, high);
        
        int leftLength = length(leftArr);
        int rightLength = length(rightArr);
        
        cout << "\n ◊ Merging left and right array..." << endl;
        cout << "...where left is: " << endl;
        printArray(leftArr, length(leftArr));
        cout << "...where right is: " << endl;
        printArray(rightArr, length(rightArr));
        
        return arrayMergeLeftAndRightArray(leftArr, leftLength,
                                    rightArr, rightLength);
        
    }
    
    return NULL;
}

int main(int argc, const char * argv[]) {
    
    int array [] = {2,5,4,1,8};
    int * ans = divideAndConquor(array, 0, 4);
    printArray(ans, length(ans));
    
    delete [] ans;
    
    return 0;
}

