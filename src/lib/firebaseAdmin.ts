import admin from "firebase-admin";
import { getApps } from "firebase-admin/app";

// Ensure Firebase Admin SDK is initialized only once
if (!getApps().length) {
  admin.initializeApp({
    credential: admin.credential.cert(
      JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT as string)
    ),
  });
}

export const auth = admin.auth();
export default admin;
