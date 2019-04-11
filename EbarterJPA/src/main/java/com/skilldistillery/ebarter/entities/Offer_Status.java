//package com.skilldistillery.ebarter.entities;
//
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
//	@OneToMany(mappedBy = "offer_status")
//	private List<Offer> offer;
//
//	public int getId() {
//		return id;
//	}
//
//	public void setId(int id) {
//		this.id = id;
//	}
//
//	public List<Offer> getOffer() {
//		return offer;
//	}
//
//	public void setOffer(List<Offer> offer) {
//		this.offer = offer;
//	}
//
//	public Offer_Status() {
//		super();
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
//	public Offer_Status(int id, String statusName, List<Offer> offer) {
//		super();
//		this.id = id;
//		this.statusName = statusName;
//		this.offer = offer;
//	}
//
//	@Override
//	public String toString() {
//		return "OfferStatus [id=" + id + ", statusName=" + statusName + "]";
//	}
//
//}
