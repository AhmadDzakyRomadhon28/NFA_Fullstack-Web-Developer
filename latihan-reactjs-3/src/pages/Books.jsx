import React, { useState, useEffect } from "react";
import booksData from "../utils/books";
import styles from "../styles/Book.module.css";

function Books() {
 
  const [bookList, setBookList] = useState(booksData);

  
  useEffect(() => {
    console.log("Halaman Books berhasil dimuat!");
  }, []);

  
  useEffect(() => {
    console.log("Daftar buku terbaru:", bookList);
  }, [bookList]);

  
  const handleAddBook = () => {
    const newBook = {
      id: bookList.length + 1,
      title: `Buku React Spesial ${bookList.length + 1}`,
      author: "Penulis Baru",
      year: 2024,
      description: "Buku ini ditambahkan menggunakan React Hooks dan Spread Operator.",
      image: "https://via.placeholder.com/150"
    };

    
    setBookList((prevList) => [...prevList, newBook]);
    alert("Buku baru berhasil ditambahkan!");
  };

  return (
    <div className={styles.bookContainer}>
      <h1 className={styles.title}>Daftar Koleksi Buku</h1>

    
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

     
      <button onClick={handleAddBook} className={styles.addButton}>
        Tambah Buku Baru
      </button>
    </div>
  );
}

export default Books;
