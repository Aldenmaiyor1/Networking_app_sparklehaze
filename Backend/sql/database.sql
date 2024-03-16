-- Script to initialize database

DROP TABLE IF EXISTS guests;
DROP TABLE IF EXISTS answers;
DROP TABLE IF EXISTS questions;

CREATE TABLE guests
(
    room_number INTEGER NOT NULL PRIMARY KEY, 
    gender VARCHAR(1) NOT NULL,
    age INTEGER
);

CREATE TABLE questions
(
    id INTEGER NOT NULL PRIMARY KEY,
    question VARCHAR(8000) NOT NULL
);

CREATE TABLE answers 
(
    id INTEGER NOT NULL PRIMARY KEY,
    question_id INTEGER NOT NULL,
    answer VARCHAR(8000) NOT NULL,
    FOREIGN KEY(question_id) REFERENCES questions (id) ON DELETE CASCADE
);

INSERT INTO questions(id, question)
VALUES (1, 'What gender are you'),
        (2, 'What is your age?'),
        (3, 'Where would you like to meet?');

INSERT INTO answers(id, question_id, answer)
VALUES (1, 1, 'male'),
        (2, 1, 'female'),
        (3, 2, 'integer');