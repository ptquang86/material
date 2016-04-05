init();
function init() {
	// init con font
  	require('iconfont').init('Material-Design-Icons');
}

$.index.open();

function lvClick(e) {
    Alloy.createController(e.itemId).getView().open();
}
