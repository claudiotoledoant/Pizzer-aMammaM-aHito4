const Navbar = ({ onNavigate }) => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 shadow">
      <div className="container-fluid">
        <button 
          className="navbar-brand bg-transparent border-0 fw-bold fs-3 text-warning" 
          onClick={() => onNavigate && onNavigate('home')}
        >
          🍕 Pizzería Mamma Mia!
        </button>

        <div className="d-flex gap-2 me-auto">
          <button 
            className="btn btn-outline-light btn-sm fw-semibold"
            onClick={() => onNavigate && onNavigate('home')}
          >
            🍕 Home
          </button>
          {token ? (
            <>
              <button className="btn btn-outline-light btn-sm fw-semibold">🔓 Profile</button>
              <button className="btn btn-outline-light btn-sm fw-semibold">🔒 Logout</button>
            </>
          ) : (
            <>
              <button className="btn btn-outline-light btn-sm fw-semibold">🔐 Login</button>
              <button className="btn btn-outline-light btn-sm fw-semibold">🔐 Register</button>
            </>
          )}
        </div>

        <div>
          <button className="btn btn-outline-warning btn-sm text-warning fw-bold border-2">
            🛒 Total: ${total.toLocaleString('es-CL')}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;