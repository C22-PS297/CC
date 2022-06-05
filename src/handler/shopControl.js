import { async } from "@firebase/util";
import { 
    addDoc, 
    collection, 
    getDocs, 
    getDoc,
    doc,
} from "firebase/firestore";
import db from "../database/db.js";
import shop from "../model/shop.js";
import user from "../model/user.js";

export async function addShop (request, response) {
    const {
        name, 
        desctiption,
        longitude, 
        latitude
    } = request.body;

    const shopCol = collection (db, 'shop');

    if (!name || !desctiption || !longitude || !latitude) {
        response.status(417).json({
            status: 'Fail',
            message: 'Shop data cannot be empty'
        });
        return;
    }

    const shop = {
        name : name,
        desctiption : desctiption,
        longitude : longitude,
        latitude : latitude
    }

    await addDoc (shopCol, shop).then(() => {
        response.status(201).json({
            status: 'Success',
            message: 'Shop successfully added',
            data: shop
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

export async function getAllShop (request, response) {
    try {
        const shopCol = collection(db, 'shop');
        const shopSnap = await getDocs (shopCol);
        const shops = shopSnap.docs.map(shop => shop.data());

        response.status(200).json({
            status: "Success",
            message: "Data successfully obtained",
            data : shops
        });
        return;
    } catch (err) {
        response.status(500).json({
            status: "Fail",
            message: "Not available"
        });
        return;
    }
};

export async function getShopById (request, response) {
    const id = request.params.id;
    const idRef = doc(db, 'shop', id);
    await getDoc(idRef).then(userSnap => {
        if (!userSnap.exists()) {
            response.status(404).json({
                status: "Fail",
                message: "User not found"
            });
            return;
        }

        const shop = {
            id: userSnap.id,
            ...userSnap.data()
        }

        response.status(200).json({
            status: "Success",
            message: "User successfully obtained",
            data: shop
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