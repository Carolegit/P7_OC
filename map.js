var map = new ol.Map({//création de l'objet map
        target: 'map', //liaison de l'objet map au div
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([4.85, 45.75]),//lon/lat
          zoom: 15
        })
      });