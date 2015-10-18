Meteor.publish("lobbies", function () {
    return GameCollection.find({ started: false });
});

Meteor.publish("lobby", function (id) {
    return GameCollection.find({ _id: id });
});

GameCollection.allow({
    update: function (doc) {
        return doc.creator === this.userId;
    },
    
    remove: function (doc) {
        return doc.creator === this.userId;
    },
});