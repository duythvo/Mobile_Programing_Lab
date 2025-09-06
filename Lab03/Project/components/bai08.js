import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";

const Bai08 = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://cdn-icons-png.flaticon.com/512/65/65000.png" }}
        style={styles.logo}
      />

      <View style={styles.inputWrapper}>
        <Ionicons name="person-outline" size={20} color="#3f51b5" />
        <TextInput
          style={styles.input}
          placeholder="Please input user name"
          placeholderTextColor="#aaa"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      <View style={styles.inputWrapper}>
        <Ionicons name="lock-closed-outline" size={20} color="#3f51b5" />
        <TextInput
          style={styles.input}
          placeholder="Please input password"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <Pressable style={styles.loginBtn} onPress={() => alert("Login")}>
        <Text style={styles.loginText}>LOGIN</Text>
      </Pressable>

      <View style={styles.row}>
        <TouchableOpacity>
          <Text style={styles.linkText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.linkText}>Forgot Password</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.otherContainer}>
        <View style={styles.line} />
        <Text style={styles.otherText}>Other Login Methods</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.socialRow}>
        <TouchableOpacity
          style={[styles.socialBtn, { backgroundColor: "#4fc3f7" }]}
        >
          <Ionicons name="person-add" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.socialBtn, { backgroundColor: "#ffb74d" }]}
        >
          <MaterialCommunityIcons name="wifi" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.socialBtn, { backgroundColor: "#3b5998" }]}
        >
          <FontAwesome name="facebook" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 30,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    width: "100%",
    marginBottom: 20,
    paddingVertical: 5,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
  },
  loginBtn: {
    backgroundColor: "#3f51b5",
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 4,
    width: "100%",
    marginTop: 10,
  },
  loginText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 15,
    paddingHorizontal: 5,
  },
  linkText: {
    fontSize: 14,
    color: "black",
  },
  otherContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 25,
    width: "100%",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#3f51b5",
  },
  otherText: {
    marginHorizontal: 8,
    fontSize: 12,
    color: "black",
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "center",
  },
  socialBtn: {
    width: 50,
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 12,
  },
});

export default Bai08;
