PlayerCollection.after.remove(function (userId, doc) {
    let game = GameCollection.findOne(doc.game);
     
    if (game && game.creator === doc.user) {
        GameCollection.remove(game._id);
    } 
});

PlayerCollection.after.update(function (userId, doc, fieldNames, modifier, options) {
    console.log("Player was updated", doc);
    if (doc.ready) {
        let allPlayers = PlayerCollection.find({ game: doc.game }).fetch();
        console.log("All players", allPlayers);
        let allReady = _.every(allPlayers, (p) => p.ready);
        
        if (allReady) {
            console.log("All ready, starting game");
            GameCollection.update(doc.game, {
                $set: { started: true }
            });
        }
    }
});
