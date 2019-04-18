package com.skilldistillery.ebarter.entities;

import java.util.Date;
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
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class Item {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "description")
	private String description;

	@Column(name = "name")
	private String name;

	@Column(name = "end_date")
	private Date endDate;

	@Column(name = "item_status")
	private int itemStatus;

	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "category_id")
	private Category category;
//
//	@ManyToOne(cascade = { CascadeType.ALL })
//	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;

//	@JsonIgnore
	@OneToMany (mappedBy = "item")
	private List<Offer> offers;
	
	@Column(name="image_url")
	private String imageUrl;
	
//	@JsonIgnore
//	@OneToMany(mappedBy="item")
//	private List<Item_Image> itemImage;

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public List<Offer> getOffers() {
		return offers;
	}

	public void setOffers(List<Offer> offers) {
		this.offers = offers;
	}

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

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public int getItemStatus() {
		return itemStatus;
	}

	public void setItemStatus(int status) {
		this.itemStatus = status;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

//	public List<Item_Image> getItemImage() {
//		return itemImage;
//	}
//
//	public void setItemImage(List<Item_Image> itemImage) {
//		this.itemImage = itemImage;
//	}

	

	@Override
	public String toString() {
		return "Item [id=" + id + ", description=" + description + ", name=" + name + ", itemStatus=" + itemStatus
				+ ", category=" + category + ", user=" + user + ", offers=" + offers + ", imageUrl=" + imageUrl + "]";
	}


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((category == null) ? 0 : category.hashCode());
		result = prime * result + ((description == null) ? 0 : description.hashCode());
<<<<<<< HEAD
=======
		result = prime * result + ((endDate == null) ? 0 : endDate.hashCode());
>>>>>>> parent of 4bbbe98... Layed out changes for back-end added new route
		result = prime * result + id;
		result = prime * result + ((imageUrl == null) ? 0 : imageUrl.hashCode());
		result = prime * result + itemStatus;
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + ((offers == null) ? 0 : offers.hashCode());
		result = prime * result + ((user == null) ? 0 : user.hashCode());
		return result;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Item other = (Item) obj;
		if (category == null) {
			if (other.category != null)
				return false;
		} else if (!category.equals(other.category))
			return false;
		if (description == null) {
			if (other.description != null)
				return false;
		} else if (!description.equals(other.description))
			return false;
<<<<<<< HEAD
=======
		if (endDate == null) {
			if (other.endDate != null)
				return false;
		} else if (!endDate.equals(other.endDate))
			return false;
>>>>>>> parent of 4bbbe98... Layed out changes for back-end added new route
		if (id != other.id)
			return false;
		if (imageUrl == null) {
			if (other.imageUrl != null)
				return false;
		} else if (!imageUrl.equals(other.imageUrl))
			return false;
		if (itemStatus != other.itemStatus)
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (offers == null) {
			if (other.offers != null)
				return false;
		} else if (!offers.equals(other.offers))
			return false;
		if (user == null) {
			if (other.user != null)
				return false;
		} else if (!user.equals(other.user))
			return false;
		return true;
	}

<<<<<<< HEAD
	public Item(int id, String description, String name, int itemStatus, Category category, User user,
			List<Offer> offers, String imageUrl) {
=======
	@Override
	public String toString() {
		return "Item [id=" + id + ", description=" + description + ", name=" + name + ", endDate=" + endDate
				+ ", active=" + itemStatus + ", category=" + category + ", user=" + user + ", offer=" + offers
				+ ", itemImage=" + "]";
	}

	public Item(int id, String description, String name, Date endDate, int itemStatus, Category category, User user,
			List<Offer> offer) {
>>>>>>> parent of 4bbbe98... Layed out changes for back-end added new route
		super();
		this.id = id;
		this.description = description;
		this.name = name;
<<<<<<< HEAD
=======
		this.endDate = endDate;
>>>>>>> parent of 4bbbe98... Layed out changes for back-end added new route
		this.itemStatus = itemStatus;
		this.category = category;
		this.user = user;
		this.offers = offers;
		this.imageUrl = imageUrl;
	}

	public Item() {
		super();
	}

}
