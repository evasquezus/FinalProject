package com.skilldistillery.ebarter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@EntityScan("com.skilldistillery.ebarter.entities")
@SpringBootApplication
public class EbarterApplication {

	public static void main(String[] args) {
		SpringApplication.run(EbarterApplication.class, args);
	}

}
