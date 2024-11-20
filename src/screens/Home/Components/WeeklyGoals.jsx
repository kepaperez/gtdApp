import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import React, { Component } from 'react'
import { colors } from '../../../constants'

const WeeklyGoals = () => {

    const goals = [
        {
            "goalName": "Correr 🏃",
            "color": "#9c9825",
            "days": [2, 4, 6],
            "count": 2
        },
        {
            "goalName": "Leer 📕",
            "color": "#9c2525",
            "days": [1, 4, 3],
            "count": 1
        },
        {
            "goalName": "Gym 🏋️",
            "color": "#25619c",
            "days": [1, 2, 3, 4, 5, 6, 7],
            "count": 2
        },
        {
            "goalName": "Comer sano 🫑",
            "color": "#28802c",
            "days": [1, 2, 3, 4, 5, 6, 7],
            "count": 4
        },
        {
            "goalName": "Limpiar 🚀",
            "color": "#522880",
            "days": [1, 2, 5, 6, 7],
            "count": 3
        }
    ]




    return (
        <View style={styles.mainContainer}>
            {goals.map((goal, index) => {
                const daysGoal = goal.days.length
                return (
                    <View
                        style={[styles.goalContainer, { backgroundColor: goal.color }]}
                        key={index}
                    >
                        <Text style={styles.goalName}>{goal.goalName}</Text>
                        <Text style={styles.goalNumber}>{goal.count}/{daysGoal}</Text>
                    </View>
                )
            }
            )}
        </View>

    )

}

export default WeeklyGoals


const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 7,
        flexWrap: 'wrap'
    },
    goalContainer: {
        backgroundColor: colors.blackLigth,
        borderRadius: 7,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.8)'

    },
    goalName: {
        color: colors.white,
        fontSize: 16,
    },
    goalNumber: {
        color: colors.white,
        fontSize: 24,
        fontWeight: '600'
    }


})