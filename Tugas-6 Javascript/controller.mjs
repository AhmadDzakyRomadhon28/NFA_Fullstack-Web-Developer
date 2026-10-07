import users from "./data.mjs";

const index = () => {
  console.log("\n=== DAFTAR USERS ===");
  users.map((user, i) => {
    console.log(`${i + 1}. ${user.nama} | Umur: ${user.umur} | Alamat: ${user.alamat} | Email: ${user.email}`);
  });
  console.log("====================\n");
};

const store = (user) => {
  users.push(user);
  console.log(`[SUKSES] Data ${user.nama} berhasil ditambahkan!`);
};

const destroy = (index) => {
  const deleted = users.splice(index, 1);
  console.log(`[SUKSES] Data ${deleted[0]?.nama || 'tersebut'} berhasil dihapus!`);
};

export { index, store, destroy };