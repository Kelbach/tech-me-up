const User = require("./User");
const Post = require("./Post");
const Vote = require('./Vote');
const Comment = require('./Comment');

// create associations by identifying foreign key
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

//these two below are for linking posts and users by votes
User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id'
});
  
Post.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id'
});

//these 4 associations below link the Votes through each foreign key
Vote.belongsTo(User, {
    foreignKey: 'user_id'
});
  
Vote.belongsTo(Post, {
    foreignKey: 'post_id'
});
  
User.hasMany(Vote, {
    foreignKey: 'user_id'
});
  
Post.hasMany(Vote, {
    foreignKey: 'post_id'
});

//Comment associations
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, Vote, Comment };