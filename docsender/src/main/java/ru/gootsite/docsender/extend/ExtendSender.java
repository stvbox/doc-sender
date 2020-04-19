package ru.gootsite.docsender.extend;

import org.springframework.stereotype.Component;
import ru.gootsite.docsender.core.DocumentSender;

@Component
public class ExtendSender extends DocumentSender<ExtendDocument> {

    @Override
    protected void doNew(ExtendDocument document) {
        document.setStatus("sent");
        getRepository().save(document);
    }

}
