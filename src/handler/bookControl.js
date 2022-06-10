import { 
    addDoc, 
    collection, 
    query,
    getDocs,
    getDoc,
    updateDoc,
    doc,
    where
} from "firebase/firestore";
import { async } from "@firebase/util";
import db from "../database/db.js";
import book from "../model/book.js";
import user from "../model/user.js";

export async function addBook (request, response) {
    const {
        userid,
        image, 
        name, 
        category, 
        weight, 
        price
    } = request.body;

    const bookCol = collection(db, 'books');

    if (!image || !name || !weight || !userid) {
        response.status(417).json({
            status: 'Fail',
            message: 'Enter your book data'
        });
        return;
    }

    const book = {
        userid : userid,
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
};

export async function getBookbyuserID (request, response) {
    const id = request.params.id;
    const bookCol = collection(db, 'books');
    const bookQuery = query(bookCol, where ('userid', '==', id ));
    try {
        const bookSnap =  await getDocs (bookQuery);
        const books = bookSnap.docs.map((book) => book.data());
        response.status(201).json({
            status: 'Success',
            message: 'Book successfully obtained',
            data: books
        });
        return;
    } catch (err) {
        response.status(404).json({
            status: 'Fail',
            message: "Book not found"
        });
        return;
    }   
};

export async function updateBook (request, response) {
    const id = request.params.id;
    const idRef = doc(db, 'books', id);
    const {
        userid,
        image, 
        name, 
        category, 
        weight, 
        price
    } = request.body;


    await getDoc(idRef).then(async bookSnap => {
        if (!bookSnap.exists()) {
            response.status(404).json({
                status: 'Fail',
                message: 'User not found'
            });
            return;
        }

        const book = {
            ...bookSnap.data()
        }

        if (userid) {
            book.name = userid;
        }

        if (image) {
            book.image = image;
        }

        if (name) {
            book.name = name;
        }

        if (category) {
            book.category = category;
        }

        if (weight) {
            book.weight = weight;
        }

        if (price) {
            book.price = price;
        }

        await updateDoc(idRef, {...book}).then(() => {
            response.status(200).json({
                status: 'Success',
                message: 'Book updated successfully',
                data: book
            });
            return;
        }).catch(err => {
            response.status(500).json({
                status: 'Fail',
                message: "Book cannot update"
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