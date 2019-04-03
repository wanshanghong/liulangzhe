package cn.liulangzhe.controller;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import cn.liulangzhe.pojo.JOSNbjectPojo;
import cn.liulangzhe.pojo.Post;
import cn.liulangzhe.pojo.Post_Comment;
import cn.liulangzhe.pojo.User;
import cn.liulangzhe.service.PostService;
import cn.liulangzhe.service.UserService;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

@Controller
public class PostController{
	@Autowired
	private PostService postService;
	
	@Autowired
	private UserService userService;
	
	
	
		
		//发帖1
		@RequestMapping("/sendpost1.action")
		@ResponseBody
		public String sendpost1(HttpServletRequest request,HttpServletResponse response,HttpSession session) throws IOException{
			System.out.println("出事了");
			System.out.println("出事了1");
			MultipartHttpServletRequest params=((MultipartHttpServletRequest) request);  
			System.out.println("出事了2");
			String postTitle=params.getParameter("postTitle");
			System.out.println("出事了3");
			System.out.println("postTitle:"+postTitle);  
			
			
			MultipartFile imgPath1 = ((MultipartHttpServletRequest) request).getFile("imgPath1");
			
			String postContent=params.getParameter("postContent");
			System.out.println("postContent:"+postContent); 
			String  id=params.getParameter("userid");
			int userid=Integer.parseInt(params.getParameter("userid")); 
			
			   System.out.println("userid:"+userid);   
			           
			MultipartFile file = null;    

			Post post=new Post();
			
			
			
			//上传图片
			//获得物理路径webapp所在路径
			String pathRoot = request.getSession().getServletContext().getRealPath("");
			String path1="";
			if(!imgPath1.isEmpty()){
				//生成uuid作为文件名称
				String uuid = UUID.randomUUID().toString().replaceAll("","");
				//获得文件类型（可以判断如果不是图片，禁止上传）			
				String contentType=imgPath1.getContentType();
				//获得文件后缀名称
				String imageName=contentType.substring(contentType.indexOf("/")+1);
				path1="/static/images/"+uuid+"."+imageName;
				imgPath1.transferTo(new File(pathRoot+path1));
				}
			
			post.setImgPath1(path1);
			post.setPostTitle(postTitle);
			post.setPostContent(postContent);
			post.setUserid(userid);
			
			
			System.out.println(path1);	

			//获取当前时间
			Date date=new Date();
			post.setPostDate(date);
			System.out.println("当前时间："+date);
			
			//获取发帖人
			User user=new User();
			
			post=postService.SendPost(post);
			
			JOSNbjectPojo json=new JOSNbjectPojo(post);
			
//			response.getWriter().write(json.getJson().toString());
//			response.setHeader("Access-Control-Allow-Origin","*");
//			response.setHeader("Access-Control-Allow-Methods","POST");
	//		response.setHeader("Access-Control-Allow-Headers","Access-Control");
//			response.setHeader("Allow","POST");

			return json.getJson().toString();
		}
		/*
		 * <!--  
	private int postId;						//贴ID
	private String postTitle;	            //帖标题
	private String username;			    //发送者名
	private String userphoto;				//用户头像
	private String postContent;				//贴内容
	
	private String attentionAmount;			//点赞数量
	private Date postDate;						//发表时间
	private String imgPath1;					//图片1
	private String imgPath2;					//图片2
	private String imgPath3;					//图片3
	private String imgPath4;					//图片4
	private String imgPath5;					//图片5
	private String imgPath6;					//图片6
	private String imgPath7;					//图片7
	private String imgPath8;					//图片8
	private String imgPath9;					//图片9
	private String videoPath;					//视频
	-->
		 * */
	//发帖
	@RequestMapping("/sendpost.action")
	@ResponseBody
	public void sendpost(@RequestParam("userid") int userid,@RequestParam("postTitle") String postTitle,@RequestParam(value="imgPath1",required=false) MultipartFile imgPath1,
			@RequestParam(value="videoPath",required=false) MultipartFile videoPath,@RequestParam("postContent") String postContent,
			HttpServletRequest request,HttpServletResponse response,
			HttpSession session
			) throws IOException{
		

		Post post=new Post();
		
		post.setUserid(userid);
		post.setPostTitle(postTitle);
		post.setPostContent(postContent);
		
		//上传图片
		//获得物理路径webapp所在路径
		String pathRoot = request.getSession().getServletContext().getRealPath("");
		String path1="";
		if(!imgPath1.isEmpty()){
			//生成uuid作为文件名称
			String uuid = UUID.randomUUID().toString().replaceAll("-","");
			//获得文件类型（可以判断如果不是图片，禁止上传）			
			String contentType=imgPath1.getContentType();
			//获得文件后缀名称
			String imageName=contentType.substring(contentType.indexOf("/")+1);
			path1="/static/images/"+uuid+"."+imageName;
			imgPath1.transferTo(new File(pathRoot+path1));
			}
		post.setImgPath1(path1);
		System.out.println(path1);		
		request.setAttribute("imagesPath", path1);
		
		//上传视频
		String path2="";
		if(!videoPath.isEmpty()){
			//生成uuid作为文件名称
			String uuid = UUID.randomUUID().toString().replaceAll("-","");
			//获得文件类型（可以判断如果不是图片，禁止上传）			
			String contentType=videoPath.getContentType();
			//获得文件后缀名称
			String videoName=contentType.substring(contentType.indexOf("/")+1);
			path2="/static/videos/"+uuid+"."+videoName;
			videoPath.transferTo(new File(pathRoot+path2));
			}
		post.setVideoPath(path2);
		System.out.println(path2);		
		request.setAttribute("videoPath", path2);
			
		request.setAttribute("videoPath", path2);
		//获取当前时间
		Date date=new Date();
		post.setPostDate(date);
		System.out.println("当前时间："+date);
		
		post=postService.SendPost(post);
		
		JOSNbjectPojo json=new JOSNbjectPojo(post);
		response.setHeader("Access-Control-Allow-Origin","*");
		response.setHeader("Access-Control-Allow-Methods","POST");
		response.setHeader("Access-Control-Allow-Headers","Access-Control");
		response.setHeader("Allow","POST");

		
		
		response.getWriter().write(json.getJson().toString());
		
	}
	
	
	//加载所有的帖
	@RequestMapping("loadAllPost.action")
	@ResponseBody
	public String loadAllPost(HttpServletRequest request,HttpServletResponse response,
			HttpSession session) throws IOException{
		System.out.println("加载所有帖功能触发......请求信息：无");
		List<Post> list=new ArrayList<Post>();
		list=postService.FindAllPost();
		System.out.println("list:"+list);
		JSONArray jsonArray = JSONArray.fromObject(list);
		System.out.println("加载所有帖功能结束......回应信息：post："+jsonArray.toString());
		return jsonArray.toString();

	}
	
