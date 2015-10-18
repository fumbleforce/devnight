Lobby = React.createClass({
  mixins: [ReactMeteorData],
  
  getInitialState() {
    return {
      myPlayer: null
    }
  },
  
  getMeteorData() {
    let data = {};
    let lobbyId = FlowRouter.current().params.lobby;
    let lobbySub = Meteor.subscribe("lobby", lobbyId);
    let playerSub = Meteor.subscribe("players", lobbyId);
    
    if (lobbySub.ready()) {
      data.lobby = GameCollection.findOne(lobbyId);
    }
    
    if (playerSub.ready()) {
      data.players = PlayerCollection.find({ game: lobbyId }).fetch();
      
      let myPlayer = PlayerCollection.findOne({
        game: lobbyId,
        user: Meteor.userId()
      });
      console.log("My player: ", myPlayer);
      if (myPlayer) {
        Session.set("myPlayer", myPlayer._id);
      }
    }
    
    return data;
  },
  
  // Should remove current player
  // and remove lobby if player is the
  // creator
  leaveLobby() {
    PlayerCollection.remove(Session.get("myPlayer"));
    
    FlowRouter.go("/lobbies");
  },
  
  renderPlayers() {
    console.log("Rendering players", this.data.players);
    return this.data.players.map((player) => {
      console.log(player);
      return <LobbyPlayer key={player._id} player={player} />
    });
  },
  
  render() {
    console.log(this.data);
    return <div className="container">
      <h1>Lobby</h1>
      
      <ul className="container collection">
        {this.data.players? this.renderPlayers() : <Loader />}
      </ul>
      
      <p style={{marginTop: "30px"}}>
        <a onClick={this.leaveLobby} className="waves-effect waves-light orange btn">
          <i className="material-icons left">arrow_back</i>
          Leave
        </a>
      </p>
    </div>
  }
});

LobbyPlayer = React.createClass({
  
  isMe() {
    return this.props.player.name === Meteor.user().username;
  },
  
  setReady() {
    console.log("Setting ready");
    PlayerCollection.update(this.props.player._id, {
      $set: { ready: true }
    });
  },
  
  setUnReady() {
    console.log("Setting unready");
    PlayerCollection.update(this.props.player._id, {
      $set: { ready: false }
    });
  },
  
  renderReadyButton() {
    if (this.props.player.ready) {
      return <a onClick={this.setUnReady} className="secondary-content btn">
        <i className="material-icons left">clear</i>
        Unready
      </a>
    } else {
      return <a onClick={this.setReady} className="secondary-content btn">
        <i className="material-icons left">done</i>
        Ready
      </a>
    }
  },
  
  render() {
    return <li className="collection-item avatar" style={{minHeight: "65px"}}>
      <i className="material-icons circle">assignment_ind</i>
      
      <h4 style={{margin:0, textAlign:"left"}}>{this.props.player.name}</h4>
      
      {this.isMe()? this.renderReadyButton() : ""}
    </li>
  }
});