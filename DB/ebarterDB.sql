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
-- Table `item_image`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `item_image` ;

CREATE TABLE IF NOT EXISTS `item_image` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `item_id` INT(10) NULL,
  `item_image_url` VARCHAR(500) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `category`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `category` ;

CREATE TABLE IF NOT EXISTS `category` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `item`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `item` ;

CREATE TABLE IF NOT EXISTS `item` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(20) NOT NULL,
  `description` VARCHAR(200) NULL DEFAULT NULL,
  `end_date` DATETIME NOT NULL,
  `is_active` TINYINT(4) NULL DEFAULT NULL,
  `user_id` INT(11) NOT NULL,
  `category_id` INT NOT NULL,
  `item_image_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `seller_id_idx` (`user_id` ASC),
  INDEX `item_image_id_idx` (`item_image_id` ASC),
  INDEX `category_id_idx` (`category_id` ASC),
  CONSTRAINT `user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `item_image_id`
    FOREIGN KEY (`item_image_id`)
    REFERENCES `item_image` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `category_id`
    FOREIGN KEY (`category_id`)
    REFERENCES `category` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `offer_status`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `offer_status` ;

CREATE TABLE IF NOT EXISTS `offer_status` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `status_name` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `offer_image`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `offer_image` ;

CREATE TABLE IF NOT EXISTS `offer_image` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `offer_id` INT(11) NOT NULL,
  `offer_image_url` VARCHAR(500) NOT NULL,
  PRIMARY KEY (`id`))
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
  `offer_image_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `offer_image)id_idx` (`offer_image_id` ASC),
  INDEX `item_id_idx` (`item_id` ASC),
  CONSTRAINT `item_id`
    FOREIGN KEY (`item_id`)
    REFERENCES `item` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `offer_status_id`
    FOREIGN KEY (`offer_status_id`)
    REFERENCES `offer_status` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `offer_image_id`
    FOREIGN KEY (`offer_image_id`)
    REFERENCES `offer_image` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
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

COMMIT;


-- -----------------------------------------------------
-- Data for table `item_image`
-- -----------------------------------------------------
START TRANSACTION;
USE `ebarterDB`;
INSERT INTO `item_image` (`id`, `item_id`, `item_image_url`) VALUES (1, 1, 'itemimage.com');

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


-- -----------------------------------------------------
-- Data for table `item`
-- -----------------------------------------------------
START TRANSACTION;
USE `ebarterDB`;
INSERT INTO `item` (`id`, `name`, `description`, `end_date`, `is_active`, `user_id`, `category_id`, `item_image_id`) VALUES (1, 'computer desk', 'A dark wood computer desk', '2019-10-04', 1, 1, 1, NULL);
INSERT INTO `item` (`id`, `name`, `description`, `end_date`, `is_active`, `user_id`, `category_id`, `item_image_id`) VALUES (2, 'tv stand', 'All glass tv stand', '2019-10-04', 1, 2, 1, NULL);
INSERT INTO `item` (`id`, `name`, `description`, `end_date`, `is_active`, `user_id`, `category_id`, `item_image_id`) VALUES (3, 'snowboard', 'An old snowboard in good shape', '2019-10-04', 1, 1, 3, NULL);
INSERT INTO `item` (`id`, `name`, `description`, `end_date`, `is_active`, `user_id`, `category_id`, `item_image_id`) VALUES (4, 'mac book', 'Working condition mac book from skill distillery, time to get a new one with the money', '2019-10-04', 1, 3, 2, NULL);

COMMIT;


-- -----------------------------------------------------
-- Data for table `offer_status`
-- -----------------------------------------------------
START TRANSACTION;
USE `ebarterDB`;
INSERT INTO `offer_status` (`id`, `status_name`) VALUES (1, 'true');
INSERT INTO `offer_status` (`id`, `status_name`) VALUES (2, 'complete');
INSERT INTO `offer_status` (`id`, `status_name`) VALUES (3, 'incomplete');

COMMIT;


-- -----------------------------------------------------
-- Data for table `offer_image`
-- -----------------------------------------------------
START TRANSACTION;
USE `ebarterDB`;
INSERT INTO `offer_image` (`id`, `offer_id`, `offer_image_url`) VALUES (1, 1, 'image.com');

COMMIT;


-- -----------------------------------------------------
-- Data for table `offer`
-- -----------------------------------------------------
START TRANSACTION;
USE `ebarterDB`;
INSERT INTO `offer` (`id`, `item_id`, `description`, `offer_status_id`, `offer_image_id`) VALUES (1, 1, 'I will offer you a chair', 1, 1);
INSERT INTO `offer` (`id`, `item_id`, `description`, `offer_status_id`, `offer_image_id`) VALUES (2, 1, 'I will offer you a chicken ', 1, NULL);
INSERT INTO `offer` (`id`, `item_id`, `description`, `offer_status_id`, `offer_image_id`) VALUES (3, 1, 'I will offer a piece of gold', 1, NULL);

COMMIT;

