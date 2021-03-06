-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema ebarterDB
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `ebarterDB` ;

-- -----------------------------------------------------
-- Schema ebarterDB
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ebarterDB` DEFAULT CHARACTER SET utf8 ;
USE `ebarterDB` ;

-- -----------------------------------------------------
-- Table `address`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `address` ;

CREATE TABLE IF NOT EXISTS `address` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `street` VARCHAR(50) NOT NULL,
  `street_2` VARCHAR(50) NULL DEFAULT NULL,
  `city` VARCHAR(15) NOT NULL,
  `state` VARCHAR(10) NOT NULL,
  `zip_code` INT(11) NOT NULL,
  `phone` VARCHAR(15) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `role` ;

CREATE TABLE IF NOT EXISTS `role` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(20) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user` ;

CREATE TABLE IF NOT EXISTS `user` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(20) NOT NULL,
  `password` VARCHAR(500) NOT NULL,
  `enabled` TINYINT(4) NOT NULL,
  `first_name` VARCHAR(20) NOT NULL,
  `last_name` VARCHAR(20) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `register_date` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `role_id` INT(11) NOT NULL,
  `address_id` INT NULL,
  `authenticated` TINYINT NULL,
  PRIMARY KEY (`id`),
  INDEX `role_id` (`role_id` ASC),
  INDEX `address_id_idx` (`address_id` ASC),
  CONSTRAINT `role_id`
    FOREIGN KEY (`role_id`)
    REFERENCES `role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `address_id`
    FOREIGN KEY (`address_id`)
    REFERENCES `address` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `item`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `item` ;

CREATE TABLE IF NOT EXISTS `item` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(20) NOT NULL,
  `description` VARCHAR(300) NULL DEFAULT NULL,
  `item_status` TINYINT(4) NULL DEFAULT NULL,
  `user_id` INT(11) NOT NULL,
  `category_id` INT NOT NULL,
  `image_url` VARCHAR(1000) NULL,
  PRIMARY KEY (`id`),
  INDEX `seller_id_idx` (`user_id` ASC),
  CONSTRAINT `user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `offer`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `offer` ;

CREATE TABLE IF NOT EXISTS `offer` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `item_id` INT(11) NOT NULL,
  `description` VARCHAR(200) NOT NULL,
  `offer_status_id` INT NULL DEFAULT NULL,
  `user_offer_id` INT(11) NULL,
  `image_url` VARCHAR(1000) NULL,
  PRIMARY KEY (`id`),
  INDEX `item_id_idx` (`item_id` ASC),
  CONSTRAINT `item_id`
    FOREIGN KEY (`item_id`)
    REFERENCES `item` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `category`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `category` ;

