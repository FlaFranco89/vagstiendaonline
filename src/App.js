import react from "react";
import "tailwindcss/tailwind.css";
import "./index.css"
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <ItemListContainer greeting="Hola! Proximamente estará disponible nuestra Tienda Online." />
    </div>
  );
}

export default App;
