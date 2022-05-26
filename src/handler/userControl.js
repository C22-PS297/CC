import { 
    collection,
    query,
    doc,
    where,
    getDoc,
    addDoc,
    deleteDoc,
    updateDoc,
} from 'firebase/firestore';
import BCrypt from 'bcrypt';
import db from '../database/db.js';
import User from '../model/user.js';

export async function addUser (request, response) {
    const {
        name,
        pass,
        email,
        phone
    } = request.body;
    
    if (!name || !pass || !email || !phone) {
        response.status(417).json({
            status: 'Fail',
            message: 'Personal data cannot be empty'
        });
        return;
    }
    const user = {
        name: name,
        pass: pass,
        email: email,
        phone: phone
    }
    const userCol = collection (db, 'users');

    await addDoc (userCol, user).then (() => {
        response.status(201).json({
            status: 'Success',
            message: 'Data successfully added',
            data: user
        })
        return;
    }).catch(err => {
        response.status(500).json({
            status: 'Fail',
            message: 'Try Again'
        })
    })
    return;

}