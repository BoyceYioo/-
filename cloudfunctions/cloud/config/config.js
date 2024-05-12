module.exports = {
// 定义应用程序的配置参数
	//### 环境相关 
	CLOUD_ID: 'cloud1-6g5ofhw8ead56797', //你的云环境id 

	ADMIN_NAME: 'admin', // 管理员账号（5-30位)
	ADMIN_PWD: '123456', // 管理员密码（5-30位) 


	// ##################################################################  
	PID: 'A00',  
	IS_DEMO: false,  

	NEWS_CATE: '1=最新动态,2=体检知识',
	MEET_TYPE: '1=体检预约',
	// ##################################################################
	// #### 调试相关 
	TEST_MODE: false,  
	TEST_TOKEN_ID: '',
 
  // 列出了数据库中集合的名称
	COLLECTION_NAME: 'ax_admin|ax_cache|ax_day|ax_export|ax_join|ax_log|ax_meet|ax_news|ax_setup|ax_temp|ax_user',

	DATA_EXPORT_PATH: 'export/', //数据导出路径
	MEET_TIMEMARK_QR_PATH: 'meet/usercheckin/', //用户签到时二维码图片存储的路径 
	SETUP_PATH: 'setup/',

	// ## 缓存相关 
	IS_CACHE: true, //是否开启缓存
	CACHE_CALENDAR_TIME: 60 * 30, //日历缓存   

	// #### 内容安全
	CLIENT_CHECK_CONTENT: false, //前台图片文字是否校验
	ADMIN_CHECK_CONTENT: false, //后台图片文字是否校验    

	// #### 预约相关
	MEET_LOG_LEVEL: 'debug',
  //定义预约系统的日志级别。这里设置为 debug，意味着会记录详细的调试信息。

	// ### 后台业务相关
  ADMIN_LOGIN_EXPIRE: 86400, //管理员token过期时间 (秒) 
  //管理员登录会话的过期时间，以秒为单位，这里设置为86400秒，即24小时
}