import { newDiaryEntry, Weather, Visibility } from "./types";


const parseComment = (commentFromRequest: any): string=>{
    if(typeof commentFromRequest != 'string'){
        throw new Error('Incorrect or missing comment')
    }

    return commentFromRequest
}

const isString = (string: string) : boolean=>{
    return typeof string === 'string'
}

const parseDate= (dateFromRequest: any):string =>{
    if(!isString(dateFromRequest) || !isDate(dateFromRequest)){
        throw new Error ('Incorrect or missing date')
    }

    return dateFromRequest
}

const isDate = (date: string):boolean=>{

    return Boolean(Date.parse(date))
}

const isWeather = (param: any): boolean=>{
    return Object.values(Weather).includes(param)
}

const parseWeather = (weatherFromRequest: any): Weather=>{
    if(!isString(weatherFromRequest) || !isWeather(weatherFromRequest)){
        throw new Error ('Incorrect or missing weather')
    }
    return weatherFromRequest
}

const isVisibility = (param:any): boolean=>{
    return Object.values(Visibility).includes(param)
}

const parseVisibility = (visibilityFromRequest: any): Visibility=>{
    if(!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)){
        throw new Error ('Incorrect or missing visibility')
    }
    return visibilityFromRequest

}

export const toNewDiaryEntry =(object: any): newDiaryEntry=>{
    const newEntry: newDiaryEntry ={
        comment:parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility)

    } 

    return newEntry
}



export default toNewDiaryEntry




