CREATE TABLE students (
 id SERIAL PRIMARY KEY,
 name VARCHAR(100),
 mobile VARCHAR(20),
 course VARCHAR(100),
 fee INT
);

CREATE TABLE fees (
 id SERIAL PRIMARY KEY,
 student_id INT,
 amount INT
);
