import diaryData from '../db/diaries.json'
import { DiaryEntry, withoutCommentsDiaryEntry } from '../types'


const diaries : DiaryEntry[] = diaryData as DiaryEntry[] //aserción de tipos

export const getEntries = (): DiaryEntry[]=>  diaries

export const findById =

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

export const addentry =(): undefined=> undefined 