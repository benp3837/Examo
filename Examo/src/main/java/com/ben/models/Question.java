package com.ben.models;

import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;

//QUIZ doesn't have to exist in the backend if Quizzes are just formed in the front end
//the user will either ask for all questions or X amount of questions from XYZ topics.
//So why does Quiz need to exist in the backend? They're all Question arrays anyway.
@Entity
@Table(name="questions")
@Component
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int questionId;
    private String question;

    private String topic;

    private String difficulty;
    private String topic2;
    private String image;
    private String explanation;

    public Question() {
    }

    //all mandatories
    public Question(String question, String topic, String difficulty) {
        this.question = question;
        this.topic = topic;
        this.difficulty = difficulty;
    }

    //all minus ID
    public Question(String question, String topic, String difficulty, String topic2, String image, String explanation) {
        this.question = question;
        this.topic = topic;
        this.difficulty = difficulty;
        this.topic2 = topic2;
        this.image = image;
        this.explanation = explanation;
    }


    //all
    public Question(int questionId, String question, String topic, String difficulty, String topic2, String image, String explanation) {
        this.questionId = questionId;
        this.question = question;
        this.topic = topic;
        this.difficulty = difficulty;
        this.topic2 = topic2;
        this.image = image;
        this.explanation = explanation;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public String getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(String difficulty) {
        this.difficulty = difficulty;
    }

    public String getTopic2() {
        return topic2;
    }

    public void setTopic2(String topic2) {
        this.topic2 = topic2;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getExplanation() {
        return explanation;
    }

    public void setExplanation(String explanation) {
        this.explanation = explanation;
    }

    public int getQuestionId() {
        return questionId;
    }

    public void setQuestionId(int questionId) {
        this.questionId = questionId;
    }

    @Override
    public String toString() {
        return "Question{" +
                "questionId=" + questionId +
                ", question='" + question + '\'' +
                ", topic='" + topic + '\'' +
                ", difficulty='" + difficulty + '\'' +
                ", topic2='" + topic2 + '\'' +
                ", image='" + image + '\'' +
                ", explanation='" + explanation + '\'' +
                '}';
    }
}
