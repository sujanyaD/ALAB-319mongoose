const User = require('../models/User');

module.exports = {
  createUser,
};

async function createUser(req, res) {
  try {
    const user = await User.create(req.body);

    res.status(200).json(user);
  } catch (err) {
    res.status(400).json('No Beuno:(');
  }
}
//get gradesby id
async function getGradesByID(req,res){
  try{
    const user=await User.findById(req.params.id);
    res.status(200).json(user);
  }catch(err){
    res.status(400).send(err);
  }
    }
    async function getGrades(req,res){
      try{
        const user=await User.find({});
        res.status(200).json(user);
      }catch(err){
        res.status(400).send(err);
      }
    }
  //update a single user by ID
  async function updateUser(req,res){
    try{
const  updatedUser=await User.findByIdAndUpdae(req.params.id,req.body,{
  new:true,
});
  res.status(200).json(updatedUser);
}
catch(err){
  res.status(400).send(err);
}
  }