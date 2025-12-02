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
  // --- Header & Status Bar ---
  header: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  appName: {
    fontSize: 18,
    fontWeight: "600",
    color: PRIMARY_BLACK,
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
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#ccc", // 임시 이미지
    marginBottom: 10,
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
    color: PRIMARY_BLACK,
  },
  editButtonText: {
    fontSize: 14,
    color: SECONDARY_INDIGO,
    marginTop: 4,
  },
  // --- Info Section ---
  infoSection: {
    marginBottom: 30,
  },
  infoRow: {
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
  // --- Goal Section ---
  goalSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
    borderWidth: 1,
    borderColor: "#eee",
    marginTop: 20,
  },
  goalInfoContainer: {
    flex: 1,
    alignItems: "center",
  },
  goalInfoLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#555",
    marginBottom: 5,
  },
  separator: {
    width: 1,
    backgroundColor: "#ddd",
    marginHorizontal: 10,
  },
  goalInfoHeight: {
    fontSize: 10,
    color: "#aaa",
    marginTop: 2,
  },
  goalInfoWeight: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 5,
  },
  targetColor: {
    color: SECONDARY_INDIGO,
  },
  // --- 기타 스타일 ---
  // (MyPageEdit, Challenge 등 다른 컴포넌트에서 사용될 스타일도 여기에 통합하거나 별도 파일로 분리 가능)
});
