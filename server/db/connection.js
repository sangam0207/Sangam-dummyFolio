const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/MernLogin')
.then(()=>{
    console.log('connection successfully');
})
.catch((error)=>{
   console.log('Connection Failed')
})