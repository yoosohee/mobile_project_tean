import { StyleSheet } from "react-native";

const SignupStyles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  signupContent: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "flex-start",
    width: "100%",
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
  },

  inputContainer: {
    width: "100%",
    marginBottom: 15,
    alignItems: "flex-start",
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "left",
    width: "100%",
  },
  textInput: {
    width: "100%",
    height: 45,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    fontSize: 16,
  },

  primaryButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#0B1215",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 30,
    marginBottom: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  footerNav: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    width: "100%",
  },
});

export default SignupStyles;
