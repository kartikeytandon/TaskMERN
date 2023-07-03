import Info from '../models/Info.js';

export const searchUser = async (req, res) => {
  try {
    let data = await Info.find({
      $or: [
        { fullName: { $regex: new RegExp(req.params.key, 'i') } }
      ]
    });

    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Error retrieving user data' });    
  }
};  