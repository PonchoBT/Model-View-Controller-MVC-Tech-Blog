const { Comment } = require("../models")
const commentData = 
[
    {
        body: "Cool",
        post_id: 1,
        user_id: 1
    },
    {
        body: "Happy",
        post_id: 2,
        user_id: 2
    },
    {
        body: "Woow",
        post_id: 3,
        user_id: 3
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
