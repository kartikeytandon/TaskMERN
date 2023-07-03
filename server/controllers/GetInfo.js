import Info from '../models/Info.js'

export const getUser = async (req, res) => {
    try {
        const { ascName, ascAge, ascPercentage } = req.query;

        const sortDirectionName = ascName === 'true' ? 1 : 0;
        const sortDirectionAge = ascAge === 'true' ? 1 : 0;
        const sortDirectionPercentage = ascPercentage === 'true' ? 1 : 0;

        if (ascName === 'true') {
            const sortedData = await Info.find().sort({ name: sortDirectionName });
            res.status(200).json(sortedData);
        } else if (ascAge === 'true') {
            const sortedData = await Info.find().sort({ age: sortDirectionAge });
            res.status(200).json(sortedData);
        } else if (ascPercentage === 'true') {
            const sortedData = await Info.find().sort({ percentage: sortDirectionPercentage });
            res.status(200).json(sortedData);
        } else {
            const users = await Info.find();
            res.status(200).json(users);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error retrieving users' });
    }
}