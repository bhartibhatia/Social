import React,{useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';

export const Doctors = () => {
    
  
  return (
    <View style={styles.doctorContainer}>
      <Text>Doctors</Text>
      <View>
        <FlatList
          data={['1', 'dbwbw', 'dwwdsq', 'dwdd', 'dsahbdjndwasjNjsand']}
          renderItem={({item}) => {
            return <DoctorsData myData={item} />;
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const DoctorsData = props => {
    const [color,useColor]=useState(false)
    console.log('props', props);
    return (
      <TouchableOpacity
        style={{
          paddingVertical: 10,
          backgroundColor:color?'lightblue':'#E5E5E5',
          borderRadius: 25,
          minWidth: 100,
          justifyContent: 'center',
          margin: 5,
          alignItems: 'center',
        }} onPress={()=>{
useColor(!color)
        }} > 
        <Text style={{fontSize:color?20:15,width:80, textAlign: 'center',color:color?'blue':'black',}} numberOfLines={1}>
          {props.myData}
        </Text>
      </TouchableOpacity>
    );
  };

const styles = StyleSheet.create({
  doctorContainer: {
    backgroundColor: 'white',
  },
});
