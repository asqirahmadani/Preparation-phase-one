/*
=========
HACKATHON
=========

[INSTRUCTION]
Buatlah suatu aplikasi untuk membuat catatan ekonomi.

[EXAMPLE]
"bank account sudah disediakan"

input: [['Jeff Bezos+5%', 'Larry Page+10%', 'Jeff Bezos-3%'], ['Larry Page+2%', 'Larry Page-1%']]
process:
  bank account => deposit atas nama Jeff Bezos ditambah 5%, menjadi 105000
  bank account => deposit atas nama Larry Page ditambah 10%, mejadi  104500
  bank account => deposit atas nama Jeff Bezos dikurangi 3%, mejadi 101850
  ...dst
output:
  [
    { name: 'Jeff Bezos', deposit: 105000, owner: 'Amazon' },
    { name: 'Larry Page', deposit: 104500, owner: 'Google' },
    { name: 'Jeff Bezos', deposit: 101850, owner: 'Amazon' },
    { name: 'Larry Page', deposit: 106590, owner: 'Google' },
    { name: 'Larry Page', deposit: 105524.1, owner: 'Google' }
  ]

[RULES]
- Dilarang menggunakan .indexOf(), .split(), .filter(), .map(), dan .slice()
*/

function economyChangeSummary(tradeActivity) {
  let duitJeff = 100000
  let duitLarry = 95000
  let duitJack = 90000

  let data = [
    { name: 'Jeff Bezos', deposit: duitJeff, owner: 'Amazon' },
    { name: 'Larry Page', deposit: duitLarry, owner: 'Google' },
    { name: 'Jack Ma', deposit: duitJack, owner: 'Alibaba' }
  ]

  let result = [];
  for (let i = 0; i < tradeActivity.length; i++) {
    for (let j = 0; j < tradeActivity[i].length; j++) {
      let nama = '';
      let trade = '';

      for (let k = 0; k < tradeActivity[i][j].length; k++) {
        if (tradeActivity[i][j][k] >= 'a' && tradeActivity[i][j][k] <= 'z' || tradeActivity[i][j][k] >= 'A' && tradeActivity[i][j][k] <= 'Z' || tradeActivity[i][j][k] == ' ') {
          nama += tradeActivity[i][j][k];
        } else {
          trade += tradeActivity[i][j][k];
        }
      }

      for (let k = 0; k < data.length; k++) {
        if (nama == data[k].name) {
          let akhir;
          let angka = '';
          for (let i = 0; i < trade.length; i++) {
            if (trade[i] >= '0' && trade[i] <= '9') {
              angka += trade[i];
            }
          }
          if (trade[0] == '+') {
            let jumlah = data[k].deposit * (Number(angka) / 100);
            akhir = data[k].deposit + jumlah;
          } else {
            let jumlah = data[k].deposit * (Number(angka) / 100);
            akhir = data[k].deposit - jumlah;
          }
          data[k].deposit = akhir;
          let hasil = { name: data[k].name, deposit: data[k].deposit, owner: data[k].owner };
          result.push(hasil);
        }
      }
    }
  }
  return result;
}

console.log(economyChangeSummary([
  ['Jeff Bezos+5%', 'Larry Page+10%', 'Jeff Bezos-3%'],
  ['Larry Page+2%', 'Larry Page-1%'],
  ['Jack Ma+4%'],
  ['Larry Page-8%', 'Jack Ma+20%', 'Jeff Bezos-3%', 'Jeff Bezos+8%']
]));
/* 
  [ { name: 'Jeff Bezos', deposit: 105000, owner: 'Amazon' },
  { name: 'Larry Page', deposit: 104500, owner: 'Google' },
  { name: 'Jeff Bezos', deposit: 101850, owner: 'Amazon' },
  { name: 'Larry Page', deposit: 106590, owner: 'Google' },
  { name: 'Larry Page', deposit: 105524.1, owner: 'Google' },
  { name: 'Jack Ma', deposit: 93600, owner: 'Alibaba' },
  { name: 'Larry Page', deposit: 97082.172, owner: 'Google' },
  { name: 'Jack Ma', deposit: 112320, owner: 'Alibaba' },
  { name: 'Jeff Bezos', deposit: 98794.5, owner: 'Amazon' },
  { name: 'Jeff Bezos', deposit: 106698.06, owner: 'Amazon' } ]
*/
console.log("==============================================================================");

console.log(economyChangeSummary([
  ['Jeff Bezos-10%']
]))
/*
  [ { name: 'Jeff Bezos', deposit: 90000, owner: 'Amazon' } ]
*/