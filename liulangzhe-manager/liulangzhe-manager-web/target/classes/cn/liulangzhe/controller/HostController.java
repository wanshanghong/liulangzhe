package cn.liulangzhe.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.liulangzhe.pojo.Host;
import cn.liulangzhe.service.HostService;
import net.sf.json.JSONArray;

@Controller
public class HostController {
	@Autowired
	private HostService hostService;
	
	@RequestMapping("loadallhost.action")
	@ResponseBody
	public String LoadAllHost()
	{
		
		System.out.println("加载所有动物主人功能触发......请求信息：无");
		List<Host> list=new ArrayList<Host>();
		list=hostService.FindAllHost();
		System.out.println("list:"+list);
		JSONArray jsonArray = JSONArray.fromObject(list);
		System.out.println("加载所有主人功能结束......回应信息：host："+jsonArray.toString());
		return jsonArray.toString();
	}
	
}
