import { Video, View } from "@tarojs/components";
import { Icon } from "@nutui/nutui-react-taro";

import "./index.scss";

interface VideoParams {
  url: string;
  title: string;
  [propName: string]: string;
}

export default function BaseVideoPageItem(params: VideoParams) {
  const {
    url = "https://my.tv.sohu.com/play/videonew.do?vid=399047715&ver=1&ssl=1&referer=https%3A%2F%2Ftv.sohu.com%2Fs%2Fsohuplayer%2Fiplay.html%3Fbid%3D399047715%26autoplay%3Dtrue%26disablePlaylist%3Dtrue&t=1680677442676",
    title,
  } = params;
  return (
    <View className='base-video-container'>
      <View className='video-box'>
        <Video
          id='video-node'
          src={url}
          poster='https://misc.aotu.io/booxood/mobile-video/cover_900x500.jpg'
          initialTime={0}
          controls={false}
          autoplay={false}
          loop={false}
          muted={false}
        ></Video>
      </View>
      <View className='fix-control'>
        <View className='follow fix-controlitem'>
          <Icon name='follow' color='#fff' size='1.6rem'></Icon>
        </View>
        <View className='comment fix-control-item'>
          <Icon name='edit' color='#fff' size='1.6rem'></Icon>
        </View>
        <View className='share fix-control-item'>
          <Icon name='share' color='#fff' size='1.6rem'></Icon>
        </View>
      </View>
    </View>
  );
}
