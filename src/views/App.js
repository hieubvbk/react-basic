// import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
import ListToDo from './ToDos/ListToDo';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav';
import Home from './Example/Home';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav/>
      <header className="App-header">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/ToDos">
            <ListToDo/>
          </Route>
          <Route path="/About">
            <MyComponent/> 
          </Route>
        </Switch>
      </header>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        />
    </div>
    </BrowserRouter>
  );
}

export default App;
