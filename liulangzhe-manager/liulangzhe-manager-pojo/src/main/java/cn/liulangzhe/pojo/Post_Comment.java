package cn.liulangzhe.pojo;

public class Post_Comment {
	private int postId;       //帖ID
	private int userid;       //评论人id
	private String username;	  //评论人名字
	private String userphoto;     //评论人头像
	private String commentContent;   //评论内容
	private int praiseAmount;        //点赞数量
	
	public int getUserid() {
		return userid;
	}
	public void setUserid(int userid) {
		this.userid = userid;
	}

	@Override
	public String toString() {
		return "Post_Comment [postId=" + postId + ", userid=" + userid + ", username=" + username + ", userphoto="
				+ userphoto + ", commentContent=" + commentContent + ", praiseAmount=" + praiseAmount + "]";
	}
	public int getPostId() {
		return postId;
	}
	public void setPostId(int postId) {
		this.postId = postId;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getUserphoto() {
		return userphoto;
	}
	public void setUserphoto(String userphoto) {
		this.userphoto = userphoto;
	}
	public String getCommentContent() {
		return commentContent;
	}
	public void setCommentContent(String commentContent) {
		this.commentContent = commentContent;
	}
	public int getPraiseAmount() {
		return praiseAmount;
	}
	public void setPraiseAmount(int praiseAmount) {
		this.praiseAmount = praiseAmount;
	}

}
