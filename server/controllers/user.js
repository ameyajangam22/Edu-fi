const User = require('../models/User');

const getAllTeachers = async (req, res) => {
  try {
    res.status(200).json({ data: 'All users' });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getAllStudents = async (req, res) => {
  try {
    res.status(200).json({ data: 'All users' });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  getAllTeachers,
  getAllStudents,
};
