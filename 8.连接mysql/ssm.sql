CREATE DATABASE how2java;
use how2java;
CREATE table category (
id int(11) not null AUTO_INCREMENT,
name VARCHAR(30),
sex varchar(1)，
PRIMARY KEY(id)
)DEFAULT CHARSET=UTF8;
#插入数据
INSERT INTO tbl_category VALUES ('1', 'category1', '男');
INSERT INTO tbl_category VALUES ('2', 'category2', null);
INSERT INTO tbl_category VALUES ('3', 'category3', null);
INSERT INTO tbl_category VALUES ('7', 'new Category', null);
INSERT INTO tbl_category VALUES ('8', '张三', null);
INSERT INTO tbl_category VALUES ('12', '李四', '和');
SELECT * from category;