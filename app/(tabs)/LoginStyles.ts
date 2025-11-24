import { StyleSheet } from "react-native";

const LoginStyles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 40,
  },

  statusBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 20,
    alignItems: "center",
    width: "100%",
  },
  time: {
    fontSize: 14,
    fontWeight: "bold",
  },
  statusIcons: {
    flexDirection: "row",
  },
  iconText: {
    fontSize: 14,
    marginLeft: 5,
  },

  loginContent: {
    flex: 1,
    paddingHorizontal: 30,
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 50,
  },

  loginForm: {
    width: "100%",
    alignItems: "center",
  },
  inputGroup: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 50,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  inputIcon: {
    fontSize: 18,
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    height: "100%",
  },

  primaryButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#0B1215",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  utilityLinks: {
    flexDirection: "row",
    marginBottom: 40,
    justifyContent: "center",
  },
  linkText: {
    fontSize: 14,
    color: "#666",
    textDecorationLine: "underline",
  },
  separator: {
    marginHorizontal: 10,
    color: "#ccc",
  },

  socialSeparator: {
    color: "#999",
    marginBottom: 20,
    textAlign: "center",
  },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
    marginBottom: 20,
  },
  socialIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  socialIconText: {
    fontSize: 20,
  },

  footerNav: {
    paddingHorizontal: 30,
    paddingBottom: 30,
    width: "100%",
  },
  secondaryButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#0B1215",
  },
  secondaryButtonText: {
    color: "#0B1215",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default LoginStyles;
