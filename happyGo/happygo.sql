-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2018-05-19 01:28:10
-- 服务器版本： 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `happygo`
--
CREATE DATABASE IF NOT EXISTS `happygo` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `happygo`;

-- --------------------------------------------------------

--
-- 表的结构 `account`
--

CREATE TABLE `account` (
  `accountid` tinyint(10) UNSIGNED NOT NULL,
  `password` varchar(40) NOT NULL COMMENT '密码',
  `phone` varchar(40) NOT NULL COMMENT '手机号'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `account`
--

INSERT INTO `account` (`accountid`, `password`, `phone`) VALUES
(27, 'zhoupeng', '18105838792'),
(28, 'zhou', '18105838795'),
(29, 'zhoupeng', '18105838794'),
(30, 'zhoupeng', '18105838794');

-- --------------------------------------------------------

--
-- 表的结构 `shopdetails`
--

CREATE TABLE `shopdetails` (
  `shopid` tinyint(10) UNSIGNED NOT NULL COMMENT '商品ID',
  `bigpicurl` varchar(100) NOT NULL COMMENT '图片路径',
  `oldprice` varchar(10) CHARACTER SET utf8 DEFAULT NULL COMMENT '删除的价格',
  `nowprice` float(10,2) NOT NULL COMMENT '现价',
  `shopfunction` varchar(1000) CHARACTER SET utf8 DEFAULT NULL COMMENT '商品功能',
  `shopname` varchar(100) CHARACTER SET utf8 NOT NULL COMMENT '商品名称'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `shopdetails`
--

INSERT INTO `shopdetails` (`shopid`, `bigpicurl`, `oldprice`, `nowprice`, `shopfunction`, `shopname`) VALUES
(1, 'http://ecimg.happigo.com/data/upload/shop/store/goods/1/121/236621/1_05791952894890950_1280.jpg', '￥12298.00', 1998.00, '这款料理机让女神们的厨房幸福感爆棚。瑞士超精细机芯，能利用自身转速带来的向心力将玻璃水杯抬出桌面而不掉落。多个刀头满足不同切割需求，钝刀头方便清洗不伤手，4款不同粗细切片能满足日常烹饪需求。机身采用耐高温不锈钢，可直接在热锅中粉碎食物，省时省力更省心。', '菲仕乐-瑞士进口多功能魔法料理机庆生组（料理机+炒锅+汤锅 +礼品小锅2件套+水杯4只+锅铲）'),
(2, 'http://ecimg.happigo.com/data/upload/shop/store/goods/1/220/233220/1_05757196078197716_550.jpg', '￥19800.00', 11800.00, '和百达翡丽同时代的第一代瑞士名表，比劳力士、欧米茄第二代名表早50年，至今已经有163年历史', '瑞士英纳格情系中国80周年限量腕表');

-- --------------------------------------------------------

--
-- 表的结构 `todaytv`
--

CREATE TABLE `todaytv` (
  `limit` varchar(40) NOT NULL COMMENT '抢购时间',
  `deleteprice` varchar(40) CHARACTER SET utf8 NOT NULL COMMENT '删除的价格',
  `nowprice` varchar(40) CHARACTER SET utf8 NOT NULL COMMENT '现在的价格',
  `title` varchar(100) CHARACTER SET utf8 NOT NULL COMMENT '图片',
  `tips` varchar(42) CHARACTER SET utf8 NOT NULL COMMENT '小提示',
  `imgurl` varchar(250) NOT NULL COMMENT '图片url',
  `imgid` tinyint(4) UNSIGNED NOT NULL COMMENT '今日直播下图片列表'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `todaytv`
--

INSERT INTO `todaytv` (`limit`, `deleteprice`, `nowprice`, `title`, `tips`, `imgurl`, `imgid`) VALUES
('00:00', '￥12298', '1998', '菲仕乐-瑞士进口多功能魔法料理机庆生组（料理机+炒锅+汤锅 +礼品小锅2件套+水杯4只+锅铲）', '瑞士·让料理很简单', 'http://ecimg.happigo.com/data/upload/shop/store/goods/1/121/236621/1_main_236621_240.jpg', 1),
('00:59', '￥19800', '11800', '瑞士英纳格情系中国80周年限量腕表', '超越时间 成就非凡', 'http://ecimg.happigo.com/data/upload/shop/store/goods/1/220/233220/1_main_233220z_240.jpg', 2),
('01:44', '￥999', '699', '德国凯驰高压清洗机K2紧凑版', '节能节水低噪音', 'http://ecimg.happigo.com/data/upload/shop/store/goods/1/431/213931/1_main_213931z_240.jpg', 3),
('02:41', '￥299', '287', '袋鼠男士高弹防皱免熨休闲裤3件组', '修身有型 包覆性好', 'http://ecimg.happigo.com/data/upload/shop/store/goods/1/190/233690/1_main_233690_240.jpg', 4),
('03:24', '￥1299', '999', '雷士多功能无极调光隐形吊扇灯 36寸', '清凉风物·自带光环', 'http://ecimg.happigo.com/data/upload/shop/store/goods/1/207/234707/1_main_234707z_240.jpg', 5),
('02:00', '￥1500', '699', '参慕进口优品即食海参30克*100头', '太平洋沿岸进口海参', 'http://ecimg.happigo.com/data/upload/shop/store/goods/1/87/235087/1_main_235087z_240.jpg', 6),
('02:39', '￥2680', '578', 'C&C奢华舞钻璀璨腕表组女士手表', '大牌款式价格呆萌', 'http://ecimg.happigo.com/data/upload/shop/store/goods/1/197/227697/1_main_227697z_240.jpg', 7),
('03:25', '￥7980', '2980', '诺诗曼“和谐圆满”纯手工珐琅花瓶套组 赠品： “幸福美满”纯手工珐琅水杯五件套*1', '纯手工珐琅工艺', 'http://ecimg.happigo.com/data/upload/shop/store/goods/1/150/231650/1_main_231650_240.jpg', 8),
('04:18', '￥1500', '699', '参慕进口优品即食海参30克*100头', '太平洋沿岸进口海参', 'http://ecimg.happigo.com/data/upload/shop/store/goods/1/87/235087/1_main_235087z_240.jpg', 9),
('04:57', '￥1980', '1199', '德国delandis玺堡健康乳胶床垫（周年庆）', '为睡眠而来', 'http://ecimg.happigo.com/data/upload/shop/store/goods/1/68/234568/1_main_234568z_240.jpg', 10),
('05:11', '￥380', '298', '百茯散草本古方养身组10g*12袋/盒*6盒', '草本配方 祛湿不虚胖', 'http://ecimg.happigo.com/data/upload/shop/store/goods/1/319/233319/1_main_233319z_240.jpg', 12),
('05:20', '￥436', '268', '泰尔降脂护肝双效泰尔脂康40片*5盒', '饮酒人群常备', 'http://ecimg.happigo.com/data/upload/shop/store/goods/1/396/207896/1_main_207896z_240.jpg', 13);

-- --------------------------------------------------------

--
-- 表的结构 `twonav`
--

CREATE TABLE `twonav` (
  `townavid` tinyint(4) UNSIGNED NOT NULL COMMENT '二级导航编号',
  `twonavlist` varchar(20) CHARACTER SET utf8 NOT NULL COMMENT '二级导航列表'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `twonav`
--

INSERT INTO `twonav` (`townavid`, `twonavlist`) VALUES
(1, '面部护理'),
(2, '香水彩妆'),
(3, '美发护发'),
(4, '身体护理'),
(5, '美容工具'),
(6, '口腔护理');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`accountid`);

--
-- Indexes for table `shopdetails`
--
ALTER TABLE `shopdetails`
  ADD PRIMARY KEY (`shopid`);

--
-- Indexes for table `todaytv`
--
ALTER TABLE `todaytv`
  ADD PRIMARY KEY (`imgid`);

--
-- Indexes for table `twonav`
--
ALTER TABLE `twonav`
  ADD PRIMARY KEY (`townavid`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `account`
--
ALTER TABLE `account`
  MODIFY `accountid` tinyint(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
--
-- 使用表AUTO_INCREMENT `shopdetails`
--
ALTER TABLE `shopdetails`
  MODIFY `shopid` tinyint(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '商品ID', AUTO_INCREMENT=3;
--
-- 使用表AUTO_INCREMENT `todaytv`
--
ALTER TABLE `todaytv`
  MODIFY `imgid` tinyint(4) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '今日直播下图片列表', AUTO_INCREMENT=14;
--
-- 使用表AUTO_INCREMENT `twonav`
--
ALTER TABLE `twonav`
  MODIFY `townavid` tinyint(4) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '二级导航编号', AUTO_INCREMENT=7;--
-- Database: `school`
--
CREATE DATABASE IF NOT EXISTS `school` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `school`;

-- --------------------------------------------------------

--
-- 表的结构 `studentlist`
--

CREATE TABLE `studentlist` (
  `stuId` tinyint(1) UNSIGNED NOT NULL,
  `stuName` varchar(20) NOT NULL,
  `stuAddress` varchar(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `studentlist`
--

INSERT INTO `studentlist` (`stuId`, `stuName`, `stuAddress`) VALUES
(1, '张三', '杭州市九堡镇旺田大酒店');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `studentlist`
--
ALTER TABLE `studentlist`
  ADD PRIMARY KEY (`stuId`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `studentlist`
--
ALTER TABLE `studentlist`
  MODIFY `stuId` tinyint(1) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;--
-- Database: `taobao`
--
CREATE DATABASE IF NOT EXISTS `taobao` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `taobao`;

-- --------------------------------------------------------

--
-- 表的结构 `account`
--

CREATE TABLE `account` (
  `accountId` tinyint(1) UNSIGNED NOT NULL COMMENT '账户ID',
  `accountName` varchar(20) NOT NULL COMMENT '用户名',
  `accountPass` varchar(42) NOT NULL COMMENT '用户密码',
  `accountEmail` varchar(40) NOT NULL COMMENT '用户邮箱'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `account`
--

INSERT INTO `account` (`accountId`, `accountName`, `accountPass`, `accountEmail`) VALUES
(1, 'zhangsan', 'woshilisi', ''),
(2, 'zhangsanshiwoerzi', 'pei', ''),
(3, '123', '123', '123'),
(4, '1231', '1231', '1231'),
(5, 'dasdaqweq', 'asada', 'adsad'),
(6, '1321313131sa', 'adasd', 'adsad'),
(8, '123a', '123', '123'),
(9, '111', '111', '11'),
(15, 'wangwu', 'woshiwangwo', '123@qq.com'),
(14, '1112', '123', '123');

-- --------------------------------------------------------

--
-- 表的结构 `goodlist`
--

CREATE TABLE `goodlist` (
  `goodId` tinyint(1) UNSIGNED NOT NULL COMMENT '图片编号',
  `src` varchar(1000) NOT NULL COMMENT '图片路径',
  `title` varchar(100) NOT NULL COMMENT '图片标题',
  `price` varchar(40) NOT NULL COMMENT '价格',
  `salesNum` varchar(10) NOT NULL COMMENT '销量'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `goodlist`
--

INSERT INTO `goodlist` (`goodId`, `src`, `title`, `price`, `salesNum`) VALUES
(5, 'https://img.alicdn.com/bao/uploaded/i4/TB1TOjuRVXXXXbdXXXXXXXXXXXX_!!0-item_pic.jpg_200x200q90.jpg_.webp', '社会精神小伙半袖男体恤韩版潮日系 夏天中国风男装鹤刺绣短袖t恤', '￥118', '销量:580'),
(6, 'https://img.alicdn.com/bao/uploaded/i2/TB1V871PFXXXXaGXpXXXXXXXXXX_!!0-item_pic.jpg_200x200q90.jpg_.webp', '文乐潮牌原创格子长袖衬衫男日系韩版清新风打底衬衣港风休闲衬衫', '￥49', '销量:11284'),
(7, 'https://img.alicdn.com/bao/uploaded/i4/508749780/TB28YVjkFXXXXcNXXXXXXXXXXXX_!!508749780.jpg_200x200q90.jpg_.webp', '原创中国风男装复古盘扣七分袖衬衫男棉麻立领唐装亚麻衬衣男上衣', '￥68', '销量:3432'),
(8, 'https://img.alicdn.com/bao/uploaded/i3/2388509782/TB2Od9xiL5TBuNjSspcXXbnGFXa_!!2388509782.jpg_200x200q90.jpg_.webp', '衣疫 自制款走路带风的七分袖白衬衫', '￥89', '销量:1446'),
(9, 'https://img.alicdn.com/bao/uploaded/i3/TB1tgnwgDlYBeNjSszcYXHwhFXa_M2.SS2_200x200q90.jpg_.webp', '某地夏季新款纯棉T恤男士原创毛边领半袖T恤', '￥119', '销量:23'),
(10, 'https://img.alicdn.com/bao/uploaded/i2/1747708633/TB270nSjYJkpuFjy1zcXXa5FFXa_!!1747708633.jpg_200x200q90.jpg_.webp', '(正品包邮)澳洲Bellroy - Notebook Cover牛皮商务笔记本护照封套', '￥485', '销量:2');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`accountId`);

--
-- Indexes for table `goodlist`
--
ALTER TABLE `goodlist`
  ADD PRIMARY KEY (`goodId`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `account`
--
ALTER TABLE `account`
  MODIFY `accountId` tinyint(1) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '账户ID', AUTO_INCREMENT=16;
--
-- 使用表AUTO_INCREMENT `goodlist`
--
ALTER TABLE `goodlist`
  MODIFY `goodId` tinyint(1) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '图片编号', AUTO_INCREMENT=11;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
