import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { fakeFetch } from "../Data/fakeFetch";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [bookData, setBookData] = useState([]);
  const [profileData, setProfileData] = useState({});
  const [favData, setFavData] = useState([]);

  const getData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/books");
      if (res.status === 200) {
        setBookData(res.data.books);
        setProfileData(res.data.user);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleRead = (id) => {
    const filteredBook = bookData.map((book) =>
      book.id === id ? { ...book, read: true } : book
    );

    setBookData(filteredBook);
  };

  const handleFav = (bookId) => {
    const filteredData = bookData
      .filter((book) => book.id === bookId)
      .map((item) => item);
    setFavData((prev) => [...prev, ...filteredData]);
  };

  return (
    <BookContext.Provider
      value={{ bookData, profileData, handleRead, handleFav, favData }}
    >
      {children}
    </BookContext.Provider>
  );
};

BookProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useBook = () => useContext(BookContext);
