package com.ben.controllers;

import javax.validation.Valid;

import com.ben.models.AuthRequest;
import com.ben.models.AuthResponse;
import com.ben.models.User;
import com.ben.utils.JwtTokenUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.security.authentication.*;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/auth")
@CrossOrigin(origins="http://localhost:4200/", allowCredentials="true")
public class AuthController {

    @Autowired AuthenticationManager authManager;
    @Autowired
    JwtTokenUtil jwtUtil;

    @PostMapping
    public ResponseEntity<?> login(@RequestBody @Valid AuthRequest request) {
        System.out.println(request);
        try {
            Authentication authentication = authManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getEmail(), request.getPassword())
            );

            User user = (User) authentication.getPrincipal();
            System.out.println(user);
            String accessToken = jwtUtil.generateAccessToken(user);
            System.out.println(accessToken);
            AuthResponse response = new AuthResponse(user.getEmail(), accessToken);

            return ResponseEntity.ok().body(response);

        } catch (BadCredentialsException ex) {
            System.out.println("BAD CREDENTIALS");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
}
