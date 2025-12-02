// app/tabs/MyPage.tsx (수정된 최종 코드)

import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
// ⭐️ 1. 스타일 파일 import 추가 (오류 해결)
import styles from "./MyPageStyles";
// ⭐️ 2. Store 함수 import
import { mockProfileData } from "../../mock/mockData";
import { getProfileImageUri, subscribe } from "../../utils/ProfileStore";

// ⭐️ InfoRow 컴포넌트 정의
const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <View style={styles.infoRow}>
    <Text style={styles.infoLabel}>{label}</Text>
    <Text style={styles.infoValue}>{value}</Text>
  </View>
);

// ⭐️ GoalInfo 컴포넌트 정의
const GoalInfo = ({
  label,
  height,
  weight,
  isTarget,
}: {
  label: string;
  height: string;
  weight: string;
  isTarget?: boolean;
}) => (
  <View style={styles.goalInfoContainer}>
    <Text style={styles.goalInfoLabel}>{label}</Text>
    <Text style={styles.goalInfoHeight}>{height}</Text>
    <Text style={[styles.goalInfoWeight, isTarget && styles.targetColor]}>
      {weight}
    </Text>
  </View>
);

const MyPageScreen: React.FC = () => {
  const router = useRouter();
  const userData: any = mockProfileData;

  // 1. 초기 상태를 Store에서 가져옵니다.
  const [displayedImageUri, setDisplayedImageUri] = useState<string | null>(
    getProfileImageUri()
  );

  // 2. 컴포넌트 마운트 시 Store 구독
  useEffect(() => {
    const unsubscribe = subscribe(() => {
      setDisplayedImageUri(getProfileImageUri());
    });
    return () => unsubscribe();
  }, []);

  return (
    <SafeAreaView style={styles.appContainer}>
      <StatusBar style="auto" />
      {/* ... (JSX 본문) ... */}
      <View style={styles.header}>
        <Text style={styles.appName}>어플 이름</Text>
      </View>

      <ScrollView contentContainerStyle={styles.contentPadding}>
        <Text style={styles.title}>마이페이지</Text>

        {/* 프로필 섹션 */}
        <View style={styles.profileSection}>
          <View style={styles.profileImageContainer}>
            {displayedImageUri ? (
              <Image
                source={{ uri: displayedImageUri }}
                style={styles.profileImage}
              />
            ) : (
              <View style={styles.profileImage}>
                <Text style={styles.defaultImageText}>👤</Text>
              </View>
            )}
          </View>

          <Text style={styles.nameText}>{userData.name}</Text>
          <TouchableOpacity onPress={() => router.push("/MyPageEdit")}>
            <Text style={styles.editButtonText}>프로필 수정</Text>
          </TouchableOpacity>
        </View>

        {/* 상세 정보 섹션 */}
        <View style={styles.infoSection}>
          <InfoRow label="아이디" value={userData.id} />
          <InfoRow label="이메일 주소" value={userData.email} />
          <InfoRow label="휴대폰 번호" value={userData.phone} />
        </View>

        {/* 체중 및 목표 섹션 */}
        <View style={styles.goalSection}>
          <GoalInfo
            label="현재 체중"
            height={userData.currentHeight}
            weight={userData.currentWeight}
          />
          <View style={styles.separator} />
          <GoalInfo
            label="목표 체중"
            height={userData.currentHeight}
            weight={userData.targetWeight}
            isTarget={true}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyPageScreen;
