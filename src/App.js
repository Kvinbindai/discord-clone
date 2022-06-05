import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Download from './components/Pages/Download';
import UiRouter from './components/UiRouter';
import Home from './components/Home';

function App() {

  return (
    <Router>
        <Routes>
          <Route element={<UiRouter/>}>
          <Route index element={<Home/>}></Route>
          <Route path='/download' element={<Download/>}></Route>
          </Route>
        </Routes>
    </Router>
  );
}

export default App;

