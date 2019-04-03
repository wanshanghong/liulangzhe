package cn.liulangzhe.pojo;

import java.util.Date;

//疫苗表
public class Vaccine {
	private int vaccineId;
	private String vaccineName;
	private Date vaccineDate;
	public int getVaccineId() {
		return vaccineId;
	}
	public void setVaccineId(int vaccineId) {
		this.vaccineId = vaccineId;
	}
	public String getVaccineName() {
		return vaccineName;
	}
	public void setVaccineName(String vaccineName) {
		this.vaccineName = vaccineName;
	}
	public Date getVaccineDate() {
		return vaccineDate;
	}
	public void setVaccineDate(Date vaccineDate) {
		this.vaccineDate = vaccineDate;
	}
	@Override
	public String toString() {
		return "Vaccine [vaccineId=" + vaccineId + ", vaccineName=" + vaccineName + ", vaccineDate=" + vaccineDate
				+ "]";
	}
	
	
}
