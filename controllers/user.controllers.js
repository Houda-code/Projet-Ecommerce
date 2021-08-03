const User = require("../models/user.models");

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json({ users: users });
  } catch (err) {
    return res.status(500).json({ err_message: err });
  }
};


    

module.exports.getUsers = getUsers;
