package com.tourplan.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@Entity
@RequiredArgsConstructor
public class TourDatesPlaces {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer planId;
	
	@NotNull(message  = "tour id should not be null")
	private Integer tourId;
	@NotNull(message  = "tour date should not be null")
	private String tourDate;
	@NotNull(message  = "place id should not be null")
	private Integer placeId;
	public TourDatesPlaces() {
		super();
		// TODO Auto-generated constructor stub
	}
	public TourDatesPlaces(Integer planId, @NotNull(message = "tour id should not be null") Integer tourId,
			@NotNull(message = "tour date should not be null") String tourDate,
			@NotNull(message = "place id should not be null") Integer placeId) {
		super();
		this.planId = planId;
		this.tourId = tourId;
		this.tourDate = tourDate;
		this.placeId = placeId;
	}
	public Integer getPlanId() {
		return planId;
	}
	public void setPlanId(Integer planId) {
		this.planId = planId;
	}
	public Integer getTourId() {
		return tourId;
	}
	public void setTourId(Integer tourId) {
		this.tourId = tourId;
	}
	public String getTourDate() {
		return tourDate;
	}
	public void setTourDate(String tourDate) {
		this.tourDate = tourDate;
	}
	public Integer getPlaceId() {
		return placeId;
	}
	public void setPlaceId(Integer placeId) {
		this.placeId = placeId;
	}
	@Override
	public String toString() {
		return "TourDatesPlaces [planId=" + planId + ", tourId=" + tourId + ", tourDate=" + tourDate + ", placeId="
				+ placeId + "]";
	}
	
	
	

}
