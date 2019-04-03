package cn.liulangzhe.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.liulangzhe.pojo.News;
import cn.liulangzhe.service.NewsService;
import net.sf.json.JSONArray;

@Controller
public class newsController {

	@Autowired
	private NewsService newsService;
	
	@RequestMapping("LoadAllNews.action")
	@ResponseBody
	public String LoadAllNews()
	{
		System.out.println("加载所有新闻功能开始.....");
		List<News> list=new ArrayList<News>();
		list=newsService.LoadAllNews();
		JSONArray jsonArray = JSONArray.fromObject(list);
		System.out.println("加载所有新闻功能结束......回应信息：theme："+jsonArray.toString());
		return jsonArray.toString();
	}
}
