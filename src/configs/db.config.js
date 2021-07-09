import mongoose from 'mongoose';

const connectDatabase = () => {
    const mongoUrl = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`;
    console.log(`Connecting to ${mongoUrl}`);
    mongoose.Promise = global.Promise;

    //Connecting to database
    mongoose
        .connect(mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
        .then(()=>{
            console.log('Connecting successfully');
        })
        .catch((err)=>{
            console.log(`Couldn't connect to database. Exiting now.....\n${err}`);
            process.exit();
        });
};
export default connectDatabase;