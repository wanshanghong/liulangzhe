package cn.liulangzhe.service;

import java.util.List;

import cn.liulangzhe.pojo.Animal;

public interface AnimalService {
	//查看所有的动物
	public List<Animal> FindAllAnimal();
		
	//通过用户useid查找所有的动物
	public List<Animal> FindAllAnimalByuserid(int userid);
		
	//通过宠物店的（sid)来查询宠物
	public List<Animal> FindAllAnimalBysid(int sid);
	
	//通过宠物ID (animal_id)来查询宠物
	public Animal FindAllAnimalByanimal_id(int animalId);
}
