import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
  
} from 'react-native';
import {connect} from "react-redux";
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../redux/actions';
import colors from '../styles/colors';
import InputField  from "../components/form/InputField";
import NextArrowButton from "../components/buttons/NextArrowButton";
import Notification from "../components/Notification";
import Loader from "../components/Loader";
   
 class LogIn extends Component{
  constructor(props) {
    super(props);
    this.state = {
      formValid: true,
      validEmail: false,
      emailAddress: '',
      password: '',
      validPassword: false,
      loadingVisible: false,
    };

    this.handleCloseNotification = this.handleCloseNotification.bind(this);
     this.handleEmailChange = this.handleEmailChange.bind(this);
     this.handleNextButton = this.handleNextButton.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.toggleNextButtonState = this.toggleNextButtonState.bind(this);
  }
  handleNextButton() {
    // let's simulate a slow server to show the notification
    this.setState({loadingVisible: true});

    setTimeout(()=>{
      const {emailAddress, password  } = this.state;
      if (this.props.logIn(emailAddress, password )) {
        this.setState({ formValid: true ,loadingVisible:false});
      } else {
           this.setState({ formValid: false , loadingVisible:false});
       }
    },2000);

  }

 handleCloseNotification() {
  this.setState({ formValid: true });
}

handleEmailChange(email) {
  // eslint-disable-next-line
  const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const { validEmail } = this.state;
  this.setState({ emailAddress: email });
  if (!validEmail) {
    if (emailCheckRegex.test(email)) {
      this.setState({ validEmail: true });
    }
  } else if (!emailCheckRegex.test(email)) {
    this.setState({ validEmail: false });
  }
}

handlePasswordChange(password) {
  this.setState({password});
  const { validPassword } = this.state;

  this.setState({ password });

  if (!validPassword) {
    if (password.length > 4) {
      // Password has to be at least 4 characters long
      this.setState({ validPassword: true });
    }
  } else if (password <= 4) {
    this.setState({ validPassword: false });
  }
}

toggleNextButtonState() {
  const { validEmail, validPassword } = this.state;
  if (validEmail && validPassword) {
    return false;
  }
  return true;
}


    render(){
      const {formValid,loadingVisible,validEmail,validPassword} = this.state;
      const showNotification = formValid ? false : true;
      const background = formValid ? colors.green01 : colors.darkOrange;
      const notificationMarginTop = showNotification? 10:0;
      console.log(this.props.loggedInStatus);
        return (
            <KeyboardAvoidingView 
            style={[{backgroundColor: background},styles.wrapper]}
            behavior="padding" 
            > 
                
                    <ScrollView style = {styles.scrollView}>
                        <Text style={styles.loginHeader}>Log In</Text>
                        <InputField
                        labelText="EMAIL ADDRESS"
                        labelTextSize= {20}
                        labelColor = {colors.white}
                        textColor = {colors.white}
                        borderBottomColor = {colors.white}
                        inputType = "email"
                        customStyle = {{marginBottom: 30}}
                        onChangeText = {this.handleEmailChange}
                        showCheckmark = {validEmail}
                        autoFocus = {true}
                        />
                         <InputField
                        labelText="PASSWORD"
                        labelTextSize= {20}
                        labelColor = {colors.white}
                        textColor = {colors.white}
                        borderBottomColor = {colors.white}
                        inputType = "password"
                        customStyle = {{marginBottom: 30}}
                        onChangeText = {this.handlePasswordChange}
                        showCheckmark= {validPassword}

                        />
                        
                        
                    </ScrollView>
                    
                    
                      <NextArrowButton
                       handleNextButton={this.handleNextButton}
                       disabled = {this.toggleNextButtonState()}
                      />
                   
                    <View style={[styles.notificationWrapper,{marginTop: notificationMarginTop}]}>
                      <Notification
                      showNotification ={showNotification}
                      handleCloseNotification ={this.handleCloseNotification}
                      type= "Error"
                      firstLine="Those credentails don't look right.                  "
                      secondLine = "Plase try again."
                      />
                    </View>
                   
                <Loader
                modalVisible = {loadingVisible}
                animationType = "fade"
                />
            </KeyboardAvoidingView>
        );

    };

};
const styles = StyleSheet.create({
    wrapper: {
      display: 'flex',
      flex: 1,
     
    },
    scrollViewWrapper: {
      marginTop: 70,
      flex: 1,
      // padding: 0,
      // //position: 'absolute',
      // left: 0,
      // right: 0,
      // top: 0,
      // bottom: 0,
      
    },
    scrollView: {
      marginTop:90,
      paddingLeft: 30,
      paddingRight: 30,
      paddingTop: 0,
      flex: 1,
      
    },
    loginHeader: {
     fontSize: 34,
      color: colors.white,
      fontWeight: '300',
      marginBottom: 40,
    },
    notificationWrapper: {
      position: 'absolute',
      bottom: 0,
    },
    
  });
  const mapStateToProps = (state) => {
    return{
    loggedInStatus: state.loggedInStatus,
  }};
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(ActionCreators, dispatch);
  };

  export default connect(mapStateToProps , mapDispatchToProps)(LogIn);

  