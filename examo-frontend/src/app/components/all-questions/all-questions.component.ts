import { Component, OnInit, ViewChild } from '@angular/core';
import { Data } from '@angular/router';
import { question } from 'ngx-bootstrap-icons';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Question } from 'src/app/models/question';
import { Quiz } from 'src/app/models/quiz';
import { QuestionService } from 'src/app/services/question.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-all-questions',
  templateUrl: './all-questions.component.html',
  styleUrls: ['./all-questions.component.css']
})
export class AllQuestionsComponent implements OnInit{

  hideQuestion:boolean = true;

  questions:Question[] = []

  //check whether the user selected an option (show/hide explanation)
  hideAnswer:boolean = true;

  //check if the user is correct or not
  isCorrect:boolean = false;

  //counter that keeps track of question number (can't figure out how to nest two *ngFor with unique counters)
  counter:number = 0;

  constructor(private qs:QuizService, private ques:QuestionService){}

  ngOnInit(){
    this.getAllQuestionsTest()
  }

  //called onInit
  getAllQuestionsTest(){
    this.ques.getAllQuestionsFromAPI().subscribe(
      (data:any) => {
        console.log("get questions success")
        console.log(data.body)

        //for every object in the Response Body, extract and add each question to the question array
        for(let obj of data.body){

          console.log(obj)

          let question = obj.question //assign question data
          question.answers = obj.answers //assign answers
          
          this.questions.push(question)
        }

        console.log(this.questions)

      },

      (error:any) => {
        console.log(error)
        console.log("NOT AUTHORIZED")
        return null
      }
    )
  }

  onQuestionClick(i:number){
    //TODO: if you clicked a question that ISN'T the one you're on, open that one immediately
    this.counter = i
    this.isCorrect = false 
    console.log("hidequestion is now: " + this.hideQuestion)
    this.hideQuestion = !this.hideQuestion
    if(!this.hideAnswer){
      this.hideAnswer = true
    }
  }


  //question stuff

    /*Radio Button Functionality - Saves answer (correctness) and wipes explanation onChange*/
    onRadioChange(e:any){
      console.log("radio changed")
      this.hideAnswer = true

      console.log(e.target)
      console.log(e.target.value)
  
      if(e.target.value == "true"){
        this.isCorrect = true
      } else {
        this.isCorrect = false
      }
  
    }
  
    /*Unhides the answer/explanation, telling the user whether they were correct or not*/
    checkAnswer(){
      this.hideAnswer = !this.hideAnswer;
    }

    closeAll(){
      this.hideAnswer = true 
      this.hideQuestion = true
    }

}
