import { Text, View } from "react-native";
import { styles } from "./styles";

export default function Image(props){
    return(
        <View style={styles.container}>
           <Text>{props.eventValue}</Text>
        </View>
    )
}