import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { Header } from "./components/Header";
import { Favrouite } from "./components/Favrouite";
import { Read } from "./components/Read";
import { Profile } from "./components/Profile";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favrouite" element={<Favrouite />} />
        <Route path="/read" element={<Read />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
