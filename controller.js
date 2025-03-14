import mongoose from 'mongoose';
await mongoose.connect("mongodb://127.0.0.1:27017/StudentDatabase", {
    useNewUrlParser: true, useUnifiedTopology: true
});

const Student = mongoose.model('Student', {
    stdnum: Number,
    fname: String,
    lname: String,
    age: Number
}, 'studentData');

const homepage = (req, res) => {
    res.send('Exercise #6');
}

const searchUser = async (req, res) => {
    res.send(await Student.find({ stdnum: req.query.stdnum }));
} // shows json object

const searchMembers = async (req, res) => {
    res.send(await Student.find({}));
} // shows all data in database

const saveStudent = async (req, res) => {
    try {
        const newStudent = new Student({
            stdnum: req.body.stdnum,
            fname: req.body.fname,
            lname: req.body.lname,
            age: req.body.age
        }); // create new Student obj

        await newStudent.save(); // add to database

        res.send({ inserted: true }); // send true

    } catch (err) {
        res.send({ inserted: false }); // send false if did not push through
    }

}

const updateStudent = async (req, res) => {
    await Student.updateOne(
        { fname: "Mary Jane" }, // find first name
        { $set: { lname: "Parker" } } // update last name
    );
    res.send(await Student.find({ fname: "Mary Jane"}));
}

const removeUser = async (req, res) => {
    const check = await Student.deleteOne({ stdnum: req.body.stdnum });

    if (check.acknowledged && check.deletedCount > 0) {
        res.send({ deleted: true }); //return true if user was deleted successfully
    } else {
        res.send({ deleted: false });
    }
}

const removeAllUser = async (req, res) => {
    const check = await Student.deleteMany({});
    
    if (check.acknowledged && check.deletedCount > 0) {
        res.send({ deleted: true }); //return true all data were deleted successfully
    } else {
        res.send({ deleted: false });
    }
}


export { homepage, searchUser, searchMembers, saveStudent, updateStudent, removeUser, removeAllUser }