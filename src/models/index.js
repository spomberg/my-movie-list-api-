module.exports.Token = require('./token.model');
module.exports.User = require('./user.model');
module.exports.List = require('./list.model');

const path = require('path');
const { Seeder } = require('mongo-seeding');

const config = {
  database: {
    name: 'my-movie-list',
  },
  dropDatabase: true,
};
const seeder = new Seeder(config);
const collections = seeder.readCollectionsFromPath(path.resolve('./example/data'), {
  transformers: [Seeder.Transformers.replaceDocumentIdWithUnderscoreId],
});

seeder
  .import(collections)
  .then(() => {
    console.log('Success');
  })
  .catch((err) => {
    console.log('Error', err);
  });
