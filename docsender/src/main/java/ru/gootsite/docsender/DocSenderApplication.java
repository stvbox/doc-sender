package ru.gootsite.docsender;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
@EnableScheduling
public class DocSenderApplication implements WebMvcConfigurer {

    public static void main(String[] args) {
        SpringApplication.run(DocSenderApplication.class, args);
    }

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        /*registry.addViewController("/").setViewName("index.html");*/
        //registry.addViewController("/login").setViewName("forwrd:/index.html");
    }

}
