import { env } from "@/env";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: env.NEXT_PUBLIC_FIREBASE_apiKey,
  authDomain: env.NEXT_PUBLIC_FIREBASE_authDomain,
  projectId: env.NEXT_PUBLIC_FIREBASE_projectId,
  storageBucket: env.NEXT_PUBLIC_FIREBASE_storageBucket,
  messagingSenderId: env.NEXT_PUBLIC_FIREBASE_messagingSenderId,
  appId: env.NEXT_PUBLIC_FIREBASE_appId,
  measurementId: env.NEXT_PUBLIC_FIREBASE_measurementId,
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
