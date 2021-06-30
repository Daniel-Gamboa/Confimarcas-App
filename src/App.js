import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {NavBarComponent} from './components/NavBarComponent';
import {HomeContainer} from './containers/HomeContainer';
import { directive } from '@babel/types';

function App() {
  return (
    <>
    <HomeContainer/>
    </>
  );
}

export default App;
