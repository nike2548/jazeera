create table profile
(
    id varchar(255) primary key,
    name varchar(255) not null,
    country_code varchar(8) not null default '91',
    mobile varchar(15),
    email varchar(255),
    password varchar(255),
    token varchar(255),
    role varchar(255) not null default 'USER',
    status varchar(255) not null default 'NA',
    provider varchar(255) not null default 'EMAIL',
    active boolean not null default true,
    vid varchar(255) not null default 'OWN',
    created_by varchar(255) not null default 'system',
    created_on timestamp not null default now(),
    updated_by varchar(255) not null default 'system',
    updated_on timestamp not null default now()
);
INSERT INTO profile
    (id, name, email, mobile, password, role, token)
VALUES
    ('ADMIN', 'Admin User', 'admin@mail.in', '123456789', '$2a$08$cSjjaI2Tlg9CpxR2/QAGyufobiSAXx9dpVaVDbt2IZiEm2OHYmsmO', 'ADMIN', '1234');
-- INSERT INTO profile (id, name, email, mobile, password, role) VALUES ('SUPER_ADMIN', 'SUPER_ADMIN', 'super@admin.com', '0022448899', '80086699', 'SUPER_ADMIN');
INSERT INTO profile
    (id, name, email, mobile, password, role)
VALUES
    ('APP_USER', 'App User', 'user@rndpro.in', '999999999', 'USER', 'USER');