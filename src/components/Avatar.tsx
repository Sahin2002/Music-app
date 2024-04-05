import {
  StyleSheet,
  View,
  Text,
  Image,
  StyleProp,
  ViewStyle,
} from "react-native";
import React from "react";

import { colors } from "../theme/colors";
interface IAvatar {
  title?: string;
  caption?: string;
  url?: string;
  style?: StyleProp<ViewStyle>;
}
export const Avatar: React.FC<IAvatar> = ({ title, caption, url, style }) => {
  return (
    <View style={[styles.content, style]}>
      {url ? (
        <Image
          width={40}
          height={40}
          source={{
            uri: url,
          }}
        />
      ) : null}
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.caption}>{caption}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {

    flexDirection: "row",
    gap: 12,
    alignItems: "center",
   
  },

  title: {
    fontFamily: "Nunito-Regular",
    fontSize: 18,
    fontWeight: "600",
    color: colors.white,
  },
  caption: {
    fontFamily: "Nunito-Regular",
    fontSize: 14,
    fontWeight: "400",
    color: colors.ligthGray,
  },
  icon: {},
});
