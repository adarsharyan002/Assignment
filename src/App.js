
import './App.css';
import Logo from './asserts/Logo.png'
import UpperPart from './Components/UpperPart';
import LowerPart from './Components/LowerPart'
import Footer from './Components/Footer'



function App() {
  return (
    <div className="App">
      <div className="header">
        <img style={{width:'22rem',marginTop:'2rem',marginBottom:'20px'}} src={Logo} alt="logo" />
      </div>
  <UpperPart/>
  <LowerPart/>
  <Footer/>
    </div>
  );
}

export default App;
