import { Text, View } from "react-native";
import { styles } from "./styles";

export default function Section(props){
    return(
        <View style={styles.container}>
           <Text style={styles.cardTemperature}>{props.eventTemperatura}ºc</Text>
           <Text style={styles.cardWeather}>{props.eventDescricao}</Text>
           <Text style={styles.cardWeather}>{props.eventUmidade}%</Text>
        </View>
    )
}