import React, { Component } from 'react';
import {
  Button,
  Checkbox,
  Label,
  MasterDetailsView,
  MasterDetailsViewItem,
  MasterDetailsViewItemMaster,
  MasterDetailsViewItemDetails,
  NavPane,
  NavPaneItem,
  ProgressCircle,
  Radio,
  TextInput,
  Text,
  TitleBar,
  View,
  Window
} from 'react-desktop/windows';
import { Link } from 'react-router';
import styles from './JSONToXML.css';


export default class JSONToXML extends Component {
  render() {
    return (
      <div className={styles.jsonToXMLContainer}>
        <View className={styles.jsonToXML} layout="vertical">
          <div><Text>Row 1</Text></div>
          <div><Text>Row 2</Text></div>
        </View>
      </div>
    );
  }
}
