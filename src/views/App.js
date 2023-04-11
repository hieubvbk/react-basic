import logo from './logo.svg';
import './App.scss';
// import MyComponent from './Example/MyComponent';
import ListToDo from './ToDos/ListToDo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World!
        </p>
        {/* <MyComponent/> */}
        <ListToDo/>
      </header>
    </div>
  );
}

export default App;
