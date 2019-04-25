package cn.liulangzhe.pojo;

import java.util.Date;

public class News {
	private int id;           //新闻id
	private String title;	  //新闻标题
	private String content;   //新闻内容
	private Date date;        //新闻时间
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	@Override
	public String toString() {
		return "News [id=" + id + ", title=" + title + ", content=" + content + ", date=" + date + "]";
	}
	
	
}
