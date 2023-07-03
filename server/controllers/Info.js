import Info from '../models/Info.js'

export const createUser = async (req, res) => {
    const newUser = await Info(req.body)

    try {
        const savedUser = await newUser.save()
        
        res.status(200).json(savedUser)
        console.log("Data Saved");
    } catch (err) {
        console.log(err);
    }
}