import admin, { ServiceAccount } from "firebase-admin";
import { getApps, getApp, initializeApp, App } from "firebase-admin/app";

// Ensure Firebase Admin is initialized only once
let firebaseAdminApp: App;

if (!getApps().length) {
  firebaseAdminApp = initializeApp({
    credential: admin.credential.cert(
      JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT as string) as ServiceAccount
    ),
  });
} else {
  firebaseAdminApp = getApp();
}

export const auth = admin.auth(firebaseAdminApp);
export default firebaseAdminApp;
