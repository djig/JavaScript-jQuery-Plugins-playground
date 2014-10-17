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
 		this._name = pluginName;
 		 console.log(options); 
	}
	$.fn[pluginName] = function (method)  {
		 
	 	return this.each(function () {
	 	    	  var tblBar=new TableBar(this, method);
	 	  });
    };
})();
 