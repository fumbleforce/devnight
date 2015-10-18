Login = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  
  getInitialState() {
    return {
      password: "",
      username: ""
    }
  },
  
  login(e) {
    e.preventDefault();

    Meteor.loginWithPassword({
      username: this.state.username,
      password: this.state.password
    }, function(err) {
      if (err) {
        console.log(err);
        alert("Error logging in", err.reason);
      } else {
        FlowRouter.go("lobbies");
      }
    });
  },
  
  register(e) {
    e.preventDefault();
    
    Accounts.createUser({
      username: this.state.username,
      password: this.state.password
    }, function(err) {
      if (err) {
        console.log(err);
        alert("Error logging in", err.reason);
      } else {
        FlowRouter.go("lobbies");
      }
    });
  },
  
  render() {
    return (
      <div className="container login">
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input type="text"
                  valueLink={this.linkState('username')}
                  className="validate" />
                <label for="username">Username</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input type="password"
                  valueLink={this.linkState('password')}
                  className="validate" />
                <label for="password">Password</label>
              </div>
            </div>
            <div className="row">
              <button
                className="btn waves-effect waves-light teal lighten-1"
                onClick={this.login}>Log in
              </button>
              <button
                className="btn waves-effect waves-light teal lighten-1"
                onClick={this.register}>
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
});
