package com.ben.services;

import com.ben.daos.AnswerDAO;
import com.ben.daos.QuestionDAO;
import com.ben.models.Question;
import com.ben.models.QuestionWithAnswersDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class QuestionService {

    private QuestionDAO qDAO;
    private AnswerDAO aDAO;

    @Autowired
    public QuestionService(QuestionDAO qDAO, AnswerDAO aDAO){
        this.qDAO = qDAO;
        this.aDAO = aDAO;
    }

    public ArrayList<QuestionWithAnswersDTO> getAllQuestionsFromDB(){

        List<Question> questionsNoAnswers = qDAO.findAll(); //get all DB questions (no answers)
        ArrayList<QuestionWithAnswersDTO> questionsWithAnswers = new ArrayList<>(); //holds DTO

        //for every question found in the DB
        for(Question q : questionsNoAnswers){
            QuestionWithAnswersDTO builder = new QuestionWithAnswersDTO(); //create DTO
            builder.setQuestion(q); //assign question
            builder.setAnswers(aDAO.findByQuestionFk(q)); //assign answers
            questionsWithAnswers.add(builder); //add DTO to list
        }

        return questionsWithAnswers;
    }

}
