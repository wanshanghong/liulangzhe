package cn.liulangzhe.pojo;

import java.util.Date;

public class Post {
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
	private int userid;                         //用户id
	
	public int getPostId() {
		return postId;
	}
	public int getUserid() {
		return userid;
	}
	public void setUserid(int userid) {
		this.userid = userid;
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
	public String getPostContent() {
		return postContent;
	}
	public void setPostContent(String postContent) {
		this.postContent = postContent;
	}
	public String getAttentionAmount() {
		return attentionAmount;
	}
	public void setAttentionAmount(String attentionAmount) {
		this.attentionAmount = attentionAmount;
	}
	public Date getPostDate() {
		return postDate;
	}
	public void setPostDate(Date postDate) {
		this.postDate = postDate;
	}
	public String getImgPath1() {
		return imgPath1;
	}
	public void setImgPath1(String imgPath1) {
		this.imgPath1 = imgPath1;
	}
	public String getImgPath2() {
		return imgPath2;
	}
	public void setImgPath2(String imgPath2) {
		this.imgPath2 = imgPath2;
	}
	public String getImgPath3() {
		return imgPath3;
	}
	public void setImgPath3(String imgPath3) {
		this.imgPath3 = imgPath3;
	}
	public String getImgPath4() {
		return imgPath4;
	}
	public void setImgPath4(String imgPath4) {
		this.imgPath4 = imgPath4;
	}
	public String getImgPath5() {
		return imgPath5;
	}
	public void setImgPath5(String imgPath5) {
		this.imgPath5 = imgPath5;
	}
	public String getImgPath6() {
		return imgPath6;
	}
	public void setImgPath6(String imgPath6) {
		this.imgPath6 = imgPath6;
	}
	public String getImgPath7() {
		return imgPath7;
	}
	public void setImgPath7(String imgPath7) {
		this.imgPath7 = imgPath7;
	}
	public String getImgPath8() {
		return imgPath8;
	}
	public void setImgPath8(String imgPath8) {
		this.imgPath8 = imgPath8;
	}
	public String getImgPath9() {
		return imgPath9;
	}
	public void setImgPath9(String imgPath9) {
		this.imgPath9 = imgPath9;
	}
	public String getVideoPath() {
		return videoPath;
	}
	public void setVideoPath(String videoPath) {
		this.videoPath = videoPath;
	}
	public String getPostTitle() {
		return postTitle;
	}
	public void setPostTitle(String postTitle) {
		this.postTitle = postTitle;
	}
	@Override
	public String toString() {
		return "Post [postId=" + postId + ", postTitle=" + postTitle + ", username=" + username + ", userphoto="
				+ userphoto + ", postContent=" + postContent + ", attentionAmount=" + attentionAmount + ", postDate="
				+ postDate + ", imgPath1=" + imgPath1 + ", imgPath2=" + imgPath2 + ", imgPath3=" + imgPath3
				+ ", imgPath4=" + imgPath4 + ", imgPath5=" + imgPath5 + ", imgPath6=" + imgPath6 + ", imgPath7="
				+ imgPath7 + ", imgPath8=" + imgPath8 + ", imgPath9=" + imgPath9 + ", videoPath=" + videoPath
				+ ", userid=" + userid + "]";
	}

	
}
