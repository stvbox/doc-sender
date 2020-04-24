package ru.gootsite.docsender.extend;

import java.security.Principal;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.gootsite.docsender.core.ControlError;
import ru.gootsite.docsender.core.PostResult;
import ru.gootsite.docsender.core.Response;
import ru.gootsite.docsender.core.DocumentDto;

@RestController
@RequestMapping("/api/extend")
public class ExtendDocumentController {

    Logger logger = LoggerFactory.getLogger(ExtendDocumentController.class);

    @Autowired
    ExtendDocumentRepository repository;

    @Autowired
    ExtendControl control;

    @PostMapping("post")
    Response<PostResult> postDocument(
            @RequestBody DocumentDto model,
            @AuthenticationPrincipal Principal principal
    ) {
        for (int i = 0; i < 50; i++) {
            ExtendDocument document = new ExtendDocument();
            document.setCreatedBy(principal.getName());
            if (model.getAttributes().get("description") != null) {
                document.setDescription("(" + i + ")" + model.getAttributes().get("description"));
            }
            document.setExtend(model.getAttributes().get("extend"));

            List<ControlError> errors = control.check(document);
            if (errors.size() > 0) {
                return new Response(new PostResult(errors));
            }

            repository.save(document);
        }
        return new Response("ok");
    }
}
