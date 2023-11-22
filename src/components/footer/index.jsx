import { Text, View } from "react-native";
import { styles } from "./styles";
import { ArrowTrendingDownIcon, ArrowTrendingUpIcon } from 'react-native-heroicons/outline'

export default function Footer(props) {
    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <ArrowTrendingDownIcon size="30" color="white" />
                <Text style={styles.cardTemperature}>{props.eventTempMin}ºc</Text>
            </View>
            <View style={styles.container}>
                <ArrowTrendingUpIcon size="30" color="white" />
                <Text style={styles.cardTemperature}>{props.eventTempMax}ºc</Text>
            </View>
        </View>
    )
}