import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import { Avatar } from "../components/Avatar";
import Player from "../components/Player.Music";
import Ring from "../../assets/vectors/ring.svg";
import Search from "../../assets/vectors/search.svg";
import { colors } from "../theme/colors";
export const Home = () => {
  const press = () => {
    console.log("click");
  };
  return (
    <View>
      <Header
        left={
          <Avatar
            title="Sahin Derisov"
            caption="Gold Member"
            url="https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=ejx13G9ZroRrcg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-young-user-icon-2400.png&ehk=NNF6zZUBr0n5i%2fx0Bh3AMRDRDrzslPXB0ANabkkPyv0%3d&risl=&pid=ImgRaw&r=0"
          />
        }
        right={
          <TouchableOpacity onPress={press}>
            <Ring color={"#8e8e8e"} />
          </TouchableOpacity>
        }
      />

      <View style={styles.content}>
        <Text style={styles.texts} numberOfLines={2}>
          Listen The Latest Musics
        </Text>
        <View style={styles.inputcontent}>
          <Search />
          <TextInput
            style={styles.input}
            
            placeholder="Search Music"
            placeholderTextColor={colors.gray}
          />
        </View>
      </View>
      <View style={styles.musicPlayer}>
        <Text style={styles.TitleText}>Recently Played</Text>
        <ScrollView horizontal={true}>
          <View style={styles.playList}>
            <Player
               image="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/06/music-logo-design.jpg"
              descpiton="music"
              style={{ alignItems: "center" }}
            />
            <Player
               image="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/06/music-logo-design.jpg"
              descpiton="music"
              style={{ alignItems: "center" }}
            />
            <Player
              image="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/06/music-logo-design.jpg"
              descpiton="music"
              style={{ alignItems: "center" }}
            />
            <Player
              image="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/06/music-logo-design.jpg"
              descpiton="music"
              style={{ alignItems: "center" }}
            />
          </View>
        </ScrollView>
      </View>

      <View style={styles.musicPlayer}>
        <Text style={styles.TitleText}>Recommend for you</Text>
        <ScrollView>
         <View style={styles.recommendList}>
        <Player
        image="https://kwesilive.com/wp-content/uploads/2020/02/158542C7-38DC-4BF8-9BA2-4BA78B0F5CBB.jpeg"
         title="Take care of you"  
        words="Admina Thembi" 
          view="114k / steams" 
          style={{flexDirection:"row",gap:15,alignItems:"center"}}
          />
          <Player
        image="https://kwesilive.com/wp-content/uploads/2020/02/158542C7-38DC-4BF8-9BA2-4BA78B0F5CBB.jpeg"
         title="Take care of you"  
        words="Admina Thembi" 
          view="114k / steams" 
          style={{flexDirection:"row",gap:15,alignItems:"center"}}
          />
          
          <Player
        image="https://kwesilive.com/wp-content/uploads/2020/02/158542C7-38DC-4BF8-9BA2-4BA78B0F5CBB.jpeg"
         title="Take care of you"  
        words="Admina Thembi" 
          view="114k / steams" 
          style={{flexDirection:"row",gap:15,alignItems:"center"}}
          />
          
          <Player
        image="https://kwesilive.com/wp-content/uploads/2020/02/158542C7-38DC-4BF8-9BA2-4BA78B0F5CBB.jpeg"
         title="Take care of you"  
        words="Admina Thembi" 
          view="114k / steams" 
          style={{flexDirection:"row",gap:15,alignItems:"center"}}
          />
          <Player
        image="https://kwesilive.com/wp-content/uploads/2020/02/158542C7-38DC-4BF8-9BA2-4BA78B0F5CBB.jpeg"
         title="Take care of you"  
        words="Admina Thembi" 
          view="114k / steams" 
          style={{flexDirection:"row",gap:15,alignItems:"center"}}
          />
          
          
          </View>
          </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  content: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 24,
    paddingHorizontal: 20,
    gap: 15,
  },
  playList: {
    flexDirection: "row",
    marginTop: 18,
    gap: 20,
  },
  recommendList:{
    marginTop:20,
    gap:20
  },
  musicPlayer: {
    paddingHorizontal: 21,
    marginTop: 44,
  },
  TitleText: {
    color: "#fff",
    fontSize: 22,
    fontFamily: "Nunito-Bold",
    fontWeight: "600",
  },
  texts: {
    width: "50%",
    color: colors.white,
    fontFamily: "Nunito-Bold",
    fontSize: 26,
    fontWeight: "600",
  },
  inputcontent: {
    width: "50%",
    borderWidth: 2,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 12,
    marginRight: 5,
    borderRadius: 30,
    backgroundColor: colors.dark,
  },
  input: {
    color: colors.white,
    paddingHorizontal: 22,
    paddingVertical: 12,
    height: 50,
  },
});
