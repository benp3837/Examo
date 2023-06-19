import { HttpClient, HttpHeaders, HttpResponse, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../models/question';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient, private us:UserService) { }

    //This will probably be replaced with a string[] that pulls from the available topics from the DB
    topicsList:string[] = ["Java Fundamentals", "Java Datatypes", "Java OOP", 
    "Java Data Structures", "Java Code"]

  //HTTP Header and Options Construction
  // headers: HttpHeaders = new HttpHeaders({
  //   'Authorization':this.us.getAccessToken()
  // })

  //TODO: GET request to get all questions
  getAllQuestionsFromAPI():Observable<HttpResponse<any[]>>{

    let headers: HttpHeaders = new HttpHeaders({
      'Authorization':this.us.getAccessToken()
    })
    console.log(headers)

    return this.http.get("http://localhost:8095/examo/question", {headers:headers, observe: "response"}) as Observable<HttpResponse<any[]>>
  }

  //TODO: GET request to get certain questions by SEARCH BAR 
  
  //TODO: GET request to get certain questions by TOPIC

  //TODO: GET request to get certain questions by DIFFICULTY?

  //TODO: Post request to create new questions

  //all good on the backend, tested successfully by postman

  //the issue that remains, is knowing what question_id to put on each answer object
  //but it should be easy enough given the data accessible on the front end
  //PARTICULARLY the master question list that the Question Service will have (because display all)
    //the appropriate question_id for new answers will be that master list.length() + 1

}
