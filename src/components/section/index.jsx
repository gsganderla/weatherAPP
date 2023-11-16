import { Text, View } from "react-native";
import { styles } from "./styles";

export default function Section(){
    return(
        <View style={styles.container}>
           <Text style={styles.cardTemperature}>28ºc</Text>
           <Text style={styles.cardWeather}>Nublado</Text>
           <Text style={styles.cardWeather}>80%</Text>
        </View>
    )
}