import React, {
  ReactElement,
  ReactNode,
  cloneElement,
  useEffect,
  useState,
} from "react";
import {
  Button,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import Modal, { ModalProps } from "react-native-modal";
import CustomButton from "../customButton/CustomButton";
import colors from "../../utils/colors";
interface TCustomModal {
  isOpen?: boolean;
  children: ReactElement;
  modalProps?: ModalProps;
  actionElement?: ReactNode;
  onClose?: () => void;
  iconProps?: {
    style?: StyleProp<ViewStyle>;
    icon?: ReactNode;
  };
  actionElementContainerStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  actionElementOnPress?: () => void;
  modalHight?: number;
  onPressCloseIcon?: () => void;
}
const CustomModal = ({
  children,
  onClose,
  modalProps,
  iconProps,
  actionElement,
  isOpen,
  actionElementContainerStyle,
  disabled,
  actionElementOnPress,
  modalHight = 200,
  onPressCloseIcon,
}: TCustomModal) => {
  const [isVisible, setIsVisible] = useState(isOpen);
  useEffect(() => {
    setIsVisible(isOpen);
  }, [isOpen]);
  const onHandleOpen = () => {
    setIsVisible(true);
  };

  const onHandleClose = () => {
    setIsVisible(false);
  };
  return (
    <View>
      {actionElement ? (
        <Pressable
          onPress={actionElementOnPress ?? onHandleOpen}
          style={actionElementContainerStyle}
          disabled={disabled}
        >
          {actionElement}
        </Pressable>
      ) : null}
      <Modal
        {...modalProps}
        isVisible={isVisible}
        onModalHide={onClose}
        backdropColor={"rgba(179, 192, 211, 0.50)"}
      >
        <View
        style={styles.containerStyle}
        >
          <CustomButton
            onPress={onPressCloseIcon ? onPressCloseIcon : onHandleClose}
            text="close"
            pressableStyle={styles.closeButton}
         ><Text style={{color:colors.white,fontSize:18,fontWeight:800}}>x</Text></CustomButton>
          
          {children &&
            cloneElement(children)}
        </View>
      </Modal>
    </View>
  );
};

export default CustomModal;
const styles = StyleSheet.create({
  borderStyle: {
    borderRadius: 20,
    paddingBottom: 2,
    paddingRight: 2,
  },
  containerStyle: {
    borderRadius: 20,
    paddingBottom: 10,
    backgroundColor:colors.white,
    padding:10
  },
  closeButton:{
backgroundColor:colors?.blue,
width:30,
height:30,
alignItems:'center',
justifyContent:'center',
alignSelf:'flex-end',
borderRadius:50,
marginBottom:10
  }
});
