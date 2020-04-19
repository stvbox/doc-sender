/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * Author:  stvbo
 * Created: Apr 6, 2020
 */

create table users(
    username varchar_ignorecase(12) not null primary key,
    password varchar_ignorecase(100) not null,
    enabled boolean not null
);

create table authorities (
    username varchar_ignorecase(12) not null,
    authority varchar_ignorecase(50) not null,
    constraint fk_authorities_users foreign key(username) references users(username)
);
create unique index ix_auth_username on authorities (username,authority);