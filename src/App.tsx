import React from 'react';
import './App.css';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import Main from './components/pages/Main';
import Product from './components/pages/Product';

class App extends React.Component {

  render() {
    return <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to='/'>Főoldal</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/about' element={<p>Elérhetőségek, rólunk stb.</p>} />
          <Route path='/products/:productId' element={<Product/>} />
          <Route path='/*' element={<Navigate to='/'/>}/>
        </Routes>
      </main>
    </div>
  }
}

export default App;