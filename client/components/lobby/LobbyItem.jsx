LobbyItem = React.createClass({
  
  joinLobby() {
    console.log("Joining lobby", this.props.lobby._id);
    Meteor.call("lobbies/join", { id: this.props.lobby._id }, (err, id) => {
      if (err) {
        console.log(err);
        alert("Error joining lobby:", err.reason);
      } else {
        FlowRouter.go("/lobbies/"+this.props.lobby._id);
      }
    })
  },
  
  render() {
    return <a
      className="collection-item avatar lobby"
      style={{"minHeight": "65px"}}
      onClick={this.joinLobby}>
      
      <i className="material-icons circle green">play_arrow</i>
      <span className="title">{this.props.lobby.title}</span>
      <p>Started {this.props.lobby.createdAt}</p>
    </a>
  }
});