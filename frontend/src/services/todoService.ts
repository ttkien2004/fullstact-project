import { Status, todoType } from "../types/todoType";
import axios from "axios";

export interface ApiResponse<T> {
    data: T,
    message?: string,
    status?: string
}

const url = 'http://localhost:5000/api/todo-lists'
const todoApi = {
    getAllTodos: async (): Promise<ApiResponse<todoType[]>> => {
        try {
            const response = await axios.get(`${url}/getAll`)

            return {
                data: response.data.todoLists
            }
        }catch(err) {
            console.log(err)
            throw err
        }
    },
    getOneTodo: async (id: string): Promise<ApiResponse<todoType>> => {
        try {
            const response = await axios.get(`${url}/getOne`)

            return {
                data: response.data
            }
        }catch (err) {
            console.log(err)
            throw err
        }
    },
    createTodo: async (title: string, author: string, status: Status): Promise<ApiResponse<todoType>> => {
        try {
            const response = await axios.post(`${url}/create`, {
                title, author, status
            })

            return {
                data: response.data
            }
        }catch (err) {
            console.log(err)
            throw err
        }
    },
    deleteTodo: async (id: string): Promise<ApiResponse<todoType[]>> => {
        try {
            const response = await axios.delete(`${url}/delete/${id}`)

            return {
                data: response.data.data
            }
        }catch (err) {
            console.log(err)
            throw err 
        }
    },
    updateTodo: async (id: string): Promise<ApiResponse<todoType>> => {
        try {
            const response = await axios.patch(`${url}/update/${id}`)

            return {
                data: response.data
            }
        }catch (err) {
            console.log(err)
            throw err
        }
    }
}

export default todoApi;