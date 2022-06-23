import React from 'react';
import { useHistory } from 'react-router-dom';

const IngredientsCard = () => {
  const history = useHistory();
  const { location: { pathname } } = history;

  return (
    <div>
      {pathname === '/explore/foods/ingredients' && (
        <section data-testid={ `${index}-ingredient-card` }>
          <img
            data-testid={ `${index}-card-img` }
            svg={ meals.strMealsThumb }
            alt="comida"
          />
          <h3 data-testid={ `${index}-card-name` }>{meals.strMeal}</h3>
        </section>
      )}
      {pathname === '/explore/drinks/ingredients' && (
        <section data-testid={ `${index}-ingredient-card` }>
          <img
            data-testid={ `${index}-card-img` }
            svg={ drinks.strDrinkThumb }
            alt="bebida"
          />
          <h3 data-testid={ `${index}-card-name` }>{drinks.strDrink}</h3>
        </section>
      )}

    </div>
  );
};

export default IngredientsCard;