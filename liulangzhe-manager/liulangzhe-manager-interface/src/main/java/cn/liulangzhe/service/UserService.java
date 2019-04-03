package cn.liulangzhe.service;

import java.util.List;

import cn.liulangzhe.pojo.User;

public interface UserService {
	
		//用户注册
		public boolean registe(User user);
		
		//用户登录
		public User login(String username, String password);
		
		//查找用户(userid)
		public User FindById(int userid);
		
		//修改用户信息
		public boolean edituserinformation(User user);
		
		//查找好友
		public List<User> SearchFriend(int userid);

}
