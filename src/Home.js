import React from 'react';
import {NavLink} from 'react-router-dom'

const Home = ()=> (

    <React.Fragment>
        <p>Bienvenue sur l'accueil</p>
        <NavLink to={`/notre-histoire/`}>
            Aller vers la page histoire
        </NavLink>
    </React.Fragment>
)

export default Home;
