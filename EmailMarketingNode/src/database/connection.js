let mongoose = require('mongoose');

mongoose.connect(
    'mongodb://localhost:27017/email_marketing', {
        useMongoClient: true,
        function (err) {
            if(err){
                console.log('Mogoose Error => ', err);
            }
            console.log("Mongoose Connected");
        }
    }
);

module.exports = mongoose;