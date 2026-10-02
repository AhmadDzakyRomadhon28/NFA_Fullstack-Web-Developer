// Array objek untuk menyimpan daftar produk awal
let produkToko = [
    { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
    { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
    { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

// Fungsi tambah produk baru ke array
function tambahProduk(nama, harga, stok) {
    // Generate ID otomatis (ID terakhir + 1)
    let idBaru = produkToko.length > 0 ? produkToko[produkToko.length - 1].id + 1 : 1;
    
    // Bikin objek produk baru
    let produkBaru = {
        id: idBaru,
        nama: nama,
        harga: harga,
        stok: stok
    };
    
    // Masukkan produk baru ke akhir array
    produkToko.push(produkBaru);
    console.log(`\n[+] Produk "${nama}" berhasil ditambahkan.`);
}

// Fungsi hapus produk berdasarkan ID
function hapusProduk(id) {
    // Cari posisi indeks produk dari ID
    let index = produkToko.findIndex(produk => produk.id === id);
    
    // Hapus produk jika ID ditemukan
    if (index !== -1) {
        let namaHapus = produkToko[index].nama;
        produkToko.splice(index, 1); // Hapus 1 data pada indeks tersebut
        console.log(`\n[-] Produk "${namaHapus}" (ID: ${id}) berhasil dihapus.`);
    } else {
        console.log(`\n[!] Produk dengan ID ${id} tidak ditemukan.`);
    }
}

// Fungsi tampilkan semua produk
function tampilkanProduk() {
    console.log("\n=== DAFTAR PRODUK TOKO ===");
    
    // Cek jika toko kosong
    if (produkToko.length === 0) {
        console.log("Tidak ada produk tersedia.");
        return;
    }
    
    // Looping cetak data tiap produk
    produkToko.forEach(produk => {
        console.log(`ID: ${produk.id} | Nama: ${produk.nama} | Harga: Rp${produk.harga.toLocaleString()} | Stok: ${produk.stok}`);
    });
}


// PENGUJIAN PROGRAM
tampilkanProduk();
tambahProduk("Monitor", 1500000, 4);
tampilkanProduk();
hapusProduk(2);
tampilkanProduk();