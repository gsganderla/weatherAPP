import { View, Image } from "react-native";
import { styles } from "./styles";

const weatherImages = [
  { description: 'céu limpo', path: require('../../../assets/clear.png') },
  { description: 'poucas nuvens', path: require('../../../assets/clouds.png') },
  { description: 'nublado', path: require('../../../assets/clouds.png') },
  { description: 'chuva moderada', path: require('../../../assets/rain.png') },
  { description: 'Nuvens dispersas', path: require('../../../assets/clouds.png') },
  { description: 'nuvens quebradas', path: require('../../../assets/clouds.png') },
  { description: 'chuva de chuveiro', path: require('../../../assets/rain.png') },
  { description: 'chuva', path: require('../../../assets/rain.png') },
  { description: 'chuva leve', path: require('../../../assets/rain.png') },
  { description: 'tempestade', path: require('../../../assets/rain.png') },
  { description: 'neve', path: require('../../../assets/snow.png') },
  { description: 'névoa', path: require('../../../assets/mist.png') },
]

export default function Images(props) {
  const weather = weatherImages.filter(a => a.description === props.weather);
  
  if (weather && weather.length === 0) return null
  return (
    <View style={styles.container}>
      <Image source={weather[0].path} />
    </View>
  )
}