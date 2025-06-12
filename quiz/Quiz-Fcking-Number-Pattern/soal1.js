/*
================
MISSING NUMBER
================
description: Sebuah fungsi untuk mencari angka yang hilang berdasarkan pola dari board atau
papan yang tersedia. Fungsi akan mengembalikan nilai sebuah array yang berisi
angka-angka yang hilang

examples:
INPUT = 
[
  [ 7 ,' ', 5 ],
  [' ', 8 , 9 ]
  [ 1 ,' ',' '] 
]

ASUMSI PADA PAPAN SUDAH TERDAPAT RANGE TERBESAR DAN TERKECIL YAITU 1 DAN 9 SEHINGGA
OUTPUT:
[ 2, 3, 4, 6]

PADA MASING-MASING TEST CASE SUDAH TERDAPAT RANGE TERBESAR DAN TERKECIL
*/

function missingNum(arr) {
    if (arr.length == 0) return [];
    let minimal = Infinity;
    let maks = -Infinity;
    let angka = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > 0) {
                if (arr[i][j] > maks) {
                    maks = arr[i][j];
                }
                if (arr[i][j] < minimal) {
                    minimal = arr[i][j];
                }
                angka.push(arr[i][j]);
            }
        }
    }

    let urut = [];
    for (let i = minimal; i <= maks; i++) {
        urut.push(i);
    }

    let result = [];
    for (let i = 0; i < urut.length; i++) {
        if (!angka.includes(urut[i])) {
            result.push(urut[i]);
        }
    }
    return result;
}


console.log(missingNum([
    [3, ' ', 5],
    [1, ' ', 7],
    [9, ' ', ' ']
])) // [ 2, 4, 6, 8 ]
console.log(missingNum([
    [2, ' '],
    [' ', 5]
])) // [ 3, 4 ]
console.log(missingNum([
    [11, ' ', 13],
    [17, ' ', 19],
    [' ', 16, ' ']
])) // [ 12, 14, 15, 18 ]
console.log(missingNum([
    [3, ' ', 5, 15],
    [1, ' ', 7, 13],
    [9, ' ', ' ', 12],
    [' ', 16, ' ', ' ']
])) // [ 2, 4, 6, 8, 10, 11, 14 ]
console.log(missingNum([])) // []