package com.ben.controllers;

import com.ben.daos.AnswerDAO;
import com.ben.models.Answer;
import com.ben.services.AnswerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/answer")
@CrossOrigin(origins="http://localhost:4200", allowCredentials="true")
public class AnswerController {

    public AnswerDAO aDAO;
    public AnswerService aService;

    @Autowired
    public AnswerController(AnswerDAO aDAO, AnswerService aService){
        this.aDAO = aDAO;
        this.aService = aService;
    }

    //insert answer(s)
    @PostMapping
    public ResponseEntity<ArrayList<Answer>> saveAnswers(@RequestBody ArrayList<Answer> answers) {
        System.out.println(answers);

        aService.persistAnswers(answers);

        return ResponseEntity.accepted().body(answers);
    }


}
