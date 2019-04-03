package cn.liulangzhe.pojo;

public class Tribune {
	private int tribuneId;
	private String tribuneName;
	private String tribuneTitle;
	private int tribuneAttention;
	public int getTribuneId() {
		return tribuneId;
	}
	public void setTribuneId(int tribuneId) {
		this.tribuneId = tribuneId;
	}
	public String getTribuneName() {
		return tribuneName;
	}
	public void setTribuneName(String tribuneName) {
		this.tribuneName = tribuneName;
	}
	public String getTribuneTitle() {
		return tribuneTitle;
	}
	public void setTribuneTitle(String tribuneTitle) {
		this.tribuneTitle = tribuneTitle;
	}
	public int getTribuneAttention() {
		return tribuneAttention;
	}
	public void setTribuneAttention(int tribuneAttention) {
		this.tribuneAttention = tribuneAttention;
	}
	@Override
	public String toString() {
		return "Tribune [tribuneId=" + tribuneId + ", tribuneName=" + tribuneName + ", tribuneTitle=" + tribuneTitle
				+ ", tribuneAttention=" + tribuneAttention + "]";
	}
	
	
}
