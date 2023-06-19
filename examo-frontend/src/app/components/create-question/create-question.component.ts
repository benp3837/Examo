import { Component } from '@angular/core';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent {

  //This will probably be replaced with a string[] that pulls from the available topics from the DB
  topicsList:string[] = ["Java Fundamentals", "Java Datatypes", "Java OOP", 
  "Java Data Structures", "Java Code"]

  counter:number = 0;

  //TODO: *ngSwitch on types to determine what the question card looks like
  //this will be iterated through on the front end to clean up potentially messy HTML
  createQuestionArray = [
  {
    title:"Enter Question",
    type:"text"
  },
  {
    title:"What Topic is your Question?",
    type:"checkbox"
  },
  {
    title:"How Difficult is your Question?",
    type:"radio"
  }]



   /* Back and Next Functionality */
   back(){
    if(this.counter > 0){
      this.counter--
    }
  }

  next(){
    if(this.counter < 2){
      this.counter++

    }
  }

}
