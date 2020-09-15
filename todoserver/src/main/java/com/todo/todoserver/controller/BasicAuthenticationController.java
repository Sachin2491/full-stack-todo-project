package com.todo.todoserver.controller;

import com.todo.todoserver.dto.AuthenticatedBean;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/v1/api/auth")
@CrossOrigin(value = "http://localhost:4200")
@Slf4j
public class BasicAuthenticationController {

    @GetMapping("/basicauth")
    public AuthenticatedBean BasicAuthAuthentication(@RequestHeader Map<String,String> headers) {
        //logic to check if user is valid
        //decode Base64 string and get user name password
        return new AuthenticatedBean(headers.get("authorization"));
    }
}
