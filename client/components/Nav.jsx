Nav = React.createClass({
  render() {
    return (
      <nav>
        <div className="nav-wrapper teal lighten-1">
          <a href="/" className="brand-logo left" style={{float:"left", position: "relative", marginLeft: "10px"}}>Devnight</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/lobbies">Lobbies</a></li>
            <li><a href="/login">Log in</a></li>
          </ul>
        </div>
      </nav>
    );
  }
});