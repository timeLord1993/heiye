import { View, Text } from "@tarojs/components";
import { Avatar, Cell, CellGroup } from "@nutui/nutui-react-taro";

import "./my.scss";

export default function MyIndex() {
  return (
    <View className='my-wrapper'>
      <View className='wrapper-outlit'>
        <View className='header'>
          <Avatar size='large' icon='my' shape='square' />
          <View className='user'>
            <Text className='name'>张</Text>
            <Text className='level'>青铜会员</Text>
          </View>
        </View>
        <View className='links'>
          <CellGroup title='收藏'>
            <Cell title='链接1' icon='addfollow' isLink />
            <Cell title='链接2' icon='tips' isLink />
            <Cell title='链接3' icon='setting' isLink />
          </CellGroup>
        </View>
      </View>
    </View>
  );
}
