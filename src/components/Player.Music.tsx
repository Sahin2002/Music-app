import {
  StyleSheet,
  Text,
  View,
  Image,
  StyleProp,
  ViewStyle,
  ScrollView,
} from "react-native";
import React from "react";
import { colors } from "../theme/colors";
interface IPlayer {
  title?: string;
  image?: string;
  words?: string;
  view?: string;
  descpiton?: string;
  style?: StyleProp<ViewStyle>;

}
const Player: React.FC<IPlayer> = ({
   image,
  descpiton,
  style,
  words,
  view,
  title
}) => {
  return (
    <View style={[styles.content, style]}>
      
      
        
        <View style={style} >
            <Image
              style={styles.image}
              width={105}
              height={81}
              source={{
                uri: image,
              }}
            />
             <View>
            {descpiton ? (
              <Text style={styles.musicText}>{descpiton}</Text>
            ) : null}
           {title ? (
              <Text style={styles.title}>{title}</Text>
            ) : null}
            
              {words ? <Text style={styles.words}>{words}</Text> : null}
              {view ? <Text style={styles.words}>{view}</Text> : null}
            </View>
          </View>
      
    </View>
  );
};

export default Player;

const styles = StyleSheet.create({
  content: {
    
  },
 image:{
  borderRadius:10
 },
 title:{
  fontFamily:"Nunito-Regular",
  fontSize:17,
  fontWeight:"400",
  color:colors.white,
  
 },
 words:{
  fontFamily:"Nunito-Regular",
  fontSize:13,
  fontWeight:"400",
  color:colors.ligthGray,
  marginTop:5
 },

  musicText: {
    fontFamily: "Nunito-Regular",
    color: colors.white,

    fontSize: 14,
    marginTop: 6,
  },
});
