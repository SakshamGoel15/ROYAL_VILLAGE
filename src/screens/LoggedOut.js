import React, { Component } from 'react';
import colors from "../styles/colors/index"
import RoundedButton from '../components/buttons/RoundedButton';
import Icon from "react-native-vector-icons/FontAwesome";
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView, 
  StyleSheet
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


export default class LoggedOut extends React.Component {
    onFacebookPress(){
        alert("facebook login page");
    }
    onCreateAccountPress(){
        alert("Create Account button pressed");
    }
    onMoreOptionsPress(){
        alert("more option button pressed");
    }
    render(){
        return(
            
            <View style={styles.container}>
                <View style ={styles.welcomeContainer}>
                <Image
                source={require('../img/logo4.png')}
                style = {styles.logo}
                />
                <Text style={styles.welcomeText}>Welcome to Royal Village</Text>
                < RoundedButton 
                text ="Continue with Facebook"
                textColor = {colors.green01}
                background={colors.white}
                icon={<Icon name="facebook-official" size={25} style={styles.facebookButtonIcon} />}
                handleOnPress ={this.onFacebookPress}
                />
                < RoundedButton 
                text ="Create Account"
                textColor = {colors.white}
                // background={colors.white}
                icon={<Icon name="user-circle" size={25} style={styles.accountButtonIcon} />}
                handleOnPress ={this.onCreateAccountPress}
                />
                <TouchableHighlight
                 style={styles.moreOptionsButton}
                 onPress={this.onMoreOptionsPress}
                 >
                    <Text style={styles.moreOptionsButtonText}>More options</Text>
                </TouchableHighlight>
                
                <View style={styles.termsAndConditions}>
                    <Text style={styles.termsText}>
                    By tapping Continue, Create Account or More </Text>
                    <Text style={styles.termsText}>options, </Text>
                    <Text style={styles.termsText}>I agree to Royal Village's </Text>
                    <TouchableHighlight style={styles.linkButton}>
                        <Text style={styles.termsText}>Terms of Service</Text>
                    </TouchableHighlight>
                    <Text style={styles.termsText}>, </Text>
                    <TouchableHighlight style={styles.linkButton}>
                        <Text style={styles.termsText}>Payments Terms of Service</Text>
                    </TouchableHighlight>
                    <Text style={styles.termsText}>, </Text>
                    <TouchableHighlight style={styles.linkButton}>
                        <Text style={styles.termsText}>Privacy Policy</Text>
                    </TouchableHighlight>
                    <Text style={styles.termsText}>, and </Text>
                    <TouchableHighlight style={styles.linkButton}>
                        <Text style={styles.termsText}>Nondiscrimination Policy.</Text>
                    </TouchableHighlight>
                </View>

                </View>
            </View>
            
        );

    };

};


const styles = StyleSheet.create({
 
    container:{
        flex:1,
        display: "flex",
        backgroundColor: colors.green01,
    },
    logo:{
        width:100,
        height:100,
        marginTop:50,
        marginBottom:40,
    },
    welcomeContainer:{
        flex:1,
        display:'flex',
        marginTop:30,
        padding:20,
    },
        welcomeText:{
            fontSize:30,
            color: colors.white,
            fontWeight: '300',
            marginBottom: 40
    },
    facebookButtonIcon:{
        
        color: colors.green01,
        position: "relative",
        left:40,
        zIndex:8,
    },
    accountButtonIcon:{
        
        color: colors.white,
        position: "relative",
        left:40,
        zIndex:8,
    },
    moreOptionsButton:{
        marginTop:8,

    },
    moreOptionsButtonText:{
        color:Colors.white,
        fontSize:16,

    },
    termsAndConditions: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginTop: 30,
      },
      termsText: {
        color: colors.white,
        fontSize: 13,
        fontWeight: '600',
      },
      linkButton: {
        borderBottomWidth: 1,
        borderBottomColor: colors.white,
      },
})