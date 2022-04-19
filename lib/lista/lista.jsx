import { StyleSheet, Text, View } from 'react-native';

export default function Lista(props){
    return(
        <View>
            {
                props.lista.map((data)=>{
                    return (
                    <View >
                        <Text>{data.nome}: {data.telefone}</Text>
                    </View>
                    );
                })
            }
        </View>
    );
}

