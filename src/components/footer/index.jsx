import { Text, View } from "react-native";
import { styles } from "./styles";

export default function Footer(props){
    return(
        <View style={styles.container}>
           <Text style={styles.cardTemperature}>{props.eventTempMin}ºc</Text>
           <Text style={styles.cardTemperature}>{props.eventTempMax}ºc</Text>
        </View>
    )
}