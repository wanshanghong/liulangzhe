package cn.liulangzhe.service;

import java.util.List;

import cn.liulangzhe.pojo.Tribune;

public interface TribuneService {	
	//查找所有的论坛
		public List<Tribune> FindAllTribune();
		
		//通过论坛ID(tribuneId)查找论坛
		public Tribune FindTribuneBytribuneId(int tribuneId);
}
