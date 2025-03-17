import admin, { ServiceAccount } from "firebase-admin";
import { getApps, getApp, initializeApp, App } from "firebase-admin/app";

// Ensure Firebase Admin is initialized only once
let FirebaseAdminApp: App;

if (!getApps().length) {
  if (!process.env.FIREBASE_SERVICE_ACCOUNT) {
    throw new Error("Missing FIREBASE_SERVICE_ACCOUNT environment variable.");
  }

  const firebaseConfig: ServiceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT as string);

  FirebaseAdminApp = initializeApp({
    credential: admin.credential.cert(firebaseConfig),
  });

  console.log("✅ Firebase Admin initialized");
} else {
  FirebaseAdminApp = getApp();
}

export const auth = admin.auth(FirebaseAdminApp);
export default FirebaseAdminApp;
