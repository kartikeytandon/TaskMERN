import express from 'express'
import { searchUser } from '../controllers/SearchInfo.js'

const router = express.Router()

router.get('/:key', searchUser)

export default router