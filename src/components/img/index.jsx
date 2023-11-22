import { Text, View, Image } from "react-native";
import { styles } from "./styles";

export const images = {
  weatherPics: {
    'clear sky': require('../../../assets/clear.png'),
    'few clouds': require('../../../assets/clouds.png'),
    'scattered clouds': require('../../../assets/clouds.png'),
    'broken clouds': require('../../../assets/clouds.png'),
    'shower rain': require('../../../assets/rain.png'),
    'rain': require('../../../assets/rain.png'),
    'thunderstorm': require('../../../assets/rain.png'),
    'snow': require('../../../assets/snow.png'),
    'mist': require('../../../assets/mist.png'),
  }
}

export default function Images(props) {
  const weather = props.weather

  console.log(images.weatherPics.weather);

  return (
    <View style={styles.container}>
      <Image source={images.weatherPics.weather} />
    </View>
  )
}