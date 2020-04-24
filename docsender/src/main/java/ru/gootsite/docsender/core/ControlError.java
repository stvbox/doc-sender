package ru.gootsite.docsender.core;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class ControlError {

    String code;

    public ControlError(String errorCode) {
        code = errorCode;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

}
