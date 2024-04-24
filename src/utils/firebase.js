import { collection, doc, writeBatch,} from "firebase/firestore"
import { firestore as db } from "@/app/firebase"
import products from "./data.json"


const addMultipleProducts = async () => {
    const batch = writeBatch(db)


    products.forEach(product => {
        const productData = {
            ...product,

        }

        const docRef = doc(collection(db, 'products'))
        batch.set(docRef, productData)
    });

    await batch.commit()
}

export default addMultipleProducts