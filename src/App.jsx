// eslint-disable-next-line no-unused-vars
import { BrowserRouter, NavLink, Routes, Route} from "react-router-dom";
import { HomePage, AllPokemonPage, SinglePokemonPage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allpokemon" element={<AllPokemonPage />} />
        <Route exact path="pokemon/:id" element={<SinglePokemonPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
