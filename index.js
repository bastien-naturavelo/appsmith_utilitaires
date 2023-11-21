(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define([], factory);
  } else if (typeof exports === 'object') {
    // CommonJS
    module.exports = factory();
  } else {
    // Browser globals (Note: root is window)
    root.utils = factory();
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
  function outlookCategoriesColors(){
    return [
      "#e74856",
      "#ff8c00",
      "#ffab45",
      "#fff100",
      "#47d041",
      "#30c6cc",
      "#73aa24",
      "#00bcf2",
      "#8764b8",
      "#f495bf",
      "#a0aeb2",
      "#004b60",
      "#b1adab",
      "#5d5a58",
      "#000000",
      "#750b1c",
      "#ca5010",
      "#ab620d",
      "#c19c00",
      "#004b1c",
      "#004b50",
      "#0b6a0b",
      "#002050",
      "#32145a",
      "#5c005c"
    ];
  }
  function itemsMap(itemsArray) {
    return new Map(itemsArray.map( o => [o.id, o] ));
  }
  function getItemParents(itemsArray, item){
    return (item.parent_id ? getItemParents(itemsArray, itemsMap(itemsArray).get(item.parent_id)) : [])
    .concat(item.titre);
  }
  const s3Endpoint = "https://api.file.naturavelo.net";
  const WebFileBucket = "static";

  // Exposed public methods
  return {
      formatDate: formatDate,
      formatCurrency: formatCurrency,
      outlookCategoriesColors: outlookCategoriesColors,
      getItemParents: getItemParents,
      s3Endpoint: s3Endpoint,
      WebFileBucket: WebFileBucket
  }
}));