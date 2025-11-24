import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./SignupStyles";

// 회원가입 페이지 컴포넌트
const SignupScreen: React.FC = () => {
  // 실시간 시계 로직 (UI 통일성을 위해 Login 화면과 동일 적용)
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}`);
    };

    updateTime();
    const timerId = setInterval(updateTime, 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    // SafeAreaView -> 노치 디자인 영역 피함
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.statusBarContainer}>
        <StatusBar style="auto" />
        <Text style={styles.time}>{currentTime}</Text>

        <View style={styles.statusIcons}>
          <Text style={styles.iconText}>📶</Text>
          <Text style={styles.iconText}>🔋</Text>
        </View>
      </View>

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

        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>회원가입</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footerNav}></View>
    </SafeAreaView>
  );
};

export default SignupScreen;
