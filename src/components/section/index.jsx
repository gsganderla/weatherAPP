import { Text, View, Image } from "react-native";
import { styles } from "./styles";
import { drop } from 'react-native-heroicons/outline'

export default function Section(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.cardTemperature}>{props.eventTemperatura}ºc</Text>
            <Text style={styles.cardWeather}>{props.eventDescricao}</Text>
            <View style={styles.containerRow}>
                <Image source={require('../../../assets/humidity.png')} style={{width:25, height:25}}  />
                <Text style={styles.cardWeather}>{props.eventUmidade}%</Text>
                <Image source={require('../../../assets/wind.png')} style={{width:25, height:25}} />
                <Text style={styles.cardWeather}>{props.eventUmidade}vento</Text>
            </View>
        </View>
    )
}  