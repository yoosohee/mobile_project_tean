import { StyleSheet } from "react-native";

const PRIMARY_BLACK = "#0B1215";
const SECONDARY_INDIGO = "#4F46E5";
const PURE_WHITE = "#FFFFFF";

export default StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: PURE_WHITE,
  },
  contentPadding: {
    padding: 20,
  },

  header: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  menuIcon: {
    fontSize: 24,
    color: PRIMARY_BLACK,
  },
  appName: {
    fontSize: 18,
    fontWeight: "600",
    color: PRIMARY_BLACK,
  },
  notificationIcon: {
    fontSize: 20,
    color: PRIMARY_BLACK,
  },
  // --- Challenge Tab Navigation ---
  challengeNav: {
    flexDirection: "row",
    marginBottom: 20,
    paddingBottom: 10,
  },
  tabButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  activeTab: {
    backgroundColor: PRIMARY_BLACK,
    borderColor: PRIMARY_BLACK,
  },
  tabButtonText: {
    fontSize: 14,
    color: PRIMARY_BLACK,
  },
  activeTabText: {
    color: PURE_WHITE,
  },
  // --- Challenge List Item ---
  challengeList: {
    marginTop: 10,
  },
  challengeItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: PURE_WHITE,
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  challengeName: {
    fontSize: 16,
    fontWeight: "bold",
    color: PRIMARY_BLACK,
  },
  challengeDuration: {
    fontSize: 12,
    color: "#888",
  },
  challengeButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: SECONDARY_INDIGO,
  },
  completedButton: {
    backgroundColor: "#ccc",
  },
  challengeButtonText: {
    color: PURE_WHITE,
    fontSize: 12,
    fontWeight: "bold",
  },
  // --- Challenge Detail Header ---
  detailHeader: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  backButton: {
    paddingRight: 15,
  },
  backIcon: {
    fontSize: 24,
    color: PRIMARY_BLACK,
  },
  detailNotificationIcon: {
    fontSize: 20,
    color: PRIMARY_BLACK,
  },
  // --- Challenge Detail Content ---
  detailTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
    color: PRIMARY_BLACK,
  },
  uploadArea: {
    width: "100%",
    height: 180,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  uploadButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: PRIMARY_BLACK,
    borderRadius: 5,
  },
  uploadButtonText: {
    color: PURE_WHITE,
    fontWeight: "bold",
  },
  detailInfo: {
    marginBottom: 20,
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
    color: PRIMARY_BLACK,
  },
  detailText: {
    fontSize: 14,
    color: "#555",
  },
  // --- Footer Action ---
  footerAction: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
  },
  primaryButton: {
    backgroundColor: SECONDARY_INDIGO,
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: PURE_WHITE,
    fontSize: 18,
    fontWeight: "bold",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
