CREATE TABLE CONTRACT 
(
    SEQ_NO           INT IDENTITY NOT NULL PRIMARY KEY,
    DEPT_CD          VARCHAR(10),
    DEPT_NAME        VARCHAR(50),
    CONTRACT_NAME    VARCHAR(100),
    CONTRACT_DATE    VARCHAR(50),
    EXPIRE_DATE      VARCHAR(50),
    REG_DATE         DATE
)

SELECT * FROM CONTRACT;

INSERT INTO CONTRACT (DEPT_CD,DEPT_NAME,CONTRACT_NAME,CONTRACT_DATE,EXPIRE_DATE,REG_DATE) 
VALUES('111','영업 1팀','계약서 테스트1','2022-05-07','2022-08-09',GETDATE())