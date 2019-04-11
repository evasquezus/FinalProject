package com.skilldistillery.ebarter.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Offer_Image {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name="offer_image_url")
	private String offerImgUrl;
	
	@ManyToOne
	@JoinColumn(name="offer_id")
	private Offer offer;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getOfferImgUrl() {
		return offerImgUrl;
	}

	public void setOfferImgUrl(String offerImgUrl) {
		this.offerImgUrl = offerImgUrl;
	}

	public Offer getOffer() {
		return offer;
	}

	public void setOffer(Offer offer) {
		this.offer = offer;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		result = prime * result + ((offer == null) ? 0 : offer.hashCode());
		result = prime * result + ((offerImgUrl == null) ? 0 : offerImgUrl.hashCode());
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
		Offer_Image other = (Offer_Image) obj;
		if (id != other.id)
			return false;
		if (offer == null) {
			if (other.offer != null)
				return false;
		} else if (!offer.equals(other.offer))
			return false;
		if (offerImgUrl == null) {
			if (other.offerImgUrl != null)
				return false;
		} else if (!offerImgUrl.equals(other.offerImgUrl))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Offer_Image [id=" + id + ", offerImgUrl=" + offerImgUrl + ", offer=" + offer + "]";
	}

	public Offer_Image(int id, String offerImgUrl, Offer offer) {
		super();
		this.id = id;
		this.offerImgUrl = offerImgUrl;
		this.offer = offer;
	}

	public Offer_Image() {
		super();
	}


}
