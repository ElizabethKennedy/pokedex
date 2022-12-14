import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";


export function SinglePokemonPage(props) {
    let [item, setItem] = useState({});
    let [list, setList] = useState([]);

    let pokeball = {
        img: '/images/Logo.webp'
    }
    let { id } = useParams();
    let [count, setCount] = useState(Number(id));
    let [key1, setKey1] = useState(pokeball);
    // eslint-disable-next-line no-unused-vars
    let [key2, setKey2] = useState({});
    // eslint-disable-next-line no-unused-vars
    let [key3, setKey3] = useState({});
    // eslint-disable-next-line no-unused-vars
    let [key4, setKey4] = useState({});
    // eslint-disable-next-line no-unused-vars
    let [key5, setKey5] = useState({});
    // eslint-disable-next-line no-unused-vars
    let [key6, setKey6] = useState({});
    // eslint-disable-next-line no-unused-vars
    let [key7, setKey7] = useState({});
    // eslint-disable-next-line no-unused-vars
    let [key8, setKey8] = useState({});
    // eslint-disable-next-line no-unused-vars
    let [key9, setKey9] = useState({});
    // eslint-disable-next-line no-unused-vars
    let [key10, setKey10] = useState({});


    async function fetchPokemon() {
        let res = await fetch(`https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`);
        let data = await res.json();
        setList(data.pokemon)
    }
/* use strict equality*/
    function catchPokemon() {
        setItem(list.find((poke) => poke.id === count));
    }

    function choosePokemon1() {
        setKey1(list.find((poke) => poke.id === count));
        console.log(key1)
    }
/* use strict equality*/
    useEffect(() => {
        if (list.length === 0) fetchPokemon();
        else catchPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [count, list]);

    useEffect(() => {
        choosePokemon1();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [key1])

    function nextPokemon() {
        if (count >= 151) {
            setCount(1);

        } else {
            setCount(count + 1);
            console.log(key1)
        }
    }

    function lastPokemon() {
        if (count === 1) {
            setCount(151);
        } else {
            setCount(count - 1);
        }
    }

    function randomPokemon() {
        setCount(Math.floor(Math.random() * 151) + 1);
    }


    return (
        <div div id="PokedexPage">
            <div id="pokedexLogo">
                <Link to={`/allpokemon`}>
                    <img src="/images/pokedex_logo1.png" alt="pokedex header logo" id='logoImg' />
                </Link>
            </div>
            <div style={{ backgroundImage: "url(/images/pokedexImg.png)" }} id="pokedex">
                <div id="mainScreen">
                    <img id="screenImg" src={`${item.img}`} alt={`${item.name}`} />
                </div>
                <div id="nameScreen">
                    {item.name} <br></br>
                    <br></br>
                    ID # {item.num}
                </div>

                <div id="container">
                </div>
                <div class="vl">
                </div>

                <div id="heightScreen">
                    ht: {item.height}
                </div>
                <div id="weightScreen">
                    wt: {item.weight}
                </div>
                <div id="typeScreen">
                    <ul>
                        <br></br>
                        <u>TYPE</u>
                        <br></br>
                        <br></br>
                        {item.type?.map((pokType, idx) => {
                            return <li key={idx}>{pokType}</li>;
                        })}
                    </ul>
                </div>
                <div id="weaknessScreen">
                    <ul>
                        <br></br>
                        <u>WEAKNESSES</u>
                        <br></br>
                        <br></br>
                        {/* slice to limit to 4 list items */}
                        {item.weaknesses?.slice(0, 4).map((weakness, idx) => {
                            return <li key={idx}>{weakness}</li>;
                        })}
                    </ul>
                </div>
                <div id="dirPadRight">
                    <button
                        id="dirPadRightButton"
                        className="invisible-button"
                        onClick={nextPokemon}
                    >
                    </button>
                </div>
                <div id="dirPadLeft">
                    <button
                        id="dirPadLeftButton"
                        className="invisible-button"
                        onClick={lastPokemon}
                    >
                    </button>
                </div>
                <div id="dirPadUp">
                    <button
                        id="dirPadUpButton"
                        className="invisible-button"
                        onClick={nextPokemon}
                    >
                    </button>
                </div>
                <div id="dirPadDown">
                    <button
                        id="dirPadDownButton"
                        className="invisible-button"
                        onClick={lastPokemon}
                    >
                    </button>
                </div>
                <div id="blackButtonDiv">
                    <button
                        id="blackButton"
                        className="invisible-button"
                        onClick={randomPokemon}
                    >
                    </button>
                </div>
                <div id="blueCircButtonDiv">
                    <Link to={`/`}>
                        <button
                            id="blueCircButton"
                            className="invisible-button"
                        >
                        </button>
                    </Link>
                </div>
                <div id="keyboard">
                    <button
                        id="key1"
                        className="invisible-button key"
                        onClick={choosePokemon1}
                    >
                    </button>
                    <button
                        id="key2"
                        className="invisible-button key"
                    >
                    </button>
                    <button
                        id="key3"
                        className="invisible-button key"
                    >
                    </button>
                    <button
                        id="key4"
                        className="invisible-button key"
                    >
                    </button>
                    <button
                        id="key5"
                        className="invisible-button key"
                    >
                    </button>
                    <button
                        id="key6"
                        className="invisible-button key"
                    >
                    </button>
                    <button
                        id="key7"
                        className="invisible-button key"
                    >
                    </button>
                    <button
                        id="key8"
                        className="invisible-button key"
                    >
                    </button>
                    <button
                        id="key9"
                        className="invisible-button key"
                    >
                    </button>
                    <button
                        id="key10"
                        className="invisible-button key"
                    >
                    </button>

                </div>
            </div>
            <div id="selectedPokemon">
                <div>
                </div>
            </div>
        </div>

    );
}
