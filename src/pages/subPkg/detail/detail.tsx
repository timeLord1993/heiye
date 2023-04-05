import { View } from "@tarojs/components";
import BaseVideoPageItem from "../../../components/baseVideoPageItem/index";

import "./detail.scss";

export default function Detail() {
  return (
    <View className='video-detail'>
      <BaseVideoPageItem
        url='https://www.iesdouyin.com/share/video/7217451438924991803/?region=CN&mid=7217451464569310011&u_code=0&titleType=title&did=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&from_ssr=1'
        title='123'
      />
    </View>
  );
}
