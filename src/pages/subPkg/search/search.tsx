import { useState } from "react";
import { View, Text } from "@tarojs/components";
import { SearchBar, Tag } from "@nutui/nutui-react-taro";

import "./search.scss";

export default function SearchIndex() {
  const [value, setValue] = useState("");
  const change = (val: string, e: Event) => {
    setValue(val);
  };

  const [history, setHistory] = useState([
    "前端意思意思下",
    "React源码分析",
    "Vue源码分析",
  ]);
  return (
    <View className='search-wrapper'>
      <SearchBar
        onChange={(val: string, e: Event) => change(val, e)}
        maxLength={10}
      />
      <View className='history'>
        {history.map((h) => (
          <Tag type='primary'>{h}</Tag>
        ))}
      </View>
    </View>
  );
}
