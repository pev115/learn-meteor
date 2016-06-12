/*global Router*/

Router.configure({

layoutTemplate: 'layout',
loadindTemplate : 'loading',
waitOn: function() {return Meteor.subscribe('posts');}

});

Router.route('/', {name: 'postsList'});