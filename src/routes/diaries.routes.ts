import express from 'express'
import * as diaryServices from '../controllers/diaries.controllers'

const router = express.Router()

router.get('/', (_,res)=>{
    res.send(diaryServices.getEntriesWithoutComments())
})

router.post('/', (_, res)=>{
    res.send('Saving a diary')
})

export default router