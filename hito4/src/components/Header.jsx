const Header = () => {
  return (
    <div
      className="text-white text-center py-5 d-flex flex-column justify-content-center align-items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fheader.jpg?alt=media&token=a8385311-64d1-4db5-9e66-6f81e3ed9266')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '250px'
      }}
    >
      <h1 className="fw-bold display-5">¡Pizzería Mamma Mia!</h1>
      <p className="fs-5">¡Tenemos las mejores pizzas que podrás encontrar!</p>
      <hr className="w-50 border-light" />
    </div>
  );
};

export default Header;