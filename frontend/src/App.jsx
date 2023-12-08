import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBook";
import EditBook from "./pages/EditBook";
import ShowBook from "./pages/ShowBook";
import DeleteBook from "./pages/DeleteBook";
import HomeItem from "./pages/items/HomeItem";
import CreateItem from "./pages/items/CreateItem"
import ShowItem from "./pages/items/ShowItem"
import EditItem from "./pages/items/EditItem"
import DeleteItem from "./pages/items/DeleteItem"

const App = () => {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<CreateBook />} />
      <Route path="/books/details/:id" element={<ShowBook />} />
      <Route path="/books/edit/:id" element={<EditBook />} />
      <Route path="/books/delete/:id" element={<DeleteBook />} />

      <Route path="/items" element={<HomeItem />} />
      <Route path="/items/create" element={<CreateItem />} />
      <Route path="/items/details/:id" element={<ShowItem />} />
      <Route path="/items/edit/:id" element={<EditItem />} />
      <Route path="/items/delete/:id" element={<DeleteItem />} />
    </Routes>
  )
}

export default App;