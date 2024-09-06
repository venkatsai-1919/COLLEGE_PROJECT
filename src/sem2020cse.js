import React from 'react';
import "./Cards.css";
import {Link} from 'react-router-dom';



const App = () => {
  const cards = [
    {
      
      heading: 'SEM1',
      price: '$9.99',
      cta: 'CLICK HERE',
      path : "/scheme2020csesem1"
    },
    {
      heading: 'SEM2',
      price: '$19.99',
      cta: 'CLICK HERE',
      path : "/scheme2020csesem2"
    },
    {
      heading: 'SEM3',
      price: '$29.99',
      cta: 'CLICK HERE',
      path : "/scheme2020csesem3"
    },
    {
      heading: 'SEM4',
      price: '$29.99',
      cta: 'CLICK HERE',
      path : "/scheme2020csesem4"
    },
    {
      heading: 'SEM5',
      price: '$19.99',
      cta: 'CLICK HERE',
      path : "/scheme2020csesem5"
        },
    {
      heading: 'SEM6',
      price: '$29.99',
      cta: 'CLICK HERE',
      path : "/scheme2020csesem6"
    },
  ];

  const handleCardHover = (e) => {
    const card = e.currentTarget;
    const overlay = document.querySelector('.overlay');

    overlay.style.opacity = 1;
    overlay.style.x = `${e.pageX - card.offsetLeft}px`;
    overlay.style.y = `${e.pageY - card.offsetTop}px`;
  };

  return (
    <main className="main flow">
      <h1 className="main__heading">SELECT SEMESTER</h1>
      <div className="main__cards cards">
        <div className="cards__inner">
          {cards.map((card, i) => (
            <div>
            <Link to={card.path} style={{textDecoration : "none"}}>
            <div 
              key={i}
              className="cards__card card"
              onMouseMove={handleCardHover}
            >
              <h2 className="card__heading">{card.heading}</h2>
              <p className="card__price">{card.price}</p>
              <a href={""} className="card__cta cta">
                {card.cta}
              </a>
            </div>
            </Link>
            </div>
          ))}
        </div>
        <div className="overlay cards__inner"></div>
      </div>
    </main>
  );
};

export default App;
