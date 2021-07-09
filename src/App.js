import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {HomeContainer} from './containers/HomeContainer';
import { ItemDetailContainer } from './containers/ItemDetailContainer';

function App() {
  return (
    <>
    <HomeContainer/>
    <ItemDetailContainer />
    </>
  );
}

export default App;
