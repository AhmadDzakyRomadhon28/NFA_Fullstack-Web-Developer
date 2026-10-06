// 1. Data Produk Awal (Minimal 5 Data Produk)
let produkList = [
  { id: 1, nama: "Laptop", harga: 12000000 },
  { id: 2, nama: "Smartphone", harga: 5000000 },
  { id: 3, nama: "Tablet", harga: 3500000 },
  { id: 4, nama: "Smartwatch", harga: 1500000 },
  { id: 5, nama: "Headphone", harga: 800000 }
];

// 2. Menambahkan Produk dengan Spread Operator
function tambahProduk(id, nama, harga) {
  const produkBaru = { id, nama, harga };
  // Menggabungkan array lama dengan objek baru menggunakan Spread Operator
  produkList = [...produkList, produkBaru];
  console.log(`[SUKSES] Produk "${nama}" berhasil ditambahkan!`);
}

// 3. Menghapus Produk dengan Rest Parameter
function hapusProduk(idYangDihapus, ...sisaId) {
  // Menghapus id utama
  produkList = produkList.filter(produk => produk.id !== idYangDihapus);
  
  // Jika ada argumen tambahan (Rest Parameter), hapus juga ID sisa tersebut
  if (sisaId.length > 0) {
    produkList = produkList.filter(produk => !sisaId.includes(produk.id));
  }
  
  console.log(`[SUKSES] Produk dengan ID ${idYangDihapus} ${sisaId.length > 0 ? 'dan ' + sisaId.join(', ') : ''} berhasil dihapus!`);
}

// 4. Menampilkan Produk dengan Destructuring
function tampilkanProduk() {
  console.log("\n================ DAFTAR PRODUK ================");
  if (produkList.length === 0) {
    console.log("Stok produk kosong.");
    return;
  }

  // Menggunakan Destructuring ({ id, nama, harga }) langsung di dalam loop
  produkList.forEach(({ id, nama, harga }) => {
    console.log(`ID: ${id} | Nama: ${nama} | Harga: Rp ${harga.toLocaleString("id-ID")}`);
  });
  console.log("===============================================\n");
}

const eventHandler = {
  onTambah: function(id, nama, harga) {
    tambahProduk(id, nama, harga);
    tampilkanProduk();
  },
  onHapus: function(...idList) { // Menggunakan Rest Parameter untuk menerima variadic id
    hapusProduk(...idList); // Menggunakan Spread Operator untuk memecah array id
    tampilkanProduk();
  }
};

// UJI COBA FITUR (Sesuai dengan Alur Gambar

// Tampilkan 5 produk awal
tampilkanProduk();

// Contoh Penambahan Data
eventHandler.onTambah(6, "Monitor 4K", 4500000);
eventHandler.onTambah(7, "Keyboard Mechanical", 750000);

// Contoh Penghapusan Data (Mencoba hapus produk dengan ID 2)
eventHandler.onHapus(2);