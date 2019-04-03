package cn.liulangzhe.mapper;

import java.util.List;
import java.util.Map;

import cn.liulangzhe.pojo.User;

public interface UserMapper {
	//插入用户
	public int insertUser(User user);
	
	//用户登陆
	public User login(Map<String, String> map);
	
	//查找用户(userid)
	public User FindById(int userid);
	
	//修改用户信息
	public boolean edituserinformation(User user);

	//查找好友
	public List<User> SearchFriend(int userid);
}
