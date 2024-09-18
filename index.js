// Berdasarkan UTC
const date = new Date();
console.log("Date", date);
// OutputL 2024-09-18

// Berdasarkan Waktu Lokal
const localDate = date.toLocaleDateString();
console.log(localDate);
// Output: 9/18/2024

// Todo: Menampilkan format Indonesia
const dateLocalId = date.toLocaleDateString('id-ID');
console.log(dateLocalId);

// Todo: Menampilkan format Indonesia lebih spesifik
const toLocalString = date.toLocaleString('id-ID');
console,log(toLocalString);

const dateLocalId3 = date.toLocaleString('id-ID', {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "2-digit",
});
console,log(dateLocalId3, "WIB");

const miliSecond = date.getTime();
console.log(miliSecond);

// Todo milisecond to Date
const msToDate = new Date(miliSecond);
console.log(msToDate);

// Todo Menambahkan 3.600.000 = menambahkan 1 jam ke milisecond
const newMiliSecond = miliSecond + 3600000;
const newMiliSecond2 = new Date(newMiliSecond);
console.log(newMiliSecond2);

// Todo: Menyimpan data ke database dalam bentuk string
const dataBaseMs = date.toISOString();
console.log(dataBaseMs);