// src/services/api.js
const API_BASE_URL = 'https://api.example.com'; // Replace with your API base URL

export const getTodos = async () => {
  
        try {
            const data = require('./data.json')
            return data;

        } catch (error) {
            console.error('Error fetching todos:', error);
            throw error;
        }
    

    //   try {
    //     const response = await fetch(`${API_BASE_URL}/todos`, {
    //       method: 'GET',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //     });

    //     if (!response.ok) {
    //       throw new Error('Network response was not ok');
    //     }

    //     const data = await response.json();
    //     return data;
    //   } catch (error) {
    //     console.error('Error fetching todos:', error);
    //     throw error;
    //   }
};