CREATE TABLE IF NOT EXISTS `category` (
  `id` INT(11) NOT NULL,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

SET SQL_MODE = '';
DROP USER IF EXISTS ebarter;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'ebarter' IDENTIFIED BY 'ebarterpass';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'ebarter';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `address`
-- -----------------------------------------------------
START TRANSACTION;
USE `ebarterDB`;
INSERT INTO `address` (`id`, `street`, `street_2`, `city`, `state`, `zip_code`, `phone`) VALUES (1, '123 ebarter st', NULL, 'Denver', 'Co', 80237, '303-330-0303');
INSERT INTO `address` (`id`, `street`, `street_2`, `city`, `state`, `zip_code`, `phone`) VALUES (2, '456 ebarter st', NULL, 'Denver', 'Co', 80237, '303-123-4566');
INSERT INTO `address` (`id`, `street`, `street_2`, `city`, `state`, `zip_code`, `phone`) VALUES (3, '789 ebarter st', NULL, 'Denver', 'Co', 80237, '719-181-8181');
INSERT INTO `address` (`id`, `street`, `street_2`, `city`, `state`, `zip_code`, `phone`) VALUES (4, '123 test st', NULL, 'Denver', 'Co', 80237, '123-456-7899');

COMMIT;


-- -----------------------------------------------------
-- Data for table `role`
-- -----------------------------------------------------
START TRANSACTION;
USE `ebarterDB`;
INSERT INTO `role` (`id`, `name`) VALUES (1, 'admin');
INSERT INTO `role` (`id`, `name`) VALUES (2, 'user');

COMMIT;


-- -----------------------------------------------------
-- Data for table `user`
-- -----------------------------------------------------
START TRANSACTION;
USE `ebarterDB`;
INSERT INTO `user` (`id`, `user_name`, `password`, `enabled`, `first_name`, `last_name`, `email`, `register_date`, `role_id`, `address_id`, `authenticated`) VALUES (1, 'cmoney', 'cmoney', true, 'Young', 'Chen', 'young@ebarter.com', '2019-10-04', 1, 1, NULL);
INSERT INTO `user` (`id`, `user_name`, `password`, `enabled`, `first_name`, `last_name`, `email`, `register_date`, `role_id`, `address_id`, `authenticated`) VALUES (2, 'jmoney', 'jmoney', true, 'Eric', 'Evasquezus', 'eric@ebarter.com', '2019-10-04', 1, 2, NULL);
INSERT INTO `user` (`id`, `user_name`, `password`, `enabled`, `first_name`, `last_name`, `email`, `register_date`, `role_id`, `address_id`, `authenticated`) VALUES (3, 'emoney', 'emoney', true, 'John', 'Overberg', 'john@ebarter.com', '2019-10-04', 1, 3, NULL);
INSERT INTO `user` (`id`, `user_name`, `password`, `enabled`, `first_name`, `last_name`, `email`, `register_date`, `role_id`, `address_id`, `authenticated`) VALUES (4, 'testUser', '$2a$10$YUFXDUPQTu8cIEchxikbYedir5zm6cRPHPNKC8P6GKqLnJXrThPTi', true, 'test', 'user', 'test@gmail.com', '2019-10-04', 1, 4, NULL);
INSERT INTO `user` (`id`, `user_name`, `password`, `enabled`, `first_name`, `last_name`, `email`, `register_date`, `role_id`, `address_id`, `authenticated`) VALUES (5, 'offeruser', '$2a$10$Q0VRQjr7CF4iUl6xbPX8kO3Z4uTFPY5CM30vsgQLG4BlhSyBw3Nli', true, 'offer', 'user', 'offeruser@ebarter.com', '2019-10-04', 2, NULL, NULL);

COMMIT;


-- -----------------------------------------------------
-- Data for table `item`
-- -----------------------------------------------------
START TRANSACTION;
USE `ebarterDB`;
INSERT INTO `item` (`id`, `name`, `description`, `item_status`, `user_id`, `category_id`, `image_url`) VALUES (1, 'Computer desk', 'Offering my 2 years old computer desk, in great condition, minor paint problem.', 1, 1, 1, 'https://hips.hearstapps.com/clv.h-cdn.co/assets/15/29/2560x1659/gallery-1436821476-desk6.jpg?resize=480:*');
INSERT INTO `item` (`id`, `name`, `description`, `item_status`, `user_id`, `category_id`, `image_url`) VALUES (2, 'TV stand', 'Large top panel holds up to 50-Inch flat screen TV.Open shelves and closed compartments are great for display and storage of entertainment equipment.', 1, 2, 1, 'https://www.pier1.com/dis/dw/image/v2/AAID_PRD/on/demandware.static/-/Sites-pier1_master/default/dw221cb890/images/3568596/3568596_1.jpg?sw=400&sh=400');
INSERT INTO `item` (`id`, `name`, `description`, `item_status`, `user_id`, `category_id`, `image_url`) VALUES (3, 'Bike', 'With 21 speeds to conquer the trails, the Huffy Summit Ridge is ready for outdoor adventures; just follow the steps in our product manual', 1, 1, 3, 'https://images-na.ssl-images-amazon.com/images/I/719IoilO2aL._CR0,204,1224,1224_UX256.jpg');
INSERT INTO `item` (`id`, `name`, `description`, `item_status`, `user_id`, `category_id`, `image_url`) VALUES (4, 'Mac book', 'Working condition mac book from skill distillery, barely used in great condition, cover pretected since in use.', 1, 3, 2, 'https://i.pinimg.com/originals/31/00/8a/31008a2772d0509fb1c53ad7d4cfcb08.jpg');
INSERT INTO `item` (`id`, `name`, `description`, `item_status`, `user_id`, `category_id`, `image_url`) VALUES (5, 'Back Pack', 'DIMENSIONS for our BUSSINESS & FASHIONAL style DAYPACK:20 x 12.2 x 5.7 inch with dedicated Laptop compartment holds Laptops less than 17 Inch as well as 15.6 inch, 15 Inch,14 Inch and 13 Inch Macbook/Laptopsuch as for Dell HP, Asus, Lenovo, Acer, Samsung, Sony, MacBook, Notebook', 1, 4, 4, 'http://www.wanderkagu.com/image/data/items%20image/1610648_1.JPG');

COMMIT;


-- -----------------------------------------------------
-- Data for table `offer`
-- -----------------------------------------------------
START TRANSACTION;
USE `ebarterDB`;
INSERT INTO `offer` (`id`, `item_id`, `description`, `offer_status_id`, `user_offer_id`, `image_url`) VALUES (1, 1, 'A set of teaware', 1, 2, 'https://i.pinimg.com/originals/96/fe/a0/96fea084d01f00a706b054bf23546bae.jpg');
INSERT INTO `offer` (`id`, `item_id`, `description`, `offer_status_id`, `user_offer_id`, `image_url`) VALUES (2, 1, 'Golf set ', 1, 3, 'https://media.karousell.com/media/photos/products/2018/06/03/golf_clubs_set_tailor_made_for_lefthanded_1528027748_04ea36900');
INSERT INTO `offer` (`id`, `item_id`, `description`, `offer_status_id`, `user_offer_id`, `image_url`) VALUES (3, 4, 'Sharp 45\" smart TV', 1, 1, 'https://img.letgo.com/images/d3/7a/60/9d/d37a609dc1e779ba305790c71c7c87d6.jpeg?impolicy=img_600');
INSERT INTO `offer` (`id`, `item_id`, `description`, `offer_status_id`, `user_offer_id`, `image_url`) VALUES (4, 1, 'A 10% off BodyCard discount card', 1, 2, 'https://static2.uprinting.com/SmsImages/UP/product-page/112555/active/jpeg/Discount_Cards_2[1]_450x450.jpg');
INSERT INTO `offer` (`id`, `item_id`, `description`, `offer_status_id`, `user_offer_id`, `image_url`) VALUES (5, 2, 'An 10 years old rug recently washed', 1, 1, 'https://assets.catawiki.nl/assets/2017/11/16/b/a/8/ba81fb7f-ddb7-47c6-b3af-ac049ab9293c.jpg');
INSERT INTO `offer` (`id`, `item_id`, `description`, `offer_status_id`, `user_offer_id`, `image_url`) VALUES (6, 4, 'An 10 years old rug recently washed', 1, 1, 'https://assets.catawiki.nl/assets/2017/11/16/b/a/8/ba81fb7f-ddb7-47c6-b3af-ac049ab9293c.jpg');
INSERT INTO `offer` (`id`, `item_id`, `description`, `offer_status_id`, `user_offer_id`, `image_url`) VALUES (7, 3, 'A long board', 1, 3, 'https://i.pinimg.com/originals/38/09/24/380924d8f61f8a626b29a8f5a735baec.jpg');
INSERT INTO `offer` (`id`, `item_id`, `description`, `offer_status_id`, `user_offer_id`, `image_url`) VALUES (8, 4, 'A $100 gift card from Target', 1, 4, 'https://i.pinimg.com/236x/97/20/7f/97207fd08d5f399484f19e7bf3d90362--e-gift-cards-contests-and-giveaways.jpg');
INSERT INTO `offer` (`id`, `item_id`, `description`, `offer_status_id`, `user_offer_id`, `image_url`) VALUES (9, 4, 'DIY Roof Rack for small cars', 1, 2, 'https://www.mrmoneymustache.com/wp-content/uploads/2012/09/driveway.jpg');

COMMIT;


-- -----------------------------------------------------
-- Data for table `category`
-- -----------------------------------------------------
START TRANSACTION;
USE `ebarterDB`;
INSERT INTO `category` (`id`, `name`) VALUES (1, 'furniture');
INSERT INTO `category` (`id`, `name`) VALUES (2, 'electronic');
INSERT INTO `category` (`id`, `name`) VALUES (3, 'outdoor');
INSERT INTO `category` (`id`, `name`) VALUES (4, 'pets');
INSERT INTO `category` (`id`, `name`) VALUES (5, 'clothing');

COMMIT;

