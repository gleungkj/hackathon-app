import axios, { AxiosRequestConfig } from "axios";
import { flightQueryDTO } from "../types/flightQuery";

export const sendGenAIQuery = async (query: flightQueryDTO) : Promise<void> => {
    try {
        await axios({
            method: 'post',
            url: `http://localhost:3000/studentList`, //give the correct URL
            data: {
                ...query
            }
        } as AxiosRequestConfig)
    } catch (error) {
        throw new Error(error as unknown as string)
    }
}