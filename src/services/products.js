import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "../firestore";

export const getAllProducts = async () => {
    const collectionRef = collection(db, "products");
    const querySnapshot = await getDocs(collectionRef);

    const data = querySnapshot.docs.map((doc) => {
        const id = doc.id;
        const restOfData = doc.data();

        return { id, ...restOfData };
    });

    return data;
};

export const getProductById = async (id) => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
        throw new Error("Doc not found");
    }

    return { id: docSnap.id, ...docSnap.data() };
};
