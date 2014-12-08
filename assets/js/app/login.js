require.config({
    baseUrl: '../assets/js',
    paths: {
        jquery: '../bower_components/jquery/jquery'
    }
});

require(['jquery', 'placeholder'], function($, placeholder){
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


    var rules = {

        vcode: {
            func: function(value){
                value = $.trim(value);
                if(!value){
                    return '验证码格式化错误'
                }
                return '';
            }
        },
        pwd: {
            func: function(value){
                if(!value){
                    return '密码格式错误';
                }

                if(value.length > 20 || value.length <4){
                    return '密码格式错误';
                }

                return '';

            }
        },

        username: {
            func: function(value){
                value = $.trim(value);

                if(!value){
                    return '账号格式错误';
                }

                if(value.length > 20 || value.length <4){
                    return '账号格式错误';
                }

                return '';

            }
        }
    };


    var validateBtn = $('[data-btn=login]');
    var $form = $('.m-fm-box');
    var inps = $form.find('input');

    var $errorWrap = $('.u-error');


    function check(el){
        var value = el.val();
        var key = el.attr('data-form');

        var rule = rules[key];

        if(rule){
            var result = rule.func(value);
            var node = el.parents('li');
            node.removeClass();
            if(result){
                node.addClass('z-error');
            } else {
                node.addClass('z-success');
            }

            $errorWrap.text(result);
        }
    }

    inps.on('blur', function(){
        check($(this));
    });

    inps.on('focus', function(){
        $(this).parents('li').removeClass();
    });


    validateBtn.on('click', function(){
        for(var i in rules){
            check($('[data-form='+i+']'));
        }

    });


    placeholder.init($('[placeholder]'), {
        labelMode: true,
        labelAlpha: true,
        labelAcross: true
    });

});