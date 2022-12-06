// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import { Link } from "react-router-dom";

export function HomePage(props) {
    return (
        <div
         id="homePage" >

            <div id="pokedexLogo">
                <Link to={`/allpokemon`}>
                    <img src="./public/images/pokemon-logo.jpg" alt="pokedex header logo" id='logoImg' />
                </Link>
            </div>
            <header>
                <h1>Pokémon Pokedex</h1>
                <div>
                    <br></br>
                    <p>
                        Explore the whimsical world of Pokémon!
                        <br></br>
                        <br></br>
                        This Pokedex will search Pokémon by type and weakness,
                        and display name, height, and weight for each character.
                        <br></br>
                        <br></br>
                        <br></br>
                       <h2>Push <Link to={`/allpokemon`}><button id="startButton">START</button></Link> to play!</h2>
                    </p>
                </div>
            </header>
        </div>


        );
}
