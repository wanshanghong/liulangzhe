package cn.liulangzhe.pojo;

public class Rescue_Station {
	private int sid;
	private String address;
	private double lng;
	private double lat;
	private String content;
	private String sphoto;
	public String getSphoto() {
		return sphoto;
	}
	public void setSphoto(String sphoto) {
		this.sphoto = sphoto;
	}
	public int getSid() {
		return sid;
	}
	public void setSid(int sid) {
		this.sid = sid;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public double getLng() {
		return lng;
	}
	public void setLng(double lng) {
		this.lng = lng;
	}
	public double getLat() {
		return lat;
	}
	public void setLat(double lat) {
		this.lat = lat;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public Rescue_Station() {
		super();
	}
	@Override
	public String toString() {
		return "Rescue_Station [sid=" + sid + ", address=" + address + ", lng=" + lng + ", lat=" + lat + ", content="
				+ content + ", sphoto=" + sphoto + "]";
	}
	
}
