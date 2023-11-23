import { Text, View, Image } from "react-native";
import { styles } from "./styles";
import { drop } from 'react-native-heroicons/outline'

export default function Section(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.cardTemperature}>{props.eventTemperatura}ºc</Text>
            <Text style={styles.cardWeather}>{props.eventDescricao}</Text>
        </View>
    )
}