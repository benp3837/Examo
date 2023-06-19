import { Component } from '@angular/core';
import { Answer } from 'src/app/models/answer';
import { Question } from 'src/app/models/question';
import { Quiz } from 'src/app/models/quiz';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {

  //for the initial load. the quiz functionality and template will mostly use the Question[] below
  initialQuestionLoad:Quiz = new Quiz([])

  //the main array of questions fueling our functionality. filled oninit
  questions:Question[] = []

  //array that keeps track of the user's answers
  userAnswers:Answer[] = []

  //counter that keeps track of question number (can't figure out how to nest two *ngFor with unique counters)
  counter:number = 0;

  //check whether the user selected an option (show/hide explanation)
  hideAnswer:boolean = true;

  //check if the user is correct or not
  isCorrect:boolean = false;

  constructor(private qs:QuizService){}

  //TODO: figure out how to do an animation on quiz component load
  

  ngOnInit(){
    this.initialQuestionLoad = this.qs.mockQuiz
    this.questions = this.initialQuestionLoad.masterQuestionList

    //shuffle answers of each question
    for(let question of this.questions){

      let shuffledAnswers:Answer[] = this.shuffleAnswers(question)

      question.answers = shuffledAnswers

      console.log("testing:")
      console.log(question.answers)
      console.log(question.answers[0].content)

      
    }

  }


  shuffleAnswers(questionToShuffle:Question):Answer[]{

    /*Isolate the possible answers (just for clarity below)*/
    let shuffledAnswers:Answer[] = questionToShuffle.answers

    /*Shuffling the possible answers (Fisher-Yates Shuffle)*/
    let currentIndex = shuffledAnswers.length;

    //While there remain elements to shuffle.
    while (currentIndex != 0) {

    //Pick a remaining element.
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    //And swap it with the current element.
    [shuffledAnswers[currentIndex], shuffledAnswers[randomIndex]] = [
      shuffledAnswers[randomIndex], shuffledAnswers[currentIndex]];
  }

    console.log("Shuffled answers:")
    console.log(shuffledAnswers)

    return shuffledAnswers
  
  }

  /*Check if answer is correct*/
  displayResult(isCorrect:boolean){
    if(isCorrect){
      this.isCorrect = true
    } else {
      this.isCorrect = false
    }
  }


  /*Radio Button Functionality - Saves answer (correctness) and wipes explanation onChange*/
  onRadioChange(e:any){
    console.log("radio changed")
    this.hideAnswer = true

    if(e.target.value == "true"){
      this.isCorrect = true
    } else {
      this.isCorrect = false
    }

  }

  /*Unhides the answer/explanation, telling the user whether they were correct or not*/
  checkAnswer(){
    this.hideAnswer = false;
  }


  /* Back and Next Functionality */
  //TODO: Could consolidate these into one function, back calls this with a 0 and next calls it with a 1
  back(){
    if(this.counter > 0){
      this.counter--
      this.hideAnswer = true
      this.isCorrect = false
    }
  }

  next(){
    if(this.counter <= this.questions.length - 2){
      this.counter++
      this.hideAnswer = true
      this.isCorrect = false
    }
  }


}
