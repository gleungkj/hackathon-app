export interface flightQueryDTO {
    From: string
    To: string
    Depart: Date
    Return: Date
    Travellers: number
    Budget: number
    Currency: string //replace with currency enum
}