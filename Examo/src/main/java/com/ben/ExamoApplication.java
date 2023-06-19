package com.ben;

import com.ben.daos.AuthDAO;
import com.ben.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class ExamoApplication {

	public static void main(String[] args) {
		SpringApplication.run(ExamoApplication.class, args);
		System.out.println("hey");
	}

}
