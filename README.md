# FourLoop
Designing an application to manage a financial portfolio

CREATE DATABASE finance_portfolio;
USE finance_portfolio;
CREATE TABLE portfolio (
    id INT PRIMARY KEY AUTO_INCREMENT,
    ticker VARCHAR(10) NOT NULL,
    quantity INT NOT NULL,
    average_price FLOAT NOT NULL
);
CREATE TABLE transactions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    ticker VARCHAR(10) NOT NULL,
    type ENUM('BUY', 'SELL') NOT NULL,
    quantity INT NOT NULL,
    price FLOAT NOT NULL,
    transaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

https://chatgpt.com/share/688c651e-829c-8009-bfb0-6e476d5d2b4b
