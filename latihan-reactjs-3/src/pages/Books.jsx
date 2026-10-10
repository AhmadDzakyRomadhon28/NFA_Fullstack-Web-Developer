import React, { useState, useEffect } from "react";
import booksData from "../utils/books";
import styles from "../styles/Book.module.css";

function Books() {
  // State untuk menyimpan daftar buku
  const [bookList, setBookList] = useState(booksData);

  // useEffect saat pertama kali halaman dimuat (materi hal 46)
  useEffect(() => {
    console.log("Halaman Books berhasil dimuat!");
  }, []);

  // useEffect untuk memantau perubahan data buku
  useEffect(() => {
    console.log("Daftar buku terbaru:", bookList);
  }, [bookList]);

  // Event handler onClick + Spread Operator untuk nambah buku (materi hal 44)
  const handleAddBook = () => {
    const newBook = {
      id: bookList.length + 1,
      title: `Buku React Spesial ${bookList.length + 1}`,
      author: "Penulis Baru",
      year: 2024,
      description: "Buku ini ditambahkan menggunakan React Hooks dan Spread Operator.",
      image: "https://via.placeholder.com/150"
    };

    // Immutability state pakai Spread Operator
    setBookList((prevList) => [...prevList, newBook]);
    alert("Buku baru berhasil ditambahkan!");
  };

  return (
    <div className={styles.bookContainer}>
      <h1 className={styles.title}>Daftar Koleksi Buku</h1>

      {/* Render list menggunakan map() dan key prop */}
      <div className={styles.cardContainer}>
        {bookList.map((book) => (
          <div key={book.id} className={styles.card}>
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p className={styles.author}>Penulis: {book.author} ({book.year})</p>
            <p>{book.description}</p>
          </div>
        ))}
      </div>

      {/* Button onClick untuk nilai tambah */}
      <button onClick={handleAddBook} className={styles.addButton}>
        Tambah Buku Baru
      </button>
    </div>
  );
}

export default Books;