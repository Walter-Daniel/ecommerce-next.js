import { collection, doc, writeBatch, query, where, getDocs } from "firebase/firestore";
import { db } from "@/app/firebase";
import products from "./data.json";

const addMultipleProducts = async () => {
    try {
        const batch = writeBatch(db);
        products.forEach(product => {
            const productData = {
                ...product,
            };
            const docRef = doc(collection(db, 'products'));
            batch.set(docRef, productData);
        });
        await batch.commit();
    } catch (error) {
        throw new Error("Error adding multiple products: " + error.message);
    }
};

const filterByGenre = async (filter) => {
    try {
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
    } catch (error) {
        throw new Error("Error filtering products by genre: " + error.message);
    }
};

const filterByCategory = async (filter) => {
    try {
        const q = query(collection(db, "products"), where("category", "==", filter));
        const productCollectionSnapshot = await getDocs(q);
        const products = productCollectionSnapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
        }));
        return products;
    } catch (error) {
        throw new Error("Error filtering products by category: " + error.message);
    }
};

const filterByOffers = async () => {
    try {
        const q = query(collection(db, "products"), where("hot-offer", "==", true));
        const productCollectionSnapshot = await getDocs(q);
        const products = productCollectionSnapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
        }));
        return products;
    } catch (error) {
        throw new Error("Error filtering products by offers: " + error.message);
    }
};

const searchProduct = async (word) => {
    try {
        const q = query(collection(db, "products"));
        const productCollectionSnapshot = await getDocs(q);
        const products = productCollectionSnapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
        }));
        return products;
    } catch (error) {
        throw new Error("Error searching for products: " + error.message);
    }
};

export default { addMultipleProducts, filterByCategory, filterByOffers, filterByGenre, searchProduct };
