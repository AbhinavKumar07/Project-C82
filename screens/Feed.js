import React , {Component} from 'react';
import {Text,View,StyleSheet,SafeAreaView,Platform,StatusBar,Image} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {FlatList} from 'react-native-gesture-handler'

import PostCard from './PostCard';

let posts  = require('../tempPosts.json')

export default class Feed extends Component {

   /* renderItem = ({item:post}) = {
        return <PostCard post={post} />
    } */




    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <View style = {styles.appTitle}>
                    <View style = {styles.appIcon}>
                        <Image
                            source={require('../assets/logo.png')}
                            style = {styles.iconImage}
                        ></Image>
                    </View>
                    <View style = {styles.appTitleTextContainer}>
                        <Text style = {styles.appTitleText}>Spectagram</Text>
                    </View>
                </View>
                <View style = {styles.cardContainer}>
                    <FlatList
                        keyExtractor = {this.keyExtractor}
                        data = {posts}
                        renderItem = {this.renderItem}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black' /* + */
    },
    droidSafeArea:{
        marginTop: Platform.OS === "Android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle:{
        flex:0.07,
        flexDirection:'row',
    },
    appIcon:{
        flex:0.2,
        justifyContent:'center',
        alignItems:'center',
    },
    iconImage:{
        width:'100%',
        height:'100%',
        resizeMode:'contain',
    },
    appTitleTextContainer:{
        flex:0.8,
        justifyContent:'center',
    },
    appTitleText:{
        color:'white',
        fontSize:RFValue(28),
    },
    cardContainer:{
        flex:0.85,
    },
})

/*
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: "#2f345d",
    borderRadius: RFValue(20)
  },
  storyImage: {
    resizeMode: "contain",
    width: "95%",
    alignSelf: "center",
    height: RFValue(250)
  },
  titleContainer: {
    paddingLeft: RFValue(20),
    justifyContent: "center"
  },
  storyTitleText: {
    fontSize: RFValue(25),
    fontFamily: "Bubblegum-Sans",
    color: "white"
  },
  storyAuthorText: {
    fontSize: RFValue(18),
    fontFamily: "Bubblegum-Sans",
    color: "white"
  },
  descriptionText: {
    fontFamily: "Bubblegum-Sans",
    fontSize: 13,
    color: "white",
    paddingTop: RFValue(10)
  },
  actionContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: RFValue(10)
  },
  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#eb3948",
    borderRadius: RFValue(30)
  },
  likeText: {
    color: "white",
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(25),
    marginLeft: RFValue(5)
  } */