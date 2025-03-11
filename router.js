import { homepage, searchUser, searchMembers, saveStudent, updateStudent, removeUser, removeAllUser } from './controller.js';

const router = (app) => {
    app.get('/', homepage);
    app.get('/user', searchUser);
    app.get('/members', searchMembers);
    app.post('/save-student', saveStudent);
    app.post('/update', updateStudent);
    app.post('/remove-user', removeUser);
    app.post('/remove-all-user', removeAllUser);
}

export default router;