// import logo from './logo.svg';
import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import Header from './Pages/Header';
import AnimatedText from './Pages/Test.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import Certificate from './Pages/Certificate.jsx';

function App() {
  const [toggle, setToggle] = React.useState(false)

  const handleToggle =()=>{
    setToggle(!toggle)
  }

  const styles = {
    backgroundColor: toggle ? '#171717' : '#FAFAFA',
    color: toggle ? '#FFFFFF' : '#333333',
  }


  return (
    <main className={toggle ? "dark" : "light"}>
      <Header 
        handleToggle={handleToggle} 
        toggle={toggle} 
        style={styles}
      />
      
      <About />
      <Certificate />
      <Contact />
    </main>
  );
}

export default App;
