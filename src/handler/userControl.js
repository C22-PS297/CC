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
import { async } from '@firebase/util';
import user from '../model/user.js';

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
            message: "Not available"
        })
    })
    return;

};

export async function getAllUser (request, response) {
    try {
        const userCol = collection(db, 'users');
        const userSnap = await getDocs (userCol);
        const users = userSnap.docs.map(user => user.data());
        const id = userSnap.docs.map(user => user.id);

        response.status(200).json({
            status: "Success",
            message: "Data successfully obtained",
            //how to display id in data
            data: users
        });
        return;
    }
    catch (err) {
        response.status(500).json({
            status: "Fail",
            message: "Not available"
        });
        return;
    }
};

export async function getUserById (request, response) {
    const id = request.params.id;
    const idRef = doc(db, 'users', id);
    await getDoc(idRef).then(userSnap => {
        if (!userSnap.exists()) {
            response.status(404).json({
                status: "Fail",
                message: "User not found"
            });
            return;
        }

        const user = {
            id: userSnap.id,
            ...userSnap.data()
        }

        response.status(200).json({
            status: "Success",
            message: "User successfully obtained",
            data: user
        })
        return;
    }).catch(err => {
        response.status(500).json({
            status: "Fail",
            message: "Not available"
        })
        return;
    });
};

export async function removeUser (request, response){
    const id = request.params.id;
    const idRef = doc(db, 'users', id);
    
    await deleteDoc(idRef).then(() => {
        response.status(200).json({
            status: 'Success',
            message: 'User deleted successfully'
        });
        return;
    }).catch(err => {
        response.status(500).json({
            status: 'Fail',
            message: "Not available"
        });
        return;
    });
}

export async function updateUser (request, response){
    const id = request.params.id;
    const idRef = doc(db, 'users', id);
    const {
        name,
        pass,
        email,
        phone
    } = request.body;

    await getDoc(idRef).then(async userSnap => {
        if (!userSnap.exists()) {
            response.status(404).json({
                status: 'Fail',
                message: 'User not found'
            });
            return;
        }

        const user = {
            id: userSnap.id,
            ...userSnap.data()
        }

        if (name) {
            user.name = name;
        }

        if (pass) {
            user.pass = BCrypt.hashSync(pass, 10);
        }

        if (email) {
            user.email = email;
        }

        if (phone) {
            user.phone = phone;
        }

        await updateDoc(idRef, {...user}).then(() => {
            response.status(200).json({
                status: 'Success',
                message: 'User updated successfully'
            });
            return;
        }).catch(err => {
            response.status(500).json({
                status: 'Fail',
                message: "Not available"
            });
            return;
        })
        return;

    }).catch(err => {
        response.status(500).json({
            status: 'Fail',
            message: "Not available"
        });
        return;
    });
}