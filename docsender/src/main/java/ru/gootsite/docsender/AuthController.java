package ru.gootsite.docsender;

import java.security.Principal;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.gootsite.docsender.core.Response;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @GetMapping("login")
    Response<Object> login(@AuthenticationPrincipal Principal principal) {
        return new Response(principal.toString());
    }

    @GetMapping("user-info")
    Response<Object> getUserInfo(@AuthenticationPrincipal Principal principal) {
        return new Response(principal.toString());
    }
}
