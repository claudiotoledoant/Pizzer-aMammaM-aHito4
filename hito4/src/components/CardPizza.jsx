const CardPizza = ({ id, name, price, ingredients, img, onSelectPizza }) => {
  return (
    <div className="card card-trattoria h-100 overflow-hidden">
      <img
        src={img}
        className="card-img-top"
        alt={name}
        style={{ height: '220px', objectFit: 'cover' }}
      />
      <div className="card-body p-4 d-flex flex-column justify-content-between">
        <div>
          <h4 className="card-title fw-bold text-capitalize text-center mb-3">
            {name}
          </h4>
          <hr className="my-2" style={{ borderColor: '#e8e1d5' }} />
          
          <p className="card-text text-center text-muted mb-2 small fw-semibold">
            🍕 INGREDIENTES
          </p>
          <ul className="list-unstyled text-center text-capitalize mb-3 small">
            {ingredients?.map((ingredient, index) => (
              <span key={index} className="badge bg-light text-dark me-1 mb-1 border">
                {ingredient}
              </span>
            ))}
          </ul>
        </div>

        <div>
          <hr className="my-2" style={{ borderColor: '#e8e1d5' }} />
          <h4 className="text-center fw-bold text-italian-red my-3">
            ${price?.toLocaleString('es-CL')}
          </h4>

          <div className="d-flex justify-content-center gap-2">
            <button 
              className="btn btn-italian-outline btn-sm px-3"
              onClick={() => onSelectPizza(id)}
            >
              Ver Más 👀
            </button>
            <button className="btn btn-italian-red btn-sm px-3">
              Añadir 🛒
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;