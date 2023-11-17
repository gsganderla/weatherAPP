import { Text, View } from "react-native";
import { styles } from "./styles";

export default function Footer(){
    return(
        <View style={styles.container}>
           <Text style={styles.cardTemperature}>22ºC</Text>
           <Text style={styles.cardTemperature}>32ºc</Text>
        </View>
    )
}