package ru.gootsite.docsender.core;

import java.util.Map;

public class DocumentDto {

    private String documentType;
    private Map<String, String> attributes;

    public String getDocumentType() {
        return documentType;
    }

    public void setDocumentType(String documentType) {
        this.documentType = documentType;
    }

    public Map<String, String> getAttributes() {
        return attributes;
    }

    public void setAttributes(Map<String, String> attributes) {
        this.attributes = attributes;
    }
}
