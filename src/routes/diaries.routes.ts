import express from 'express'
import * as diaryServices from '../controllers/diaries.controllers'
import { newDiaryEntry } from '../types'
import toNewDiaryEntry from '../utils'

const router = express.Router()

router.get('/', (_,res)=>{
    res.send(diaryServices.getEntriesWithoutComments())
})

router.get('/:id', (req,res)=>{

    const {id} = req.params
    const entry = diaryServices.findById(+id)


    return (entry != null)
    ? res.send(entry)
    : res.sendStatus(404)
})

router.post('/', (req, res)=>{

    try {
        const newDiaryEntry: newDiaryEntry = toNewDiaryEntry(req.body)
    
        const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)
    
        res.json(addedDiaryEntry)
        
    } catch (error: any) {
        res.status(400).send(error.message)
    }
})

export default router