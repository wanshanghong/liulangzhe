package cn.liulangzhe.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.liulangzhe.pojo.Rescue_Station;
import cn.liulangzhe.service.Rescue_StationService;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

@Controller
public class Rescue_StationController{
	@Autowired
	private Rescue_StationService rescue_StationService;
	
	
	//通过ID获取救助站的信息
	@RequestMapping("/FindRescueById.action")
	@ResponseBody
	public String FindRescueById(@RequestParam("sid") int sid)
	{
		System.out.println("通过ID获取救助站功能开启........请求信息：sid="+sid);
		Rescue_Station station=new Rescue_Station();
		station=rescue_StationService.FindRescueById(sid);
		JSONObject json =JSONObject.fromObject(station);
		System.out.println("通过ID获取救助站功能结束........响应信息：json="+json.toString());
		return json.toString();
	}
	
	
	//查找所有的救助站
	@RequestMapping("/FindAllRescue.action")
	@ResponseBody
	public String FindAllRescue(){
		System.out.println("查找所有的救助站功能开启........请求信息：无");
		List<Rescue_Station> list=new ArrayList<Rescue_Station>();
		list=rescue_StationService.FindAllRescue();
		JSONArray json =JSONArray.fromObject(list);
		System.out.println("查找所有的救助站功能结束........响应信息：json="+json.toString());
		return json.toString();
	}
	
	/**
	//添加救助站 
	@RequestMapping("/AddStation.action")
	@ResponseBody
	public String AddStation(@RequestParam("address")String address,
			@RequestParam("lng")double lng,
			@RequestParam("lat")double lat,
			@RequestParam("content")String content){
		System.out.println("添加救助站功能开启........请求信息：address="+address+"    lng="+lng+"    lat="+lat+"     content="+content);
		Rescue_Station station=new Rescue_Station(1,address,lng,lat,content);
		
		int sid=rescue_StationService.AddStation(station);
		
		JSONObject json=new JSONObject();
		json.put("sid", sid);
		System.out.println("添加救助站功能结束........响应信息：json="+json.toString());
		return json.toString();
	}
	*/
}
