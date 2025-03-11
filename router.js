import { homepage, searchUser, searchMembers, saveStudent, updateStudent, removeUser, removeAllUser } from './controller.js';

const router = (app) => {
    app.get('/', homepage);
    app.get('/user', searchUser);
    app.get('/members', searchMembers);
    app.post('/save-student', saveStudent);
    app.post('/update', saveStudent);
    app.post('/remove-user', saveStudent);
    app.post('/remove-all-user', saveStudent);
}

export default router;