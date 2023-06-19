import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { PopoverModule} from 'ngx-bootstrap/popover';
import { TooltipModule} from 'ngx-bootstrap/tooltip';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { QuizConfigComponent } from './components/quizConfig/quiz-config.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AllQuestionsComponent } from './components/all-questions/all-questions.component';
import { CreateQuestionComponent } from './components/create-question/create-question.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuizConfigComponent,
    QuizComponent,
    ProfileComponent,
    NavbarComponent,
    AllQuestionsComponent,
    CreateQuestionComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxBootstrapIconsModule.pick(allIcons),
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({timeOut: 2000, positionClass: 'toast-bottom-right', preventDuplicates:true}),
    ModalModule,
    PopoverModule.forRoot(),
    TooltipModule.forRoot(),
  
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
