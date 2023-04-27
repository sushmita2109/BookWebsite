import { useBook } from "../context/BookContext";

export const HomePage = () => {
  const { bookData, handleRead, handleFav } = useBook();
  return (
    <div>
      <h1>HomePage</h1>

      {bookData.map((book) => (
        <ol
          key={book.id}
          style={{
            border: "1px solid black",
            margin: "0.5rem 0.5rem",
          }}
        >
          <img src={book.image} alt="bookimage" width="160px" height="140px" />
          <li>
            <p>{book.title}</p>
            <p>{book.author}</p>
            {book.read ? (
              <button disabled>Already Read</button>
            ) : (
              <button onClick={() => handleRead(book.id)}>Mark as Read</button>
            )}
            <button onClick={() => handleFav(book.id)}>Add to Fav</button>
          </li>
        </ol>
      ))}
    </div>
  );
};
