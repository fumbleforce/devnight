
Lobbies = React.createClass({
  mixins: [ReactMeteorData],
  
  propTypes: {

  },
  
  getMeteorData() {
    let data = {};
    
    let sub = Meteor.subscribe("lobbies");
    
    if (sub.ready()) {
      data.lobbies = GameCollection.find({ started: false }, {sort: {createdAt: -1}}).fetch()
    }
    
    return data;
  },
  
  getInitialState() {
    return {

    }
  },
  
  newLobby() {
    Meteor.call("lobbies/create", {}, function (err, id) {
        if (err) {
          console.log(err);
          alert("Error creating lobby:", err.reason);
        } else {
          FlowRouter.go("/lobbies/"+id);
        }
    });
  },
  
  renderLobbies() {
    return this.data.lobbies.map((lobby) => {
      return <LobbyItem key={lobby._id} lobby={lobby} />;
    });
  },
  
  render() {
    return (
      <div>
        <heading>
          <h1>
              Choose a lobby to join, or
          </h1>
          <a onClick={this.newLobby} className="btn-large waves-effect waves-light">create one</a>
        </heading>
        <br />
        <div className="collection" style={{marginTop: "40px"}}>
            {this.data.lobbies? this.renderLobbies() : <Loader />}
        </div>
        
      </div>
    );
  }
});