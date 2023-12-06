import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
const NaijaDishes = [
  {
    name: "Party Jollof",
    ingredients:
      "Tomatoes, Red Pepper, Onions, Curry, Italian Olive Oil and rosemary",
    Price: 6,
    photoName: "dishes/naijajollof.jpg",
    soldOut: false,
  },
  {
    name: "Afang Soup",
    ingredients: "Periwinkle, Afang leaf and mozarella",
    native: 'Cross-River',
    photoName: "dishes/afangsoup.jpg",
    soldOut: false,
  },
  {
    name: "Groundnut Soup",
    ingredients: "Groundnut, mozarella, spinach and ricotta oil",
    native: 'South',
    photoName: "dishes/groundnutsoup.jpg",
    soldOut: false,
  },
  {
    name: "Oha Soup",
    ingredients: "Cocoyam, Oha leaf, Ogiri, Okpeyi, Pepper",
    native: "SouthEast",
    photoName: "dishes/ohaSoup.jpg",
    soldOut: false,
  },
  {
    name: "Okro Soup",
    ingredients: "Okro, Pumpkin, Okporoko, aragula, and burrata mangala",
    native: 'South',
    photoName: "dishes/okrosoup.jpg",
    soldOut: false,
  },
  {
    name: "Fish Pepper Soup",
    ingredients: "Catfish, Utazi, Okporoko, aragula, and Uziza, mangala",
    native: 'General',
    photoName: "dishes/fishpepperSoup.jpg",
    soldOut: false,
  },

];

function App() {
  return (
    <div className="container">
      <h1>Hello Foodie!</h1>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  //const style = {color: 'red', fontSize: "32px", textTransform: 'uppercase'}
  const style = { };
  return (
    <header  className="header footer">
        <h1 style={style}>
            Naija Meals ShowRoom
        </h1>
    </header>
          
          
     );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Soup, Stew and Oryza</h2>

<ul className="diets">
{NaijaDishes.map(diet => 
<Diet  dietObj={diet} key={diet.name} />
  )}
</ul>

      {/* <GroundnutSoup 
      name='GroundnutSoup Spinacci' ingredients='Tomato, mozarella, spinach and ricotta cheese' 
      photoName='dishes/groundnutsoup.jpg' 
      NativeTo='West'
      />
      <GroundnutSoup name="Oha Soup" ingredients='Cocoyam, Oha leaf, Ogiri, Okpeyi, Pepper' 
      Native='East'
      photoName='dishes/ohaSoup.jpg' /> */}
      </main>
  );
}




function Diet(props) {


  return (
    <li className="diet">
      <img src={props.dietObj.photoName} alt={props.dietObj.name} />
      <div>
      <h3>{props.dietObj.name}</h3>
      <p>{props.dietObj.ingredients}</p>
      <span>{props.dietObj.native}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  // if (hour >= openHour && hour <= closeHour) alert("It's Time For Brunch");
  //  else alert("Its Time For Dinner")

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}. For Your Viewing Pleasure
    </footer>
  );
  // return React.createElement('footer', null, "For Your Viewing Pleasure!");
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
