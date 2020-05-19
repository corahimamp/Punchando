!function(){"use strict";function t(t,s){var n=this;n.tripName=s.tripName,n.stops=[],n.errorMessage="",n.isBusy=!0;var i="/api/trips/"+n.tripName+"/stops";t.get("/api/trips/"+n.tripName+"/stops").then(function(t){angular.copy(t.data,n.stops),o(n.stops)},function(t){n.errorMessage="Failed to load stops"})["finally"](function(){n.isBusy=!1}),n.addStop=function(){n.isBusy=!0,t.post(i,n.newStop).then(function(t){n.stops.push(t.data),o(n.stops),n.newStop={}},function(t){n.errorMessage="Failed to add new stop"})["finally"](function(){n.isBusy=!1})}}function o(t){if(t&&t.length>0){var o=_.map(t,function(t){return{lat:t.latitude,"long":t.longitude,info:t.name}});travelMap.createMap({stops:o,selector:"#map",currentStop:1,initialZoom:3})}}angular.module("app-trips").controller("tripEditorController",t)}();