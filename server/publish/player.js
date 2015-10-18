Meteor.publish("players", function (gameId) {
    return PlayerCollection.find({ game: gameId });
});

PlayerCollection.allow({
    update: function (doc) {
        return doc.user === this.userId;
    },
    
    remove: function (doc) {
        return doc.user === this.userId;
    },
});