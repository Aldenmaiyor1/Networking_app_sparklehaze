import express from "express";
const router = express.Router();

import {getAllQuestions, getAnswers} from "../models/question-dao.js"
import {getGuests} from "../models/user-dao.js"

// A dummy route which will simply return the text "Hello, World".
router.get("/api/hello", (req, res) => {
  res.send("Hello, World");
});

// TODO Add your routes here.

router.get("/api/questions", async (req,res) => {

  const questionsList = await getAllQuestions()
  console.log(questionsList)
  res.send(questionsList)
})

router.get("/api/answers/:id", async(req,res) => {

  const answersList = await getAnswers(req.params.id)
    console.log(req.params.id)
  res.send(answersList)
})

export default router;
