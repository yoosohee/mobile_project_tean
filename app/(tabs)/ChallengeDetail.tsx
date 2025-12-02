import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { getChallengeById } from "../../mock/mockData";
import styles from "./ChallengeStyles";

const ChallengeDetailScreen: React.FC<any> = ({ navigation, route }) => {
  // URL/Route 파라미터에서 챌린지 ID 가져오기
  const challengeId = route?.params?.id || 1;
  const challengeData = getChallengeById(challengeId);

  const handleUpload = () => {
    // FS-APP-003: 인증샷 업로드 로직 구현 예정 (이미지 파일)
    alert("사진 업로드 기능 구현 예정");
  };

  // 데이터 로딩 실패 처리 (Mock 데이터에서 찾지 못했을 경우)
  if (!challengeData) {
    return (
      <View style={styles.loadingContainer}>
        <Text>챌린지 정보를 찾을 수 없습니다.</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.appContainer}>
      {/* ⚠️ 상단 Back 버튼 포함 헤더 */}
      <View style={styles.detailHeader}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.detailNotificationIcon}>🔔</Text>
      </View>

      <ScrollView contentContainerStyle={styles.contentPadding}>
        <Text style={styles.detailTitle}>{challengeData.name}</Text>

        {/* 인증 사진 업로드 영역 */}
        <View style={styles.uploadArea}>
          <TouchableOpacity onPress={handleUpload} style={styles.uploadButton}>
            <Text style={styles.uploadButtonText}>사진 업로드</Text>
          </TouchableOpacity>
        </View>

        {/* 챌린지 상세 정보 */}
        <View style={styles.detailInfo}>
          <Text style={styles.detailLabel}>챌린지 설명</Text>
          <Text style={styles.detailText}>{challengeData.description}</Text>
        </View>
        <View style={styles.detailInfo}>
          <Text style={styles.detailLabel}>챌린지 기간</Text>
          <Text style={styles.detailText}>{challengeData.period}</Text>
        </View>
      </ScrollView>

      <View style={styles.footerAction}>
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>참여하기</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChallengeDetailScreen;
