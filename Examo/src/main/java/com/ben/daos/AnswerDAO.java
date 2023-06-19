package com.ben.daos;

import com.ben.models.Answer;
import com.ben.models.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository
public interface AnswerDAO extends JpaRepository<Answer, Integer> {

    //Find answers that belong to a particular question
    public ArrayList<Answer> findByQuestionFk(Question q);

}
