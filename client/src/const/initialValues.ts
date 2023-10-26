import { flightQueryDTO } from "../types/flightQuery";

export const initialQueryValues: flightQueryDTO = {
    From: '',
    To: '',
    Depart: new Date(),
    Return: new Date(),
    Travellers: 1,
    Budget: 0,
    Currency: 'GBP'
}

export const travellerNumbers: Array<Number> = [1,2,3,4,5,6,7,8,9,10]