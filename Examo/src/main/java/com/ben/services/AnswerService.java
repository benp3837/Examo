package com.ben.services;

import com.ben.daos.AnswerDAO;
import com.ben.daos.QuestionDAO;
import com.ben.models.Answer;
import com.ben.models.Question;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class AnswerService {

    private AnswerDAO aDAO;
    private QuestionDAO qDAO;

    @Autowired
    public AnswerService(AnswerDAO aDAO, QuestionDAO qDAO){
        this.aDAO = aDAO;
        this.qDAO = qDAO;
    }

    public void persistAnswers(ArrayList<Answer> answers){

        //for every answer, (should be 4), take the int FK and attach the real persisted object
        for(Answer answer : answers){
            Optional<Question> q = qDAO.findById(answer.getQuestion_id());
            if (q.isPresent()){
                answer.setQuestionfk(q.get());
            }
           aDAO.save(answer); //persist the answer
        }//end enhanced for

    }

}
