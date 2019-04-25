package cn.liulangzhe.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.liulangzhe.mapper.PostMapper;
import cn.liulangzhe.pojo.Post;
import cn.liulangzhe.pojo.Post_Comment;
import cn.liulangzhe.service.PostService;
import net.sf.json.JSONArray;

@Service
public class PostServiceImpl implements PostService{
	@Autowired
	private PostMapper postMapper;

	
	//发帖实现方法
	@Override
	public Post SendPost(Post post) {
		// TODO Auto-generated method stub
		int postId=postMapper.PostInsert(post);
		
		return postMapper.SelectIdPost(postId);
	}

	//加载帖实现方法
	@Override
	public List<Post> FindAllPost() {
		// TODO Auto-generated method stub
		return postMapper.FindAllPost();
	}

	//点赞实现方法
	@Override
	public Post thumbs_up(int post_id) {
		// TODO Auto-generated method stub
		return postMapper.thumbs_up(post_id);
	}
	
	
	//转发实现接口
	@Override
	public boolean transmit(int post_id, int userid) {
		// TODO Auto-generated method stub
		Map<Object, Object> map=new HashMap<Object, Object>();		
		map.put("post_id",post_id);		
		map.put("userid", userid);	
		int i=postMapper.transmit(map);
		return i>0?true:false;
	}
	
	//查找贴(postId)
	@Override
	public Post FindPostById(int postId) {
		// TODO Auto-generated method stub
		return postMapper.FindPostById(postId);
	}
	
	//评论帖
	@Transactional
	@Override
	public boolean Comment_post(Post_Comment post_comment) {
		// TODO Auto-generated method stub
		return postMapper.Comment_post(post_comment);
	}

	//通过用户id来获取帖
	@Override
	public List<Post> FindPostByUserId(int userid) {
		// TODO Auto-generated method stub
		return postMapper.FindPostByUserId(userid);
	}

	
	//通过贴id查询回复
	@Override
	public JSONArray showAllByPostid(int postId) {
		// TODO Auto-generated method stub
		return postMapper.showAllByPostid(postId);
	}

	@Override
	public List<Post> FindPostByPostId(int postId) {
		// TODO Auto-generated method stub
		return postMapper.FindPostByPostId(postId);
	}
	
}
