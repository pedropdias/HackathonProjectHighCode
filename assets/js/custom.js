var map;

function success(pos){

    var locations = [
        ["LOCATION_1", -22.421433106532383, -42.9634419322108],
        ["LOCATION_2", -22.425273750619507, -42.9649276521081],
        ["LOCATION_3", -22.407523643985947, -42.96739670426699],
        ["LOCATION_4", -22.412820000794945, -42.96531531071786],
        ["LOCATION_5", -22.43970638321138, -42.98016023200108],
        ["LOCATION_6", -22.433353239800116, -42.97047216083759],
        ["LOCATION_7", -22.400939599046712, -42.98003258681701],
        ["LOCATION_8", -22.430437077714107, -42.976901750403755],
        ["LOCATION_9", -22.15146651483465, -42.79160973200786],
        ["LOCATION_10", -22.395798559433675, -42.95269187954644],
        ["LOCATION_11", -22.37212572728585, -42.97917232148302],
        ["LOCATION_12", -22.44345455854864, -42.984804797336444],
        ["LOCATION_13", -22.434369875469752, -42.94562709120242],
        ["LOCATION_14", -22.403959079527162, -42.97664726788986],
        ["LOCATION_15", -22.428111151687105, -42.96098746880632],
        ["LOCATION_16", -22.40820929488104, -42.94715293609231],
        ["LOCATION_17", -22.430332554319737, -42.964964739052725],
        ["LOCATION_18", -22.372002439387863, -42.8716830151291],
        ["LOCATION_19", -22.4103607392531, -42.96874569733715],
        ["LOCATION_20", -22.424739043926873, -42.96568408041271],
        ["LOCATION_21", -22.33694415086171, -42.98088388632349],
        ["LOCATION_22", -22.41137408831569, -42.96882948041984],
        ["LOCATION_23", -22.411344404376575, -42.968892491015545],
        ["LOCATION_24", -22.399047413279956, -42.96092714290812]
      ];

    console.log(pos.coords.latitude, pos.coords.longitude);
    
    if (map === undefined){
        map = L.map('mapid').setView([pos.coords.latitude, pos.coords.longitude], 15);
    } else {
        map.remove();
        map = L.map('mapid').setView([pos.coords.latitude, pos.coords.longitude], 15);
    }

    for (var i = 0; i < locations.length; i++) {
        marker = new L.marker([locations[i][1], locations[i][2]])
          .bindPopup(locations[i][0])
          .addTo(map);
      }

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([pos.coords.latitude, pos.coords.longitude]).addTo(map)
        .bindPopup('Você está aqui!')
        .openPopup();
}

function error(err){
    console.log(err);
}

var watchID = navigator.geolocation.watchPosition(success, error, {
    enableHighAccuracy: true,
    timeout: 5000
});


// //////////////

  
//   var map = L.map('mapid').setView([-22.421433106532383, -42.9634419322108], 8);
//   mapLink =
//     '<a href="http://openstreetmap.org">OpenStreetMap</a>';
//   L.tileLayer(
//     'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution: '&copy; ' + mapLink + ' Contributors',
//       maxZoom: 18,
//     }).addTo(map);
  
 
