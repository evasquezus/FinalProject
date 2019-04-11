package com.skilldistillery.ebarter.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Item_Image {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "item_image_url")
	private String itemImageUrl;

	@JsonIgnore
	@ManyToOne
	@JoinColumn(name="item_id")
	private Item item;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getItemImageUrl() {
		return itemImageUrl;
	}

	public void setItemImageUrl(String itemImageUrl) {
		this.itemImageUrl = itemImageUrl;
	}

	public Item getItem() {
		return item;
	}

	public void setItem(Item item) {
		this.item = item;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		result = prime * result + ((item == null) ? 0 : item.hashCode());
		result = prime * result + ((itemImageUrl == null) ? 0 : itemImageUrl.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Item_Image other = (Item_Image) obj;
		if (id != other.id)
			return false;
		if (item == null) {
			if (other.item != null)
				return false;
		} else if (!item.equals(other.item))
			return false;
		if (itemImageUrl == null) {
			if (other.itemImageUrl != null)
				return false;
		} else if (!itemImageUrl.equals(other.itemImageUrl))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Item_Image [id=" + id + ", itemImageUrl=" + itemImageUrl + ", item=" + item + "]";
	}

	public Item_Image(int id, String itemImageUrl, Item item) {
		super();
		this.id = id;
		this.itemImageUrl = itemImageUrl;
		this.item = item;
	}

	public Item_Image() {
		super();
	} 
	
	
}
