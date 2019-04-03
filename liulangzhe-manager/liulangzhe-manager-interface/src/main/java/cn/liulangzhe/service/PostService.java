package cn.liulangzhe.service;

import java.util.List;

import cn.liulangzhe.pojo.Post;
import cn.liulangzhe.pojo.Post_Comment;
import net.sf.json.JSONArray;

public interface PostService {

	//发帖接口
	public Post SendPost(Post post);

	//加载帖接口
	public List<Post> FindAllPost();
	
	//点赞接口
	public Post thumbs_up(int postId);
	
	//转发接口
	public boolean transmit(int postId, int userid);
	
	//查找贴(post_id)接口
	public Post FindPostById(int postId);
	
	//通过用户id来查找帖
	public List<Post>  FindPostByUserId(int userid);
	
	//评论帖
	public boolean Comment_post(Post_Comment post_comment);

	//通过贴id查询评论
	public JSONArray showAllByPostid(int postId);
	
}
