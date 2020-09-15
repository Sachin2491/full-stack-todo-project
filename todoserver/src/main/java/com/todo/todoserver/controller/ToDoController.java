package com.todo.todoserver.controller;

import com.todo.todoserver.dto.ToDo;
import com.todo.todoserver.service.ToDoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin(value = "http://localhost:4200")
@RestController
@RequestMapping("/v1/api/todos")
public class    ToDoController {

    @Autowired
    private ToDoService toDoService;

    @GetMapping
    public List<ToDo> getAllToDos() {
        return toDoService.getAllToDos();
    }

    @GetMapping(value = "/{id}")
    public ToDo getToDoById(@PathVariable int id) {
        return toDoService.getToDoById(id);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> deleteToDo(@PathVariable int id) {
        toDoService.deleteToDoById(id);
        if(toDoService.getToDoById(id) == null) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<ToDo> updateToDo(@PathVariable int id, @RequestBody ToDo todo) {
        ToDo updatedToDo = toDoService.updateToDo(todo);
        return new ResponseEntity<ToDo>(updatedToDo, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Void> createToDo(@RequestBody ToDo toDo) {
        ToDo createdToDo = toDoService.createToDo(toDo);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(createdToDo.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

}
