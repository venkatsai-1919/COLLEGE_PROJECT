import React from 'react';
import "./Cards.css";
import {Link} from 'react-router-dom';



const App = () => {
  const cards = [
    {
      
      heading: 'CSE',
      price: '$9.99',
      cta: 'CLICK HERE',
      path : "/scheme2023cse"
    },
    {
      heading: 'ECE',
      price: '$19.99',
      cta: 'CLICK HERE',
      path : "/scheme2023ece"
    },
    {
      heading: 'ECS',
      price: '$29.99',
      cta: 'CLICK HERE',
      path : "/scheme2023ecs"
    },
    {
      heading: 'EEE',
      price: '$29.99',
      cta: 'CLICK HERE',
      path : "/scheme2023eee"
    },
    {
      heading: 'CIV',
      price: '$19.99',
      cta: 'CLICK HERE',
      path : "/scheme2023civ"
        },
    {
      heading: 'MECH',
      price: '$29.99',
      cta: 'CLICK HERE',
      path : "/scheme2023mech"
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
      <h1 className="main__heading">SELECT BRANCH</h1>
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
