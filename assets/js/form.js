define(['jquery'], function($){
	return {
		/**
		 * 获取元素的 value
		 * @param el
		 * @returns {*}
		 */
		elValue: function(el){
			el = $(el);
			var type = el.attr("type"),
				val = $.trim(el.val());

			if (type === "radio" || type === "checkbox") {
				return $("input[name='" + el.attr("name") + "']:checked").val();
			}
			if (typeof val === "string") {
				return val.replace(/\r/g, "");
			}
			return val;
		},
		/**
		 * 检查是否为checkbox/radio
		 * @param el
		 * @returns {boolean}
		 */
		checkable: function(el){
			return /radio|checkbox/i.test(el[0].type);
		},
		/**
		 * 获取length
		 * @param el
		 * @returns {Number|jQuery}
		 */
		getLength: function(el){
			return $(el).filter(":checked").length;
		},
		/**
		 * 表单数据提取
		 * @param nodeChilds
		 * @param prefix 加密前缀
		 * @returns {string}
		 */
		serialize: function(nodeChilds, prefix){
			var data = [];
			var _self = this;
			$.each(nodeChilds, function(){
				var $this = $(this),
					Md5 = $this.attr('data-m'),
					encode = $this.attr('data-encode'),
					name = $this.attr('name'),
					value = _self.elValue($this)

				if(!name) return;

				// 防止选取所有checkbox
				if(!$this.is(':checked') && _self.checkable($this)) return;

				if(encode){
					value = encodeURIComponent(value);
				}

				data.push(name+'='+value);


			});

			return data.join('&');
		} 
	}
});