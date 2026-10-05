import { useEffect, useState } from 'react';

const Pizza = ({ pizzaId = 'p001', onBack }) => {
  const [pizza, setPizza] = useState(null);

  const getPizza = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/pizzas/${pizzaId}`);
      const data = await response.json();
      setPizza(data);
    } catch (error) {
      console.error('Error al obtener la pizza:', error);
    }
  };

  useEffect(() => {
    getPizza();
  }, [pizzaId]);

  if (!pizza) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5" style={{ maxWidth: '850px' }}>
      <button 
        className="btn btn-outline-secondary mb-4 btn-sm fw-bold"
        onClick={onBack}
      >
        ← Volver al Menú
      </button>

      <div className="card card-trattoria overflow-hidden">
        <div className="row g-0 align-items-center">
          <div className="col-md-6">
            <img
              src={pizza.img}
              alt={pizza.name}
              className="img-fluid w-100 h-100"
              style={{ objectFit: 'cover', minHeight: '350px' }}
            />
          </div>
          <div className="col-md-6 p-4 p-lg-5">
            <span className="badge bg-italian-green text-white mb-2">Receta Tradicional</span>
            <h2 className="fw-bold text-capitalize mb-2">{pizza.name}</h2>
            <p className="text-muted small mb-4">{pizza.desc}</p>
            
            <h6 className="fw-bold mb-2">🇮🇹 Ingredientes seleccionados:</h6>
            <ul className="mb-4 ps-3">
              {pizza.ingredients?.map((ingredient, index) => (
                <li key={index} className="text-capitalize text-secondary">
                  {ingredient}
                </li>
              ))}
            </ul>

            <div className="d-flex justify-content-between align-items-center pt-3 border-top">
              <span className="fs-3 fw-bold text-italian-red">
                ${pizza.price?.toLocaleString('es-CL')}
              </span>
              <button className="btn btn-italian-red px-4 py-2 fw-semibold">
                Añadir 🛒
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;