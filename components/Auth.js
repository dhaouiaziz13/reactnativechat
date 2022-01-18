import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import logo from "../assets/zee.png";
import { useNavigate } from "react-router-native";
export default function Auth() {
  const Navigate = useNavigate();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.cont}>
        <View style={styles.imagecontainer}>
          <Image source={logo} />
        </View>
        <View style={styles.inpcont}>
          <View style={styles.loginbtn}>
            <TouchableOpacity
              onPress={() => {
                Navigate("/login");
              }}
              style={styles.btn}
            >
              <Text style={styles.btntext}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Navigate("/signup");
              }}
              style={styles.btn}
            >
              <Text style={styles.btntext}>SIGNUP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  cont: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "black",
  },
  inpcont: {
    position: "relative",
    top: 50,
  },
  input: {
    margin: 10,
    borderWidth: 3,
    borderRadius: 5,
    padding: 7,
    minHeight: 55,
    borderColor: "#753188",
  },
  btn: {
    backgroundColor: "#753188",
    padding: 15,
    margin: "3%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  btntext: {
    fontFamily: "Dongle",
    fontSize: 25,
    color: "white",
  },
  loginbtn: {
    width: "70%",
    display: "flex",
    alignSelf: "center",
    marginTop: 20,
  },
  imagecontainer: {
    maxHeight: 80,

    alignSelf: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
