// Data siswa
let siswa = [
  { Nama: "Asep", tugas: 80, uts: 95, uas: 85 },
  { Nama: "Iwan", tugas: 75, uts: 70, uas: 90 },
  { Nama: "Cepi", tugas: 70, uts: 80, uas: 90 },
  { Nama: "Agus", tugas: 65, uts: 40, uas: 55 },
  { Nama: "Dadang", tugas: 60, uts: 70, uas: 60 }
];

// Tambahkan kolom No dan Nilai Akhir (NA)
siswa = siswa.map((s, i) => {
  return {
    No: i + 1,
    Nama: s.Nama,
    Tugas: s.tugas,
    UTS: s.uts,
    UAS: s.uas,
    NA: (0.4 * s.tugas + 0.3 * s.uts + 0.3 * s.uas).toFixed(1)
  };
});

// Cetak tabel dengan No
console.table(siswa);