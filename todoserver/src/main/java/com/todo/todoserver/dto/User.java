package com.todo.todoserver.dto;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import java.util.List;

//@Data
//@Entity
//@NoArgsConstructor
//@RequiredArgsConstructor
//public class User {
//    @Id
//    private int id;
//
//    @NonNull
//    private int name;
//
//    @NonNull
//    private int emailID;
//
//    @OneToMany(mappedBy = "user")
//    @ToString.Exclude
//    private List<ToDo> todos;
//}
