# Host: localhost  (Version: 5.5.53)
# Date: 2018-01-29 20:00:58
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "goodsinfo"
#

CREATE TABLE `goodsinfo` (
  `goodsId` varchar(10) NOT NULL,
  `goodsName` varchar(100) DEFAULT NULL,
  `goodsType` varchar(20) DEFAULT NULL,
  `goodsPrice` float DEFAULT NULL,
  `goodsCount` int(11) DEFAULT NULL,
  `goodsDesc` varchar(100) DEFAULT NULL,
  `goodsImg` varchar(100) DEFAULT NULL,
  `beiyong1` varchar(100) DEFAULT NULL,
  `beiyong2` varchar(100) DEFAULT NULL,
  `beiyong3` varchar(100) DEFAULT NULL,
  `beiyong4` varchar(100) DEFAULT NULL,
  `beiyong5` varchar(100) DEFAULT NULL,
  `beiyong6` varchar(100) DEFAULT NULL,
  `beiyong7` varchar(100) DEFAULT NULL,
  `beiyong8` varchar(100) DEFAULT NULL,
  `beiyong9` varchar(100) DEFAULT NULL,
  `beiyong10` varchar(100) DEFAULT NULL,
  `beiyong11` varchar(100) DEFAULT NULL,
  `beiyong12` varchar(100) DEFAULT NULL,
  `beiyong13` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`goodsId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "goodsinfo"
#

INSERT INTO `goodsinfo` VALUES ('01001','熊猫耳机','2017FW | Lili M x CL',458,23,'Lili M ','img/goodslist5.jpg','','','','','','','','','','','','',''),('01002','熊猫耳机','2017FW | Lili M x CL',458,23,'Lili M ','img/goodslist5.jpg','','','','','','','','','','','','',''),('01003','熊猫耳机','2017FW | Lili M x CL',458,23,'Lili M ','img/goodslist5.jpg','','','','','','','','','','','','',''),('01004','熊猫耳机','2017FW | Lili M x CL',458,23,'Lili M ','img/goodslist5.jpg','','','','','','','','','','','','',''),('01005','粉色贝母戒指','2017FW | Lili M x CL',458,23,'Lili M ','img/goodslist1.jpg','','','','','','','','','','','','',''),('01006','粉色贝母戒指','2017FW | Lili M x CL',458,23,'Lili M ','img/goodslist1.jpg','','','','','','','','','','','','',''),('01007','粉色贝母戒指','2017FW | Lili M x CL',458,23,'Lili M ','img/goodslist1.jpg','','','','','','','','','','','','',''),('01008','粉色贝母戒指','2017FW | Lili M x CL',458,23,'Lili M ','img/goodslist1.jpg','','','','','','','','','','','','',''),('01009','粉色贝母戒指','2017FW | Lili M x CL',458,23,'Lili M ','img/goodslist2.jpg','','','','','','','','','','','','',''),('01010','粉色贝母戒指','2017FW | Lili M x CL',458,23,'Lili M ','img/goodslist2.jpg','','','','','','','','','','','','',''),('01011','粉色贝母戒指','2017FW | Lili M x CL',458,23,'Lili M ','img/goodslist2.jpg','','','','','','','','','','','','',''),('01012','粉色贝母戒指','2017FW | Lili M x CL',458,23,'Lili M ','img/goodslist2.jpg','','','','','','','','','','','','',''),('01013','粉色贝母戒指','2017FW | Lili M x CL',458,23,'Lili M ','img/goodslist3.jpg','','','','','','','','','','','','',''),('01014','粉色贝母戒指','2017FW | Lili M x CL',458,23,'Lili M ','img/goodslist3.jpg','','','','','','','','','','','','',''),('01015','粉色贝母戒指','2017FW | Lili M x CL',458,23,'Lili M ','img/goodslist3.jpg','','','','','','','','','','','','',''),('01016','粉色贝母戒指','2017FW | Lili M x CL',458,23,'Lili M ','img/goodslist3.jpg','','','','','','','','','','','','','');

#
# Structure for table "shoppingcart"
#

CREATE TABLE `shoppingcart` (
  `vipName` varchar(10) DEFAULT NULL,
  `goodsId` varchar(10) DEFAULT NULL,
  `goodsCount` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "shoppingcart"
#

INSERT INTO `shoppingcart` VALUES ('1234567890','01001',1),('1234567890','01001',1),('1234567890','01001',1),('1234567890','01001',1),('1234567890','01001',1),('1234567890','01001',1),('1234567890','01001',1),('1234567890','01001',1),('1234567890','01001',1),('1234567890','01001',1),('1234567890','01001',1),('1234567890','01001',1),('1234567890','01001',1),('1234567890','01001',1),('1234567890','01001',1),('1234567890','01001',1),('','01010',3);

#
# Structure for table "vip"
#

CREATE TABLE `vip` (
  `username` varchar(20) NOT NULL,
  `userpass` varchar(10) NOT NULL,
  `usersex` char(2) DEFAULT NULL,
  `userage` int(11) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "vip"
#

INSERT INTO `vip` VALUES ('12345678900','123456',NULL,NULL),('12345678901','123456',NULL,NULL),('15045994375','123123',NULL,NULL),('15045994376','123123',NULL,NULL),('15045994379','123123',NULL,NULL),('15945994379','123123',NULL,NULL),('17629261377','312312',NULL,NULL),('17629261378','1846527',NULL,NULL),('毛毛虫','123456',NULL,NULL);
