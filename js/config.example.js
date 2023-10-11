const config = {
    "mapbox": {
        "accessToken": "pk.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", // get one from https://account.mapbox.com/
        "style": "mapbox://styles/mapbox/streets-v12",               // this is the default public style, but you can create your own on https://studio.mapbox.com/
        "containerId": "map"                                         // container id in index.html
    },
    "image": {
        "url": "img/Weedy-1.png",   //picture from your property (this picture is the reason you have to start your browser like this chrome.exe --allow-file-access-from-files
        "coordinates": [
            [3.438457, 50.868191],  //top left
            [3.439126, 50.868411],  //top right
            [3.439474, 50.867996],  //bottom right
            [3.438768, 50.867786]   //bottom left
        ]
    },
    "willow": {
        "host": "http://192.168.1.2:8080"   //host of your willow
    }
}