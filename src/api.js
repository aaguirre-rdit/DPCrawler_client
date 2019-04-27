import axios from 'axios';
const url = 'http://localhost:4001'
export const getList = () => axios.get(`${url}/exercises/`);
export const getExerciseById = (id) => axios.get(`${url}/exercises/${id}`);
export const submitExercise = (data) => axios.post(`${url}/submissions`, data);
