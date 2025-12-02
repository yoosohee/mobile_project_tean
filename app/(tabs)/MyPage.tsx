import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { mockProfileData } from "../../mock/mockData";
import styles from "./MyPageStyles";

// navigation 타입 오류 해결을 위해 React.FC<any>로 설정
const MyPageScreen: React.FC<any> = ({ navigation }) => {
  // 상태 관리에서 가져올 데이터 (Mock 데이터 사용)
  const userData: any = mockProfileData;

  return (
    <SafeAreaView style={styles.appContainer}>
      <StatusBar style="auto" />

      <View style={styles.header}>
        <Text style={styles.appName}>어플 이름</Text>
      </View>

      <ScrollView contentContainerStyle={styles.contentPadding}>
        <Text style={styles.title}>마이페이지</Text>

        {/* 프로필 섹션 */}
        <View style={styles.profileSection}>
          <View style={styles.profileImage} />
          <Text style={styles.nameText}>{userData.name}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("MyPageEdit")} // 수정 페이지로 이동
          >
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

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <View style={styles.infoRow}>
    <Text style={styles.infoLabel}>{label}</Text>
    <Text style={styles.infoValue}>{value}</Text>
  </View>
);

// 체중 정보 컴포넌트
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

export default MyPageScreen;
