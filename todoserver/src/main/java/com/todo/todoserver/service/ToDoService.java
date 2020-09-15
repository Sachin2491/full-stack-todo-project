package com.todo.todoserver.service;


import com.todo.todoserver.dto.ToDo;

import java.util.List;

public interface ToDoService {

    ToDo getToDoById(int id);

    List<ToDo> getAllToDos();

    ToDo createToDo(ToDo toDo);

    ToDo updateToDo(ToDo toDo);

    void deleteToDoById(int id);
}
