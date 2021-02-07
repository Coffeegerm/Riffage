import { GoogleSignin } from "@react-native-community/google-signin";
import auth from "@react-native-firebase/auth";
import { ToastAndroid } from "react-native";

GoogleSignin.configure({
  webClientId:
    "826560537005-jj46tn4cbpo2dovqsaft7v0qoimnhe21.apps.googleusercontent.com",
});

export const onGoogleSignin = async () => {
  try {
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth.signInWithCredential(googleCredential);
  } catch (error) {
    console.log(error);
    ToastAndroid.showWithGravity(
      "Error signing in with Google.",
      2,
      ToastAndroid.BOTTOM
    );
  }
};
