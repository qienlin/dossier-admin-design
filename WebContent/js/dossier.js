jQuery(function(){
	jQuery("#map_container").ready(function(){
		loadMap("120.0584","30.30835","map_container");
	});
});
function loadMap(longitude, latitude, containerId) {
	var position=new AMap.LngLat(longitude, latitude); 
	var mapObj=new AMap.Map(containerId,{level:13,center:position});
	var marker = new AMap.Marker({                  
		map:mapObj,                  
		position: position                  
		});
	mapObj.setCenter(marker.getPosition());
	mapObj.plugin(["AMap.ToolBar","AMap.Scale","AMap.MouseTool"],function(){  
		//加载工具条  
		var tool=new AMap.ToolBar({
			direction:false,//隐藏方向导航  
			ruler:false,//隐藏视野级别控制尺  
			autoPosition:false//禁止自动定位
		});  
		mapObj.addControl(tool);  
		//加载比例尺  
		var scale=new AMap.Scale();  
		mapObj.addControl(scale);  
		//鼠标工具
		var mouseTool = new AMap.MouseTool(mapObj);
		mouseTool.marker();
		AMap.event.addListener(mouseTool,"draw",function callback(e){
			marker.setMap(null);
			marker = e.obj;
			mapObj.setCenter(marker.getPosition());
			jQuery("input[name=longitude]").val(marker.getPosition().getLng());
			jQuery("input[name=latitude]").val(marker.getPosition().getLat());
		});
	});
}