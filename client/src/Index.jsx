import '../style.css';
import Nav from './Components/Nav.jsx';

class Proxy extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Nav />
      </div>
    );
  }
}

ReactDOM.render(<Proxy />, document.getElementById('proxy'));
