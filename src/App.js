import "tailwindcss/tailwind.css";
import "./index.css"
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer.js";
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer.js";

function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <ItemListContainer greeting="Tienda Online en construcción." />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
