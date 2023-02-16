
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Header from "./componentes/Header/Header";
import { ItemListContainer } from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import Cart from "./componentes/Cart/Cart";





function App() {
  return (

  <BrowserRouter>
    <Header />
      <Routes>

        <Route path="/" element={<ItemListContainer />} />
        <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/category/:category" element={ <ItemListContainer/>} />
        <Route />
        <Route />
        <Route path="*" element={<h2>404 Not Found</h2>} />

      </Routes>
    </BrowserRouter>









  );
}

export default App;
