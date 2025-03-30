import { db } from "../_utils/firebase";
import { collection, doc, getDoc, setDoc, updateDoc, arrayUnion, arrayRemove, } from "firebase/firestore";

export async function getItems(userId) {
  const userDoc = doc(db, "users", userId);
  const userObj = await getDoc(userDoc);
  if (!userObj.exists()) {
    await setDoc(userDoc, {
      items: []
    });
    return [];
  }
  const itemsCollection = collection(userDoc, "items");
  const d = await getDoc(userDoc);
  return d.data().items;
}

export async function addItems(userId, item) {
  // console.log(userId);
  item.category = item.category.toLowerCase();
  const docRef = await updateDoc(doc(db, "users", userId), {
    items: arrayUnion(item)
  });
}

export async function delItems(userId, item) {
  item.category = item.category.toLowerCase();
  const docRef = await updateDoc(doc(db, "users", userId), {
    items: arrayRemove(item)
  });
}
