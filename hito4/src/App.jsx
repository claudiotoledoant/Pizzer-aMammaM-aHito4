import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import Pizza from './components/Pizza.jsx';

const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [selectedPizzaId, setSelectedPizzaId] = useState('p001');

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <Navbar onNavigate={setCurrentView} />

      <main className="flex-grow-1">
        {currentView === 'home' && (
          <Home
            onSelectPizza={(id) => {
              setSelectedPizzaId(id);
              setCurrentView('pizza');
            }}
          />
        )}

        {currentView === 'pizza' && (
          <Pizza
            pizzaId={selectedPizzaId}
            onBack={() => setCurrentView('home')}
          />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;