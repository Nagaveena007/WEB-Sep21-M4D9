import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";
import fantasyBooks from "./fantasyBooks.json";
import MyNavBar from "./components/MyNavBar";
import Register from "./components/Register";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyNavBar />

        <Routes>
          {/* <WarningSign text="Watch out again!" /> */}
          {/* <MyBadge text="NEW!!" color="info" /> */}
          {/* <SingleBook book={fantasyBooks[0]} /> */}
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<BookList books={fantasyBooks} />} />

          <Route path="*" element={<h1>NOT FOUND</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
