package com.tourplan.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Entity
@Data
@RequiredArgsConstructor
public class Tour {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer tourId;
	
	@NotNull(message= "user id should not be null")
	private Integer userId;

	public Tour() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Tour(Integer tourId, @NotNull(message = "user id should not be null") Integer userId) {
		super();
		this.tourId = tourId;
		this.userId = userId;
	}

	public Integer getTourId() {
		return tourId;
	}

	public void setTourId(Integer tourId) {
		this.tourId = tourId;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	@Override
	public String toString() {
		return "Tour [tourId=" + tourId + ", userId=" + userId + "]";
	}
	
	
	


}
