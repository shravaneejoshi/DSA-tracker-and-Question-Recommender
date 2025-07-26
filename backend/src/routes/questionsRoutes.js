import express from "express"

import {getAllQuestions,postQuestions,updateQuestion,deleteQuestion} from "../controllers/questionsController.js" 

const router = express.Router();

router.get("/",getAllQuestions)
router.post("/",postQuestions)
router.put("/:id",updateQuestion)
router.delete("/:id",deleteQuestion)

export default router;