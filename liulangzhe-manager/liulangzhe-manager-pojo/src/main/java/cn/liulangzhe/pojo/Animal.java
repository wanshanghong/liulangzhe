package cn.liulangzhe.pojo;

public class Animal {
	private int animalId;			//动物ID
	private String animalName;		//动物名字
	private String animalRank;		//动物等级
	private String animalImagePath;	//动物头像
	private String animalDesc;		//动物描述
	private int userid;				//动物主人
	private int sid;				//救助站
	private int animalAge;			//动物年龄
	public int getAnimalId() {
		return animalId;
	}
	public void setAnimalId(int animalId) {
		this.animalId = animalId;
	}
	public String getAnimalName() {
		return animalName;
	}
	public void setAnimalName(String animalName) {
		this.animalName = animalName;
	}
	public String getAnimalRank() {
		return animalRank;
	}
	public void setAnimalRank(String animalRank) {
		this.animalRank = animalRank;
	}
	public String getAnimalImagePath() {
		return animalImagePath;
	}
	public void setAnimalImagePath(String animalImagePath) {
		this.animalImagePath = animalImagePath;
	}
	public String getAnimalDesc() {
		return animalDesc;
	}
	public void setAnimalDesc(String animalDesc) {
		this.animalDesc = animalDesc;
	}
	public int getUserid() {
		return userid;
	}
	public void setUserid(int userid) {
		this.userid = userid;
	}
	public int getSid() {
		return sid;
	}
	public void setSid(int sid) {
		this.sid = sid;
	}
	public int getAnimalAge() {
		return animalAge;
	}
	public void setAnimalAge(int animalAge) {
		this.animalAge = animalAge;
	}
	@Override
	public String toString() {
		return "Animal [animalId=" + animalId + ", animalName=" + animalName + ", animalRank=" + animalRank
				+ ", animalImagePath=" + animalImagePath + ", animalDesc=" + animalDesc + ", userid=" + userid
				+ ", sid=" + sid + ", animalAge=" + animalAge + "]";
	}
	
		
}
