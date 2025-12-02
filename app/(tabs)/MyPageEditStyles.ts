// app/MyPageEditStyles.ts

import { StyleSheet } from "react-native";

// 🎨 프로젝트 Primary Color 설정
const PRIMARY_BLACK = "#0B1215";
const SECONDARY_INDIGO = "#4F46E5";
const PURE_WHITE = "#FFFFFF";

export default StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: PURE_WHITE,
  },
  // --- Header & Navigation ---
  header: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  backButton: {
    paddingRight: 15,
    fontSize: 24,
  },
  backButtonText: {
    fontSize: 24,
    color: PRIMARY_BLACK,
  },
  appName: {
    // 헤더 중앙 타이틀 (프로필 수정)
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
    color: PRIMARY_BLACK,
    marginRight: 20, // 종 아이콘 공간 확보
  },
  notificationIcon: {
    // 우측 종 아이콘 자리
    width: 24,
    height: 24,
  },

  // --- Main Content ---
  contentPadding: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: PRIMARY_BLACK,
    marginBottom: 20,
  },
  // --- Profile Section ---
  profileSection: {
    alignItems: "center",
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    paddingBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#ccc",
    marginBottom: 10,
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
    color: PRIMARY_BLACK,
  },
  // --- Info Section (Read-Only Fields) ---
  infoSection: {
    marginBottom: 30,
  },
  inputDisplayRow: {
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingVertical: 10,
  },
  infoLabel: {
    fontSize: 14,
    color: "#555",
    marginBottom: 2,
  },
  infoValue: {
    fontSize: 16,
    color: PRIMARY_BLACK,
  },

  // --- Weight Input Section ---
  weightInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
    marginTop: 10,
  },
  weightInput: {
    flex: 1,
    paddingHorizontal: 5,
  },
  goalInfoHeight: {
    fontSize: 10,
    color: "#aaa",
    marginTop: 2,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    marginTop: 5,
  },
  targetBorder: {
    // 목표 체중 입력 시 인디고 색상 강조
    borderColor: SECONDARY_INDIGO,
    color: SECONDARY_INDIGO,
  },
  // --- Button Styles ---
  primaryButton: {
    backgroundColor: SECONDARY_INDIGO,
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 30,
  },
  buttonText: {
    color: PURE_WHITE,
    fontSize: 18,
    fontWeight: "bold",
  },
});
