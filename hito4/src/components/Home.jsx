import { useEffect, useState } from 'react';
import CardPizza from './CardPizza.jsx';
import Header from './Header.jsx';

const Home = ({ onSelectPizza }) => {
  const [pizzas, setPizzas] = useState([]);

  const getPizzas = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/pizzas');
      const data = await response.json();
      setPizzas(data);
    } catch (error) {
      console.error('Error al obtener las pizzas:', error);
    }
  };

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <>
      <Header />
      <div className="container my-5">
        <div className="row g-4">
          {pizzas.map((pizza) => (
            <div className="col-12 col-md-6 col-lg-4" key={pizza.id}>
              <CardPizza
                id={pizza.id}
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
                onSelectPizza={onSelectPizza}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;