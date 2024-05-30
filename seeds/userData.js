const { User } = require("../models")

const userData = 
[
    {
        username: "poncho",
        password: "$2b$10$6SI8DfMr3Cu2CNS3R9GroO45jWzGEnaL32a2FLBnAqs0FnvoopxLy"
    },
    {
        username: "manuel",
        password: "$2b$10$6SI8DfMr3Cu2CNS3R9GroO45jWzGEnaL32a2FLBnAqs0FnvoopxLy"
    },
    {
        username: "malid",
        password: "$2b$10$6SI8DfMr3Cu2CNS3R9GroO45jWzGEnaL32a2FLBnAqs0FnvoopxLy"
    },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
