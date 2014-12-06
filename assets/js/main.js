require.config({
    baseUrl: '../assets/js',
    paths: {
        jquery: '../bower_components/jquery/jquery'
    }
});

require(['jquery', 'validate', 'validData'], function($, valid, validData){
    valid.init('[data-btn=validate]', {
		successCls: 'z-success',
		errorCls: 'z-error',
		errorParent: '.m-cell-ct',
		loadText: '提交中...',
		rules: validData.rules,
		messages: validData.messages,
		success: function(data){
			// 存在return_url 就说明 需要跳转
			if(data.record.return_url){
				window.location.href = data.record.return_url;
				return
			}
			var queryUrl = data.record.query_url;
			queryUrl && checkServiceData(queryUrl);
		},
		error: function(){
			clearInterval(dialogWaitFlag);
			QHLICAI.clearSMSTimer(smsBtnNode, {
				text: '点击获取'
			});
		}
	});
});