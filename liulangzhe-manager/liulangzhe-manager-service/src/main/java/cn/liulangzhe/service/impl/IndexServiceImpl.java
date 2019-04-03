package cn.liulangzhe.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cn.liulangzhe.mapper.IndexMapper;
import cn.liulangzhe.pojo.Theme;
import cn.liulangzhe.service.IndexService;

@Service
public class IndexServiceImpl implements IndexService{
	@Autowired
	private IndexMapper indexMapper;

	@Override
	public List<Theme> findalltheme() {
		// TODO Auto-generated method stub
		return indexMapper.findalltheme();
	}
	
	
}
