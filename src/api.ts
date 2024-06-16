import { LoginInput, RegisterInput, User } from "./type";
import axios from "axios";
import { app } from "./firebaseConfig";
import {
  getAuth,
  signInWithEmailAndPassword,
  getIdToken,
  updateProfile,
  createUserWithEmailAndPassword,
} from "firebase/auth";
const auth = getAuth(app);
const JSONBINAPI = "https://api.jsonbin.io/v3/b/666826f7e41b4d34e401b7da";

export async function registerUser({
  userName,
  email,
  password,
}: RegisterInput): Promise<any> {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user: any = userCredential.user;
    await updateProfile(user, {
      displayName: userName,
    });

    return "success";
  } catch (error: any) {
    console.error(error);
    return error;
  }
}

export async function login({ email, password }: LoginInput): Promise<string> {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const userToken = await getIdToken(userCredential.user);

    return userToken;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 400) {
        return "error";
      }
      return error.response?.data?.message || "error";
    }
    return "error";
  }
}

export function decodeJwt(token: string) {
  const base64 = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
  const decodedPayload = decodeURIComponent(escape(atob(base64)));
  return JSON.parse(decodedPayload);
}

export async function getTextData() {
  try {
    const respone = await axios.get(`${JSONBINAPI}`);
    const randomData =
      respone.data.record[
        Math.floor(Math.random() * respone.data.record.length)
      ].content;
    return randomData;
  } catch (error) {
    console.debug(error);
  }
}
