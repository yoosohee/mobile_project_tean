import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import styles from "./MyPageEditStyles";

import { mockProfileData } from "../../mock/mockData";

const MyPageEditScreen: React.FC<any> = ({ navigation }) => {
  // 상태 관리에서 초기 데ㅣ터 가져옴
  const initialData = mockProfileData;
  const [currentWeight, setCurrentWeight] = useState(
    initialData.currentWeight.replace("kg", "")
  );
  const [targetWeight, setTargetWeight] = useState(
    initialData.targetWeight.replace("kg", "")
  );

  const handleUpdate = () => {
    if (!currentWeight || !targetWeight) {
      alert("체중 정보를 모두 입력해주세요.");
      return;
    }

    // API 2 (개인정보 저장) 호출 로직 구현 예정
    alert(
      `체중 정보 수정 요청: 현재 ${currentWeight}kg, 목표 ${targetWeight}kg`
    );
    // navigation.goBack(); // 수정 완료 후 이전 페이지로 돌아가기
  };

  return (
    <SafeAreaView style={styles.appContainer}>
      <StatusBar style="auto" />

      {/* ⚠️ 상단 Back 버튼 포함 헤더 (공통 컴포넌트화 필요) */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.appName}>프로필 수정</Text>
        <View style={styles.notificationIcon} />
      </View>

      <ScrollView contentContainerStyle={styles.contentPadding}>
        <Text style={styles.title}>프로필 수정</Text>

        {/* 프로필 이미지 섹션 */}
        <View style={styles.profileSection}>
          <View style={styles.profileImage} />
          <Text style={styles.nameText}>{initialData.name}</Text>
        </View>

        {/* 상세 정보 (수정 불가 필드) */}
        <View style={styles.infoSection}>
          <InputDisplay label="아이디" value={initialData.id} />
          <InputDisplay label="이메일 주소" value={initialData.email} />
          <InputDisplay label="휴대폰 번호" value={initialData.phone} />
        </View>

        {/* 체중 입력 폼 */}
        <View style={styles.weightInputContainer}>
          <WeightInput
            label="현재 체중"
            value={currentWeight}
            setValue={setCurrentWeight}
            height={initialData.currentHeight}
          />
          <WeightInput
            label="목표 체중"
            value={targetWeight}
            setValue={setTargetWeight}
            height={initialData.currentHeight}
            isTarget={true}
          />
        </View>

        <TouchableOpacity style={styles.primaryButton} onPress={handleUpdate}>
          <Text style={styles.buttonText}>수정 완료</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

// 재사용 컴포넌트 정의 (InputDisplay)
const InputDisplay = ({ label, value }: { label: string; value: string }) => (
  <View style={styles.inputDisplayRow}>
    <Text style={styles.infoLabel}>{label}</Text>
    <Text style={styles.infoValue}>{value}</Text>
  </View>
);

// 재사용 컴포넌트 정의 (WeightInput)
const WeightInput = ({
  label,
  value,
  setValue,
  height,
  isTarget,
}: {
  label: string;
  value: string;
  setValue: (text: string) => void;
  height: string;
  isTarget?: boolean;
}) => (
  <View style={styles.weightInput}>
    <Text style={styles.infoLabel}>{label}</Text>
    <Text style={styles.goalInfoHeight}>{height}</Text>
    <TextInput
      style={[styles.textInput, isTarget && styles.targetBorder]}
      keyboardType="numeric"
      value={value}
      onChangeText={setValue}
    />
  </View>
);

export default MyPageEditScreen;
