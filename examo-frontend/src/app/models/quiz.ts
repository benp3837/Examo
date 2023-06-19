import { Question } from "./question";

/* This totally functional class contains a Question Array and functions for manipulations
I want to practice TS logic based solutions like: 
-choosing the amount of questions
-choosing the topic of the questions
-randomly shuffling the questions
-yeah! */
export class Quiz {

    public masterQuestionList:Question[]

    constructor(masterQuestionList:Question[]){
        this.masterQuestionList = masterQuestionList
    }

    //TODO: return type to change to Quiz
    getXQuestions(questionAmount:number):any{
        //return
    }

    //TODO: return type to change to Quiz
    shuffleQuestions(quiz:Quiz):any{
        //return 
    }

}
