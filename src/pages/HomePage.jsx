import { useState } from "react";
import { Link } from "react-router-dom";

export function HomePage(props) {
    return (
        <div
         id="homePage" >

            <div id="pokedexLogo">
                <Link to={`/allpokemon`}>
                    <img src="./images/pokedex_logo_new.png" alt="pokedex header logo" id='logoImg' />
                </Link>
            </div>
            <div>
            <header>
                <h1>Hello Pokemon Enthusiasts!</h1>
                        Push <Link to={`/allpokemon`}><button id="startButton">START</button></Link> to begin!

                     </header>
                     </div>
                     </div>
    );
}
