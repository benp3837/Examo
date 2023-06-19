import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../models/question';
import { Quiz } from '../models/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  //this currently contains hardcoded questions - a MOCK QUIZ.
  //later, this will be an empty Quiz object, which gets filled by API calls and consumed.
  mockQuiz:Quiz = new Quiz([

    {
      question:"What is your fav color?",
      answers:[{content:"red", correct:false}, {content:"blue", correct:false}, 
      {content:"green", correct:true},{content:"yellow", correct:false}],
      topic:"Java Fundamentals",
      difficulty:"very tough",
      explanation:"your favorite color is obviously green"
    },

    {
      question:"What is yo mamma fav color?",
      answers:[{content:"red", correct:true}, {content:"blue", correct:false}, 
      {content:"green", correct:false},{content:"yellow", correct:false}],
      topic:"Java Fundamentals",
      difficulty:"very tough",
      explanation:"If you don't believe me, ask yo mamma"
    },

    {
      question:"Do you liek me? Y/N",
      answers:[{content:"Yeah", correct:true}, {content:"Uhhh uh uhhhmmm uhhhh", correct:false}, 
      {content:"No", correct:false},{content:"perhaps......", correct:false}],
      topic:"Java Fundamentals",
      difficulty:"very tough",
      explanation:"I am an astral entity/// I am not of your corporeal realm. Your primal, sensation centric existence elicits my contempt. You may grasp at my nape from below, as I spread wing over the horizon //~*"
    }

  ]);

  constructor(private http:HttpClient) { }

  getQuizFromDB():Observable<HttpResponse<Quiz>>{

    //TODO: This is a post request, and its body contains the userInputs object to build a quiz in the backend
    return this.http.post("http://localhost:8095/quiz/", 
    {observe: "response"}) as Observable<HttpResponse<Quiz>>

  }

}
