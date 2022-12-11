import diaryData from '../db/diaries.json'
import { DiaryEntry, withoutCommentsDiaryEntry, newDiaryEntry } from '../types'


const diaries : DiaryEntry[] = diaryData as DiaryEntry[] //aserción de tipos

export const getEntries = (): DiaryEntry[]=>  diaries

export const findById = (id:number): withoutCommentsDiaryEntry | undefined=>{
    const entry = diaries.find(d => d.id === id)
    if(entry != null){
        const {comment, ...restOfEntry} = entry
        return restOfEntry
    }
    return entry
}

export const getEntriesWithoutComments = (): withoutCommentsDiaryEntry[]=> {
    return diaries.map(({id, date,weather, visibility})=>{
        return {
            id,
            date,
            weather,
            visibility
        }
    })
}

export const addDiary =(newDiaryEntry: newDiaryEntry): DiaryEntry=>{
    const newDiary ={
        id: Math.max(...diaries.map(d => d.id)) +1,
        ...newDiaryEntry
    }

    diaries.push(newDiary)

    return newDiary
} 