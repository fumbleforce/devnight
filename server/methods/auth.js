Meteor.methods({
    "register": function (opts) {
        console.log("Registering with", opts);
        
        check(opts.username, String);
        check(opts.password, String);
        
        let usernameTaken = Meteor.users.find({
            username: opts.username }).count() > 0;
        
        if (usernameTaken) {
            throw new Meteor.Error("username_taken", "Username is taken");
        }
        
        return Accounts.createUser({
            username: opts.username,
            password: opts.username
        });
    },
});