/*
Function travelingIndonesia akan mengembalikan nilai sebuah string suatu perjalanan seseorang
di kota-kota besar yang ada di Indonesia.

Secara berturut-turut rute akan berlangsung ;
Yogyakarta > Semarang > Surabaya > Denpasar

Rute tersebut berlaku arah sebaliknya.
Traveller dapat menggunakan transportasi yang disediakan oleh
Pemerintah yaitu berupa :

- Pesawat, biayanya 275000
- Kereta, biayanya 250000
- Bis, biayanya 225000

Biaya tersebut berlaku untuk jarak 1 kota saja.

Dikarenakan traveller berkeliling Indonesia bertepatan dengan digalakkannya visit Indonesia
Maka traveller akan mendapatkan diskon menggunakan metode pembayaran tertentu;

- OVO > akan mendapatkan diskon 15% setiap kota
- Dana > akan mendapatkan diskon 10% setiap kota
- Gopay > akan mendapatkan diskon 5% setiap kota
- Cash > normal;

Function tersebut akan mengembalikan siapa yang mengeluarkan biaya paling besar (sudah termasuk diskon);

Note:
1. Hanya boleh menggunakan built in function .push();
*/

function travelingIndonesia(arr, emoney) {
    //code here
    let kota = ['Yogyakarta', 'Semarang', 'Surabaya', 'Denpasar'];
    let harga = { Pesawat: 275000, Kereta: 250000, Bis: 225000 };
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let array = arr[i].split('-');
        let nama = array[0];
        let asal;
        let tujuan;
        let price;

        for (let j = 0; j < kota.length; j++) {
            if (kota[j] == array[1]) {
                asal = j;
            } else if (kota[j] == array[2]) {
                tujuan = j;
            }
        }

        let jarak = Math.abs(asal - tujuan);
        if (array[3] == 'Pesawat') {
            price = harga.Pesawat * jarak;
        } else if (array[3] == 'Kereta') {
            price = harga.Kereta * jarak;
        } else if (array[3] == 'Bis') {
            price = harga.Bis * jarak;
        }

        let akhir;
        if (emoney == 'OVO') {
            let diskon = ((15 / 100) * price);
            akhir = price - diskon;
        } else if (emoney == 'Dana') {
            let diskon = ((10 / 100) * price);
            akhir = price - diskon;
        } else if (emoney == 'Gopay') {
            let diskon = ((5 / 100) * price);
            akhir = price - diskon;
        } else {
            akhir = price;
        }

        let hasil = { name: nama, departureCity: array[1], destinationCity: array[2], transport: array[3], totalCost: akhir };
        result.push(hasil);
    }

    let i = 0;
    while (i < result.length - 1) {
        if (result[i].totalCost < result[i + 1].totalCost) {
            let besar = result[i + 1];
            result[i + 1] = result[i]
            result[i] = besar;
            i = 0;
        } else {
            i++;
        }
    }
    return result;
};

console.log(travelingIndonesia(['Danang-Yogyakarta-Semarang-Bis', 'Alif-Denpasar-Surabaya-Kereta', 'Bahari-Semarang-Denpasar-Pesawat'], 'OVO'));
/*
[ { name: 'Bahari',
    departureCity: 'Semarang',
    destinationCity: 'Denpasar',
    transport: 'Pesawat',
    totalCost: 467500 },
  { name: 'Alif',
    departureCity: 'Denpasar',
    destinationCity: 'Surabaya',
    transport: 'Kereta',
    totalCost: 212500 },
  { name: 'Danang',
    departureCity: 'Yogyakarta',
    destinationCity: 'Semarang',
    transport: 'Bis',
    totalCost: 191250 } ]
*/
console.log("==================================================================================================");
console.log(travelingIndonesia(['Shafur-Surabaya-Yogyakarta-Kereta', 'Taufik-Semarang-Surabaya-Pesawat', 'Alex-Yogyakarta-Semarang-Kereta'], 'Dana'));
// /*
// [ { name: 'Shafur',
//     departureCity: 'Surabaya',
//     destinationCity: 'Yogyakarta',
//     transport: 'Kereta',
//     totalCost: 450000 },
//   { name: 'Taufik',
//     departureCity: 'Semarang',
//     destinationCity: 'Surabaya',
//     transport: 'Pesawat',
//     totalCost: 247500 },
//   { name: 'Alex',
//     departureCity: 'Yogyakarta',
//     destinationCity: 'Semarang',
//     transport: 'Kereta',
//     totalCost: 225000 } ]
// */
console.log("==================================================================================================");
console.log(travelingIndonesia(['Andika-Denpasar-Surabaya-Bis', 'Katy-Surabaya-Denpasar-Pesawat'], 'Gopay'));
// /*
// [ { name: 'Katy',
//     departureCity: 'Surabaya',
//     destinationCity: 'Denpasar',
//     transport: 'Pesawat',
//     totalCost: 261250 },
//   { name: 'Andika',
//     departureCity: 'Denpasar',
//     destinationCity: 'Surabaya',
//     transport: 'Bis',
//     totalCost: 213750 } ]
// */
console.log("==================================================================================================");
console.log(travelingIndonesia(['Putra-Denpasar-Yogyakarta-Pesawat'], 'Cash'));
// /*
// [ { name: 'Putra',
//     departureCity: 'Denpasar',
//     destinationCity: 'Yogyakarta',
//     transport: 'Pesawat',
//     totalCost: 825000 } ]
// */
console.log(travelingIndonesia([], 'Cash')); // [];