import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact/>
        </Switch>
      </Router>
        
      </>
    </div>
  );
}

export default App;
