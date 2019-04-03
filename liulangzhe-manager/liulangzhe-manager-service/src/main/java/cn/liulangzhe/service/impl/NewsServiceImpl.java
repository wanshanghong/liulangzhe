package cn.liulangzhe.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cn.liulangzhe.mapper.NewsMapper;
import cn.liulangzhe.pojo.News;
import cn.liulangzhe.service.NewsService;

@Service
public class NewsServiceImpl implements NewsService {
	
	@Autowired
	private NewsMapper newsMapper;
	
	//加载所有的新闻
	@Override
	public List<News> LoadAllNews() {
		// TODO Auto-generated method stub
		return newsMapper.LoadAllNews();
	}

}
