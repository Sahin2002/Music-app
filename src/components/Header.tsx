import { View, Text, StyleProp, ViewStyle, StyleSheet } from 'react-native'
import React from 'react'
interface IHeader{
    left?:React.ReactNode,
    right?:React.ReactNode,
    title?:string,
    style?:StyleProp<ViewStyle>
}
const Header:React.FC<IHeader> = ({left,right,title,style}) => {
  return (
    <View style={styles.root}>
        {left}
      {title ?<Text>{title}</Text>:null}
      {right}
    </View>
  )
}
const styles=StyleSheet.create({
    root:{
       
        flexDirection:'row',
        alignItems:"center",
        justifyContent:'space-between',
        paddingHorizontal: 21,
        paddingVertical: 13,
    }
})
export default Header