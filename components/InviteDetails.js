import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import moment from "moment";

// code that I have added 
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import InvitationCard from './component/InvitationCard' 

const AppNavigator = createStackNavigator({
  InviteDetails: {screen: InviteDetails},
  },
  {
      initalRoute: 'InvitationCard'
  }
);

const InviteDetails = createAppContainer(AppNavigator);


///


export default function InviteDetails(props) {
  let imageBase =
    'https://www.cs.virginia.edu/~dgg6b/Mobile/ScrollLabJSON/Images/';

  function formatDate(date) {
    return date.format('dddd Do MMMM - h:mm a')
  }

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <TouchableOpacity style ={styles.topButton}>
        <Image
          style={styles.profileImage}
          source={{ uri: imageBase + props.pic }}
        />
        <View style={styles.textSection}>
          <Text>{props.name}</Text>
          <Text>{formatDate(props.date)}</Text>
        </View>
        </TouchableOpacity>
      </View>
      <View style={styles.buttomSection}>
        <TouchableOpacity
          onPress={() => props.declineInvitationCallBack(props.id)}
          style={styles.buttonStyle}>
          <Text
            style={{
              fontSize: 14,
              color: '#FF3B3B',
            }}>
            X Decline
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.acceptInvitationCallBack(props.id)}
          style={styles.buttonStyle}>
          <Text
            style={{
              fontSize: 14,
              color: '#38D459',
            }}>
            ✓ Accept
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    width: 315,
    height: 133,
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  profileImage: {
    width: 50,
    height: 50,
    margin: 10,
  },
  topSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: 50,
  },
  topButton:{
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttomSection: {
    flexDirection: 'row',
    borderTopColor: '#D8D8D8',
    borderTopWidth: 1,
    height: 52,
    width: '100%',
  },
});
