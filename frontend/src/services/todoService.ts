import { todoType } from "../types/todoType";
import axios from "axios";

export interface ApiResponse<T> {
    data: T,
    message?: string,
    status?: string
}

const url = "localhost:5000/api/todo-lists"
const todoApi = {
    getAllTodos: async (): Promise<ApiResponse<todoType[]>> => {
        try {
            const response = await axios('http://localhost:5000/api/todo-lists/getAll')

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
            const response = await axios(`${url}/getOne`)

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