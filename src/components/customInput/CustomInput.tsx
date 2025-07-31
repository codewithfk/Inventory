import React from "react";
import {
  StyleProp,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";
import colors from "../../utils/colors";
interface Props extends TextInputProps {
  error?: string;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<ViewStyle>;
  fontSize?: number;
}
const CustomInput = ({
  containerStyle,
  error,
  inputStyle,
  multiline,
  fontSize,
  ...inputProps
}: Props) => {
  return (
    <View style={[containerStyle]}>
      <TextInput
        style={[
          {
            backgroundColor: colors.white90,
            height: multiline ? 150 : 42,
            width:'100%',
            borderWidth: 1.5,
            borderRadius: 8,
            borderColor: colors.black,
            fontSize: fontSize ? fontSize : multiline ? 16 : 18,
            paddingHorizontal: 5,
            color: colors?.black,
            overflow: "hidden",
          
          },
          inputStyle,
        ]}
        placeholderTextColor={colors.black60}
        multiline={multiline}
        textAlignVertical={multiline ? "top" : "auto"}
        {...inputProps}
      />

      {error && (
        <Text style={{color:'red',fontSize:14}}>
          {error}
        </Text>
      )}
    </View>
  );
};

export default CustomInput;
