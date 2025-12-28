import { db } from "@/config/firebase";
import { doc, getDoc } from "firebase/firestore";
export const getUsers = async ({
  id
}: {
  id: string
}) => {
  const userDocRef = doc(db, "users", id);
  const userSnap = await getDoc(userDocRef);
  return userSnap;
}