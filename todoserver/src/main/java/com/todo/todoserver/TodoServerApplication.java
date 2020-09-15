package com.todo.todoserver;

import com.todo.todoserver.dto.ToDo;
import com.todo.todoserver.service.ToDoService;
import com.todo.todoserver.service.impl.ToDoServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@SpringBootApplication
public class TodoServerApplication implements CommandLineRunner {

	@Autowired
	ToDoService toDoService;

	public static void main(String[] args) {
		SpringApplication.run(TodoServerApplication.class, args);
	}


	@Override
	public void run(String... args) throws Exception {
		ToDo toDo = new ToDo("Learn Java", "Learn Java from scrach", LocalDate.now(), true);
		toDoService.createToDo(toDo);
	}
}
