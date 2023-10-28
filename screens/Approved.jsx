import React, { useEffect } from "react";
import {
  Image,
  ImageBackground,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  Pressable,
  ScrollView,
} from "react-native";
import Menu from "../assets/Menu.svg";
import ApprovedBar from "../assets/Approved.svg";
import {
  requestApprovedGetJobs,
  requestUpdateToOngoingJobs,
} from "../api/approvedJobsRequest";
import LoadingModal from "../components/LoadingModal";
import { FlatList } from "react-native";
import { AppContext } from "../navigation/Provider";
import { useContext } from "react";

export default function Approved({ navigation }) {
  const [data, setData] = React.useState([]);
  const { user } = useContext(AppContext);
  const { approvedJob, setApprovedJob } = useContext(AppContext);

  useEffect(() => {
    requestApprovedGetJobs(user._id)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {});
  }, []);

  const onPressStartJob = (id, item) => {
    requestUpdateToOngoingJobs(id).then((res) => {
      navigation.navigate("CompleteOngoing", { item: item });
      setApprovedJob(item);
    });
  };

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
          <ApprovedBar style={styles.titleBar} />

          <FlatList
            data={data}
            renderItem={({ item, index }) => (
              <View key={index} style={styles.mainView}>
                <Text style={{ color: "white", fontSize: 20 }}>
                  {item.jobType}
                </Text>
                <Text style={{ color: "white", fontSize: 12 }}>
                  {item.jobDescription}
                </Text>

                <TouchableOpacity
                  onPress={() => {
                    onPressStartJob(item._id, item);
                  }}
                  style={styles.buttonpress}
                >
                  <Text style={{ color: "white", fontSize: 15 }}>
                    Start Job
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </ImageBackground>
      </ScrollView>
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
  titleBar: {
    alignSelf: "center",
    marginTop: 25,
    marginLeft: 20,
    marginRight: 20,
  },
  menu: {
    marginTop: 10,
    marginLeft: 10,
  },

  mainView: {
    height: 189,
    width: "95%",
    alignSelf: "center",
    backgroundColor: "#3330E4",
    borderRadius: 20,
    padding: 20,
    marginTop: "10%",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
  },
  buttonpress: {
    backgroundColor: "#FFC436",
    padding: 10,
    borderRadius: 26.5,
    marginTop: 10,
    height: 53,
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
  },
});
