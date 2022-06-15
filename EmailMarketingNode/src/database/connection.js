let mongoose = require('mongoose');

main().catch(err => console.log(`##### Mongoose Error => ${err} ###`));

async function main() {
    await mongoose.connect('mongodb://mongo:27017/email_marketing');
}

module.exports = mongoose;