package com.todo.todoserver.service.impl;

import com.todo.todoserver.dao.ToDoRepository;
import com.todo.todoserver.dto.ToDo;
import com.todo.todoserver.service.ToDoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ToDoServiceImpl implements ToDoService {

    @Autowired
    ToDoRepository toDoRepository;

    @Override
    public ToDo getToDoById(int id) {
        Optional<ToDo> todo = toDoRepository.findById(id);
        return todo.orElse(null);
    }

    @Override
    public List<ToDo> getAllToDos() {
        return toDoRepository.findAll();
    }

    @Override
    public ToDo createToDo(ToDo toDo) {
        return toDoRepository.save(toDo);
    }

    @Override
    public ToDo updateToDo(ToDo toDo) {
        return toDoRepository.save(toDo);
    }

    @Override
    public void deleteToDoById(int id) {
        toDoRepository.deleteById(id);
    }
}
