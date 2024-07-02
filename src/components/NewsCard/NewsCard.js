import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './NewsCard.style';
//App.tsx den gelen news bu propsun içerisine gelmiş oluyor
const NewsCard = ({news}) => {
  //const NewsCard = props => { normalde böyleydi ama aşağıda props.news.title gibi kalabalık yapıda kullanmka sitemediğimiz için {news yaptık}
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: news.imageUrl}} />
      <Text style={styles.title}>{news.title}</Text>
      <Text style={styles.description}>{news.description}</Text>
      <Text style={styles.author}>{news.author}</Text>
    </View>
  );
};
export default NewsCard;
