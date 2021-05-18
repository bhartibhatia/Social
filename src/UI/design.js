import React,{useState,useEffect}from 'react';
import {View, StyleSheet, Text, Image, FlatList} from 'react-native';

export default Design = () => {

  const [fetch, setFetch] = useState();
  const [myData,setMyData] = useState();

  useEffect(()=>{
    console.log('fet',fetch)
setTimeout(()=>{
setMyData(fetch?myAPIData:myAPIData2)
},5000)
  },[fetch])
  const MyCard = ({title,des}) => {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/Photo.jpg')}
            style={{width: 100, height: 100, borderRadius: 20, marginLeft: 10}}
          />
        </View>
        <View style={styles.textContainer}>
          <View style={styles.firstConatiner}>
            <View styles={styles.firstData}>
              <Text style={{fontSize: 15, color: 'white'}}>
                {title}
              </Text>
              <Text>{des}</Text>
            </View>
            <View style={{marginRight: 10}}>
              <Text style={{color: 'red'}} onPress={()=>{
                console.log("onPressed")
                setFetch(true)
              }}>Book</Text>
            </View>
          </View>
          <View style={styles.secondConatiner}>
            <View style={styles.secondData}>
              <Text style={styles.secondDataInner}>A</Text>
              <Text style={styles.SecondDataInner2}>B</Text>
            </View>
            <View style={styles.secondData}>
              <Text style={styles.secondDataInner}>C</Text>
              <Text style={styles.SecondDataInner2}>D</Text>
            </View>
            <View style={styles.secondData}>
              <Text style={styles.secondDataInner}>E</Text>
              <Text style={styles.SecondDataInner2}>F</Text>
            </View>
            <View style={styles.secondData}>
              <Text style={styles.secondDataInner}>G</Text>
              <Text style={styles.SecondDataInner2}>H</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <FlatList data={myData} renderItem={({item})=>{
        console.log('item',item)
return(
  <MyCard  title={item.title} des={item.des} />
)
      }} 
      keyExtractor={(item,index)=>{
        return index.toString()
      }} 
      />
    </View>
  );
};

const myAPIData=[
  {title:'Summer' ,des:'Vacation'},
  {title:'Summer' ,des:'Vacation'},
  {title:'Summer' ,des:'Vacation'},
  {title:'Summer' ,des:'Vacation'},
  {title:'Summer' ,des:'Vacation'},
  {title:'Summer' ,des:'Vacation'},

]

const myAPIData2=[
  {title:'Winter' ,des:'Vacation'},
  {title:'Winter' ,des:'Vacation'},
  {title:'Winter' ,des:'Vacation'},
  {title:'Winter' ,des:'Vacation'},
  {title:'Winter' ,des:'Vacation'},
  {title:'Winter' ,des:'Vacation'},

]
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#191970',
  },
  cardContainer: {
    // backgroundColor: 'red',
    // justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 5,
    height: 150,
    paddingVertical: 10,
  },
  imageContainer: {
    marginRight: 20,
    position: 'absolute',
    left: 5,
    top: 22,
    zIndex: 20,
  },
  textContainer: {
    // backgroundColor: 'green',
    flexDirection: 'column',
    flex: 1,
    marginLeft: 50,
    paddingLeft: 80,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
  },
  firstConatiner: {
    flexDirection: 'row',
    // backgroundColor:'grey',
    flex: 1,
    marginTop: 20,
    justifyContent: 'space-between',
  },
  secondConatiner: {
    flexDirection: 'row',
    // backgroundColor:'white',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  secondData: {
    flexDirection: 'row',
    // backgroundColor:'black'
  },
  secondDataInner: {color: 'white', paddingRight: 10},
  SecondDataInner2: {color: 'white', paddingLeft: 10},
});
