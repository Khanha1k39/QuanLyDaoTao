import { useEffect, useState } from "react";
import RNPickerSelect from "react-native-picker-select";
// import { Divider } from "@rneui/themed";

import {
  Button,
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
const Input = ({ textInputConfig }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholderTextColor={"#bbb"}
        {...textInputConfig}
        style={styles.input}
      ></TextInput>
    </View>
  );
};
const InputPassword = ({ textInputConfig }) => {
  console.log(textInputConfig);
  return (
    <View style={styles.inputContainer}>
      <TextInput
        autoFocus={textInputConfig.autoFocus}
        placeholderTextColor={"#bbb"}
        {...textInputConfig}
        style={styles.input}
      ></TextInput>
      {/* <MaterialCommunityIcons
        name={showPassword ? "eye-off" : "eye"}
        size={24}
        color="#aaa"
        style={styles.icon}
        onPress={toggleShowPassword}
      /> */}
      <EyeOutlined />
    </View>
  );
};

const InputRow = ({ textInputConfig }) => {
  console.log(textInputConfig);

  return (
    <View style={{ ...styles.inputContainer, flex: 1 }}>
      <TextInput
        placeholderTextColor={"#bbb"}
        {...textInputConfig}
        style={styles.input}
      ></TextInput>
    </View>
  );
};
const Item = ({ title, onPress }) => (
  <Pressable onPress={onPress}>
    <View style={{ ...styles.item, padding: 10 }}>
      <Text style={{ ...styles.title, color: "rgb(170, 29, 43)" }}>
        {title}
      </Text>
    </View>
  </Pressable>
);
const ErrorElement = ({ item }) => {
  <Flex>
    <Text style={{ color: "#fff" }}>- </Text>
    <Text style={{ color: "rgb(255, 0, 0)" }}> {item}</Text>
  </Flex>;
};
export default function App() {
  const [errors, setErrors] = useState([]);
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [role, setRole] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const submitHandler = () => {
    setErrors([]);
    const firstNameIsValid = firstName.length !== 0;
    if (!firstNameIsValid) {
      setErrors((pre) => [...pre, "Trường Tên không được để trống"]);
    }
    const lastNameIsValid = lastName.length !== 0;
    if (!lastNameIsValid) {
      setErrors((pre) => [...pre, "Trường Họ không được để trống"]);
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailIsValid = regexEmail.test(email);
    if (!emailIsValid) {
      setErrors((pre) => [...pre, "Trường Email không đúng định dạng"]);
    }
    const regexPassword = /^[A-Za-z0-9]{6,10}$/;

    const passwordIsValid = regexPassword.test(password);
    if (!passwordIsValid) {
      setErrors((pre) => [...pre, "Trường Mật khẩu phải chứa 6 đến 10 ký tự"]);
    }
  };

  const DATA = [
    {
      id: "1",
      title: "Giảng viên",
      role: "lecturer",
    },
    {
      id: "2",
      title: "Học sinh",
      role: "student",
    },
  ];
  const handleFirstNameChange = (value) => {
    setFirstName(value);
  };

  const handleLastNameChange = (value) => {
    setLastName(value);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  return (
    <View
      style={{
        backgroundColor: "rgb(170, 29, 43)",
        flex: 1,
        gap: 20,
        paddingHorizontal: 40,
      }}
    >
      <View style={{ alignItems: "center", margin: 10 }}>
        <Text style={{ fontSize: 80, fontWeight: "700", color: "#FFF" }}>
          HUST
        </Text>
      </View>
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Text style={{ fontSize: 30, fontWeight: "500", color: "#FFF" }}>
          Welcome to AIIHust
        </Text>
      </View>

      <View
        style={{
          gap: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <InputRow
          textInputConfig={{
            placeholder: "Họ",
            value: { firstName },
            onChangeText: handleLastNameChange,
            autoFocus: true,
          }}
        ></InputRow>
        <InputRow
          textInputConfig={{
            placeholder: "Tên",
            onChangeText: handleFirstNameChange,
          }}
        >
          {" "}
        </InputRow>
      </View>
      <Input
        textInputConfig={{
          placeholder: "Email",
          onChangeText: handleEmailChange,
        }}
      ></Input>
      <Input
        textInputConfig={{
          placeholder: "Password",
          onChangeText: handlePasswordChange,
          secureTextEntry: true,
        }}
      ></Input>

      <View>
        <Pressable
          style={{ height: "100px" }}
          onPress={() => {
            setShow(!show);
          }}
        >
          {role ? (
            <Text style={{ ...styles.inputContainer, color: "#fff" }}>
              {role}
            </Text>
          ) : (
            <Text style={{ ...styles.inputContainer, color: "#bbb" }}>
              Role
            </Text>
          )}
        </Pressable>
        <View style={{ position: "relative" }}>
          {show && (
            <FlatList
              ItemSeparatorComponent={
                <View style={{ alignItems: "center" }}>
                  <Text
                    style={{
                      height: 1,
                      width: "98%",
                      backgroundColor: "rgb(170, 29, 43)",
                    }}
                  ></Text>
                </View>
              }
              data={DATA}
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                backgroundColor: "#fff",
                width: "100%",
                zIndex: 1,
              }}
              renderItem={({ item }) => (
                <Item
                  title={item.title}
                  onPress={() => {
                    setRole(item.title);
                    setShow(false);
                  }}
                />
              )}
              keyExtractor={(item) => item.id}
            />
          )}
        </View>
      </View>

      <TouchableOpacity onPress={submitHandler}>
        <View
          style={{
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 15,
            width: 100,
            padding: 5,
            margin: "auto",
          }}
        >
          <Text style={{ color: "rgb(170, 29, 43)", padding: 5 }}>Sign up</Text>
        </View>
      </TouchableOpacity>

      <SafeAreaView style={styles.container}>
        <FlatList
          data={errors}
          renderItem={({ item }) => (
            <Text style={{ color: "rgb(255, 0, 0)" }}> {item}</Text>
          )}
          keyExtractor={(item) => item}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    color: "#ffffff",
    borderColor: "#ffffff",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  input: {
    color: "#fff",
  },
});
