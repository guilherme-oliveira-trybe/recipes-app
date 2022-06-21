import React from 'react';
import { useHistory } from 'react-router';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

const FooterComponent = () => {
  const history = useHistory();

  const redirectToDrinks = () => {
    history.push('/drinks');
  };

  const redirectToExplore = () => {
    history.push('/explore');
  };

  const redirectToFoods = () => {
    history.push('/foods');
  };

  return (
    <div data-testid="footer" style={ { position: 'fixed', bottom: '0px' } }>
      <button
        type="button"
        data-testid="drinks-bottom-btn"
        src={ drinkIcon }
        alt="Explorar bebidas"
        onClick={ redirectToDrinks }
      />
      <button
        type="button"
        data-testid="explore-bottom-btn"
        src={ exploreIcon }
        alt="Botão explorar"
        onClick={ redirectToExplore }
      />
      <button
        type="button"
        data-testid="food-bottom-btn"
        src={ mealIcon }
        alt="Explorar comidas"
        onClick={ redirectToFoods }
      />
    </div>
  );
};

export default FooterComponent;
