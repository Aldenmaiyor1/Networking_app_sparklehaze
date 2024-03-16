import SQL from 'sql-template-strings'
import {initializeDatabase, getDatabase} from '../Database/database.js'

export const getAllQuestions = async() => {
    const db = await getDatabase();
    const questions = await db.all (SQL`
    SELECT * 
    FROM questions
    `);
    console.log(questions)

    return questions
}

 export const getAnswers = async(question_id) =>{
    const db = await getDatabase();
    const answers = await db.all (SQL`
    SELECT * 
    FROM answers
    WHERE question_id = ${question_id}
    `);
    console.log(answers)
    return answers
}

