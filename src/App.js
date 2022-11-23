import React from 'react';
import {useState} from 'react';
import './App.css';
import RoutesDinamic from './routes';
import MenuNav from './layouts/Navbar';
import 'react-chatbot-kit/build/main.css'
import FooterEuphoria from './components/Footer/Footer';
function App() {
  const [loading, setLoading] = useState(false)
const spinner = document.getElementById('spinner');
if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 3000);
  }

  return (
    !loading &&  (
      <>
    <MenuNav />
    <RoutesDinamic />
    <FooterEuphoria />
    </>)
    
  );
}

export default App;