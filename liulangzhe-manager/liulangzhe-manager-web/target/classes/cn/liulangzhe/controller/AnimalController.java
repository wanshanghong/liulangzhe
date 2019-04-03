package cn.liulangzhe.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.liulangzhe.pojo.Animal;
import cn.liulangzhe.service.AnimalService;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

@Controller
public class AnimalController {
	@Autowired
	private AnimalService animalService;
	
	//查看所有的动物
	@RequestMapping("/findallanimal.action")
	@ResponseBody
	public String FindAllAnimal()
	{
		System.out.println("查看所有的动物功能开启........请求参数：无");
		List<Animal> lists=animalService.FindAllAnimal();
		JSONArray jsonArray = JSONArray.fromObject(lists);
		System.out.println("查看所有的动物功能结束........返回内容："+jsonArray.toString());
		return jsonArray.toString();
	}
		
	//通过用户useid查找所有的动物
	@RequestMapping("/findallanimalbyuserid.action")
	@ResponseBody
	public String FindAllAnimalByuserid(@RequestParam("userid") int userid)
	{
		System.out.println("查看所有的动物功能开启........请求参数：userid:"+userid);
		List<Animal> lists=animalService.FindAllAnimalByuserid(userid);
		JSONArray jsonArray = JSONArray.fromObject(lists);
		System.out.println("通过用户useid查找所有的动物结束........返回内容："+jsonArray.toString());
		return jsonArray.toString();
	}
		
	//通过宠物店的（sid)来查询宠物
	@RequestMapping("/findallanimalbysid.action")
	@ResponseBody
	public String FindAllAnimalBysid(@RequestParam("sid") int sid)
	{
		System.out.println("通过宠物店的（sid)来查询宠物开启........请求参数：sid:"+sid);
		List<Animal> lists=animalService.FindAllAnimalBysid(sid);
		JSONArray jsonArray = JSONArray.fromObject(lists);
		System.out.println("通过宠物店的（sid)来查询宠物结束........返回内容："+jsonArray.toString());
		return jsonArray.toString();
	}
	
	//通过宠物ID(animal_id)来查询宠物
	@RequestMapping("/findallanimalbyanimal_id.action")
	@ResponseBody
	public String FindAllAnimalByanimal_id(@RequestParam("animalId") int animalId)
	{
		System.out.println("通过宠物店的（sid)来查询宠物开启........请求参数：animalId:"+animalId);
		Animal animal=animalService.FindAllAnimalByanimal_id(animalId);
		JSONObject json = JSONObject.fromObject(animal);
		System.out.println("通过宠物店的（sid)来查询宠物结束........返回内容："+json.toString());
		return json.toString();
	}
}
