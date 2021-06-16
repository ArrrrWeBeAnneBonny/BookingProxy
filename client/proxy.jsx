import NavBar from './Components/Navbar.jsx'

class Proxy extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <NavBar />

    )
  }
}

ReactDOM.render(<Proxy />, document.getElementById('proxy'));
