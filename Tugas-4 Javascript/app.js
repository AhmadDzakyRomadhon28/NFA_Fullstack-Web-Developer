// Parent Class: Kendaraan
class Kendaraan {
  constructor(merek, model) {
    this.merek = merek;
    this.model = model;
  }

  getInfo() {
    return `${this.merek} ${this.model}`;
  }
}

// Child Class: Mobil Pewarisan
class Mobil extends Kendaraan {
  constructor(merek, model, jumlahPintu) {
    super(merek, model);
    this.jumlahPintu = jumlahPintu;
  }

  getInfo() {
    return `Mobil ${super.getInfo()} (${this.jumlahPintu} Pintu)`;
  }
}

// Child Class: Motor Pewarisan
class Motor extends Kendaraan {
  constructor(merek, model, tipe) {
    super(merek, model);
    this.tipe = tipe;
  }

  getInfo() {
    return `Motor ${super.getInfo()} (Tipe: ${this.tipe})`;
  }
}

// 1. Class Pelanggan
class Pelanggan {
  constructor(nama, nomorTelepon) {
    this.nama = nama;
    this.nomorTelepon = nomorTelepon;
    this.kendaraanDisewa = null; // Default awal belum menyewa
  }

  // 2. Method untuk mencatat transaksi penyewaan
  sewaKendaraan(kendaraan) {
    this.kendaraanDisewa = kendaraan;
    console.log(`[SUKSES] ${this.nama} berhasil menyewa ${kendaraan.getInfo()}`);
  }
}

// Class Sistem Manajemen Transportasi
class SistemSewa {
  constructor() {
    this.daftarPelanggan = [];
  }

  tambahPelanggan(pelanggan) {
    this.daftarPelanggan.push(pelanggan);
  }

  // 3. Method untuk menampilkan daftar pelanggan yang sedang menyewa kendaraan
  tampilkanPelangganSewa() {
    console.log("\n=== DAFTAR PELANGGAN YANG SEDANG MENYEWA ===");
    
    // Filter pelanggan yang kendaraanDisewa-nya tidak null
    const penyewaAktif = this.daftarPelanggan.filter(p => p.kendaraanDisewa !== null);

    if (penyewaAktif.length === 0) {
      console.log("Tidak ada pelanggan yang sedang menyewa.");
      return;
    }

    penyewaAktif.forEach((p, index) => {
      console.log(`${index + 1}. Nama: ${p.nama} | Telp: ${p.nomorTelepon} | Sewa: ${p.kendaraanDisewa.getInfo()}`);
    });
  }
}

// ==========================================
// UJI COBA PROGRAM
// ==========================================

// 1. Buat Objek Kendaraan
const mobil1 = new Mobil("Toyota", "Avanza", 4);
const motor1 = new Motor("Honda", "Vario", "Matik");

// 2. Buat Objek Pelanggan
const pelanggan1 = new Pelanggan("Budi", "08123456789");
const pelanggan2 = new Pelanggan("Siti", "08987654321");
const pelanggan3 = new Pelanggan("Andi", "08555555555"); // Pelanggan yang belum menyewa

// 3. Inisialisasi Sistem
const sistem = new SistemSewa();
sistem.tambahPelanggan(pelanggan1);
sistem.tambahPelanggan(pelanggan2);
sistem.tambahPelanggan(pelanggan3);

// 4. Catat Transaksi Penyewaan
pelanggan1.sewaKendaraan(mobil1);
pelanggan2.sewaKendaraan(motor1);

// 5. Tampilkan Daftar Pelanggan yang sedang menyewa
sistem.tampilkanPelangganSewa();