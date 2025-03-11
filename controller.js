import mongoose from 'mongoose';
await mongoose.connect("mongodb://127.0.0.1:27017/StudentDatabase", {
    useNewUrlParser: true, useUnifiedTopology: true
});

const Student = mongoose.model('Student', {
    stdnum: Number,
    fname: String,
    lname: String,
    age: Number
});

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
    res.send(await Student.save({ fname: req.query.fname }));

    const newStudent = new Student({
        stdnum: "1234213",
        fname: "Juan",
        lname: "dela Cruz",
        age: 20
    });
}

const updateStudent = async (req, res) => {
    res.send(await Student.updateOne(
        { fname: "Mary Jane" },
        { $set: { lname: "Parker" } }
    ))
}

const removeUser = async (req, res) => {
    res.send(await Student.deleteOne({ stdnum: "8051495845" }));
}

const removeAllUser = async (req, res) => {
    await Student.deleteMany({});
}


export { homepage, searchUser, searchMembers, saveStudent, updateStudent, removeUser, removeAllUser }