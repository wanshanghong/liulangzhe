package cn.liulangzhe.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cn.liulangzhe.mapper.HostMapper;
import cn.liulangzhe.pojo.Host;
import cn.liulangzhe.service.HostService;

@Service
public class HostServiceImpl implements HostService {

	@Autowired
	private HostMapper hostMapper;
	
	@Override
	public List<Host> FindAllHost() {
		// TODO Auto-generated method stub
		return hostMapper.FindAllHost();
	}

}
