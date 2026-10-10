import React from "react";
import booksData from "../utils/books";
import styles from "../styles/Book.module.css";

function Home() {
  return (
    <div className={styles.bookContainer}>
      <h1 className={styles.title}>Selamat Datang di BookSales</h1>
      <p style={{ marginBottom: "20px" }}>Berikut adalah beberapa koleksi buku populer kami:</p>

      {/* Render list menggunakan map() */}
      <div className={styles.cardContainer}>
        {booksData.slice(0, 6).map((book) => ( // Menampilkan 6 buku pertama di Home
          <div key={book.id} className={styles.card}>
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p className={styles.author}>Penulis: {book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;