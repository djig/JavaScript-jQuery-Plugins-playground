/*!
	bt.js  version 1.0
	Author: Jignesh Dhamecha
    
*/
 (function () {
	 
    var pluginName = 'TableBar' ;
	// function populateTable(element,data, opts) {
	 function TableBar(element, options) {
	 	this.element = $(element);
		this.options =  options || {};
 		this.name = pluginName;
 		this.init();
 		 console.log(options); 
	}

	TableBar.prototype = {
		defaults: {
			theme: 'dark',
			pos: 'right'
		},
		init: function() {

			this.config = $.extend({}, this.defaults, this.options);
		
		},
		
		populateData: function() {
			var isURL = this.isURL;

			var showHide = '<div id="qn_sh"><span>Show/Hide</span></div>';
			var divNotes = '<div id="notes"></div>';
			var notesInp = '<p><input type="text" name="qn_input" maxlength="500" placeholder="Your notes..."></p>';
			$(showHide).appendTo(this.$el);
			$(divNotes).appendTo(this.$el);
			$(notesInp).appendTo(this.$el.find('#notes'));

		
		},
		hook: function() {
		
			this.$el.on('keypress', '#notes input', function(e) {
			});

			// SHOW AND HIDE
			this.$el.on('click', '#qn_sh span', function() {
				$('.qn_container #notes').slideToggle(100);
			});

			this.$el.on('click', '#notes .close', function() {
				});
		}
	};


	$.fn[pluginName] = function (method)  {
		 
	 	return this.each(function () {
	 	    	  var tblBar=new TableBar(this, method);
	 	  });
    };
})();
 