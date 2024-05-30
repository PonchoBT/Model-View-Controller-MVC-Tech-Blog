const { Post } = require("../models") 

const postData = [
    {
        title: "React.js",
        body: "software",
        user_id: 1
    
    },
    {
        title: "Angual.js",
        body: "software",
        user_id: 2
    },
    {
        title: "VUE.js",
        body: "Tsoftware",
        user_id: 3
    },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
