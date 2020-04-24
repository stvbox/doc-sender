package ru.gootsite.docsender.core;

import java.util.List;

public class PostResult {

    String id;
    List<ControlError> errors;

    PostResult(String id) {
        this.id = id;
    }

    public PostResult(List<ControlError> errors) {
        this.errors = errors;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public List<ControlError> getErrors() {
        return errors;
    }

    public void setErrors(List<ControlError> errors) {
        this.errors = errors;
    }

}
