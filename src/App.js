import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home';
import PageNotFound from './Pages/PageNotFound';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <>
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="*">
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
      </Router>
      <Footer></Footer>
    </>
  );
}

export default App;
