
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';


function App() {
  return (
    <div>
      <MyNavbar brand="Strivebook" />

      <MyFooter />

      <Welcome />
    </div> 
    
  );
}

export default App;
