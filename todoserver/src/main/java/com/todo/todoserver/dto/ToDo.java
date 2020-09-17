package com.todo.todoserver.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDate;

@Data
@Entity
@NoArgsConstructor
@RequiredArgsConstructor
public class ToDo {

    @Id
    @GeneratedValue
    private Long id;

    @NonNull
    private String taskName;

    @NonNull
    private String taskDescription;

    @NonNull
    private LocalDate targetDate;

    @NonNull
    private boolean isCompleted;

//    @ManyToOne
//    private User user;
}
