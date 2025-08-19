import exporess from "express"
import { createTransaction, deleteTransaction, getSummaryByUserId, getTransactionsByUserId } from "../controllers/transactionsController.js"

const router = exporess.Router()

router.get('/:userId', getTransactionsByUserId);
router.post('/', createTransaction);
router.delete('/:id', deleteTransaction);
router.get('/summary/:userId', getSummaryByUserId);


export default router