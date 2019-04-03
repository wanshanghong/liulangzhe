package cn.liulangzhe.mapper;

import java.util.List;

import cn.liulangzhe.pojo.Tribune;

public interface TribuneMapper {
	//查找所有的论坛
	public List<Tribune> FindAllTribune();
	
	//通过论坛ID(tribuneId)查找论坛
	public Tribune FindTribuneBytribuneId(int tribuneId);
}
