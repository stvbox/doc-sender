package ru.gootsite.docsender;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import ru.gootsite.docsender.base.SimpleDocument;
import ru.gootsite.docsender.core.DocumentRepository;

@Controller
public class TestController {

    /*@Autowired
    DocumentRepository<SimpleDocument> documents;

    @RequestMapping("/test")
    @ResponseBody
    public String getRequestScopeMessage(HttpSession session) {
        String counterString = Optional.ofNullable(session.getAttribute("counter"))
                .orElse("0").toString();
        session.setAttribute("counter", Integer.parseInt(counterString) + 1);

        List<SimpleDocument> items = documents.findAll();
        String stringItem = items.stream()
                .map((item) -> item.toString())
                .collect(Collectors.joining(";"));

        return counterString + stringItem;
    }

    @PostMapping(path = "/test-post", consumes = "application/json", produces = "application/json")
    @ResponseBody
    public String postTest(@RequestBody SimpleDocument model) {
        return "post-ok: " + model;
    }

    @PostMapping(path = "/post", consumes = "application/json", produces = "application/json")
    @ResponseBody
    public String postTest(@RequestBody Model model) {
        return "post-ok: " + model.asMap().entrySet().toString();
    }*/
}
