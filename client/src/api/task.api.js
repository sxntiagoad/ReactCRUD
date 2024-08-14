import axios from 'axios'

const tasksApi = axios.create({
    baseURL: 'http://localhost:9000/tasks/api/v1/tasks/'
})

export const getAllTask = () => {
    // return axios.get('http://localhost:9000/tasks/api/v1/tasks/')
    return tasksApi.get('/')
}

export const createTask = (task) => {
    return tasksApi.post('/', task)
}

export const deleteTask = (id) => tasksApi.delete(`/${id}/`);