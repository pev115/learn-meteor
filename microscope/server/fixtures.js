/*global Posts*/
if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Introducing Telescope test2',
    url: 'http://sachagreif.com/introducing-telescope/'
  });

  Posts.insert({
    title: 'Meteor',
    url: 'http://meteor.com test2'
  });

  Posts.insert({
    title: 'The Meteor Book test2',
    url: 'http://themeteorbook.com'
  });
}