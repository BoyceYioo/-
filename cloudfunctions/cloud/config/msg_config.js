/**
 * Notes: 消息提醒配置
 * Ver : CCMiniCloud Framework 2.0.1 ALL RIGHTS RESERVED BY cclinux@qq.com
 */
//设置小程序的消息提醒功能
module.exports = {

	/**
	 * 打卡提醒 (20647 工具>>备忘录)  
	 * 计划名称 		{{thing1.DATA}}
	 * 完成进度 		{{thing2.DATA}}
	 * 备注 			{{thing3.DATA}}
	 * 上次打卡时间 	 {{time4.DATA}}
	 * 
	 */
	MINI_TEMP_CARD_HAS_TIME: 'VCb4GZ-3yK5j66iVxOH5U1MClzXd2f97vFTYlN-K5JU', //有打卡时间
	MINI_TEMP_CARD_NO_TIME: 'VCb4GZ-3yK5j66iVxOH5U3wurLqu2QjwYCSyDgn5CTw', //无打卡时间

}
/*在实际的小程序代码中，当你需要发送一个打卡提醒给用户，你会检查是否有打卡时间的数据。如果有，你会使用MINI_TEMP_CARD_HAS_TIME提供的模板ID来发送消息；如果没有，就使用MINI_TEMP_CARD_NO_TIME的模板ID。

这些ID会与微信的服务端API一起使用，进行模板消息的发送请求，真实的数据会替换掉模板中的占位符，然后将这些个性化的消息发送给用户。*/