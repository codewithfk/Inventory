import React, { ReactNode } from "react";
import {
  ActivityIndicator,
  Keyboard,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import colors from "../../utils/colors";
export type buttonMode = "whiteBackground";
type TCustomButton = {
  text?: string;
  onPress?: () => void;
  children?: ReactNode;
  mode?: buttonMode;
  icon?: ReactNode;
  textColor?: keyof typeof colors;
  disabled?: boolean;
  hitSlop?: number;
  pressableStyle?: StyleProp<ViewStyle>;
 containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  loading?: boolean;
  isKeyboardDismissDisabled?: boolean;
};
const CustomButton = ({
  children,
  disabled,
  hitSlop = 20,
  icon,
  onPress,
  text,
  pressableStyle,
  textStyle,
  loading,
  isKeyboardDismissDisabled = false,
  containerStyle
}: TCustomButton) => {
  return (
    <Pressable
      disabled={disabled}
      hitSlop={hitSlop}
      onPress={() => {
        !isKeyboardDismissDisabled && Keyboard.dismiss();
        onPress && onPress();
      }}
      style={({ pressed }) => [
        {
          transform: [
            {
              scale: pressed ? 0.98 : 1,
            },
          ],
        },
        pressableStyle,
      ]}
    >
      {children ? (
        children
      ) :  (
        <View
          style={[
            styles.whiteBackgroundButtonStyle,
            containerStyle
          ]}
        >
          {loading ? (
            <ActivityIndicator />
          ) : icon ? (
            icon
          ) : (
            <Text style={[styles.buttonText, textStyle]}>
              {text}
            </Text>
          )}
        </View>
      ) }
    </Pressable>
  );
};

export default CustomButton;
const styles = StyleSheet.create({
  buttonText: {
    marginHorizontal: 20,
    color:colors.white
  },
  whiteBackgroundButtonStyle: {
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.blue,
    borderColor: colors.blue,
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});