	//查找用户下的帖
	@RequestMapping("FindPostByUserId.action")
	@ResponseBody
	public String FindPostByUserId(@RequestParam("userid") int userid,HttpServletRequest request,HttpServletResponse response,
			HttpSession session) throws IOException{
		System.out.println("加查找用户下的帖功能触发......请求信息：无");
		List<Post> list=new ArrayList<Post>();
		list=postService.FindPostByUserId(userid);
		System.out.println("list:"+list);
		JSONArray jsonArray = JSONArray.fromObject(list);
		System.out.println("查找用户下的帖功能结束......回应信息：post："+jsonArray.toString());
		return jsonArray.toString();

	}
		
	//点赞功能
	@RequestMapping("thumbs-up.action")
	@ResponseBody
	public String thumbs_up(@RequestParam("postid") int postid,HttpSession session){
		
		System.out.println("点赞功能触发......请求信息：postid="+postid);
		Post post=new Post();
		post=postService.thumbs_up(postid);
		
		JSONObject json=JSONObject.fromObject(post);
		System.out.println("点赞功能结束......回应信息：post："+json.toString());
		return json.toString();
	}
	
	//转发功能
	@RequestMapping("transmit.action")
	@ResponseBody
	public String transmit(@RequestParam("postid") int postid,@RequestParam("userid") int userid){
		System.out.println("转发功能触发......请求信息：postid="+postid+"\t userid:"+userid);
		boolean tm=postService.transmit(postid,userid);
		if(tm==true){
			Map<Object, Object> map = new HashMap<Object, Object>(); 
			
			User user=new User();
			user=userService.FindById(userid);
			Post post=new Post();
			post=postService.FindPostById(postid);
			map.put("user", user);
			map.put("post", post);
			JSONObject jsonObject = JSONObject.fromObject(map);
			System.out.println("点赞功能结束......回应信息：post："+jsonObject.toString());
			return jsonObject.toString();
		}else
			return "转发失败！";
	}
//	private int postId;       //帖ID
//	private int userid;       //评论人id
//	private String username;	  //评论人名字
//	private String userphoto;     //评论人头像
//	private String commentContent;   //评论内容
//	private int praiseAmount;        //点赞数量
	//评论功能
	@RequestMapping("addcommenpost.action")
	@ResponseBody
	public String AddCommentPost(@RequestParam("postId")int postId,@RequestParam("userid")int userid,
			@RequestParam("commentContent") String commentContent){
		System.out.println("评论功能触发......请求信息：postId="+postId+"\t userid:"+userid
				+"\t commentContent:"+commentContent);
		Post_Comment post_comment=new Post_Comment();
		post_comment.setPostId(postId);
		post_comment.setUserid(userid);
		post_comment.setCommentContent(commentContent);
		boolean i=postService.Comment_post(post_comment);
		JSONObject json = new JSONObject();
		json.put("i", i);
		System.out.println("点赞功能结束......回应信息：i："+i);
		return json.toString();
	}
	
	//通过贴ID查看评论
	@RequestMapping("showallbypostid.action")
	@ResponseBody
	public String showAllByPostid(@RequestParam("postId") int postId)
	{
		System.out.println("通过贴ID查看评论功能触发......请求信息：postId="+postId);
		JSONArray json=postService.showAllByPostid(postId);
		System.out.println("通过贴ID查看评论功能结束......返回信息"+json.toString());
		return json.toString();
	}
}
