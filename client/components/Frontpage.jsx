Frontpage = React.createClass({
  mixins: [ReactMeteorData],
  
  propTypes: {

  },
  
  getMeteorData() {
    return {
      
    }
  },
  
  getInitialState() {
    return {

    }
  },
  
  render() {
    return (
      <div className="container">
        <h1>The fantastic front page</h1>
        
        <button
            onClick={FlowRouter.go('login')}
            className="btn-large">
            Log in
        </button>
      </div>
    );
  }
});