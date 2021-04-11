import {
  checkMultiple,
  requestMultiple,
  PERMISSIONS,
  RESULTS,
} from "react-native-permissions";

const expectedPermissions = [
  PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
  PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
  PERMISSIONS.ANDROID.RECORD_AUDIO,
];

const requestNeededPermissions = (permissions) => {
  requestMultiple(permissions);
};

const checkForPermissions = () => {
  checkMultiple(expectedPermissions).then((statuses) => {
    let permissionsNotGranted = [];
    expectedPermissions.forEach((permission) => {
      console.log(permission);
      switch (statuses[permission]) {
        case RESULTS.UNAVAILABLE:
          console.log(
            "This feature is not available (on this device / in this context)"
          );
          break;
        case RESULTS.DENIED:
          console.log(
            "The permission has not been requested / is denied but requestable"
          );
          // if denied and can be rerequested we will add to this list
          permissionsNotGranted = [...permissionsNotGranted, permission];
          break;
        case RESULTS.LIMITED:
          console.log("The permission is limited: some actions are possible");
          break;
        case RESULTS.GRANTED:
          console.log("The permission is granted");
          break;
        case RESULTS.BLOCKED:
          console.log("The permission is denied and not requestable anymore");
          break;
      }
    });
    if (permissionsNotGranted.length > 0) {
      requestNeededPermissions(permissionsNotGranted);
    }
  });
};

export { checkForPermissions };
