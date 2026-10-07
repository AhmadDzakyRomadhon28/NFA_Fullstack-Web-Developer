import { index, store, destroy } from "./controller.mjs";

const main = () => {
  console.log("--- DATA AWAL ---");
  index();

  console.log("--- MENAMBAHKAN 2 DATA ---");
  store({ nama: 'Data 11', umur: 30, alamat: 'Jl. Data 11', email: 'data11@mail.com' });
  store({ nama: 'Data 12', umur: 31, alamat: 'Jl. Data 12', email: 'data12@mail.com' });
  index();

  console.log("--- MENGHAPUS DATA PERTAMA ---");
  destroy(0);
  index();
};

main();