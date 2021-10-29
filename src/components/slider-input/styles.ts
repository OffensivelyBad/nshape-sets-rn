import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 20
  },
  slider: {
    flex: 1,
    height: 40
  },
  inputContainer: {
    alignItems: "center",
    marginStart: 8
  },
  input: {
    fontSize: 30,
    width: 80,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: "rgba(255,255,255,0.2)",
    textAlign: "center"
  },
  image: {
    width: 55,
    height: 30
  }
});

export default styles;
