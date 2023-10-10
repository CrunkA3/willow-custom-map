const config = {
    "mapbox": {
        "accessToken": "pk.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        "style": "mapbox://styles/mapbox/streets-v12",
        "containerId": "map"
    },
    "image": {
        "url": "https://eeve.com/swfiles/files/Weedy-1.png?nc=1695985256", //must be an https:// or start chrome with ....\chrome.exe --allow-file-access-from-files
        "coordinates": [
            [3.438457, 50.868191],  //top left
            [3.439126, 50.868411],  //top right
            [3.439474, 50.867996],  //bottom right
            [3.438768, 50.867786]   //bottom left
        ]
    },
    "willow": {
        "host": "http://192.168.1.2:8080"
    }
}