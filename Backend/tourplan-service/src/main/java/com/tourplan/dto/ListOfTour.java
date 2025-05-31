package com.tourplan.dto;

import java.util.List;

import lombok.Data;
import lombok.RequiredArgsConstructor;


@Data
@RequiredArgsConstructor
public class ListOfTour {
	
	private Integer tourId;
    private List<TourDatesPlacesDTO> tourDatesPlacesList;
	public ListOfTour() {
		super();
		// TODO Auto-generated constructor stub
	}
	public ListOfTour(Integer tourId, List<TourDatesPlacesDTO> tourDatesPlacesList) {
		 
		this.tourId = tourId;
		this.tourDatesPlacesList = tourDatesPlacesList;
	}
	public Integer getTourId() {
		return tourId;
	}
	public void setTourId(Integer tourId) {
		this.tourId = tourId;
	}
	public List<TourDatesPlacesDTO> getTourDatesPlacesList() {
		return tourDatesPlacesList;
	}
	public void setTourDatesPlacesList(List<TourDatesPlacesDTO> tourDatesPlacesList) {
		this.tourDatesPlacesList = tourDatesPlacesList;
	}
	@Override
	public String toString() {
		return "ListOfTour [tourId=" + tourId + ", tourDatesPlacesList=" + tourDatesPlacesList + "]";
	}

    
    

}
