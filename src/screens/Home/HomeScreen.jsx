import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'
import { colors } from '../../constants'
import ContainerWrapper from '../../components/ContainerWrapper'
import TodoItem from './Components/TodoItem'
import useTodos from '../../hooks/useTodos'
import WeeklyGoals from './Components/WeeklyGoals'
const HomeScreen = () => {
  const { todos: data, loading } = useTodos()

  if (loading) {
    return (
      <ContainerWrapper>
        <ActivityIndicator size="large" color={colors.main} />
      </ContainerWrapper>
    );
  }
  return (
    <ContainerWrapper>
      <Text style={styles.h1}>Weekly Goals</Text>
      <WeeklyGoals/>
      <Text style={styles.h1}>Daily Todos</Text>
      <Text style={styles.h4}>Daily</Text>
      {data && data.map((item) =>
        <TodoItem todo={item} key={item.id} />
      )}
      <Text style={styles.h4}>Others</Text>
      {data && data.map((item) =>
        <TodoItem todo={item} key={item.id} />
      )}
    </ContainerWrapper>
  )
}

export default HomeScreen


const styles = StyleSheet.create({
  h1: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 10
  },
  h4: {
    color: colors.white,
    fontSize: 18,
    marginBottom: 15
  },

})