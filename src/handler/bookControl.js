import { 
    addDoc, 
    collection, 
    getDocs
} from "firebase/firestore";
import { async } from "@firebase/util";
import db from "../database/db.js";
import book from "../model/book.js";
import user from "../model/user.js";

export async function addBook (request, response) {
    const {
        image, 
        name, 
        category, 
        weight, 
        price
    } = request.body;

    const bookCol = collection(db, 'books');
    
    const userCol = collection(db, 'users');
    const userSnap = await getDoc (userCol);
    const user = userSnap.docs.map(user => user.data());
    const Id = user.docs.map(user => user.id);

    if (!image || !latitude, !longitude) {
        response.status(417).json({
            status: 'Fail',
            message: 'Enter your book data'
        });
        return;
    }

    const book = {
        image : image, 
        name : name, 
        category : category,
        weight : weight,
        price : price,
    }

    await addDoc (bookCol, book).then(() => {
        response.status(201).json({
            status: 'Success',
            message: 'Book successfully added',
            data: book
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

export async function getAllBook (request, response) {
    try {
        const bookCol = collection(db, 'books');
        const bookSnap = await getDocs (bookCol);
        const books = bookSnap.docs.map(book => book.data());
        
        const userCol = collection(db, 'users');
        const userSnap = await getDocs (userCol);
        const users = userSnap.docs.map(user => user.data());
        const userId = userSnap.docs.map(user => user.id);

        response.status(200).json({
            status: "Success",
            message: "Book successfully obtained",
            //how to display id in data
            data: books
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
}