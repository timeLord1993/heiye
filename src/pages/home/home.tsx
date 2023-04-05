import { useState } from "react";
import { View, ScrollView } from "@tarojs/components";
import { Swiper, SwiperItem, Sticky, Icon } from "@nutui/nutui-react-taro";
import Taro from "@tarojs/taro";
import ViewCard from "../../components/viewCard/index";

import "./home.scss";
import data from "../../apis/mock";

function HomeSwiper() {
  const [initPage1, setInitPage1] = useState(0);
  const [height, setHeight] = useState<any>(150);
  const onChange = (e) => {
    // do something
  };
  return (
    <View className='home-swiper'>
      <Swiper
        height={height}
        paginationColor='#426543'
        autoPlay='3000'
        initPage={initPage1}
        paginationVisible
        onChange={onChange}
      >
        <SwiperItem>
          <img
            src='https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg'
            alt=''
          />
        </SwiperItem>
        <SwiperItem>
          <img
            src='https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg'
            alt=''
          />
        </SwiperItem>
        <SwiperItem>
          <img
            src='https://storage.360buyimg.com/jdc-article/welcomenutui.jpg'
            alt=''
          />
        </SwiperItem>
        <SwiperItem>
          <img
            src='https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
            alt=''
          />
        </SwiperItem>
      </Swiper>
    </View>
  );
}

export default function Index() {
  const Threshold = 20;

  const onScrollToUpper = () => {};

  const onScroll = (e) => {
    console.log(e.detail);
  };
  const onSearch = () => {
    Taro.navigateTo({
      url: "/pages/subPkg/search/search",
    });
  };
  const toDetail = () => {
    Taro.navigateTo({
      url: "/pages/subPkg/detail/detail",
    });
  };
  return (
    <>
      <Sticky>
        <View className='home-search' onClick={onSearch}>
          <View className='content'>
            <Icon name='search' size='18' color='#fa2c19'></Icon>
            <View className='placeholder'>请输入搜索内容</View>
          </View>
        </View>
      </Sticky>
      <View className='home-wrapper'>
        <HomeSwiper />
        <ScrollView
          type='list'
          className='home-scroll-view'
          scrollY
          scrollWithAnimation
          lowerThreshold={Threshold}
          upperThreshold={Threshold}
          onScrollToUpper={onScrollToUpper}
          onScroll={onScroll}
        >
          <View className='content'>
            {data.result.map((res) => (
              <ViewCard
                key={res.hot_value}
                className='content-card'
                title={res.author}
                desc={res.title}
                src={res.item_cover}
                onClick={toDetail}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
}
