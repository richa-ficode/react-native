import React, { Component } from 'react';
import { Image, View, StyleSheet,ImageBackground,Text,FlatList,TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from '../styles/commonstyles';
import ok_png from '../images/checkmark.png'
import add_more_png from '../images/add_more.png'
import minion_jpg from '../images/minion.jpg'

class CreateHome extends Component {
  constructor(props){
    super(props);
   this.state = {
     list : [
       {
        image:'http://malkimuseum.org/wp-content/uploads/bfi_thumb/dummy-image-ncg23bdedv37paq2elo5780fof2vb0ojg8hxlzh1qk.jpg',
        title:'Paul'
       },{
        image:'http://malkimuseum.org/wp-content/uploads/bfi_thumb/dummy-image-ncg23bdedv37paq2elo5780fof2vb0ojg8hxlzh1qk.jpg',
        title:'Paul'
       },{
        image:'http://malkimuseum.org/wp-content/uploads/bfi_thumb/dummy-image-ncg23bdedv37paq2elo5780fof2vb0ojg8hxlzh1qk.jpg',
        title:'Paul'
       },{
        image:'http://malkimuseum.org/wp-content/uploads/bfi_thumb/dummy-image-ncg23bdedv37paq2elo5780fof2vb0ojg8hxlzh1qk.jpg',
        title:'Paul'
       },{
        image:'http://malkimuseum.org/wp-content/uploads/bfi_thumb/dummy-image-ncg23bdedv37paq2elo5780fof2vb0ojg8hxlzh1qk.jpg',
        title:'Paul'
       },{
        image:'http://malkimuseum.org/wp-content/uploads/bfi_thumb/dummy-image-ncg23bdedv37paq2elo5780fof2vb0ojg8hxlzh1qk.jpg',
        title:'Paul'
       }
     ] 
  }
}
FlatListItemSeparator = () => {
  return (
    <View
      style={{
        // height: 20,
        width: "100%",
        margin: 10,
        // backgroundColor: "black",
      }}
    />
  );
}
  componentDidMount() {
    // alert('fdfdf');
  }

  render() {
    // let url = require('../images/add_home1.jpg');
    return (
      <View style={{flex:1}}>
        <View style={[{flex:0.1,backgroundColor:'rgb(68,35,124)'},styles.flexcontentmiddle]}>
            <Text style={[{fontSize:20,backgroundColor:'rgb(68,35,124)'},styles.textstyles]}>Create a new home</Text>
        </View>
        <View style={[{flex:0.9}]}>
        {/* <View style={{backgroundColor:'floralwhite'}}> */}
            <View style={[{flex:0.5},styles.flexcontentmiddle]}>
              <Text style={{fontSize:20,color:'rgb(68,35,124)'}}>Housemates</Text>
              <Text style={[{fontSize:15,color:'gray'}]}>Tell us who you live with</Text>
            </View>
            <View style={{flexDirection:'row',flex:0.5}}>
            <View style={[{flex:0.5,alignItems:'flex-end',marginLeft:180}]}>
              <Image source={minion_jpg} style={{width:180,height:100}}/>
            </View>
            <View style={[{flex:0.5,alignItems:'flex-end',justifyContent:'flex-end'}]}>
              <Image source={add_more_png} style={{width:50,height:50,marginTop:1050,borderRadius:50}}/>
              </View>
              </View>
              {/* </View> */}
        </View>
        <View style={[{flex:0.6,backgroundColor:'floralwhite'}]}>
        <FlatList
         horizontal={false}
         contentContainerStyle={{flex: 1,alignItems: 'center'}}
         numColumns={3}
          data={ this.state.list }
          ItemSeparatorComponent = {this.FlatListItemSeparator}
          renderItem={({item}) =>{
            return(
              <View style={{marginLeft:10,marginRight:10,marginBottom:0,marginTop:10}}>
                <View>            
                  <Image source={{uri:item.image}} style={{width:80,height:80,borderRadius:240}}  />
                </View>
                <View style={{backgroundcolor:'rgb(117,192,232)'}}>
                  <Text style={{fontWeight:'bold'}}> {item.title} </Text>
                </View>
             </View>
            )
          } 
          }
        />
        <View style={{alignItems:'flex-end',marginRight:15,flex:0.3}}>
        <Image source={ok_png} style={{width:50,height:50,}}/>
        </View>
        </View>
      </View>
    );
  }
}

export default CreateHome; 