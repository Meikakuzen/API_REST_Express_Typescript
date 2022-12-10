import express from 'express'
import diaryRouter from './routes/diaries.routes'

const app = express()

app.use(express.json()) //middleware para usar json como formato de salida

const PORT = 3000

app.use('/api/diaries', diaryRouter)

app.get('/ping', (_, res)=>{
    
    res.send('pong')
})


app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en puerto ${PORT}`)
})

