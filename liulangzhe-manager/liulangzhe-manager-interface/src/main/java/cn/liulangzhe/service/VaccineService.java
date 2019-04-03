package cn.liulangzhe.service;

import java.util.List;

import cn.liulangzhe.pojo.Vaccine;

public interface VaccineService {

	//查找疫苗(通过ID)
	Vaccine findvaccinebyid(int vaccineId);
	
	//查找所有的疫苗
	List<Vaccine> FindAllVaccin();
	
	//添加疫苗
	int AddVaccine(Vaccine vaccine);
	
}
