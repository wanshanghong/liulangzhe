package cn.liulangzhe.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.liulangzhe.pojo.Vaccine;
import cn.liulangzhe.service.VaccineService;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

@Controller
public class VaccineController{
	@Autowired
	private VaccineService vaccineService;
	
	
	//查找疫苗(通过ID)
	@RequestMapping("FindVaccinById.action")
	@ResponseBody
	public String FindVaccinById(@RequestParam("vaccineId") int vaccineId)
	{
		
		System.out.println("查找疫苗(通过ID)功能触发.....请求消息：vaccineId="+vaccineId);
		Vaccine vaccine=new Vaccine();
		vaccine = vaccineService.findvaccinebyid(vaccineId);
		System.out.println("vaccine:"+vaccine);
		JSONObject json=JSONObject.fromObject(vaccine);
		System.out.println("查找疫苗(通过ID)功能结束.....响应消息：json="+json.toString());
		return json.toString();
	}
	
	//查找所有疫苗
	@RequestMapping("FindAllVaccin.action")
	@ResponseBody
	public String FindAllVaccin()
	{
		
		System.out.println("查找所有疫苗功能触发.....请求消息:无");
		List<Vaccine> list=new ArrayList<Vaccine>();
		list = vaccineService.FindAllVaccin();
		JSONArray json=JSONArray.fromObject(list);
		System.out.println("查找所有疫苗功能结束.....响应消息：json="+json.toString());
		return json.toString();
	}
	
	//添加疫苗
	@RequestMapping("AddVaccine.action")
	@ResponseBody
	public String AddVaccine(@RequestParam("vaccineName")String vaccineName)
	{
		Date vaccineDate=new Date();
		Vaccine vaccine=new Vaccine();
		vaccine.setVaccineDate(vaccineDate);
		vaccine.setVaccineName(vaccineName);
		System.out.println("添加疫苗功能触发.....请求消息:"+"vaccineDate="+vaccineDate+"setVaccineName="+vaccineName);
		int vaccineId=vaccineService.AddVaccine(vaccine);
		JSONObject json=new JSONObject();
		json.put("vaccineId", vaccine.getVaccineId());
		return json.toString();
	}
	
}
