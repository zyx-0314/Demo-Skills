import admin, { ServiceAccount } from "firebase-admin";
import { getApps, getApp, initializeApp, App } from "firebase-admin/app";

// Ensure Firebase Admin is initialized only once
let FirebaseAdminApp: App;

if (!getApps().length) {
  FirebaseAdminApp = initializeApp({
    credential: admin.credential.cert(
      JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT as string) as ServiceAccount
    ),
  });
} else {
  FirebaseAdminApp = getApp();
}

export const auth = admin.auth(FirebaseAdminApp);
export default FirebaseAdminApp;
