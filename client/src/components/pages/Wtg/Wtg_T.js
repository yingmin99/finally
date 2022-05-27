/*global kakao*/ 
import React, { useEffect } from 'react';
import '../../App.css';


export default function Wtg() {
    
    useEffect(()=>{
        var container = document.getElementById('map');
        var options = {
          center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
          level: 3
        };
        var map = new kakao.maps.Map(container, options);
        var markerPosition  = new kakao.maps.LatLng(37.365264512305174, 127.10676860117488); 
        var marker = new kakao.maps.Marker({
          position: markerPosition
      });
      marker.setMap(map);
        }, [])

    return  (
        <div align="center">
            주변 따릉이 위치정보
        	<div id="map" style={{width:"1500px", height:"750px"}}></div> 
        </div>
    );
}