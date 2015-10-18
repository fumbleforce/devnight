Meteor.methods({
    "lobbies/create": function (opts) {
        let gameId = GameCollection.insert({
            creator: Meteor.userId(),
            started: false
        });
        
        let playerId = PlayerCollection.insert({
            user: Meteor.userId(),
            game: gameId,
            // TODO Replace this with a nickname
            name: Meteor.user().username,
            ready: false
        });
        
        return gameId;
    },
    
    "lobbies/join": function (opts) {
        let playerId = PlayerCollection.insert({
            user: Meteor.userId(),
            game: opts.id,
            // TODO Replace this with a nickname
            name: Meteor.user().username,
            ready: false
        });
    },
});