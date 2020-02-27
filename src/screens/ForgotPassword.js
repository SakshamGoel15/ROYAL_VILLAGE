import React, { Component } from 'react';
import {
    View,
    Text,
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet
  } from 'react-native';
  import Icon from 'react-native-vector-icons/FontAwesome';
  import colors from '../styles/colors';
//   import transparentHeaderStyle from '../styles/navigation';
   import InputField from '../components/form/InputField';
  import Notification from '../components/Notification';
  import NextArrowButton from '../components/buttons/NextArrowButton';
//   import NavBarButton from '../components/buttons/NavBarButton';
  import Loader from '../components/Loader';
//   import styles from './styles/ForgotPassword';
  
export default class ForgotPassword extends Component{
  constructor(props) {
    super(props);
    this.state = {
      formValid: true,
      loadingVisible: false,
      validEmail: false,
      emailAddress: '',
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
     this.goToNextStep = this.goToNextStep.bind(this);
     this.handleCloseNotification = this.handleCloseNotification.bind(this);
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
  goToNextStep() {
    const { emailAddress } = this.state;
    this.setState({ loadingVisible: true });
    setTimeout(() => {
      if (emailAddress === 'Sakshamcool99@gmail.com') {
        this.setState({
          loadingVisible: false,
          formValid: false,
        });
      } else {
        this.setState({
          loadingVisible: false,
          formValid: true,
        });
      }
    }, 2000);
  }

  handleCloseNotification() {
    this.setState({ formValid: true });
  }
  
  


  render(){
    const { loadingVisible, formValid, validEmail } = this.state;
     const background = formValid ? colors.green01 : colors.darkOrange;
     const showNotification = formValid ? false : true;
    //  const notificationMarginTop = showNotification? 10:0;
        return(
            <KeyboardAvoidingView
            style={[{backgroundColor: background},styles.wrapper]}
            behavior= "padding"
            >
                  
                  <ScrollView style = {styles.scrollView}>
                      <Text style={styles.forgotPasswordHeading}>Forgot your password?</Text>
                      <Text style={styles.forgotPasswordSubheading}>Enter your Email to find your account</Text>
                      <InputField
                      customStyle={{ marginBottom: 30 }}
                      textColor={colors.white}
                      labelText="EMAIL ADDRESS"
                      labelTextSize={14}
                      labelColor={colors.white}
                      borderBottomColor={colors.white}
                      inputType="email"
                      onChangeText={this.handleEmailChange}
                     showCheckmark={validEmail}
                      />
                  </ScrollView>
                 
                    <NextArrowButton
                    handleNextButton={this.goToNextStep}
                    disabled={!validEmail}
                    />
                 
                  <View style={styles.notificationWrapper}>
                  <Notification
                     showNotification={showNotification}
                     handleCloseNotification={this.handleCloseNotification}
                     type="Error:"
                     firstLine="No account exists for the requested "
                     secondLine="email address."
                  />
                  </View>
                  <Loader
                  modalVisible={loadingVisible}
                  animationType="fade"
                  />
            </KeyboardAvoidingView>
            
        )
    }
}
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

      // form:{
      //   marginTop:90,
      //   paddingLeft:20,
      //   paddingRight:20,
      //   flex:1,
      // },
      forgotPasswordHeading: {
        fontSize: 30,
        color: colors.white,
        fontWeight: '300',
        
      },
      forgotPasswordSubheading: {
        color: colors.white,
        fontWeight: '600',
        fontSize: 17,
        marginTop: 10,
        marginBottom: 60,
      },
     
      notificationWrapper: {
         position: 'absolute',
         width:'100%',
        bottom: 0,
      }
})