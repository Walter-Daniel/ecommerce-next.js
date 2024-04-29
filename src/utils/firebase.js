import { collection, doc, writeBatch,query, where, getDocs} from "firebase/firestore"
import { db } from "@/app/firebase"
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

const filterByGenre = async (filter) => {
    let genreFilter;
    if (filter === "men") {
      genreFilter = ["Men", "Unisex"];
    } else if (filter === "women") {
      genreFilter = ["Women", "Unisex"];
    } else {
      return [];
    }
  
    const q = query(collection(db, "products"), where("genre", "in", genreFilter));
    const productCollectionSnapshot = await getDocs(q);
    const products = productCollectionSnapshot.docs.map(doc => ({
      ...doc.data(),
      id: doc.id
    }));
    return products;
};

const filterByCategory = async (filter) => {
    const q = query(collection(db, "products"), where("category", "==", filter))
    const productCollectionSnapshot = await getDocs(q)
    const products = productCollectionSnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return products
}

const filterByOffers = async () => {
    const q = query(collection(db, "products"), where("hot-offer", "==", true))
    const productCollectionSnapshot = await getDocs(q)
    const products = productCollectionSnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return products
}

const searchProduct = async (word) => {
    const q = query(collection(db, "products"));
    const productCollectionSnapshot = await getDocs(q);
    const products = productCollectionSnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }));

    return products;
}


export default { addMultipleProducts,filterByCategory, filterByOffers, filterByGenre, searchProduct }