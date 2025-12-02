import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./SignupStyles";

const SignupScreen: React.FC = () => {
  const router = useRouter();

  const handleSignup = () => {
    router.push("/(tabs)/MyPage");
  };

  return (
    <SafeAreaView style={styles.appContainer}>
      <StatusBar style="auto" />

      <View style={styles.signupContent}>
        <Text style={styles.title}>회원가입</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>성명</Text>
          <TextInput
            placeholder=""
            style={styles.textInput}
            keyboardType="default"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>사용자 ID</Text>
          <TextInput
            placeholder=""
            style={styles.textInput}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>비밀번호</Text>
          <TextInput
            placeholder=""
            style={styles.textInput}
            secureTextEntry={true}
          />
        </View>

        {/* ... 나머지 입력 필드 유지 ... */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>비밀번호 확인</Text>
          <TextInput
            placeholder=""
            style={styles.textInput}
            secureTextEntry={true}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>이메일</Text>
          <TextInput
            placeholder=""
            style={styles.textInput}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>휴대폰</Text>
          <TextInput
            placeholder=""
            style={styles.textInput}
            keyboardType="phone-pad"
          />
        </View>

        <TouchableOpacity style={styles.primaryButton} onPress={handleSignup}>
          <Text style={styles.buttonText}>회원가입</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footerNav}></View>
    </SafeAreaView>
  );
};

export default SignupScreen;
