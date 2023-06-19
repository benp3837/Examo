package com.ben.models;

import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.util.Objects;

//Answers won't have their own table? NO need - but we need them embedded in the question records
@Entity
@Component
@Table(name="answers")
public class Answer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int answerId;

    private String content;
    private boolean correct;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "question_fk")
    private Question questionFk;

    //for inserting an answer - HTTP Request sends an int, and service layer finds the Q by id.
    @Transient //this is me being lazy - I should probably make a DTO for incoming answers
    private int question_id;

    public Answer() {
    }

    public Answer(String content, boolean correct, Question question_fk) {
        this.content = content;
        this.correct = correct;
        this.questionFk = question_fk;
    }

    public Answer(String content, boolean correct, int question_id) {
        this.content = content;
        this.correct = correct;
        this.question_id = question_id;
    }

    public Answer(int answerId, String content, boolean correct, Question question_fk) {
        this.answerId = answerId;
        this.content = content;
        this.correct = correct;
        this.questionFk = question_fk;
    }

    public Answer(int answerId, String content, boolean correct, int question_id) {
        this.answerId = answerId;
        this.content = content;
        this.correct = correct;
        this.question_id = question_id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public boolean getCorrect() {
        return correct;
    }

    public void setCorrect(boolean correct) {
        this.correct = correct;
    }

    public int getAnswerId() {
        return answerId;
    }

    public void setAnswerId(int answerId) {
        this.answerId = answerId;
    }

    public boolean isCorrect() {
        return correct;
    }

    public Question getQuestionFk() {
        return questionFk;
    }

    public void setQuestionfk(Question question_fk) {
        this.questionFk = question_fk;
    }

    public int getQuestion_id() {
        return question_id;
    }

    public void setQuestion_id(int question_id) {
        this.question_id = question_id;
    }

    @Override
    public String toString() {
        return "Answer{" +
                "answerId=" + answerId +
                ", content='" + content + '\'' +
                ", correct=" + correct +
                ", question_fk=" + questionFk +
                ", question_id=" + question_id +
                '}';
    }
}
