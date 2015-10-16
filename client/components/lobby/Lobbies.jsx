LobbyCollection = new Mongo.Collection("lobby");

Lobbies = React.createClass({
  mixins: [ReactMeteorData],
  
  propTypes: {

  },
  
  getMeteorData() {
    return {
      lobbies: LobbyCollection.find({}, {sort: {createdAt: -1}}).fetch()
    }
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
      return <Lobby key={lobby._id} lobby={lobby} />;
    });
  },
  
  render() {
    return (
      <div>
        <h1>
            Choose a lobby to join, or <button onClick={this.newLobby} className="btn waves-effect waves-light">create one</button>
        </h1>
        
        <div className="container">
            {this.renderLobbies()}
        </div>
        
      </div>
    );
  }
});