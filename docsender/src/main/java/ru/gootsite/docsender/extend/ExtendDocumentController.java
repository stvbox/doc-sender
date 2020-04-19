package ru.gootsite.docsender.extend;

import java.security.Principal;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.gootsite.docsender.core.PostResult;
import ru.gootsite.docsender.core.Response;
import ru.gootsite.docsender.core.DocumentDto;

@RestController
@RequestMapping("/api/extend")
public class ExtendDocumentController {

    Logger logger = LoggerFactory.getLogger(ExtendDocumentController.class);

    @Autowired
    ExtendDocumentRepository repository;

    @PostMapping("post")
    Response<PostResult> postDocument(
            @RequestBody DocumentDto model,
            @AuthenticationPrincipal Principal principal
    ) {
        for (int i = 0; i < 1051; i++) {
            ExtendDocument document = new ExtendDocument();
            document.setCreatedBy(principal.getName());
            document.setDescription("(" + i + ")" + model.getAttributes().get("description"));
            document.setExtend(model.getAttributes().get("extend"));
            repository.save(document);
            //return new Response(new PostResult(document.getId()));
        }
        return new Response("0");
        //return new Response(new PostResult(document.getId()));
    }
}
