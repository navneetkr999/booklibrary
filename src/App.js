import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { BooksProvider } from "./BooksContext";
import Books from "./components/Books";
import BooksDetails from "./components/BooksDetails";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <BooksProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/books" element={<Navigate to="/" />} />
          <Route path="/books/:bookID" element={<BooksDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </BooksProvider>
  );
}

export default App;
