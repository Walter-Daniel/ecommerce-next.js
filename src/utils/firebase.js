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

// En tu archivo data.ts o donde tengas definida la función fetchServices
export const fetchServices = async () => {
    try {
      // Aquí deberías obtener tus servicios desde el archivo data.json o desde tu servidor
      const response = await fetch('/api/services');
      if (!response.ok) {
        throw new Error('Failed to fetch services');
      }
      const services = await response.json();
      return services;
    } catch (error) {
      console.error('Error fetching services:', error);
      throw error;
    }
  };
  

export default addMultipleProducts