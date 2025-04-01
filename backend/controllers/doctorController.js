import Doctor from "../models/Doctor.js";



const changeAvailablity = async(req, res) =>{
    try {
        const {docId} = req.body

        const docData = await Doctor.findById(docId)
        await Doctor.findByIdAndUpdate(docId, {available: !docData.available})
        res.json({success: true, message: 'Статусът е обновен'})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
        
    }
}

export {changeAvailablity}