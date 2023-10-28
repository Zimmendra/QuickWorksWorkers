import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Image,
  ImageBackground,
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";
import JobCard from "../components/JobCard";
import Menu from "../assets/Menu.svg";
import Acccepted from "../assets/Acccepted.svg";
import AcceptedJobCard from "../components/AcceptedJobCard";
import { onUpdateToAccepted } from "../api/availableJobsRequest";
import LoadingModal from "../components/LoadingModal";

export default function AcceptedJobsScreen({ navigation, route }) {
  const [isBringingGoods, setIsBringingGoods] = useState(false);
  const [loading, setLoading] = useState(false);
  const [jobData, setJobData] = useState({});

  const toggleBringingGoods = () => {
    setIsBringingGoods(!isBringingGoods);
  };

  useEffect(() => {
    setLoading(true);
    onUpdateToAccepted(route?.params?.jobID, route?.params?.workerid).then(
      (res) => {
        console.log(res, "AcceptedJobsScreen");
        setJobData(res?.data);
        setLoading(false);
      }
    );
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 300 }}>
        <ImageBackground
          style={styles.bgimg}
          source={require("../assets/backgroundimg.png")}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.toggleDrawer();
            }}
            style={styles.menu}
          >
            <Menu />
          </TouchableOpacity>
          <Acccepted style={styles.statusBar} />

          <Image
            source={require("../assets/AcceptedTitle.png")}
            style={styles.acceptedTitle}
          />
          <AcceptedJobCard
            title={jobData.jobType}
            subTitle={jobData.jobDescription}
            navigation={navigation}
          />
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
  statusBar: {
    alignSelf: "center",
    marginTop: 25,
  },
  acceptedTitle: {
    alignSelf: "center",
    marginTop: 25,
    marginLeft: 20,
    marginRight: 20,
    width: "90%",
    borderRadius: 10,
  },
  menu: {
    marginTop: 10,
    marginLeft: 10,
  },
  mainView: {
    width: "98%",
    backgroundColor: "#3330E4",
    borderRadius: 20,
    padding: 20,
    marginTop: "30%",
    marginLeft: "1%",
    height: 191,
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
