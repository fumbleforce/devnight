
ReactLayout.setRootProps({
  className: "ui middle aligned center aligned grid"
});




FlowRouter.route("/", {
  name: "front",
  
  action: function() {
    ReactLayout.render(MainLayout, {
      content: <Frontpage />
    });
  }
});

FlowRouter.route("/login", {
  name: "login",
  
  action: function() {
    ReactLayout.render(MainLayout, {
      content: <Login />
    });
  }
});

FlowRouter.route("/lobbies", {
  name: "lobbies",
  
  action: function() {
    ReactLayout.render(MainLayout, {
      content: <Lobbies />
    });
  }
});

FlowRouter.route("/lobbies/:lobby", {
  name: "lobby",
  
  action: function() {
    ReactLayout.render(MainLayout, {
      content: <Lobby />
    });
  }
});

FlowRouter.route("/game", {
  name: "game",
  
  action: function() {
    ReactLayout.render(MainLayout, {
      content: <Frontpage />
    });
  }
});