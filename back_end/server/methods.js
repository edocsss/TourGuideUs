Meteor.methods({
    createNewUser: function (email, password, userProfile) {
        var newUserId = Accounts.createUser({
            email: email,
            password: password,
            profile: userProfile
        });

        Locations.update({
            name: userProfile.location
        }, {
            $push: {
                tourguides: newUserId
            }
        });
    }
});