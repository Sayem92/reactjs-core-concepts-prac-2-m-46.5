import React from 'react';

const Cocktail = (props) => {
    const {strDrinkThumb,strIngredient3,strInstructions,strGlass} = props.cocktail
    return (
        <div>
            <img src={strDrinkThumb}alt="" />
            <h3>Name: {strIngredient3}</h3>
            <h5>Quality: {strGlass}</h5>
            <p>Details:{strInstructions}</p>

        </div>
    );
};

export default Cocktail;