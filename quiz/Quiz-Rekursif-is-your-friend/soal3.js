/**
  Vowels Counter Recursive
  Diberikan sebuah function consonantCounterRecursive(sentences) yang 
  menerima satu parameter berupa
  string. Function akan me-return jumlah huruf konsonan yang terdapat 
  di dalam parameter inputan.
  Jika ada karakter selain abjad/alphabet maka tidak akan dihitung.
- Wajib menggunakan metode rekursif
  - DILARANG menambahkan parameter baru
  - DILARANG membuat variable di luar function vowelsCounterRecursive
  - DILARANG mengubah tipe data parameter
  - proses looping (while, for, do-while, dan lain-lain) HANYA BOLEH ADA SATU
  - DILARANG menambahkan function di luar maupun di dalam function vowelsCounterRecursive
  - DILARANG menggunakan built in function .indexOf atau .include
  - DILARANG menggunakan REGEX
*/

function consonantCounterRecursive(sentences) {
    //code here
    if (sentences.length == 1) {
        if (sentences[0] == 'a' || sentences[0] == 'A' || sentences[0] == 'i' || sentences[0] == 'I' || sentences[0] == 'u' || sentences[0] == 'U' || sentences[0] == 'e' || sentences[0] == 'E' || sentences[0] == 'o' || sentences[0] == 'O' || sentences[0] == ' ' || sentences[0] == '1' || sentences[0] == '2' || sentences[0] == '3' || sentences[0] == '4' || sentences[0] == '5' || sentences[0] == '6' || sentences[0] == '7' || sentences[0] == '8' || sentences[0] == '9' || sentences[0] == '0') {
            return 0;
        } else {
            return 1;
        }
    } else {
        if (sentences[0] == 'a' || sentences[0] == 'A' || sentences[0] == 'i' || sentences[0] == 'I' || sentences[0] == 'u' || sentences[0] == 'U' || sentences[0] == 'e' || sentences[0] == 'E' || sentences[0] == 'o' || sentences[0] == 'O' || sentences[0] == ' ' || sentences[0] == '1' || sentences[0] == '2' || sentences[0] == '3' || sentences[0] == '4' || sentences[0] == '5' || sentences[0] == '6' || sentences[0] == '7' || sentences[0] == '8' || sentences[0] == '9' || sentences[0] == '0') {
            return 0 + consonantCounterRecursive(sentences.slice(1));
        } else {
            return 1 + consonantCounterRecursive(sentences.slice(1));
        }
    }
}

console.log(consonantCounterRecursive('alDi Suka MakAn baksO')) //10
console.log(consonantCounterRecursive('AziZy')) // 3
console.log(consonantCounterRecursive('awt6an')) // 3