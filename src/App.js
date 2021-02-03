import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import MainPage from './components/Home/MainPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ImageDetection from './components/ImageDetection/ImageDetection';
import AddThreat from './components/AddThreat/AddThreat';
import NavBar from './components/NavBar';
function App() {
  return (
    <div className='m-0 p-0 '>
      <Router>
        <NavBar />
        {/* <MainPage />
        <ImageDetection /> */}
        <Switch>
          <Route exact path='/imagedetection' component={ImageDetection} />
          <Route exact path='/addthreat' component={AddThreat} />
          <Route path='/' component={MainPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
