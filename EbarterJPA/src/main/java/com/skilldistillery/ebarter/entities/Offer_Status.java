package com.skilldistillery.ebarter.entities;

//import java.util.List;
//
//import javax.persistence.Column;
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.persistence.OneToMany;
//
//@Entity
//public class Offer_Status {
//
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private int id;
//
//	@Column(name = "status_name")
//	private String statusName;
//
//	public int getId() {
//		return id;
//	}
//
//	public void setId(int id) {
//		this.id = id;
//	}
//
//	public String getStatusName() {
//		return statusName;
//	}
//
//	public void setStatusName(String statusName) {
//		this.statusName = statusName;
//	}
//
//	@Override
//	public int hashCode() {
//		final int prime = 31;
//		int result = 1;
//		result = prime * result + id;
//		result = prime * result + ((statusName == null) ? 0 : statusName.hashCode());
//		return result;
//	}
//
//	@Override
//	public boolean equals(Object obj) {
//		if (this == obj)
//			return true;
//		if (obj == null)
//			return false;
//		if (getClass() != obj.getClass())
//			return false;
//		Offer_Status other = (Offer_Status) obj;
//		if (id != other.id)
//			return false;
//		if (statusName == null) {
//			if (other.statusName != null)
//				return false;
//		} else if (!statusName.equals(other.statusName))
//			return false;
//		return true;
//	}
//
//	@Override
//	public String toString() {
//		return "OfferStatus [id=" + id + ", statusName=" + statusName + "]";
//	}
//
//	public Offer_Status(int id, String statusName) {
//		super();
//		this.id = id;
//		this.statusName = statusName;
//	}
//
//	public Offer_Status() {
//		super();
//	}
//
//	
//}
