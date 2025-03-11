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
}

const searchMembers = async (req, res) => {
    res.send(await Student.find({}));
}

const saveStudent = async (req, res) => {
    try {
        const newStudent = new Student({
            stdnum: req.body.stdnum,
            fname: req.body.fname,
            lname: req.body.lname,
            age: req.body.age
        }); // create new Student obj

        await newStudent.save(); // add to databas

        res.send({ inserted: true }); // send true

    } catch (err) {
        res.send({ inserted: false }); // send false if did not push through
    }

}

const updateStudent = async (req, res) => {
    res.send(await Student.updateOne(
        { fname: "Mary Jane" },
        { $set: { lname: "Parker" } }
    ))
}

const removeUser = async (req, res) => {
    const check = await Student.deleteOne({ stdnum: req.body.stdnum });

    if (check.acknowledged) {
        res.send({ deleted: true });
    } else {
        res.send({ deleted: false });
    }
}

const removeAllUser = async (req, res) => {
    await Student.deleteMany({});
}


export { homepage, searchUser, searchMembers, saveStudent, updateStudent, removeUser, removeAllUser }