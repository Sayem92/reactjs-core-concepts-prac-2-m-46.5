import React, { useEffect, useState } from 'react';
import Cocktail from './Cocktail';

const Cocktails = () => {
    const [cocktails, setCocktails] = useState([]);
    useEffect(() => {

        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
        .then(res => res.json())
        .then(data => {
            console.log(data.drinks[0])
            setCocktails(data.drinks)
        })

    },[])

    return (
        <div>
            <h2>all cocktails: {cocktails.length}</h2>
            {
                cocktails.map(cocktail => <Cocktail
                cocktail={cocktail}
                key={cocktail.idDrink}
                ></Cocktail>)
            }
        </div>
    );
};

export default Cocktails;