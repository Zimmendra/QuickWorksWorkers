import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const AcceptedJobCard = (props) => {
  const { navigation, title, subTitle, onPress } = props;
  return (
    <View style={styles.card}>
      <Text style={styles.text1}>{title}</Text>
      <Text style={styles.text2}>{subTitle}</Text>
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>CHAT</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Decline</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Text style={styles.buttonText}>QUOTATION</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#3330E4",
    borderRadius: 10,
    padding: 20,
    paddingTop: 30,
    paddingBottom: 30,
    margin: 20,
    width: "90%",
  },
  text1: {
    fontSize: 25,
    color: "#fff",
  },
  text2: {
    fontSize: 18,
    marginTop: 5,
    color: "#fff",
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  button: {
    backgroundColor: "#FFC436",
    width: 100,
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
  },
});

export default AcceptedJobCard;
