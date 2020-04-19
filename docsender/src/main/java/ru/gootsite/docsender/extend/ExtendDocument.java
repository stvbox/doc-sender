package ru.gootsite.docsender.extend;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import ru.gootsite.docsender.core.BaseDocument;

@Entity
@DiscriminatorValue("ExtendDocument")
class ExtendDocument extends BaseDocument {

    private String extend;

    public String getExtend() {
        return extend;
    }

    public void setExtend(String extend) {
        this.extend = extend;
    }

}
