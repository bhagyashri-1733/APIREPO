const mongoose = require("mongoose");

// //uri ="mongodb+srv://<username>:Shree123@thombre.kxrcq3q.mongodb.net/thombre?retryWrites=true&w=majority&appName=thombre"


// const connectDB = async () => {
//     try {
//         await mongoose.connect('', {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });

//         console.log("Database connected successfully.");
//     } catch (error) {
//         console.log(error);
//     }
// };
// 27fWKws6w4wKR3EY

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://shreee:tcIxtSUWfyh81pNq@cluster0.zufifrt.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("Database connected successfully.");
    } catch (error) {
        console.log(error);
    }
};
module.exports = connectDB;