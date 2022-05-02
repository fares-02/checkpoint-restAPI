import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddEdit from "./Components/AddEdit";
import ContactCard from "./Components/ContactCard";
import ContactList from "./Components/ContactList";
import Home from "./Components/Home";
import NavBar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contacts" element={<ContactList />}></Route>
        <Route path="/addedit" element={<AddEdit />}></Route>
      </Routes>
    </div>
  );
}

export default App;
