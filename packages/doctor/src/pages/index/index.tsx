import {View, Text, Button} from '@tarojs/components'
import './index.scss'
import {Component} from "react";
import { test_log } from 'lz_components_test';

export default class Index extends Component {

  onTestLog = () => {
    test_log()
  }

  render() {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <Button onClick={this.onTestLog}>Doctor test_Log</Button>
      </View>
    )
  }
}
