import { addDoc, collection } from "firebase/firestore";
import db from "../database/db.js";
import shop from "../model/shop.js";

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