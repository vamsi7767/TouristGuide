package com.capgemini.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {

    private Integer id;
    private String fullName;
    private String email;
    private String address;
    private String mobileNumber;
    private String password;
	public UserDto() {
		super();
		// TODO Auto-generated constructor stub
	}
	public UserDto(Integer id, String fullName, String email, String address, String mobileNumber, String password) {
		 
		this.id = id;
		this.fullName = fullName;
		this.email = email;
		this.address = address;
		this.mobileNumber = mobileNumber;
		this.password = password;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "UserDto [id=" + id + ", fullName=" + fullName + ", email=" + email + ", address=" + address
				+ ", mobileNumber=" + mobileNumber + ", password=" + password + "]";
	}
    
    
    

}
