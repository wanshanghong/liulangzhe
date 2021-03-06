package cn.liulangzhe.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.liulangzhe.pojo.Theme;
import cn.liulangzhe.service.IndexService;
import net.sf.json.JSONArray;

@Controller
public class IndexController {

	@Autowired
	private IndexService indexService;
	
	@RequestMapping("loadtheme.action")
	@ResponseBody
	public String LoadTheme()
	{
		System.out.println("加载所有主题功能开始.....");
		List<Theme> list=new ArrayList<Theme>();
		list=indexService.findalltheme();
		JSONArray jsonArray = JSONArray.fromObject(list);
		System.out.println("加载主页页面功能结束......回应信息：theme："+jsonArray.toString());
		return jsonArray.toString();
	}
	
	@RequestMapping("loadpicture.action")
	@ResponseBody
	public String LoadPicture()
	{
		System.out.println("加载题轮播图功能开始.....");
		List<Theme> list=new ArrayList<Theme>();
		list=indexService.findalltheme();
		JSONArray jsonArray = JSONArray.fromObject(list);
		System.out.println("加载主页页面功能结束......回应信息：theme："+jsonArray.toString());
		return jsonArray.toString();
	}
}
