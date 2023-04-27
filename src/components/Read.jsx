import { useBook } from "../context/BookContext";

export const Read = () => {
  const { bookData } = useBook();
  console.log("Read", bookData);
  return (
    <div>
      <h1>Read</h1>
      {bookData.map((book) => {
        return book.read ? (
          <ol
            key={book.id}
            style={{
              border: "1px solid black",
              margin: "0.5rem 0.5rem",
            }}
          >
            <img
              src={book.image}
              alt="bookimage"
              width="160px"
              height="140px"
            />
            <li>
              <p>Title:{book.title}</p>
              <p>Author:{book.author}</p>
            </li>
          </ol>
        ) : null;
      })}
    </div>
  );
};
