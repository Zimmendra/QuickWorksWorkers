import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import JobDialog from "./JobDialog";
import JobHistoryDialog from "./JobHistoryDialog";

const JobCard = (props) => {
  const { navigation, buttonName, title, item } = props;
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.row2}>
      <View style={styles.column}>
        <Text style={{ color: "white", fontSize: 20 }}>{title}</Text>
      </View>
      <View style={styles.column}>
        <TouchableOpacity
          onPress={() => {
            // setModalVisible(true);
            {
              buttonName === "View Job" ? setModalVisible(true) : null;
            }
          }}
          style={styles.Button}
        >
          <Text style={{ color: "white", fontSize: 15 }}>
            {buttonName === "View Job"
              ? "View Job"
              : item.paymentAmount + " RS"}
          </Text>
        </TouchableOpacity>
      </View>
      {buttonName === "View Job" ? (
        <JobDialog
          navigation={navigation}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          item={item}
        />
      ) : (
        <JobHistoryDialog
          navigation={navigation}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  row2: {
    backgroundColor: "#3330E4",
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "10%",
    marginLeft: "1%",
    borderRadius: 20,
  },
  logo: {
    backgroundColor: "rgba(0,0,0,0)",
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  column: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },

  Button: {
    backgroundColor: "#FFC436",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    height: 53,
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default JobCard;
