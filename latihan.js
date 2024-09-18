// mendapatkan tahun saat ini
const today = new Date();
const currentYear = today.getFullYear(); 
console.log(currentYear);

// menampilkan tanggal dan waktu dalam format ISO
const now = new Date();
const isoDate = now.toISOString(); 
console.log(isoDate);

// mengubah bulan ke nama bulan
const date = new Date();
const months = ["Januari", "Febuari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
const bulanName = months[date.getMonth()];
console.log(bulanName);

// menghitung waktu berbeda dalam milidetik
const awalDate = new Date('2024-01-01');
const akhirDate = new Date('2024-12-31');
const perbedaanInMilliseconds = akhirDate.getTime() - awalDate.getTime();
console.log(perbedaanInMilliseconds);

// menampilkan hari dalam seminggu
const date2 = new Date('2024-09-18');
const hariDariAngkaPekan = date.getDay();
const hariDariPekan = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
const hariDariHarianAngka = hariDariPekan[hariDariAngkaPekan];
console.log(hariDariHarianAngka);