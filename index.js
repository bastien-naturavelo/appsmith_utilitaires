(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define([], factory);
  } else if (typeof exports === 'object') {
    // CommonJS
    module.exports = factory();
  } else {
    // Browser globals (Note: root is window)
    root.returnExports = factory();
  }
}(this, function () {
  // Methods
  function formatDate(date){
	if(date){
		date = new Date(date);
		return new Intl.DateTimeFormat('fr-FR', { dateStyle: 'full', timeStyle: 'long', timeZone: 'Europe/Paris' }).format(date);
	}
	return "";
  };
  function formatCurrency(amount){
	return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(amount);
  };

  // Exposed public methods
  return {
      formatDate: formatDate,
      formatCurrency: formatCurrency
  }
}));