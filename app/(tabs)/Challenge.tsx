// app/tabs/ChallengeListScreen.tsx

import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// 스타일 및 Mock 데이터 import (경로 확인)
import { mockChallenges } from "../../mock/mockData";
import styles from "./ChallengeStyles";

// navigation 타입 오류 해결 (임시)
const ChallengeListScreen: React.FC<any> = ({ navigation }) => {
  const challenges = mockChallenges;

  // --- 컴포넌트 정의: TabButton ---
  const TabButton = ({
    name,
    isActive,
    onPress,
  }: {
    name: string;
    isActive: boolean;
    onPress?: () => void;
  }) => (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.tabButton, isActive && styles.activeTab]}
    >
      <Text style={[styles.tabButtonText, isActive && styles.activeTabText]}>
        {name}
      </Text>
    </TouchableOpacity>
  );

  // --- 컴포넌트 정의: ChallengeItem ---
  const ChallengeItem = ({
    challenge,
    onPress,
  }: {
    challenge: (typeof mockChallenges)[0];
    onPress: () => void;
  }) => {
    const isCompleted = challenge.status === "참여완료";
    return (
      <TouchableOpacity onPress={onPress} style={styles.challengeItem}>
        <View>
          <Text style={styles.challengeName}>{challenge.name}</Text>
          <Text style={styles.challengeDuration}>{challenge.duration}</Text>
        </View>
        <TouchableOpacity
          disabled={isCompleted}
          style={[
            styles.challengeButton,
            isCompleted && styles.completedButton,
          ]}
        >
          <Text style={styles.challengeButtonText}>
            {isCompleted ? "참여완료" : "참여"}
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.appContainer}>
      <StatusBar style="auto" />

      {/* ⚠️ 상단 헤더 */}
      <View style={styles.header}>
        <Text style={styles.menuIcon}>☰</Text>
        <Text style={styles.appName}>어플 이름</Text>
        <Text style={styles.notificationIcon}>🔔</Text>
      </View>

      <ScrollView contentContainerStyle={styles.contentPadding}>
        {/* 상단 탭 내비게이션 */}
        <View style={styles.challengeNav}>
          <TabButton
            name="식단 조회"
            isActive={false}
            onPress={() => {
              /* navigate to Meal View */
            }}
          />
          <TabButton name="챌린지" isActive={true} />
          <TabButton
            name="리워드"
            isActive={false}
            onPress={() => {
              /* navigate to Reward */
            }}
          />
        </View>

        {/* 챌린지 목록 */}
        <View style={styles.challengeList}>
          {challenges.map((challenge) => (
            <ChallengeItem
              key={challenge.id}
              challenge={challenge}
              onPress={() =>
                navigation.navigate("ChallengeDetail", { id: challenge.id })
              }
            />
          ))}
        </View>
      </ScrollView>

      {/* ⚠️ 하단 탭 바 */}
    </SafeAreaView>
  );
};

export default ChallengeListScreen;
