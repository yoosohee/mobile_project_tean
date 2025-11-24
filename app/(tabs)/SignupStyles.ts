import { StyleSheet } from "react-native";

const SignupStyles = StyleSheet.create({
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

  signupContent: {
    flex: 1,
    paddingHorizontal: 30,
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 40,
  },

  inputContainer: {
    width: "100%",
    marginBottom: 25,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "left",
    width: "100%",
  },
  textInput: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
  },

  primaryButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#0B1215",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 40,
    marginBottom: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  footerNav: {
    paddingHorizontal: 30,
    paddingBottom: 30,
    width: "100%",
  },
});

export default SignupStyles;
