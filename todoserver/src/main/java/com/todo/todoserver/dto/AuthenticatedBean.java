package com.todo.todoserver.dto;

import org.springframework.web.bind.annotation.CrossOrigin;

public class AuthenticatedBean {

    private String message;

    public AuthenticatedBean(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    @Override
    public String toString() {
        return String.format("Authenticate bean [message=%s]", message);
    }
}
