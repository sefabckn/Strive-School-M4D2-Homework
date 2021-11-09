
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import LatestRelease from './components/LatestRelease';



function App() {
  return (
    <div>
      <MyNavbar brand="Strivebook" />

      <MyFooter />

      <Welcome />

      <LatestRelease />
     
    </div> 
    
  );
}

export default App;
