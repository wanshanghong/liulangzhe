package cn.liulangzhe.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cn.liulangzhe.mapper.AnimalMapper;
import cn.liulangzhe.pojo.Animal;
import cn.liulangzhe.service.AnimalService;

@Service
public class AnimalServiceImpl implements AnimalService{
	@Autowired
	private AnimalMapper animalMapper;
	
	@Override
	public List<Animal> FindAllAnimal() {
		// TODO Auto-generated method stub
		return animalMapper.FindAllAnimal();
	}

	@Override
	public List<Animal> FindAllAnimalByuserid(int userid) {
		// TODO Auto-generated method stub
		return animalMapper.FindAllAnimalByuserid(userid);
	}

	@Override
	public List<Animal> FindAllAnimalBysid(int sid) {
		// TODO Auto-generated method stub
		return animalMapper.FindAllAnimalBysid(sid);
	}

	@Override
	public Animal FindAllAnimalByanimal_id(int animalId) {
		// TODO Auto-generated method stub
		return animalMapper.FindAllAnimalByanimal_id(animalId);
	}

}
