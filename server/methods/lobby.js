Meteor.methods({
    "lobbies/create": function (opts) {
        return LobbyCollection.insert({
            creator: Meteor.userId(),
            users: []
        });
    }
});