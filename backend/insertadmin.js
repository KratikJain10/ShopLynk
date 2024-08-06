const adminModel = require('./models/adminModel.js')
const bcrpty = require('bcrypt')
const mongoose = require('mongoose');
const dbConnect = async () => {
    try {
        await mongoose.connect("mongodb+srv://kratikjain1520:KDiHnW0Zhvss03jg@cluster0.mrph3wu.mongodb.net/e-commerce?retryWrites=true&w=majority&appName=Cluster0", { useNewURLParser: true })
        console.log("database connect....")
    } catch (error) {
        console.log(error.message)
    }
}
dbConnect();
const adminreg=async()=>{
  try {
    const admin=await adminModel.create({
        name:"admin1",
        email:"admin1@gmail.com",
        password:await bcrpty.hash("admin1pass",10),
        image:"",
        role:"admin"
       })
       console.log('Admin registered');
  } catch (error) {
    console.error('Error registering admin:', error);
  }
  
   

}

adminreg();