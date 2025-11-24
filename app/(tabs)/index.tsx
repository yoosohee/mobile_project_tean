import { useRouter } from "expo-router"; // Expo Router에서 useRouter 불러오기
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./LoginStyles";

// Expo Router 에서 홈 화면

const LoginNative: React.FC = () => {
  // useRouter 훅 초기화
  const router = useRouter();

  // 상태(state): 현재 시간 "HH:MM" 형식 문자열 저장
  const [currentTime, setCurrentTime] = useState("");

  // 실시간 시계 (24시간 형식)
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

  // 회원가입 페이지 이동 함수
  const navigateToSignup = () => {
    router.push("/Signup");
  };

  return (
    <View style={styles.appContainer}>
      {/* 1. 상단 상태 표시줄 (모바일 OS 상태바) */}
      <View style={styles.statusBarContainer}>
        <StatusBar style="auto" />
        <Text style={styles.time}>{currentTime}</Text>

        {/* 통신 및 배터리 아이콘 */}
        <View style={styles.statusIcons}>
          <Text style={styles.iconText}>📶</Text>
          <Text style={styles.iconText}>🔋</Text>
        </View>
      </View>

      {/* 2. 주요 콘텐츠 */}
      <View style={styles.loginContent}>
        <Text style={styles.title}>로그인</Text>

        {/* 폼 영역 */}
        <View style={styles.loginForm}>
          {/* 아이디 입력 */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputIcon}>👤</Text>
            <TextInput
              placeholder="아이디 입력"
              keyboardType="email-address"
              style={styles.textInput}
            />
          </View>

          {/* 비밀번호 입력 */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputIcon}>🔒</Text>
            <TextInput
              placeholder="비밀번호 입력"
              secureTextEntry={true} // 비밀번호 가리기
              style={styles.textInput}
            />
          </View>

          {/* 로그인 버튼 */}
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.buttonText}>로그인</Text>
          </TouchableOpacity>
        </View>

        {/* 유틸리티 링크 */}
        <View style={styles.utilityLinks}>
          <Text style={styles.linkText}>아이디 찾기</Text>
          <Text style={styles.separator}>|</Text>
          <Text style={styles.linkText}>비밀번호 찾기</Text>
        </View>

        {/* 소셜 로그인 구분선 */}
        <Text style={styles.socialSeparator}>
          ------------------ Or Sign in with ------------------
        </Text>

        {/* 소셜 로그인 아이콘 */}
        <View style={styles.socialIcons}>
          <TouchableOpacity style={styles.socialIcon} activeOpacity={0.7}>
            <Text style={styles.socialIconText}>📘</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon} activeOpacity={0.7}>
            <Text style={styles.socialIconText}>💬</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon} activeOpacity={0.7}>
            <Text style={styles.socialIconText}>📸</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 3. 하단 영역 (회원가입 버튼) */}
      <View style={styles.footerNav}>
        {/* 🌟 '회원가입하기' 버튼에 navigateToSignup 함수를 연결합니다. */}
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={navigateToSignup}
        >
          <Text style={styles.secondaryButtonText}>회원가입하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginNative;
