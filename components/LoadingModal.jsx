import {
  View,
  Modal,
  NativeSyntheticEvent,
  ActivityIndicator,
} from "react-native";
import React from "react";

const LoadingModal = (props) => {
  const { visible, onRequestClose, transparent } = props;

  return (
    <Modal
      visible={visible}
      statusBarTranslucent
      transparent={transparent ?? true}
      onRequestClose={onRequestClose}
      animationType="fade"
    >
      <View
        style={{
          // alignItems: "center",
          flex: 1,
          backgroundColor: "rgba(0,0,0,.5)",
          // justifyContent: "center",
          paddingTop: 200,
        }}
      >
        <ActivityIndicator
          animating={visible}
          color="white"
          size="large"
          style={{ justifyContent: "center", alignItems: "center", height: 80 }}
        />
      </View>
    </Modal>
  );
};

export default LoadingModal;
