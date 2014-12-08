require.config({
    baseUrl: '../assets/js',
    paths: {
        jquery: '../bower_components/jquery/jquery'
    }
});

require(['jquery', 'validate', 'validData', 'mailAutoComplete'], function($, valid, validData, mailAutoComplete){

    mailAutoComplete.init($('[data-form="email"]'), {
        boxClass: "out_box", 
        listClass: "list_box", 
        focusClass: "focus_box",
        markCalss: "mark_box",
        autoClass: false,
        textHint: true,
        hintText: "请输入邮箱地址"
    });

    $('.u-checkbox').on('click', function(){
        var cls = 'u-checkbox-slt';
        if($(this).hasClass(cls)){
            $(this).removeClass(cls);
            $(this).find(':checkbox').attr('checked', false);
            return;
        }
        $(this).addClass(cls);
        $(this).find(':checkbox').attr('checked', true);
    });

    valid.init('[data-btn=validate]', {
        box: '.m-fm-box',
		successCls: 'z-success',
		errorCls: 'z-error',
        focusCls: 'z-focus',
		loadText: '提交中...',
		rules: validData.rules,
		messages: validData.messages,
		success: function(data){

		},
		error: function(){

		}
	});
});