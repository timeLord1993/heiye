import { View, Text } from "@tarojs/components";

import "./index.scss";

interface viewCardType {
  title: string;
  desc: string;
  src?: string;
  [propName: string]: any;
}

export default function ViewCard({ title, desc, src, onClick }: viewCardType) {
  return (
    <View className='view-card' onClick={() => onClick()}>
      <View className='view-card-wrapper'>
        <View className='view-card-img'>
          <img src={src} alt={title} />
        </View>
        <Text className='view-card-title'>{title}</Text>
        <Text className='view-card-desc'>{desc}</Text>
      </View>
    </View>
  );
}
