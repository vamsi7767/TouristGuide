package com.placeservice.dto;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class PlaceDTO {

	private Integer placeId;
	private String placeName;
	private String images;
	private String address;
	private String area;
	private Double distance;
	private String description;
	private String tags;

	public PlaceDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public PlaceDTO(Integer placeId, String placeName, String images, String address, String area, Double distance,
			String description, String tags) {
		this.placeId = placeId;
		this.placeName = placeName;
		this.images = images;
		this.address = address;
		this.area = area;
		this.distance = distance;
		this.description = description;
		this.tags = tags;
	}

	public Integer getPlaceId() {
		return placeId;
	}

	public void setPlaceId(Integer placeId) {
		this.placeId = placeId;
	}

	public String getPlaceName() {
		return placeName;
	}

	public void setPlaceName(String placeName) {
		this.placeName = placeName;
	}

	public String getImages() {
		return images;
	}

	public void setImages(String images) {
		this.images = images;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	public Double getDistance() {
		return distance;
	}

	public void setDistance(Double distance) {
		this.distance = distance;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getTags() {
		return tags;
	}

	public void setTags(String tags) {
		this.tags = tags;
	}

	@Override
	public String toString() {
		return "PlaceDTO [placeId=" + placeId + ", placeName=" + placeName + ", images=" + images + ", address="
				+ address + ", area=" + area + ", distance=" + distance + ", description=" + description + ", tags="
				+ tags + "]";
	}
	
	

}
