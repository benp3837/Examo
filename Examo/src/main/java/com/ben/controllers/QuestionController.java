package com.ben.controllers;

import com.ben.daos.AnswerDAO;
import com.ben.daos.QuestionDAO;
import com.ben.models.Question;
import com.ben.models.QuestionWithAnswersDTO;
import com.ben.services.AnswerService;
import com.ben.services.QuestionService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.function.Function;

@RestController
@RequestMapping(value = "/question")
@CrossOrigin(origins="http://localhost:4200/", allowCredentials="true")
public class QuestionController {

    QuestionDAO qDAO;
    QuestionService qService;
    AnswerService aService;

    @Autowired
    public QuestionController(QuestionDAO qDAO, QuestionService qService, AnswerService aService){
        this.qDAO = qDAO;
        this.qService = qService;
        this.aService = aService;
    }

    @GetMapping //get all questions (and their answers)
    public ResponseEntity<ArrayList<QuestionWithAnswersDTO>> getAllQuestionsWithAnswers(){

        ArrayList<QuestionWithAnswersDTO> questionsWithAnswers = qService.getAllQuestionsFromDB();
        System.out.println(questionsWithAnswers);
        return ResponseEntity.ok().body(questionsWithAnswers);

    }

    //Add Question WITH ANSWERS method
    @PostMapping
    public ResponseEntity addQuestionAndAnswer(@RequestBody QuestionWithAnswersDTO dto){

        //send the question to the DB, followed by the answers
        addQuestion(dto.getQuestion());
        aService.persistAnswers(dto.getAnswers());

        return ResponseEntity.accepted().body(dto);
    }

    //Used by the addQuestionAndAnswer method
    //TODO: error handling in the service method
    public ResponseEntity<Question> addQuestion(@RequestBody Question q){
        this.qDAO.save(q);
        return ResponseEntity.accepted().body(q);
    }


}
