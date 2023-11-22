import { Text, View, Image } from "react-native";
import { styles } from "./styles";
import { drop } from 'react-native-heroicons/outline'

export default function Section(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.cardTemperature}>{props.eventTemperatura}ºc</Text>
            <Text style={styles.cardWeather}>{props.eventDescricao}</Text>
            <View style={styles.containerRow}>
                <Image source={require('../../../assets/humidity.png')} className="h-6 w-6" />
                <Text style={styles.cardWeather}>{props.eventUmidade}%</Text>
                <Image source={require('../../../assets/wind.png')} size="5" />
                <Text style={styles.cardWeather}>{props.eventUmidade}vento</Text>
            </View>
        </View>
    )
}