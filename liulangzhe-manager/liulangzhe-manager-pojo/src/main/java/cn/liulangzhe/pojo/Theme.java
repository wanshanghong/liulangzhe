package cn.liulangzhe.pojo;

public class Theme {
	private String title;
	private String context;
	private String address;
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getContext() {
		return context;
	}
	public void setContext(String context) {
		this.context = context;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	@Override
	public String toString() {
		return "Theme [title=" + title + ", context=" + context + ", address=" + address + "]";
	}
	

}
