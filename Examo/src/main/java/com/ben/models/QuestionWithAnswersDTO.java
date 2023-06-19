package com.ben.models;

import java.util.ArrayList;
import java.util.List;

//This Class represents a Question WITH a List of Answers.
//The front end will never receive questions or answers alone, BUT will receive this.
//This will also be used when the user creates new questions.
public class QuestionWithAnswersDTO{

    private Question question;
    private ArrayList<Answer> answers;


    public QuestionWithAnswersDTO() {
    }

    public QuestionWithAnswersDTO(ArrayList<Answer> answers, Question question) {
        this.answers = answers;
        this.question = question;
    }

    public ArrayList<Answer> getAnswers() {
        return answers;
    }

    public void setAnswers(ArrayList<Answer> answers) {
        this.answers = answers;
    }

    public Question getQuestion() {
        return question;
    }

    public void setQuestion(Question question) {
        this.question = question;
    }
}
