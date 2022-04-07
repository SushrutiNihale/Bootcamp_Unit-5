import logo from './images/logo.jpg';
import './App.css';

function App() {
  return (
    <nav className="App">
      <Logo path={logo} />
      <Links options={["Services","Projects","About"]} />
      <Button />
    </nav>
  );
}

const Logo = (props) => {
  return <img src={props.path}></img>
}

const Links = (props) => {
  return (
    <ul className="menu">
      {props.options.map((e) => {
        return <li className="options">{e}</li>
      })}
    </ul>
  )
}

const Button = () => {
  return <button>Contact</button>
}

export default App;
