const app = require('./App');
const mongoose = require('mongoose');
const dotenv = require('dotenv')

dotenv.config({path:'./Config/Config.env'});
PORT = process.env.PORT;
DB=process.env.DB_ADRESS;

app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});
mongoose.set('strictQuery', true);
mongoose.connect(DB,() => { 
    console.log(`Server with DB ${DB}`);
});



 
