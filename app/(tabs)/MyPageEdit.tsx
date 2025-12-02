// app/tabs/MyPageEdit.tsx (수정된 최종 코드)

import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { mockProfileData } from "../../mock/mockData";
import styles from "./MyPageEditStyles";
// ⭐️ Store 함수 import (오류 해결)
import { getProfileImageUri } from "../../utils/ProfileStore";

// ⭐️ InputDisplay 컴포넌트 정의 (정의 누락 오류 해결)
const InputDisplay = ({ label, value }: { label: string; value: string }) => (
  <View style={styles.inputDisplayRow}>
    <Text style={styles.infoLabel}>{label}</Text>
    <Text style={styles.infoValue}>{value}</Text>
  </View>
);

// ⭐️ WeightInput 컴포넌트 정의 (정의 누락 오류 해결)
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

const MyPageEditScreen: React.FC = () => {
  const router = useRouter();

  const initialData = mockProfileData;
  const [currentWeight, setCurrentWeight] = useState(
    initialData.currentWeight.replace("kg", "")
  );
  const [targetWeight, setTargetWeight] = useState(
    initialData.targetWeight.replace("kg", "")
  );
  // ⭐️ 초기 상태를 Store에서 가져옴 (getProfileImageUri 오류 해결)
  const [profileImageUri, setProfileImageUri] = useState<string | null>(
    getProfileImageUri()
  );

  const launchImagePicker = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      Alert.alert("권한 오류", "사진첩 접근 권한이 필요합니다.");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!pickerResult.canceled) {
      setProfileImageUri(pickerResult.assets[0].uri);
    }
  };

  const pickImage = () => {
    Alert.alert(
      "프로필 사진 변경",
      "사진을 어떻게 설정하시겠습니까?",
      [
        { text: "취소", style: "cancel" },
        { text: "갤러리에서 선택", onPress: launchImagePicker },
        { text: "기본 이미지로 변경", onPress: () => setProfileImageUri(null) },
      ],
      { cancelable: true }
    );
  };

  const handleUpdate = () => {
    if (!currentWeight || !targetWeight) {
      Alert.alert("입력 오류", "체중 정보를 모두 입력해주세요.");
      return;
    }

    // ⭐️ Global Store 업데이트 (MyPage에 변경사항 즉시 반영)
    setProfileImageUri(profileImageUri);

    Alert.alert("수정 완료", "프로필 정보가 성공적으로 저장되었습니다.");

    router.push("/MyPage"); // MyPage로 이동
  };

  return (
    <SafeAreaView style={styles.appContainer}>
      <StatusBar style="auto" />

      {/* 상단 Back 버튼 포함 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.appName}>프로필 수정</Text>
        <View style={styles.notificationIcon} />
      </View>

      <ScrollView contentContainerStyle={styles.contentPadding}>
        <Text style={styles.title}>프로필 수정</Text>

        {/* 프로필 이미지 섹션 (터치하여 사진 변경) */}
        <View style={styles.profileSection}>
          <TouchableOpacity
            onPress={pickImage}
            style={styles.profileImageContainer}
          >
            {profileImageUri ? (
              <Image
                source={{ uri: profileImageUri }}
                style={styles.profileImage}
              />
            ) : (
              <View style={styles.profileImage}>
                <Text style={styles.defaultImageText}>📸</Text>
              </View>
            )}
          </TouchableOpacity>
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

export default MyPageEditScreen;
