(function($) {
	$.fn.firebase = function(extractor) {
		extractor = extractor || function() { return $(this).data('firebase') || this.id; };
		var url = '';
		var addPath = function() {
			if(!(/^http/i.test(url))) {
				var value = extractor.call(this);
				if(value) url = (url.length ? (value + '/' + url) : value);
			}
		};
		addPath.call(this);
		$(this).parents('[data-firebase]').each(addPath);
		return url.length ? new Firebase(url) : null;
	};

	$(function() {
		$('[data-firebase-value]').each(function() {
			var $this = $(this);
			var firebase = $this.firebase(function() {
				return $(this).data('firebase-value') || $(this).data('firebase') || this.id;
			});
			if(firebase) {
				firebase.on('value', function(snapshot) {
					$this.html(snapshot.val());
				});
			}
		});
	});
})(jQuery);
