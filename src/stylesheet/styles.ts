import { StyleSheet } from "react-native";

export const appColors = {
  primary: {
    _50: "#EDE7F6",
    _100: "#D1C4E9",
    _200: "#B39DDB",
    _300: "#9575CD",
    _400: "#7E57C2",
    _500: "#673AB7",
    _600: "#5E35B1",
    _700: "#512DA8",
    _800: "#4527A0",
    _900: "#311B92",
  },

  backgroundColor: "#FAFAFA",
  transparentBackgroundColor: "rgba(255, 255, 255, 0.8)",
  theme: {
    primary: "#9575CD",
    white: {
      highEmphasis: "#FFFFFF",
      mediumEmphasis: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      inactive: "rgba(255, 255, 255, 0.54)",
    },
    black: {
      highEmphasis: "rgba(0, 0, 0, 0.87)",
      mediumEmphasis: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.26)",
      inactive: "rgba(0, 0, 0, 0.54)",
    },
    error: "#FF0C3E",
  },
  check: "#B5D631",
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.backgroundColor,
  },
  card: {
    backgroundColor: appColors.backgroundColor,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: appColors.primary._50,
  },
  selectedCard: {
    borderBottomColor: appColors.primary._200,
  },
  input: {
    borderBottomColor: appColors.primary._50,
    borderBottomWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    color: appColors.primary._500,
  },
  focusedInput: {
    borderBottomColor: appColors.primary._200,
    color: appColors.primary._900,
  },
  body: {
    color: appColors.theme.black.mediumEmphasis,
    fontSize: 12,
    paddingHorizontal: 8,
  },
  title: {
    color: appColors.theme.black.highEmphasis,
    fontSize: 12,
    marginVertical: 8,
    paddingHorizontal: 8,
  },
  cell: { width: 48, justifyContent: "center", alignItems: "center" },
  row: { flexDirection: "row" },
  justifyCenter: { justifyContent: "center" },
  alignCenter: { alignItems: "center" },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: appColors.theme.black.disabled,
  },
  elementContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 8,
  },
  button: {
    backgroundColor: appColors.primary._100,
    borderRadius: 8,
    padding: 4,
    width: 100,
    paddingVertical: 8,
    margin: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  smallImage: {
    width: 20,
    height: 20,
  },
  image: {
    width: 60,
    height: 60,
  },
  positionContainer: { flexDirection: "row", justifyContent: "space-evenly" },
});
