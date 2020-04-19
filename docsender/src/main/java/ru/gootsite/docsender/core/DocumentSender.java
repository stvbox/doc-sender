package ru.gootsite.docsender.core;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;
import java.util.Set;
import java.util.function.Consumer;
import java.util.stream.Collectors;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;

abstract public class DocumentSender<T extends BaseDocument> {

    Logger logger = LoggerFactory.getLogger(DocumentSender.class);
    Random random = new Random();

    protected Map handlers = new HashMap<String, Consumer<BaseDocument>>();

    @Autowired
    DocumentRepository<T> repository;

    protected DocumentRepository<T> getRepository() {
        return repository;
    }

    protected DocumentSender() {
        // Default status handlers
        Consumer<T> doNew = (T document) -> this.doNew(document);
        handlers.put("new", doNew); // Новый
        Consumer<T> doForSend = (T document) -> this.doForSend(document);
        handlers.put("forSend", doForSend); // Подготовлен к отправке
        Consumer<T> doSent = (T document) -> this.doSent(document);
        handlers.put("sent", doSent); // Отправлен
    }

    public void execute() {
        Set<T> documents = (Set<T>) handlers.keySet().stream()
                .flatMap((status) -> {
                    return getRepository().findByStatus((String) status).stream();
                }).collect(Collectors.toSet());

        // TODO: асинхронность + механизм обратного давления
        documents.forEach((document) -> {
            String status = document.getStatus();
            Consumer<BaseDocument> handler = (Consumer<BaseDocument>) handlers.get(status);
            handler.accept(document);

            logger.info(document.toString());
        });
    }

    @Scheduled(fixedDelay = 5000)
    public void sendDocuments() {
        execute();
    }

    protected void doNew(T document) {
        logger.info(">>> stub doNew");
        document.setStatus("forSend");
        getRepository().save(document);
    }

    protected void doForSend(T document) {
        logger.info(">>> stub doForSend");
        document.setStatus("sent");
        getRepository().save(document);
    }

    protected void doSent(T document) {
        logger.info(">>> stub doSended");
        document.setStatus(random.nextInt(2) == 0 ? "accepted" : "rejected");
        getRepository().save(document);
    }

}
