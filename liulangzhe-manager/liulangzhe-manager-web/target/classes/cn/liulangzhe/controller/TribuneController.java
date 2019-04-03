package cn.liulangzhe.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.liulangzhe.pojo.Animal;
import cn.liulangzhe.pojo.Post;
import cn.liulangzhe.pojo.Tribune;
import cn.liulangzhe.service.TribuneService;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

@Controller
public class TribuneController {
	@Autowired
	private TribuneService tribuneService;
	
	//通过论坛ID(tribuneId)查找论坛
	@RequestMapping("/findtribunebytribuneId.action")
	@ResponseBody
	public String FindTribuneBytribuneId(@RequestParam("tribuneId") int tribuneId)
	{
		System.out.println("通过论坛ID(tribuneId)查找论坛开启........请求参数：tribuneId:"+tribuneId);
		Tribune tribune=tribuneService.FindTribuneBytribuneId(tribuneId);
		JSONObject json = JSONObject.fromObject(tribune);
		System.out.println("//通过论坛ID(tribuneId)查找论坛结束........返回内容："+json.toString());
		return json.toString();
	}
	//查找所有的论坛
	@RequestMapping("/findalltribune.action")
	@ResponseBody
	public String FindAllTribune()
	{
		System.out.println("查找所有的论坛功能开启........请求参数：无");
		List<Tribune> lists=tribuneService.FindAllTribune();
		JSONArray jsonArray = JSONArray.fromObject(lists);
		System.out.println("查找所有的论坛功能结束........返回内容："+jsonArray.toString());
		return jsonArray.toString();
	}
		
}
