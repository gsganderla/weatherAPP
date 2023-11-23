import { Text, View, Image } from "react-native";
import { styles } from "./styles";
import { ArrowTrendingDownIcon, ArrowTrendingUpIcon } from 'react-native-heroicons/outline'

export default function Footer(props) {
    return (
    <View>
        <View style={styles.container}>
        <View style={styles.container}>
            <Image source={require('../../../assets/humidity.png')}style={{width:25, height:25}} />
                <Text style={styles.cardTemperature}>{props.eventUmidade}%</Text>
        </View>
        <View style={styles.container}>
        <Image source={require('../../../assets/wind.png')} style={{width:25, height:25}}/>
                <Text style={styles.cardTemperature}>{props.eventVento}</Text>
        </View>
    </View>
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
    </View>
    )
}