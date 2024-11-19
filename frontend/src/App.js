import React from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  return (
    <div className="App container-fluid py-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6 d-flex flex-column align-items-center">
          <h1 className="app-heading text-center mb-4">
            <i className="bi bi-heart-pulse-fill icon me-2"></i>
            HEALTHCARE DASHBOARD
          </h1>
          <div className="card">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
