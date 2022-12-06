import { useEffect, useState } from "react";
import { filterPokemonByWeaknesses, filterPokemonByType, getListOf } from "../helpers/helpers.js";
import { Link } from "react-router-dom";

export function AllPokemonPage(props) {
    let [list, setList] = useState([]);
    let [searchType, setSearchType] = useState("");
    let [searchWeaknesses, setSearchWeaknesses] = useState("");

    function catchEmAll() {
        fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
            .then((res) => res.json())
            .then((pokemon) => setList(pokemon.pokemon))
            .catch((err) => console.error(err));
    }

    useEffect(() => {
        catchEmAll();
    }, []);


//filter by type and weakness//
//set option values in the form-group//
//set event handler to listen for the click event when user selects//
       // an option from the drop-down boxes//
//use option, select, key value pairs to create drop-down boxes//
//use array.map to iterate over the items in the array given item and index//
       //return types, weaknesses //

    let pokemonByType = filterPokemonByType(list, searchType)
    let pokemonByWeaknesses = filterPokemonByWeaknesses(pokemonByType, searchWeaknesses)
    let types = getListOf(list, "type");
    let weaknessesArr = getListOf(list, "weaknesses");

    return (
    <div id="allPokemon">
     <div id="pokedexLogo">
    <Link to={`/pokemon/1`}>
    <img src="./images/pokemon-logo.jpg" alt="pokedex header logo" id='logoImg' />
        </Link>
        </div>


    <ul id="photoList">
    {pokemonByWeaknesses.map((pokemon) => {
    return (
    <li key={pokemon.id}>
    <Link to={`/pokemon/${pokemon.id}`}>
    <img className="pokemonImg" src={`${pokemon.img}`} alt={`${pokemon.name}`} />
    </Link>
    </li>
      );
     })}
    </ul>


    <br></br>
    <br></br>
    <form>
    <div className="form-group">
    <span className="filters">
    <label htmlFor="searchType">
    Type:{" "}
    </label>
    <select
    name="searchType"
    id="searchType"
    value={searchType}
    onChange={(event) => setSearchType(event.target.value)}
    >
    <option value=""> All</option>
    {types.map((type, idx) => {
    return (
    <option key={type + idx} value={type}>
    {type}
    </option>
        );
     })}
    </select>
    </span>

    <span className="filters">
    <label htmlFor="searchWeaknesses">
    Weaknesses:{" "}
    </label>
    <select
    name="searchWeaknesses"
    id="searchWeaknesses"
    value={searchWeaknesses}
    onChange={(event) => setSearchWeaknesses(event.target.value)}
    >
    <option className="option" value=""> All</option>
    {weaknessesArr.map((weaknesses, idx) => {
    return (
    <option key={weaknesses + idx} value={weaknesses}>
    {weaknesses}
    </option>
        );
    })}
    </select>
    </span>
    </div>
    </form>
    </div>
    );
}
