/*global Router,Posts*/

Router.configure({

layoutTemplate: 'layout',
loadindTemplate : 'loading',
waitOn: function() {return Meteor.subscribe('posts');}

});

Router.route('/', {name: 'postsList'});
Router.route('/posts/:_id',{
    name: 'postPage',
    data: function() {return Posts.findOne(this.params._id);}
});