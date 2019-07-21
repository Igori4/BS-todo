import React from 'react';
import './App.css';
import Greeting from './components/Greeting';
import Todo from './components/Todo';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <main>
      <Greeting />
      <Todo />
    </main>
    <Footer />
    </>
  )
};

export default App;
