-- Drops the day_planner_db if it already exists --
DROP DATABASE IF EXISTS ee_tracker_db;

-- Create the database day_planner_db and specified it for use.
CREATE DATABASE ee_tracker_db;

USE ee_tracker_db;

-- Create the table plans.
CREATE TABLE department (
  id int NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  budget DECIMAL(50,2) NULL,
  PRIMARY KEY (id)
);

-- Create the table plans.
CREATE TABLE role (
  id int NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(50,2)NOT NULL,
  department_id INT NULL,
  PRIMARY KEY (id)
);

-- Create the table plans.
CREATE TABLE employee (
  id int NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT NULL,
  PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO department (name)
VALUES ("Animation");

INSERT INTO department (name)
VALUES ("Human Resources");

INSERT INTO role (title, salary, department_id)
VALUES ("Manager", 65000, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Animator", "45000", 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Rebecca", "Sanchez", 2, 1);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Julia", "Alvarez", 1);