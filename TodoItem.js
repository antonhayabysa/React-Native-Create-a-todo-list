import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';


const TodoItem = ({title, isComplete, complete, remove}) => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={isComplete && styles.textCoplete}>
                    {title}
                </Text>
            </View>
            <View>
                <TouchableOpacity
                    style={[styles.button, styles.buttonSuccess]}
                    onPress={complete}
                >
                    <Text style={styles.buttonText}>
                        {isComplete ? 'Cancel' : 'Execute'}
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, styles.buttonDanger]}
                    onPress={remove}>
                    <Text style={styles.buttonText}>
                        Delate
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

TodoItem.defaultProps = {
    title: 'No text',
    isComplete: false,
    complete: () => {
    },
    remove: () => {
    }
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth: 0.8,
    },
    textContainer: {
        flex: 1,

    },
    textCoplete: {
        textDecorationLine: 'line-through',
    },
    button: {
        minWidth: 100,
        margin: 3,
        marginHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 6,
        backgroundColor: '#007bff'
    },
    buttonSuccess: {
        backgroundColor: '#28a745',

    },
    buttonDanger: {
        backgroundColor: '#dc3545',
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
    },

})


export default TodoItem
