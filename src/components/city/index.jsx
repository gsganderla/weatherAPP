import { Text, View } from "react-native";
import { styles } from "./styles";

export default function City(props){

    return(
        <View style={styles.container}>
           <Text style={styles.cityText} >{props.eventHour}</Text>
        </View>
    )
}