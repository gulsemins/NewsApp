import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import NewsCard from './components/NewsCard';
import news_data from '../news_data.json';
import news_banner_data from '../news_banner_data.json';

function App() {
  const renderNews = ({item}: any) => <NewsCard news={item} />;
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          ListHeaderComponent={() => (
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {news_banner_data.map(bannerNews => (
                <Image
                  key={bannerNews.id}
                  style={styles.banner_image}
                  source={{uri: bannerNews.imageUrl}}
                />
              ))}
            </ScrollView>
          )}
          keyExtractor={item => item.u_id.toString()}
          data={news_data}
          // renderItem={({item}) => (
          //   <NewsCard
          //     //Burda news i istediğin şekilde isimlendirebilirsin sadece mesela bu NewsCarda gidecek bu yüzen onun içine items isimli değilde news isimli bir değişken göndersen daha iyi olur(haber içeriğine haber gönderiyoruz gibi)
          //     news={item}
          //   />
          // )}
          renderItem={renderNews}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  banner_image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
  },
});
export default App;
