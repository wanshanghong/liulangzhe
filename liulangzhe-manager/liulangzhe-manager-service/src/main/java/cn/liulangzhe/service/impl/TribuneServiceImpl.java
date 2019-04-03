package cn.liulangzhe.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cn.liulangzhe.mapper.TribuneMapper;
import cn.liulangzhe.pojo.Tribune;
import cn.liulangzhe.service.TribuneService;

@Service
public class TribuneServiceImpl implements TribuneService {
	@Autowired
	private TribuneMapper tribuneMapper;
	
	@Override
	public List<Tribune> FindAllTribune() {
		// TODO Auto-generated method stub
		return tribuneMapper.FindAllTribune();
	}

	@Override
	public Tribune FindTribuneBytribuneId(int tribuneId) {
		// TODO Auto-generated method stub
		return tribuneMapper.FindTribuneBytribuneId(tribuneId);
	}

}
