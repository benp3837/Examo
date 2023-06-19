package com.ben.daos;

import com.ben.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AuthDAO extends JpaRepository<User, Integer> {

    Optional<User> findByEmail(String email);
}
