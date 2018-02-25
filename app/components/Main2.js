import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { withRouter } from 'react-router'
 import { connect } from 'react-redux';
//import Sidebar from './Sidebar.js';
// import { Colors, Fonts } from '../constant'
// import CategoryPicker from './picker/CategoryPicker.js'
// import TablePicker from './picker/TablePicker.js';
// import MainMenu from './menu/MainMenu.js'
// import BottomQuickLinks from './menu/BottomQuickLinks.js'
// import Cart from './order/Cart.js';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
  windows: 'Press Ctrl+R to reload,\n' +
    'Shift+F10 or shake for dev menu'
});

class Main2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    // this.props.dispatch(getSpecificItems(this.props.selectedCategory))
  }
  componentWillReceiveProps(newProps) {
    this.setState({
    })
    // this.props.dispatch(getSpecificItems(newProps.selectedCategory))
  }
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome to React Native!{this.props.table}
      </Text>
      <Text style={styles.instructions}>
        To get started, edit App.xvzxczfvarfas 
      </Text>
      <Text style={styles.instructions}>
      askjf asdfjsdfjk sdfhsd jksdfjksd jksdj
      </Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// ======================== REDUX CONNECTORS ========================
const mapStateToProps = (state) => {
  return {
    table: state.receipt.table
  };
};

// ==================================================================
 export default connect(mapStateToProps)(Main2)
// export default Main
// export default withRouter(connect(mapStateToProps)(Main))