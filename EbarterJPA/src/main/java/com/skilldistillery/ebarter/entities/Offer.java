package com.skilldistillery.ebarter.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Offer {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "description")
	private String description;

	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "item_id")
	private Item item;

	@OneToMany(mappedBy="offer")
	private List<Offer_Image> offerImg;

	@ManyToOne
	@JoinColumn(name="offer_status_id")
	private Offer_Status offerStatus;

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

	public List<Offer_Image> getOfferImg() {
		return offerImg;
	}

	public void setOfferImg(List<Offer_Image> offerImg) {
		this.offerImg = offerImg;
	}

	public Offer_Status getOfferStatus() {
		return offerStatus;
	}

	public void setOfferStatus(Offer_Status offerStatus) {
		this.offerStatus = offerStatus;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((description == null) ? 0 : description.hashCode());
		result = prime * result + id;
		result = prime * result + ((item == null) ? 0 : item.hashCode());
		result = prime * result + ((offerImg == null) ? 0 : offerImg.hashCode());
		result = prime * result + ((offerStatus == null) ? 0 : offerStatus.hashCode());
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
		Offer other = (Offer) obj;
		if (description == null) {
			if (other.description != null)
				return false;
		} else if (!description.equals(other.description))
			return false;
		if (id != other.id)
			return false;
		if (item == null) {
			if (other.item != null)
				return false;
		} else if (!item.equals(other.item))
			return false;
		if (offerImg == null) {
			if (other.offerImg != null)
				return false;
		} else if (!offerImg.equals(other.offerImg))
			return false;
		if (offerStatus == null) {
			if (other.offerStatus != null)
				return false;
		} else if (!offerStatus.equals(other.offerStatus))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Offer [id=" + id + ", description=" + description + ", item=" + item + ", offerImg=" + offerImg
				+ ", offerStatus=" + offerStatus + "]";
	}

	public Offer(int id, String description, Item item, List<Offer_Image> offerImg, Offer_Status offerStatus) {
		super();
		this.id = id;
		this.description = description;
		this.item = item;
		this.offerImg = offerImg;
		this.offerStatus = offerStatus;
	}

	public Offer() {
		super();
	}
	
	
}
