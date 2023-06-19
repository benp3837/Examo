import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Quiz } from 'src/app/models/quiz';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz-config',
  templateUrl: './quiz-config.component.html',
  styleUrls: ['./quiz-config.component.css']
})
export class QuizConfigComponent {

  /*USER INPUT OBJECT*/

  userInputs:any = {
    checkedValues:[],
    radioValue:""
  }

  /*GENERAL FIELDS AND BOILERPLATE*/

  //This will probably be replaced with a string[] that pulls from the available topics from the DB
  topicsList:string[] = ["Java Fundamentals", "Java Datatypes", "Java OOP", 
  "Java Data Structures", "Java Code"]

  //toggles whether a quiz is running or not
  quizActive:boolean = false;

  //will be filled depending on the user's configurations (For Now, filled oninit from mock quiz in service)
  quiz:Quiz = new Quiz([]);

  //allows us to use *ngFor for the number of questions options
  numberOfQuestions:number[] = [5, 10, 15, 20]



  //HEY did you know that Angular 14 no longer auto generates constructor and ngOnInit? Good to know.
  constructor(private qs:QuizService, private toast:ToastrService, private route:Router) { }

  ngOnInit(): void {
    this.quiz = this.qs.mockQuiz
    console.log("Quiz:")
    console.log(this.quiz)
  }


  /*USER INPUT GATHERING FUNCTIONS*/

  onCheckChange(e:any, inputId:number){

    //determine if the checkbox was checked or unchecked
    if(e.srcElement.checked){
      console.log("hi, checkbox checked")

        //user can only choose 3 topics at a time
        if(this.userInputs.checkedValues.length < 3){
          this.userInputs.checkedValues.push(e.target.value); //add the topic into the Array
        } else {
          //toast that admonishes the user for their enthusiasm
          this.toast.warning("Choose 3 Or Less Options!")

          console.log("input ID: " + "flexCheckDefault"+inputId)

          //uncheck the checkbox immediately
          let element = <HTMLInputElement> document.getElementById("flexCheckDefault"+inputId);
          console.log(element)
          element.checked = false;
        }
    } else{ //if UNCHECKING, remove the topic from the array
      this.userInputs.checkedValues = this.userInputs.checkedValues.filter((obj: string) => {return obj !== e.target.value});
    }
    
    console.log("value: " + e.target.value)
    console.log(this.userInputs.checkedValues)
  }

  onRadioChange(e:any){
    console.log("radio changed")
    this.userInputs.radioValue = e.target.value;
    console.log(this.userInputs.radioValue)
  }



  /*GENERAL FUNCTIONS*/

  startQuiz(){

    //Check if all fields have been filled, error toast if not.
    if(!this.userInputs.checkedValues || !this.userInputs.radioValue){
      this.toast.error("Please Fill Out All Fields!")
    } else {
      this.quizActive = true;
      console.log("QUIZ STARTED")
      this.route.navigate(["quiz"])
    }



    //TODO: query API to create a quiz and send it to the QuizService, for the Quiz component to use.

    while(this.quizActive){

      console.log(this.userInputs)
      console.log(this.quiz)

      //TODO: while there are questions in the generated questions[], keep the quiz live
      //TODO: OR... it'll loop for X amount of questions, and they will be picked at random. 

      this.quizActive = false; //kill the loop, quiz no longer active

    }

    //TODO: if you're here, then quizActive == false and stuff should happen (display score, retry?)
  }



}
