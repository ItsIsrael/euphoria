import React from 'react';
import {useState} from 'react';
import './App.css';
import RoutesDinamic from './routes';
import MenuNav from './layouts/Navbar';
import 'react-chatbot-kit/build/main.css'
function App() {
  const [loading, setLoading] = useState(false)
const spinner = document.getElementById('spinner');
if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 6000);
  }

  return (
    !loading &&  (
      <>
    <MenuNav />
    <RoutesDinamic />
    </>)
    
  );
}

export default App;