package ru.gootsite.docsender;

import javax.sql.DataSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.security.provisioning.UserDetailsManager;

@EnableWebSecurity
public class SecurityConfiguration {

    @Bean
    DataSource dataSource() {
        return new EmbeddedDatabaseBuilder()
                .setType(EmbeddedDatabaseType.H2)
                .addScript("classpath:users.sql")
                .build();
    }

    @Bean
    UserDetailsManager users(DataSource dataSource) {
        UserDetails user = User.builder()
                .username("user")
                .password("{bcrypt}$2a$10$GRLdNijSQMUvl/au9ofL.eDwmoohzzS7.rmNSJZ.0FxO/BTk76klW")
                .roles("USER")
                .build();
        UserDetails admin = User.builder()
                .username("admin")
                .password("{bcrypt}$2a$10$GRLdNijSQMUvl/au9ofL.eDwmoohzzS7.rmNSJZ.0FxO/BTk76klW")
                .roles("USER", "ADMIN")
                .build();
        JdbcUserDetailsManager detailsManager = new JdbcUserDetailsManager(dataSource);
        detailsManager.createUser(user);
        detailsManager.createUser(admin);

        return detailsManager;
    }

    @Configuration
    public static class ApiSecurityConfig extends WebSecurityConfigurerAdapter {

        @Override
        protected void configure(HttpSecurity http) throws Exception {
            //http.antMatcher("/").authorizeRequests().anyRequest().permitAll();
            //http.antMatcher("/h2-console/").authorizeRequests().anyRequest().permitAll();

            //http.csrf().disable();
            //http.headers().frameOptions().disable();
            http
                    //.headers().frameOptions().disable().and()
                    .csrf().disable()
                    .authorizeRequests().antMatchers("/api/**").authenticated()
                    .and()
                    .formLogin()
                    .loginPage("/login-rest")
                    .loginProcessingUrl("/login-rest")
                    .defaultSuccessUrl("/api/auth/user-info")
                    .usernameParameter("username").passwordParameter("password");

            /*
            super.configure(http);
            /*http.antMatcher("/")
                    .authorizeRequests()
                    .antMatchers("/public/**").permitAll()
                    .antMatchers("/resources/**").permitAll()
                    .anyRequest().authenticated()
                    .and()
                    .formLogin().loginPage("/login").permitAll()
                    .and()
                    .logout().permitAll();*/
            //http.authorizeRequests().anyRequest();

            /*http.authorizeRequests().antMatchers("/").permitAll().and()
                    .authorizeRequests().antMatchers("/console/**").permitAll();*/
            //http.csrf().disable();
            //http.headers().frameOptions().disable();
            /*http
                    .antMatcher("*")
                    .authorizeRequests(authorize -> authorize
                    .anyRequest().permitAll());*/
            //super.configure(http);
            //http.csrf().disable();
        }

    }
}
