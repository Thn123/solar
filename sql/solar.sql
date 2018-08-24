SET NAMES UTF8;
DROP DATABASE IF EXISTS solar;
CREATE DATABASE solar CHARSET=UTF8;
USE solar;


/**用户信息表**/
CREATE TABLE t_login(
  id INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32)
);
INSERT INTO t_login VALUES
(10, 'tanhuani', '123456'),
(20, 'beibei', '456789');


/***详情信息表****/
CREATE TABLE t_detail(
    id INT PRIMARY KEY AUTO_INCREMENT,
    pic VARCHAR(56),
    title VARCHAR(400),
    content VARCHAR(500),
    time  BIGINT
);
INSERT INTO t_detail VALUES(NULL,'section1.jpg','上海泰联与三晶电气战略合作签约在上海SNEC隆重举行','中国太阳能光伏网讯：4月19日上午，上海泰联新能源有限公司与三晶电气正式签署战略合作协议，开启光伏发电新生态',1445154859209);
INSERT INTO t_detail VALUES(NULL,'hot1.jpg','科士达盛装亮相2017SNEC全系新品展示其绿色领导力','作为逆变器行业主导代表产品，深圳科士达科技股份有限公司携其完善的光伏逆变器及充电桩全系产品重磅亮相',1445254859209);
INSERT INTO t_detail VALUES(NULL,'section3.gif','杜邦高性能材料事业部与展宇光伏签订平屋面安装技术授权许可协议','2017年4月19号，上海在SNEC2017盛大开展期间，杜邦高性能材料事业部与展宇光伏签订平屋面安装技术授权许可协议',1445254859209);
INSERT INTO t_detail VALUES(NULL,'section4.jpg','山东省扶贫办:首批光伏扶贫项目建成并网388个，覆盖2.3万个贫困户','从山东省扶贫办了解到，截止目前为止，山东省第一批光伏扶贫项目建成并网388个，建设规模到17.8万千瓦',1445354859209);
INSERT INTO t_detail VALUES(NULL,'section5.jpg','脱贫好帮手 山西娄烦贫困村建起光伏发电站','光照足，才能搞光伏发电，娄烦恰好具备这样的条件，全年平均光照时间长达2800个小时。',1445554859209);
INSERT INTO t_detail VALUES(NULL,'section6.jpg','陕西省渭南市发改委<关于进一步规范光伏发电项目开发管理的通知>','...',1445554859209);
INSERT INTO t_detail VALUES(NULL,'section7.jpg','安徽徽州区光伏项目照亮精准扶贫路','徽州区将光伏扶贫作为精准扶贫、稳定脱贫的重要措施、重点扶贫无劳动力、无资源、无稳定收入来源的贫困户以及集体经济薄弱，资源匮乏的贫困村',1445654859209);
INSERT INTO t_detail VALUES(NULL,'section3.gif','杜邦高性能材料事业部与展宇光伏签订平屋面安装技术授权许可协议','2017年4月19号，上海在SNEC2017盛大开展期间，杜邦高性能材料事业部与展宇光伏签订平屋面安装技术授权许可协议',1445254859209);
INSERT INTO t_detail VALUES(NULL,'section4.jpg','山东省扶贫办:首批光伏扶贫项目建成并网388个，覆盖2.3万个贫困户','从山东省扶贫办了解到，截止目前为止，山东省第一批光伏扶贫项目建成并网388个，建设规模到17.8万千瓦',1445354859209);
INSERT INTO t_detail VALUES(NULL,'section6.jpg','陕西省渭南市发改委<关于进一步规范光伏发电项目开发管理的通知>','...',1445554859209);
INSERT INTO t_detail VALUES(NULL,'section7.jpg','安徽徽州区光伏项目照亮精准扶贫路','徽州区将光伏扶贫作为精准扶贫、稳定脱贫的重要措施、重点扶贫无劳动力、无资源、无稳定收入来源的贫困户以及集体经济薄弱，资源匮乏的贫困村',1445654859209);
INSERT INTO t_detail VALUES(NULL,'section3.gif','杜邦高性能材料事业部与展宇光伏签订平屋面安装技术授权许可协议','2017年4月19号，上海在SNEC2017盛大开展期间，杜邦高性能材料事业部与展宇光伏签订平屋面安装技术授权许可协议',1445254859209);
INSERT INTO t_detail VALUES(NULL,'section4.jpg','山东省扶贫办:首批光伏扶贫项目建成并网388个，覆盖2.3万个贫困户','从山东省扶贫办了解到，截止目前为止，山东省第一批光伏扶贫项目建成并网388个，建设规模到17.8万千瓦',1445354859209);
INSERT INTO t_detail VALUES(NULL,'section7.jpg','安徽徽州区光伏项目照亮精准扶贫路','徽州区将光伏扶贫作为精准扶贫、稳定脱贫的重要措施、重点扶贫无劳动力、无资源、无稳定收入来源的贫困户以及集体经济薄弱，资源匮乏的贫困村',1445654859209);
INSERT INTO t_detail VALUES(NULL,'section3.gif','杜邦高性能材料事业部与展宇光伏签订平屋面安装技术授权许可协议','2017年4月19号，上海在SNEC2017盛大开展期间，杜邦高性能材料事业部与展宇光伏签订平屋面安装技术授权许可协议',1445254859209);