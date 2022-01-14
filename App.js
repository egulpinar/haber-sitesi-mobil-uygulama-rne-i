import * as React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
  Dimensions, 
} from 'react-native';
import Constants from 'expo-constants';
import data from './assets/data.json';
import NewsCard from './components/NewsCard';
import banner from './assets/banner.json';

function App() {
  const renderNews = ({ item }) => <NewsCard news={item} />;

  return (
  
    <SafeAreaView style={styles.container}>
    <Text style={styles.headerText}>News</Text>
      <View>
        
        <FlatList 
          ListHeaderComponent={()=> <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {
          banner.map(bannerNews=> 
          <Image 
          style={styles.banner_image}
          source={{uri:bannerNews.imageUrl}}/>)
        }
        </ScrollView> }
          keyExtractor={(item, index) => item.u_id.toString()}
          data={data}
          renderItem={renderNews}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
    banner_image: {
      height: Dimensions.get('window').height/5,
      width: Dimensions.get('window').width/2,
      
    },
    headerText: {
      fontWeight:'bold',
      fontSize: 50,
    }

});

export default App;
