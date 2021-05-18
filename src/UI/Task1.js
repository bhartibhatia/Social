import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Day} from './Day';
import {DetailsTask} from './DetailsTask'

export const Task1 = () => {
  const Header = () => {
    return (
      <View style={styles.headerConatiner}>
        <Text style={styles.textContainer}>J</Text>
        <Text style={styles.textContainer}>Appoinments</Text>
        <Text style={styles.textContainer}>H</Text>
      </View>
    );
  };
  const RequestCard = () => {
    return (
      <View style={styles.requestCardConatiner}>
        <View style={styles.innerRequest1}>
          <View>
            <Image
              style={{
                backgroundColor: 'black',
                height: 50,
                width: 50,
                borderRadius: 10,
              }}
            />
          </View>
          <View style={{marginLeft: 5}}>
            <Text
              style={{
                ...styles.textContainer,
                color: 'black',
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              Bharti Bhatia
            </Text>
            <Text style={{...styles.textContainer, color: 'black'}}>
              @Bharti
            </Text>
          </View>
        </View>
        <View style={{...styles.innerRequest1, marginTop: 10}}>
          <View>
            <Image
              style={{
                backgroundColor: 'black',
                height: 20,
                width: 20,
                borderRadius: 5,
              }}
            />
          </View>
          <View style={{marginLeft: 5}}>
            <Text
              style={{...styles.textContainer, color: 'black', fontSize: 13}}>
              Mon
              <Text style={{fontWeight: 'bold', color: 'black'}}> Feb 17</Text>
            </Text>
            <Text
              style={{...styles.textContainer, color: 'black', fontSize: 15}}>
              12:30PM - 2:00PM
            </Text>
          </View>
        </View>
        <View style={{...styles.innerRequest1, justifyContent: 'space-around'}}>
          <TouchableOpacity style={styles.buttonConatiner}>
            <Text style={styles.textContainer}>Accept</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonConatiner}>
            <Text style={styles.textContainer}>Decline</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Header />
      <View style={styles.innerContainer}>
        <ScrollView>
          <View style={styles.requestContainer}>
            <Text>Requests</Text>
            <FlatList
              data={[1, 2, 3, 4]}
              renderItem={({item}) => {
                return <RequestCard />;
              }}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={styles.Appoinments}>
            <View style={styles.AppoinmentsFirstView}>
              <Text style={{...styles.textContainer, color: 'black'}}>
                Upcoming Appoinments
              </Text>
              <TouchableOpacity style={styles.buttonConatiner}>
                <Text style={styles.textContainer}>Monthly View</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={[1, 2, 3, 4, 5, 6, 7]}
              renderItem={({item, index}) => {
                return <Day index={index} />;
              }}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
         <DetailsTask/>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#504DE5',
  },
  headerConatiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  textContainer: {
    fontSize: 15,
    color: 'white',
  },
  innerContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 30,
  },
  requestContainer: {
    margin: 18,
  },
  requestCardConatiner: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderWidth: 1,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 20,
    elevation: 8,
    backgroundColor: 'white',
    shadowColor: 'grey',
    borderColor: 'grey',
    width: 260,
  },
  innerRequest1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonConatiner: {
    backgroundColor: '#504DE5',
    paddingHorizontal: 19,
    marginTop: 10,
    borderRadius: 20,
    paddingVertical: 5,
  },
  AppoinmentsFirstView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  AppoinmentsSecondView: {
    marginHorizontal: 15,
    marginTop: 10,
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
  },
});
