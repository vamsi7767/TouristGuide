package com.tourplan.dto;

import java.util.List;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class TourPlanResponseDTO {
	
	private Integer tourId;
    private UserDTO userdto;
    private List<TourDatesPlacesDTO> tourDatesPlacesList;
	public TourPlanResponseDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	public TourPlanResponseDTO(Integer tourId, UserDTO userdto, List<TourDatesPlacesDTO> tourDatesPlacesList) {
		 
		this.tourId = tourId;
		this.userdto = userdto;
		this.tourDatesPlacesList = tourDatesPlacesList;
	}
	public Integer getTourId() {
		return tourId;
	}
	public void setTourId(Integer tourId) {
		this.tourId = tourId;
	}
	public UserDTO getUserdto() {
		return userdto;
	}
	public void setUserdto(UserDTO userdto) {
		this.userdto = userdto;
	}
	public List<TourDatesPlacesDTO> getTourDatesPlacesList() {
		return tourDatesPlacesList;
	}
	public void setTourDatesPlacesList(List<TourDatesPlacesDTO> tourDatesPlacesList) {
		this.tourDatesPlacesList = tourDatesPlacesList;
	}
	@Override
	public String toString() {
		return "TourPlanResponseDTO [tourId=" + tourId + ", userdto=" + userdto + ", tourDatesPlacesList="
				+ tourDatesPlacesList + "]";
	}
    
    

}
