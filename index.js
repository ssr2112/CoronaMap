function updateMap() {
    console.log("Updating map with realtime data")
    fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {
            // console.log(rsp.data)
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;

                cases = element.infected;
                if (cases>255){
                    color = "rgb(255, 0, 0)";
                }

                else{
                    color = `rgb(${cases}, 0, 0)`;
                }

 
                const marker = new mapboxgl.Marker({
                    draggable: false,
                    color: color
                    })
                    .setLngLat([longitude, latitude])
                    .addTo(map);


                    // new mapboxgl.Map({
                    //     container: 'map',
                    //     zoom: 13.1,
                    //     center: [longitude, latitude],
                    //     pitch: 85,
                    //     bearing: 80,
                    //     style: 'mapbox://styles/mapbox-map-design/ckhqrf2tz0dt119ny6azh975y'
                    //     })


                
            });
        })
}

let interval= 20000;
setInterval(updateMap,interval);