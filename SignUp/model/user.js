const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/userAuthDB')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Database connection error:', err));
    
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }
});
const User = mongoose.model('User', userSchema);
module.exports = User;


