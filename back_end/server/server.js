var profpicURLs = [
    'images/profile_pictures/1.png',
    'images/profile_pictures/2.png',
    'images/profile_pictures/3.png',
    'images/profile_pictures/4.png',
    'images/profile_pictures/5.png'
];

function getRandomProfpicURL () {
    var randomIndex = Math.floor(Math.random() * profpicURLs.length);
    return profpicURLs[randomIndex];
}


Meteor.startup(function () {
    var testTourguideID, testTourguideID2, testTouristID, testTouristID2;
    if (Meteor.users.find().count() === 0) {
        testTouristID = Accounts.createUser({
            email: 'tourist1@tourist.com',
            password: '12345678',
            profile: {
                name: 'Test Tourist 1',
                email: 'tourist1@tourist.com',
                contact: '91236548',
                profpicURL: getRandomProfpicURL(),
                type: 'tourist'
            }
        });

        testTouristID2 = Accounts.createUser({
            email: 'tourist2@tourist.com',
            password: '12345678',
            profile: {
                name: 'Test Tourist 2',
                email: 'tourist2@tourist.com',
                contact: '94567512',
                profpicURL: getRandomProfpicURL(),
                type: 'tourist'
            }
        });

        testTourguideID = Accounts.createUser({
            email: 'tourguide1@tourguide.com',
            password: '12345678',
            profile: {
                name: 'Test Tour Guide 1',
                email: 'tourguide1@tourguide.com',
                contact: '84885652',
                profpicURL: getRandomProfpicURL(),
                tagline: 'Dream, Explore, Discover!',
                description: 'If you were to describe me in one word, it would be "reliable"! I have been living in Bali for the past 10 years now and I can bring you an enjoyable and memorable experience.',
                location: 'bali',
                price: 30,
                availability: {
                    start: new Date('March 14, 2016 00:00:00'),
                    end: new Date('March 31, 2016 23:59:59')
                },
                type: 'tourguide'
            }
        });

        testTourguideID2 = Accounts.createUser({
            email: 'tourguide2@tourguide.com',
            password: '12345678',
            profile: {
                name: 'Test Tour Guide 2',
                email: 'tourguide2@tourguide.com',
                contact: '12345678',
                profpicURL: getRandomProfpicURL(),
                tagline: 'Live is too short not to travel!',
                description: 'I am a Singapore Permanent Resident and I have been here for 15 years. People said that Singapore is just a tiny red dot. However, there are a lot of places that are not covered by blogs and travel agents. I know those places!',
                location: 'singapore',
                price: 40,
                availability: {
                    start: new Date('April 14, 2016 00:00:00'),
                    end: new Date('May 31, 2016 23:59:59')
                },
                type: 'tourguide'
            }
        });
    }

    if (Locations.find().count() === 0) {
        Locations.insert({
            name: 'bali',
            imgURL: 'images/locations/bali.jpg',
            tourguides: [testTourguideID]
        });

        Locations.insert({
            name: 'singapore',
            imgURL: 'images/locations/singapore.jpg',
            tourguides: [testTourguideID2]
        });
    }


    if (Bookings.find().count() === 0) {

        Bookings.insert({
            participants: {
                tour_guide: testTourguideID,
                tourist: testTouristID
            },
            dates: [{
                date: new Date('March 15, 2016 00:00:00'),
                time: 5
            }, {
                date: new Date('March 16, 2016 00:00:00'),
                time: 8
            }],
            totalCost: 390,
            accepted: false
        });

        Bookings.insert({
            participants: {
                tour_guide: testTourguideID2,
                tourist: testTouristID
            },
            dates: [{
                date: new Date('April 20, 2016 00:00:00'),
                time: 5
            }, {
                date: new Date('April 26, 2016 00:00:00'),
                time: 3
            }],
            totalCost: 320,
            accepted: false
        });
    }
});


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