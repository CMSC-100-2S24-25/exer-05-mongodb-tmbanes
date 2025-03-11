import needle from 'needle';

// ADDING 5 STUDENTS
needle.post(
    'http://localhost:3000/save-student',
    {
        stdnum: "202112345",
        fname: "Mary Jane",
        lname: "Watson",
        age: 30
    },
    (err, res) => {
        console.log(res.body);
    }
);

needle.post(
    'http://localhost:3000/save-student',
    {
        stdnum: "202012345",
        fname: "Sherlock",
        lname: "Holmes",
        age: 33
    },
    (err, res) => {
        console.log(res.body);
    }
);


needle.post(
    'http://localhost:3000/save-student',
    {
        stdnum: "202212345",
        fname: "John",
        lname: "Watson",
        age: 34
    },
    (err, res) => {
        console.log(res.body);
    }
);

needle.post(
    'http://localhost:3000/save-student',
    {
        stdnum: "202312345",
        fname: "James",
        lname: "Moriarty",
        age: 29
    },
    (err, res) => {
        console.log(res.body);
    }
);

needle.post(
    'http://localhost:3000/save-student',
    {
        stdnum: "202412345",
        fname: "Greg",
        lname: "Lestrade",
        age: 31
    },
    (err, res) => {
        console.log(res.body);
    }
);


// UPDATING LAST NAME
needle.post(
    'http://localhost:3000/update',
    { lname: "Parker" }, 
    (err, res) => {
        console.log(res.body);
    }
);

// DELETING STUDENT
needle.post(
    'http://localhost:3000/remove-user',
    { stdnum: "202312345" }, 
    (err, res) => {
        console.log(res.body);
    }
);

// DELETING ALL DATA
needle.post(
    'http://localhost:3000/remove-all-user',
    {}, 
    (err, res) => {
        console.log(res.body);
    }
);