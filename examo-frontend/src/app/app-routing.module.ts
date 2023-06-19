import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllQuestionsComponent } from './components/all-questions/all-questions.component';
import { CreateQuestionComponent } from './components/create-question/create-question.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuizConfigComponent } from './components/quizConfig/quiz-config.component';

const routes: Routes = [

{
  path:"",
  component:HomeComponent
},

{
  path:"quizConfig",
  component:QuizConfigComponent
},

{
  path:"quiz",
  component:QuizComponent
},

{
  path:"profile",
  component:ProfileComponent
},

{
  path:"allQuestions",
  component:AllQuestionsComponent
},

{
  path:"login",
  component:LoginComponent
},

{
  path:"create",
  component:CreateQuestionComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
