import React, { useContext, useState } from "react";
import {
  SafeAreaView,
  ImageBackground,
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AppContext } from "../navigation/Provider";
import { onSendQuotation } from "../api/acceptedJobsRequest";
import LoadingModal from "../components/LoadingModal";

export default function Quotation({ navigation, route }) {
  const { quotationData } = useContext(AppContext);
  const [isBringingGoods, setIsBringingGoods] = useState(false);
  const [completionDate, setCompletionDate] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [loading, setLoading] = useState(false);

  const onPressSendQuotation = (item) => {
    setLoading(true);
    const body = {
      quotationData: {
        quotationId: item._id,
        customerName: "John Doe",
        location: item.location,
        jobType: item.jobType,
        jobDescription: item.jobDescription,
        dateOfCompletion: completionDate, //Date Of Completion
        timeOfArrival: arrivalTime, // Time of Arraival
        workerName: "Plumber Joe",
        bringGoods: isBringingGoods, //Bring Good
        paymentAmount: item.paymentAmount, //Service Amount
        items: quotationData,
      },
      recipientEmail: "it21265242@my.sliit.lk",
    };
    onSendQuotation(body)
      .then((res) => {
        console.log(res.data);
        navigation.navigate("WaitingScreen");
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  const toggleBringingGoods = () => {
    setIsBringingGoods(!isBringingGoods);
  };
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 300 }}>
        <ImageBackground
          style={styles.bgimg}
          source={require("../assets/backgroundimg.png")}
        >
          <View style={styles.mainView}>
            <Text style={{ fontSize: 25, color: "white" }}>
              Date of completion
            </Text>
            <TextInput
              value={completionDate}
              onChangeText={setCompletionDate}
              style={styles.input}
            />
            <Text style={{ fontSize: 25, color: "white" }}>
              Time of Arrival
            </Text>
            <TextInput
              value={arrivalTime}
              onChangeText={setArrivalTime}
              style={styles.input2}
            />

            <View style={styles.row}>
              <View style={styles.column}>
                <Text style={{ fontSize: 18, color: "white" }}>
                  Bring Goods
                </Text>
              </View>
              <View style={styles.column}>
                <Pressable
                  style={styles.toggleButton}
                  onPress={toggleBringingGoods}
                >
                  <Text style={{ color: "white", fontSize: 15 }}>
                    {isBringingGoods ? "Yes" : "No"}
                  </Text>
                </Pressable>
              </View>
            </View>
            <Text style={styles.label}>
              Toggle {isBringingGoods ? "off" : "on"} if you are bringing goods
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("EnterQuotation");
              }}
              style={styles.Button}
            >
              <Text style={{ color: "white", fontSize: 15 }}>Add Items</Text>
            </TouchableOpacity>
            <Text style={styles.label}>Service Amount</Text>
            <TextInput style={styles.input} />
          </View>

          <View style={styles.row2}>
            <View style={styles.column}>
              <TouchableOpacity
                onPress={() => {
                  onPressSendQuotation(route?.params?.item);
                }}
                style={styles.Button}
              >
                <Text style={{ color: "white", fontSize: 15 }}>
                  Send Quotation
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.column}>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}
                style={styles.Button}
              >
                <Text style={{ color: "white", fontSize: 15 }}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
      <LoadingModal visible={loading} />
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bgimg: {
    flex: 1,
    width: width,
    height: height,
  },
  mainView: {
    width: "98%",
    backgroundColor: "#3330E4",
    borderRadius: 20,
    padding: 20,
    marginTop: "20%",
    marginLeft: "1%",
    height: 400,
    alignItems: "center",
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  toggleButton: {
    backgroundColor: "#FFC436",
    padding: 10,
    borderRadius: 10,
    height: 40,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "50%",
    marginLeft: "1%",
  },
  column: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  label: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  deleteIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "red",
  },
  input: {
    height: 40,
    width: "90%",
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 5,
  },
  input2: {
    height: 40,
    width: "90%",
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 15,
  },
  emptyView: {
    width: 30,
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
