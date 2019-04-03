package cn.liulangzhe.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.liulangzhe.mapper.UserMapper;
import cn.liulangzhe.pojo.User;
import cn.liulangzhe.service.UserService;

@Service
public class UserServiceImpl implements UserService{
	@Autowired
	private UserMapper userMapper;
	
	//用户注册
	@Transactional
	public boolean registe(User user){
		System.out.println("userService.impl");
		return (userMapper.insertUser(user))>0?true:false;
	}
	
	//用户登陆
	@Override
	@Transactional
	public User login(String username, String password) {
		// TODO Auto-generated method stub
		Map<String,String> map = new HashMap<String, String>();		
		map.put("username",username);		
		map.put("password", password);		
		return userMapper.login(map);
	}
	
	//查找用户(userid)
	@Override
	@Transactional
	public User FindById(int userid) {
		// TODO Auto-generated method stub
		return userMapper.FindById(userid);
	}
	
	//修改用户信息
	@Override
	@Transactional
	public boolean edituserinformation(User user) {
		// TODO Auto-generated method stub
		return userMapper.edituserinformation(user);
	}
	
	//查找用户
	@Override
	public List<User> SearchFriend(int userid) {
		// TODO Auto-generated method stub
		return userMapper.SearchFriend(userid);
	}
}
