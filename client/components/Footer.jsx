Footer = React.createClass({
  render() {
    return (
      <footer className="page-footer teal lighten-1">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Footer Content</h5>
              <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Made using</h5>
              <ul>
                <li><a className="grey-text text-lighten-3" href="https://github.com/jorgeer">jorgeer</a></li>
                <li><a className="grey-text text-lighten-3" href="https://meteor.com">Meteor</a></li>
                <li><a className="grey-text text-lighten-3" href="https://facebook.github.io/react/">React</a></li>
                <li><a className="grey-text text-lighten-3" href="http://materializecss.com/">Materialize</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
          © 2015 Nobody! Steal all you like
          </div>
        </div>
      </footer>
    );
  }
});