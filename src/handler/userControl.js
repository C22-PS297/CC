import { 
    collection,
    query,
    doc,
    where,
    getDoc,
    addDoc,
    deleteDoc,
    updateDoc,
    getDocs,
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

    const passHashed = BCrypt.hashSync(pass, 10);
    const userCol = collection (db, 'users');

    const emailQuery = query(userCol, where('email', '==', email));
    const emailFound = await getDocs (emailQuery);

    const phoneQuery = query(userCol, where('phone', '==', phone));
    const phoneFound = await getDocs (phoneQuery);
    
    if (!name || !pass || !email || !phone) {
        response.status(417).json({
            status: 'Fail',
            message: 'Personal data cannot be empty'
        });
        return;
    }

    if (!emailFound.empty){
        response.status(406).json({
            status: 'Fail',
            message: 'Email has been used'
        });
        return;
    }

    if (!phoneFound.empty){
        response.status(406).json({
            status: 'Fail',
            message: 'Phone number has been used'
        });
        return;
    }

    const user = {
        name: name,
        pass: passHashed,
        email: email,
        phone: phone
    }

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