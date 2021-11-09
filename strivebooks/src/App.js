
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter';


function App() {
  return (
    <div>
      <MyNavbar brand="Strivebook" />

      <MyFooter />
    </div> 
    
  );
}

export default App;
