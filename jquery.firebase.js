(function($) {
	$.fn.firebase = function() {
		var url = '';
		var addPath = function() {
			if(!(/^http/i.test(url))) {
				var data = $(this).data();
				var key = _.find(_.keys(data), function(value) { return /^firebase/i.test(value); });
				if(key) {
					var value = data[key] || this.id;
					if(value) {
						url = (url.length ? (value + '/' + url) : value);
					}
				}
			}
		};
		addPath.call(this);
		$(this).parents().each(addPath);
		return url.length ? (arguments.length ? Firebase.prototype.child.call(new Firebase(url), Array.prototype.slice.call(arguments, 0).join('/')) : new Firebase(url)) : null;
	};
})(jQuery);
