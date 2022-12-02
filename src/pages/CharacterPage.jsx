import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";


export function characterPage(props) {
    let [item, setItem] = useState({});
    let [list, setList] = useState([]);

    let pokeball = {
        img: './images/pokemon-logo.jpg'
    }
    let { id } = useParams();
    let [count, setCount] = useState(Number(id));
    let [key1, setKey1] = useState(pokeball);
    let [key2, setKey2] = useState({});
    let [key3, setKey3] = useState({});
    let [key4, setKey4] = useState({});
    let [key5, setKey5] = useState({});
    let [key6, setKey6] = useState({});
    let [key7, setKey7] = useState({});
    let [key8, setKey8] = useState({});
    let [key9, setKey9] = useState({});
    let [key10, setKey10] = useState({});
    }

    async function fetchPokemon() {
        let res = await fetch(`https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`);
        let data = await res.json();
        setList(data.pokemon)
    }

    function catchPokemon() {
        setItem(list.find((poke) => poke.id == count));
    }

    function selectPokemon1() {
        setKey1(list.find((poke) => poke.id == count));
        console.log(key1)
    }

    useEffect(() => {
        if (list.length == 0) fetchPokemon();
        else catchPokemon();
    }, [count, list]);

    useEffect(() => {
        selectPokemon1();
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
        if (count == 1) {
            setCount(151);
        } else {
            setCount(count - 1);
        }
    }

    function randomPokemon() {
        setCount(Math.floor(Math.random() * 151) + 1);




    return (
        <div id="CharacterPage">
                <link to={`/allpokemon`}>
                    <img src="./images/pokemon-logo.jpg" alt="pokedex header logo" id='logoImg' />
               </link></div>
            </div>
            <div style={{ backgroundImage: "url(/images/pokedexConsole.png)" }} id="pokedex-console">
                <div id="mainScreen">
                    <img id="screenImg" src={`${item.img}`} alt={`${item.name}`} />
                </div>
                <div id="nameScreen">
                    {item.name} <br></br>
                    <br></br>
                    ID # {item.num}
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

                        {item.weaknesses?.slice(0, 4).map((weakness, idx) => {
                            return <li key={idx}>{weakness}</li>;
                        })}
                    </ul>
                </div>
                <div id="right">
                    <button
                        id="rightButton"
                        className="invisible-button"
                        onClick={nextPokemon}
                    >
                    </button>
                </div>
                <div id="left">
                    <button
                        id="leftButton"
                        className="invisible-button"
                        onClick={lastPokemon}
                    >
                    </button>
                </div>
                <div id="up">
                    <button
                        id="upButton"
                        className="invisible-button"
                        onClick={nextPokemon}
                    >
                    </button>
                </div>
                <div id="down">
                    <button
                        id="downButton"
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
                <div id="blueButtonDiv">
                    <Link to={`/`}>
                        <button
                            id="blueButton"
                            className="invisible-button"
                        >
                        </button>
                    </Link>
                </div>
                <div id="keyboard">
                    <button
                        id="key1"
                        className="invisible-button key"
                        onClick={selectPokemon1}
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


}
