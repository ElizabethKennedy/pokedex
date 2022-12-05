// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import { Link } from "react-router-dom";

export function HomePage(props) {
    return (
        <div
        // style={{ backgroundImage: "")" }}
         id="HomePage" >

            <div id="pokedexLogo">
                <Link to={`/allpokemon`}>
                    <img src="/images/pokemon-logo.jpg" alt="pokedex header logo" id='logoImg' />
                </Link>
                </div>
            <header>
                <h1>Pokemon Pokedex</h1>
                <div>
                    <br></br>
                    <p>
                        Welcome to the colorful world of Pokemon!
                        <br></br>
                        <br></br>
                        This Pokedex will search for Pokemon by name, type, and weaknesses.

                        <br></br>
                        <br></br>
                        <br></br>
                        Push <Link to={`/allpokemon`}><button id="startButton">START</button></Link> to begin!
                    </p>
                </div>


            </header>
        </div>
    );
}
