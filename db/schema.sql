### Schema
CREATE DATABASE retirement;
USE retirement;

CREATE TABLE user_data
(
	id int NOT NULL AUTO_INCREMENT,
    routeName varchar(255) NOT NULL,
	user_name varchar(255) NOT NULL,
	total_assets varchar(255) NOT NULL,
    income_in_retirement varchar(255) NOT NULL,
    retirement_age int NOT NULL,
    target_city varchar(255) NOT NULL,
    PRIMARY KEY (id)
);

: Sequelize.STRING,
