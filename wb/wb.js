// console.log("hello world")

// # TITLE: SUM OF ODD NUMBERS
// # DESCRIPTION:
// # Given the triangle of consecutive odd numbers:
// #              1
// #           3     5
// #        7     9    11
// #    13    15    17    19
// # 21    23    25    27    29
// # Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
// # INPUT --> OUTPUT
// # 1 -->  1
// # 2 --> 3 + 5 = 8

// Psuedocode

// get the index
// come up with a list of consecutive odd numbers if
//   --- range will be from 0 to 3(index)-1 = 5
// if index is 3, then list = [1, 3, 5, 7, 9, 11]

// in a nested for loop, loop through a list of integers starting from 1 to 100*,
    // grab the odd number (num % 2 == 1)
    // BAD IDEA

// grab the last 3 elements of the list, -1, -2, -3
// and find the sum

const sumRow = idx => {
    numElem = 2*idx - 1
    counter = 0
    listElem = []
    _sum = 0
    for (let i = 1; i < numElem; i+=2) {
        if (counter <= numElem) {
            counter++
            listElem.push(i)
        }
    }
    let newElem = listElem.slice(-idx, listElem.length)
    console.log(newElem)

    for (let j = 0; j < newElem.length; j++) {
        console.log(newElem[j])
        _sum += newElem[j]
    }
    return _sum
}

// console.log(sumRow(1))
console.log(sumRow(2))
// console.log(sumRow(3))
// console.log(sumRow(4))
// console.log(sumRow(5))
