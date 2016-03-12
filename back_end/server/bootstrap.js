Meteor.startup(function () {
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

    var testTourguideID, testTourguideID2, testTouristID;
    if (Meteor.users.find().count() === 0) {
        testTouristID = Accounts.createUser({
            email: 'tourist1@tourist.com',
            password: '12345678',
            profile: {
                name: 'Test Tourist 1',
                email: 'tourist1@tourist.com',
                contact: '12345678',
                profpicURl: getRandomProfpicURL(),
                type: 'tourist'
            }
        });

        testTourguideID = Accounts.createUser({
            email: 'tourguide1@tourguide.com',
            password: '12345678',
            profile: {
                name: 'Test Tour Guide 1',
                email: 'tourguide1@tourguide.com',
                contact: '12345678',
                profpicURl: getRandomProfpicURL(),
                tagline: 'Tour Guide 1 Tagline',
                description: 'I have a tour guide license',
                location: 'Jakarta',
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
                profpicURl: getRandomProfpicURL(),
                tagline: 'Tour Guide 2 Tagline',
                description: 'I have a tour guide license',
                location: 'Jakarta',
                price: 50,
                availability: {
                    start: new Date('March 14, 2016 00:00:00'),
                    end: new Date('March 31, 2016 23:59:59')
                },
                type: 'tourguide'
            }
        });
    }

    if (Locations.find().count() === 0) {
        Locations.insert({
            name: 'Jakarta',
            imgURL: 'images/locations/jakarta.jpg',
            tourguides: [testTourguideID, testTourguideID2]
        });

        Locations.insert({
            name: 'Bali',
            imgURL: 'images/locations/bali.jpg',
            tourguides: [testTourguideID, testTourguideID]
        });

        Locations.insert({
            name: 'India',
            imgURL: 'images/locations/india.jpg',
            tourguides: [testTourguideID, testTourguideID]
        });

        Locations.insert({
            name: 'Singapore',
            imgURL: 'images/locations/singapore.jpg',
            tourguides: [testTourguideID, testTourguideID, testTourguideID]
        });

        Locations.insert({
            name: 'Malaysia',
            imgURL: 'images/locations/malaysia.jpeg',
            tourguides: [testTourguideID, testTourguideID, testTourguideID, testTourguideID]
        });
    }


    if (Bookings.find().count() === 0) {
        Bookings.insert({
            participants: {
                tour_guide: testTourguideID,
                tourist: testTouristID
            },
            dates: {
                date1: 3,
                date2: 4
            },
            totalCost: 1000,
            accepted: false
        });
    }
});