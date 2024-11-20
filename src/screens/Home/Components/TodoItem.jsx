import { StyleSheet, Text, View } from "react-native"
import CustomCheckbox from "../../../components/CustomCheckbox"
import { colors } from "../../../constants"
const TodoItem = ({ todo }) => {
    return (
        <View style={styles.todoItem}>
            <CustomCheckbox
                checked={todo.check}
                onChange={() => handleCheckboxChange(todo.id)}
            />
            <Text style={styles.todoText}>
                {todo.value}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    todoText: {
      color: colors.white,
      fontSize: 16,
    },
    todoItem: {
      flexDirection: 'row',
      alignItems: 'center',
      alignContent: 'center',
      gap: 15,
      backgroundColor: colors.blackLigth,
      paddingHorizontal: 15,
      paddingVertical: 12,
      borderRadius: 8,
      marginBottom: 10
    }
  })
export default TodoItem