define(['jquery', 'validate'], function($, valid){

    valid.setMethod('username', function(value){

        if(/\s/g.test(value)){
            return false;
        }

        return /([a-zA-Z0-9]|[-_]){4,20}$/.test(value)
    });


    valid.setMethod('pwd', function(value){
        return value.length > 5 && value.length < 20;
    });

    function AuthPasswd(string) {
        if(string.length >=10) {
            if(/[a-zA-Z]+/.test(string) && /[0-9]+/.test(string) && /\W+\D+/.test(string)) {
                return 2
            }else if(/[a-zA-Z]+/.test(string) || /[0-9]+/.test(string) || /\W+\D+/.test(string)) {
                if(/[a-z]+/.test(string) && /[0-9]+/.test(string)) {
                    return 1;
                }else if(/\[a-zA-Z]+/.test(string) && /\W+\D+/.test(string)) {
                    return 1
                }else if(/[0-9]+/.test(string) && /\W+\D+/.test(string)) {
                    return 1
                }else{
                    return 0;
                }
            }
        }
        if(!$.trim(string)){
            return 0
        }

        return 0;
    }

    var pwdLevNode = $('.pwd-lev');

    valid.setMethod('pwdlev', function(value){

        var lev = AuthPasswd(value);
        pwdLevNode.removeClass('hide');
        pwdLevNode.find('div').removeClass().addClass('pwd-lev-' + lev);
        return lev;
    });

    valid.setMethod('mobile', function(value){
        return /^(13|15|18|14|17)\d{9}$/.test(value)
    });

    valid.setMethod('mobile', function(value){
        return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(value);
    });

    valid.setMethod('number', function(value){
        return /^\d{6}$/.test(value);
    });



	return {
		rules: {
			username: {
                required: true,
                username: true
			},
            pwd: {
                pwdlev: true,
                required: true,
                pwd: true
            },
            repwd: {
                required: true,
                pwd: true,
                equalTo: 'pwd'
            },
            email: {
                required: true,
                email: true
            },
            mobile: {
                required: true,
                mobile: true
            },
            smscode: {
                require: true,
                number: true
            },
            vcode: {
                required: true
            }
		},
		messages: {
            username: {
                focus: '4-20位字符，支持汉字、字母、数字及“-"、“_”组合',
                required: '用户名只能由中文、英文、数字及“-"、“_”组成',
                username: '用户名只能由中文、英文、数字及“-"、“_”组成',
                pwdlev: '该密码比较简单，有被盗风险，建议您更改为复杂密码，如字母＋数字组合'
            },
            pwd: {
                focus: '6-20位字符，建议由字母、数字和符号两种以上组合',
                required: '密码长度只能在6-20位字符之间',
                pwd: '密码长度只能在6-20位字符之间',
                pwdlev: '该密码比较简单，有被盗风险，建议您更改为复杂密码，如字母＋数字组合'
            },
            repwd: {
                focus: '请再次输入密码',
                required: '密码长度只能在6-20位字符之间',
                pwd: '密码长度只能在6-20位字符之间',
                equalTo: '两次输入密码不一致'
            },
            email: {
                focus: '请输入您的常用邮箱，您可以用该邮箱登录和找回密码',
                required: '邮箱地址不正确，请重新输入',
                email: '邮箱地址不正确，请重新输入'
            },
            mobile: {
                focus: '请输入您的手机号，您可以用该手机号登录和找回密码',
                required: '手机号码格式有误，请输入正确的手机号',
                mobile: '手机号码格式有误，请输入正确的手机号'
            },
            smscode: {
                require: '',
                number: ''
            },
            vcode: {
                required: ''
            }
		}
	}
});