import Nav from './Components/Nav.jsx';
import './style.css';

class Proxy extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Nav />
    );
  }
}

ReactDOM.render(<Proxy />, document.getElementById('proxy'));
