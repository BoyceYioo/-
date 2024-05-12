/**
 * Notes: 路由配置文件
 * User: CC
 * Date: 2020-10-14 07:00:00
 */

module.exports = { 
	'home/setup_all': 'home_controller@getSetupAll', //获取全局配置(所有),这条路由表示当小程序发送请求到home/setup_all时，将调用home_controller中的getSetupAll方法来处理该请求，通常这个方法用于获取全局配置信息。

	'passport/phone': 'passport_controller@getPhone',
	'passport/my_detail': 'passport_controller@getMyDetail',
	'passport/edit_base': 'passport_controller@editBase',
//这三条路由处理与用户认证相关的功能。它们分别用于获取用户电话信息、用户详细信息以及编辑用户基本信息

	'news/list': 'news_controller@getNewsList',
	'news/home_list': 'news_controller@getHomeNewsList',
	'news/view': 'news_controller@viewNews', 
//新闻或通知功能的相关路由，用于获取新闻列表、首页新闻列表和查看新闻详情。

	'meet/list': 'meet_controller@getMeetList',
	'meet/list_by_day': 'meet_controller@getMeetListByDay',
	'meet/list_has_day': 'meet_controller@getHasDaysFromDay',
	'meet/view': 'meet_controller@viewMeet',
	'meet/detail_for_join': 'meet_controller@detailForJoin',
	'meet/before_join': 'meet_controller@beforeJoin',
	'meet/join': 'meet_controller@join',
//处理用户预约活动相关的请求，包括获取列表、按日获取预约列表、检查特定日期是否有预约、查看预约详情、获取用户加入的预约列表、取消用户加入的预约等。

	'my/my_join_list': 'meet_controller@getMyJoinList',
	'my/my_join_cancel': 'meet_controller@cancelMyJoin',
	'my/my_join_detail': 'meet_controller@getMyJoinDetail',
	'my/my_join_someday': 'meet_controller@getMyJoinSomeday',
	'my/my_join_checkin': 'meet_controller@userSelfCheckin', 

	'test/test': 'test/test_controller@test',
	'test/meet_test_join': 'test/test_meet_controller@testJoin',

  //***########### ADMIN ################## */  
  //接下来的一系列路由以admin/开头，这些是管理员端功能的路由，用于处理后台管理任务
	'admin/login': 'admin/admin_home_controller@adminLogin',
	'admin/home': 'admin/admin_home_controller@adminHome',
	'admin/clear_cache': 'admin/admin_home_controller@clearCache#noDemo',

	'admin/setup_about': 'admin/admin_setup_controller@setupAbout#noDemo',
	'admin/setup_contact': 'admin/admin_setup_controller@setupContact#noDemo', 
	'admin/setup_qr': 'admin/admin_setup_controller@genMiniQr', 

	'admin/news_list': 'admin/admin_news_controller@getNewsList',
	'admin/news_insert': 'admin/admin_news_controller@insertNews#noDemo',
	'admin/news_detail': 'admin/admin_news_controller@getNewsDetail',
	'admin/news_edit': 'admin/admin_news_controller@editNews#noDemo',
	'admin/news_update_pic': 'admin/admin_news_controller@updateNewsPic#noDemo',
	'admin/news_update_content': 'admin/admin_news_controller@updateNewsContent#noDemo',
	'admin/news_del': 'admin/admin_news_controller@delNews#noDemo', 
	'admin/news_sort': 'admin/admin_news_controller@sortNews#noDemo',
	'admin/news_status': 'admin/admin_news_controller@statusNews#noDemo',

	'admin/meet_list': 'admin/admin_meet_controller@getMeetList',
	'admin/meet_join_list': 'admin/admin_meet_controller@getJoinList',
	'admin/join_status': 'admin/admin_meet_controller@statusJoin#noDemo',
	'admin/join_del': 'admin/admin_meet_controller@delJoin#noDemo',
	'admin/meet_insert': 'admin/admin_meet_controller@insertMeet#noDemo',
	'admin/meet_detail': 'admin/admin_meet_controller@getMeetDetail',
	'admin/meet_edit': 'admin/admin_meet_controller@editMeet#noDemo',
	'admin/meet_del': 'admin/admin_meet_controller@delMeet#noDemo',
	'admin/meet_update_content': 'admin/admin_meet_controller@updateMeetContent#noDemo',
	'admin/meet_update_style': 'admin/admin_meet_controller@updateMeetStyleSet#noDemo',
	'admin/meet_sort': 'admin/admin_meet_controller@sortMeet#noDemo',
	'admin/meet_status': 'admin/admin_meet_controller@statusMeet#noDemo',
	'admin/meet_cancel_time_join': 'admin/admin_meet_controller@cancelJoinByTimeMark#noDemo',
	'admin/join_scan': 'admin/admin_meet_controller@scanJoin#noDemo',
	'admin/join_checkin': 'admin/admin_meet_controller@checkinJoin#noDemo',
	'admin/self_checkin_qr': 'admin/admin_meet_controller@genSelfCheckinQr',
	'admin/meet_day_list': 'admin/admin_meet_controller@getDayList',

	'admin/join_data_get': 'admin/admin_export_controller@joinDataGet',
	'admin/join_data_export': 'admin/admin_export_controller@joinDataExport',
	'admin/join_data_del': 'admin/admin_export_controller@joinDataDel#noDemo',

	'admin/temp_insert': 'admin/admin_meet_controller@insertTemp#noDemo',
	'admin/temp_list': 'admin/admin_meet_controller@getTempList',
	'admin/temp_del': 'admin/admin_meet_controller@delTemp#noDemo',
	'admin/temp_edit': 'admin/admin_meet_controller@editTemp#noDemo', 

  //用于获取日志列表的路由，通常用于监控系统活动或调试。
	'admin/log_list': 'admin/admin_mgr_controller@getLogList',

  //以下这些路由用于管理员获取用户列表、用户详情以及删除用户。
	'admin/user_list': 'admin/admin_user_controller@getUserList',
	'admin/user_detail': 'admin/admin_user_controller@getUserDetail',
	'admin/user_del': 'admin/admin_user_controller@delUser#noDemo',  

	'admin/user_data_get': 'admin/admin_export_controller@userDataGet',
	'admin/user_data_export': 'admin/admin_export_controller@userDataExport',
	'admin/user_data_del': 'admin/admin_export_controller@userDataDel#noDemo',
  //这些路由使管理员能够登录后台、管理新闻、会议、用户等数据，执行诸如增删改查等操作。其中#noDemo可能表示这些操作在演示模式下不可用。

}