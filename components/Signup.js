import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useNavigate } from "react-router-native";
import { useState } from "react";
export default function Login() {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [username, setusername] = useState("");
  const Navigate = useNavigate();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.cont}>
        <View style={styles.imagecontainer}>
          <Text style={styles.greeting}>thanks for joining !</Text>
        </View>
        <View style={styles.inpcont}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setusername(text)}
            value={username}
            placeholder="username"
            placeholderTextColor={"white"}
          ></TextInput>
          <TextInput
            style={styles.input}
            onChangeText={(text) => {
              setemail(text);
            }}
            value={email}
            placeholder="email"
            placeholderTextColor={"white"}
          ></TextInput>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setpass(text)}
            value={pass}
            placeholder="password"
            placeholderTextColor={"white"}
          ></TextInput>

          <View style={styles.loginbtn}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btntext}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Navigate("/")}
              style={styles.cancelbtn}
            >
              <Text style={styles.btntext}>CANCEL</Text>
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
  greeting: {
    color: "#753188",
    fontFamily: "Dongle",
    fontSize: 50,
  },
  inpcont: {
    position: "relative",
    top: 50,
  },
  txt: {
    borderColor: "blue",
    borderWidth: 2,
  },
  input: {
    margin: 10,
    borderWidth: 3,
    borderRadius: 5,
    padding: 7,
    minHeight: 55,
    borderColor: "#753188",
    color: "white",
    fontFamily: "Dongle",
    fontSize: 25,
    color: "white",
  },
  btn: {
    backgroundColor: "#753188",
    padding: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  cancelbtn: {
    backgroundColor: "red",
    padding: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: "4%",
  },
  btntext: {
    fontFamily: "Dongle",
    fontSize: 25,
    color: "white",
  },
  loginbtn: {
    width: "50%",
    display: "flex",
    alignSelf: "center",
    marginTop: 20,
  },
  imagecontainer: {
    
    alignSelf: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
