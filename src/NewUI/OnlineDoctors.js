import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

export const OnlineDoctors = () => {
  const DoctorsLivePost = () => {
    return (
      <View style={styles.dataContainer}>
        <Image
          source={require('../assets/Photo.jpg')}
          style={{height: 60, width: 60, borderRadius:30}}
        />
        <View style={{height:10,width:10,borderRadius:5,backgroundColor:"red",position:'absolute',bottom:10,right:1}}></View>
</View>

    );
  };
  return (
    <View style={styles.secondContainer}>
    
      <Text style={{paddingLeft:20}}>Online Doctors</Text>
      <View>
        <FlatList
          data={[1, 2, 3, 4,5,6]}
          renderItem={({item}) => {
            return <DoctorsLivePost />;
          }}
          horizontal showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={{width:"100%",height:1,backgroundColor:"#E5E5E5",marginTop:20}}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  secondContainer: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingTop:10
  },
  dataContainer: {
      marginTop:10,
      marginHorizontal:10
  },
});
