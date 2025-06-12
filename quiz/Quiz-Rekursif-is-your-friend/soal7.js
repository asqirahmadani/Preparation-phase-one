/*
  PARSE NUMBER
  Parse Number adalah sebuah fungsi untuk memecah atau menguraikan suatu angka. Fungsi akan
  menerima parameter berupa angka dan keluaran berupa string uraian angka.

  EXAMPLE
  INPUT: 4321
  OUTPUT: 4000+300+20+1

  RULES:
  1. Wajib menggunakan rekursif!
  2. Tidak boleh menambahkan parameter dan function baru
*/

function parseNumber(equation) {
    if (equation < 10) {
        return `${equation}`;
    } else {
        let digit = String(equation).length;
        let base = Math.pow(10, digit - 1);
        let angka = Math.floor(equation / base) * base;
        let sisa = equation - angka;

        if (sisa == 0) {
            return `${angka}`
        } else {
            return `${angka}+${parseNumber(sisa)}`;
        }
    }
}

console.log(parseNumber(3333)) // 3000+300+30+3  // 3000 + 300 + 30 + 3
console.log(parseNumber(90)) // 90
console.log(parseNumber(2333)) // 2000+300+30+3