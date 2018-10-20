/*
  isbn,
  openid,
  rate,
  title,
  image,
  alt,
  publisher,
  summary,
  price,
  tags,
  author,
  author_intro,
  catalog
  */
create table books(
  id int not null auto_increment primary key,
  isbn varchar(20) not null,
  openid varchar(50) not null,
  rate float,
  title varchar(100) not null,
  image varchar(100),
  alt varchar(100) not null,
  publisher varchar(100) not null,
  summary varchar(1000) not null,
  price float,
  tags varchar(100),
  author varchar(100),
  author_intro varchar(1000),
  catalog text
)


create table comments(
  id int not null auto_increment primary key,
  openid varchar(100) not null,
  bookid varchar(10) not null,
  comment varchar(200) not null,
  phone varchar(50),
  location varchar(50)
)
