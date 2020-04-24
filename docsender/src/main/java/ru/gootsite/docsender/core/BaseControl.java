package ru.gootsite.docsender.core;

import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class BaseControl {

    protected List<ControlError> check(BaseDocument document) {
        List<ControlError> errors = new ArrayList<ControlError>();

        String descrpittion = document.getDescription();
        if (!checkStringRequired(descrpittion)) {
            errors.add(new ControlError("required_description"));
        }
        return errors;
    }

    protected static boolean checkStringRequired(String value) {
        if (value == null || value.trim().equals("")) {
            return false;
        }
        return true;
    }

}
