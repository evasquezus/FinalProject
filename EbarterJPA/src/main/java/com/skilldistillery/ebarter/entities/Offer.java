package com.skilldistillery.ebarter.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Offer {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "description")
	private String description;

	@ManyToOne
	@JoinColumn(name = "item_id")
	private Item item;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Item getItem() {
		return item;
	}

	public void setItem(Item item) {
		this.item = item;
	}

	@Override
	public String toString() {
		return "Offer [id=" + id + ", description=" + description + ", item=" + item + "]";
	}

	public Offer(int id, String description, Item item) {
		super();
		this.id = id;
		this.description = description;
		this.item = item;
	}

	public Offer() {
		super();
	}

}
