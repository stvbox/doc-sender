package ru.gootsite.docsender.base;

import java.security.Principal;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import ru.gootsite.docsender.core.BaseDocument;
import ru.gootsite.docsender.core.DocumentDto;
import ru.gootsite.docsender.core.DocumentRepository;
import ru.gootsite.docsender.core.PostResult;
import ru.gootsite.docsender.core.Response;

@RestController
@RequestMapping("/api/document")
public class DocumentController {

    Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    DocumentRepository<BaseDocument> repository;

    @GetMapping("get-list")
    Response<List<BaseDocument>> getDocuments(
            @AuthenticationPrincipal Principal principal,
            @RequestParam(name = "page", defaultValue = "0") int pageNum
    ) {
        Pageable page = PageRequest.of(pageNum, 5);
        List<BaseDocument> documents = repository.findAllByCreatedBy("user", page);
        boolean hasMoreDocunets = documents != null;
        return new Response(documents, pageNum, hasMoreDocunets);
    }

    @PostMapping("post")
    Response<PostResult> postDocument(@RequestBody DocumentDto model) {
        SimpleDocument document = new SimpleDocument();
        document.setDescription(model.getAttributes().get("description"));
        document = repository.save(document);
        return new Response(new PostResult(document.getId()));
    }
}
