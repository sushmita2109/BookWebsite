import { useBook } from "../context/BookContext";

export const Favrouite = () => {
  const { favData } = useBook();
  console.log("favbook", favData);
  return (
    <div>
      <h1>Favrouite</h1>
      {favData.map((fav) => (
        <li key={fav.id}>
          <img src={fav.image} alt="imageFav" />
          <p>{fav.title}</p>
          <p>{fav.author}</p>
          <p>{fav.year}</p>
        </li>
      ))}
    </div>
  );
};
