function initYandexMap() {
	ymaps.ready(function () {
		var _ball_bg = './image/map_point.svg';
		var _ball_Offset = [-20, -42];
		var _ball_Size = [50, 50];
		var color_shema = [
			{
				"tags": "country",
				"elements": "geometry.fill",
				"stylers": [
					{
						"color": "#85ad87"
					},
					{
						"opacity": 0.8,
						"zoom": 0
					},
					{
						"opacity": 0.8,
						"zoom": 1
					},
					{
						"opacity": 0.8,
						"zoom": 2
					},
					{
						"opacity": 0.8,
						"zoom": 3
					},
					{
						"opacity": 0.8,
						"zoom": 4
					},
					{
						"opacity": 1,
						"zoom": 5
					},
					{
						"opacity": 1,
						"zoom": 6
					},
					{
						"opacity": 1,
						"zoom": 7
					},
					{
						"opacity": 1,
						"zoom": 8
					},
					{
						"opacity": 1,
						"zoom": 9
					},
					{
						"opacity": 1,
						"zoom": 10
					},
					{
						"opacity": 1,
						"zoom": 11
					},
					{
						"opacity": 1,
						"zoom": 12
					},
					{
						"opacity": 1,
						"zoom": 13
					},
					{
						"opacity": 1,
						"zoom": 14
					},
					{
						"opacity": 1,
						"zoom": 15
					},
					{
						"opacity": 1,
						"zoom": 16
					},
					{
						"opacity": 1,
						"zoom": 17
					},
					{
						"opacity": 1,
						"zoom": 18
					},
					{
						"opacity": 1,
						"zoom": 19
					},
					{
						"opacity": 1,
						"zoom": 20
					},
					{
						"opacity": 1,
						"zoom": 21
					}
				]
			},
			{
				"tags": "country",
				"elements": "geometry.outline",
				"stylers": [
					{
						"color": "#c1d7c2"
					},
					{
						"opacity": 0.15,
						"zoom": 0
					},
					{
						"opacity": 0.15,
						"zoom": 1
					},
					{
						"opacity": 0.15,
						"zoom": 2
					},
					{
						"opacity": 0.15,
						"zoom": 3
					},
					{
						"opacity": 0.15,
						"zoom": 4
					},
					{
						"opacity": 0.15,
						"zoom": 5
					},
					{
						"opacity": 0.25,
						"zoom": 6
					},
					{
						"opacity": 0.5,
						"zoom": 7
					},
					{
						"opacity": 0.47,
						"zoom": 8
					},
					{
						"opacity": 0.44,
						"zoom": 9
					},
					{
						"opacity": 0.41,
						"zoom": 10
					},
					{
						"opacity": 0.38,
						"zoom": 11
					},
					{
						"opacity": 0.35,
						"zoom": 12
					},
					{
						"opacity": 0.33,
						"zoom": 13
					},
					{
						"opacity": 0.3,
						"zoom": 14
					},
					{
						"opacity": 0.28,
						"zoom": 15
					},
					{
						"opacity": 0.25,
						"zoom": 16
					},
					{
						"opacity": 0.25,
						"zoom": 17
					},
					{
						"opacity": 0.25,
						"zoom": 18
					},
					{
						"opacity": 0.25,
						"zoom": 19
					},
					{
						"opacity": 0.25,
						"zoom": 20
					},
					{
						"opacity": 0.25,
						"zoom": 21
					}
				]
			},
			{
				"tags": "region",
				"elements": "geometry.fill",
				"stylers": [
					{
						"color": "#a3c2a5",
						"opacity": 0.5,
						"zoom": 0
					},
					{
						"color": "#a3c2a5",
						"opacity": 0.5,
						"zoom": 1
					},
					{
						"color": "#a3c2a5",
						"opacity": 0.5,
						"zoom": 2
					},
					{
						"color": "#a3c2a5",
						"opacity": 0.5,
						"zoom": 3
					},
					{
						"color": "#a3c2a5",
						"opacity": 0.5,
						"zoom": 4
					},
					{
						"color": "#a3c2a5",
						"opacity": 0.5,
						"zoom": 5
					},
					{
						"color": "#a3c2a5",
						"opacity": 1,
						"zoom": 6
					},
					{
						"color": "#a3c2a5",
						"opacity": 1,
						"zoom": 7
					},
					{
						"color": "#85ad87",
						"opacity": 1,
						"zoom": 8
					},
					{
						"color": "#85ad87",
						"opacity": 1,
						"zoom": 9
					},
					{
						"color": "#85ad87",
						"opacity": 1,
						"zoom": 10
					},
					{
						"color": "#85ad87",
						"opacity": 1,
						"zoom": 11
					},
					{
						"color": "#85ad87",
						"opacity": 1,
						"zoom": 12
					},
					{
						"color": "#85ad87",
						"opacity": 1,
						"zoom": 13
					},
					{
						"color": "#85ad87",
						"opacity": 1,
						"zoom": 14
					},
					{
						"color": "#85ad87",
						"opacity": 1,
						"zoom": 15
					},
					{
						"color": "#85ad87",
						"opacity": 1,
						"zoom": 16
					},
					{
						"color": "#85ad87",
						"opacity": 1,
						"zoom": 17
					},
					{
						"color": "#85ad87",
						"opacity": 1,
						"zoom": 18
					},
					{
						"color": "#85ad87",
						"opacity": 1,
						"zoom": 19
					},
					{
						"color": "#85ad87",
						"opacity": 1,
						"zoom": 20
					},
					{
						"color": "#85ad87",
						"opacity": 1,
						"zoom": 21
					}
				]
			},
			{
				"tags": "region",
				"elements": "geometry.outline",
				"stylers": [
					{
						"color": "#c1d7c2"
					},
					{
						"opacity": 0.15,
						"zoom": 0
					},
					{
						"opacity": 0.15,
						"zoom": 1
					},
					{
						"opacity": 0.15,
						"zoom": 2
					},
					{
						"opacity": 0.15,
						"zoom": 3
					},
					{
						"opacity": 0.15,
						"zoom": 4
					},
					{
						"opacity": 0.15,
						"zoom": 5
					},
					{
						"opacity": 0.25,
						"zoom": 6
					},
					{
						"opacity": 0.5,
						"zoom": 7
					},
					{
						"opacity": 0.47,
						"zoom": 8
					},
					{
						"opacity": 0.44,
						"zoom": 9
					},
					{
						"opacity": 0.41,
						"zoom": 10
					},
					{
						"opacity": 0.38,
						"zoom": 11
					},
					{
						"opacity": 0.35,
						"zoom": 12
					},
					{
						"opacity": 0.33,
						"zoom": 13
					},
					{
						"opacity": 0.3,
						"zoom": 14
					},
					{
						"opacity": 0.28,
						"zoom": 15
					},
					{
						"opacity": 0.25,
						"zoom": 16
					},
					{
						"opacity": 0.25,
						"zoom": 17
					},
					{
						"opacity": 0.25,
						"zoom": 18
					},
					{
						"opacity": 0.25,
						"zoom": 19
					},
					{
						"opacity": 0.25,
						"zoom": 20
					},
					{
						"opacity": 0.25,
						"zoom": 21
					}
				]
			},
			{
				"tags": {
					"any": "admin",
					"none": [
						"country",
						"region",
						"locality",
						"district",
						"address"
					]
				},
				"elements": "geometry.fill",
				"stylers": [
					{
						"color": "#85ad87"
					},
					{
						"opacity": 0.5,
						"zoom": 0
					},
					{
						"opacity": 0.5,
						"zoom": 1
					},
					{
						"opacity": 0.5,
						"zoom": 2
					},
					{
						"opacity": 0.5,
						"zoom": 3
					},
					{
						"opacity": 0.5,
						"zoom": 4
					},
					{
						"opacity": 0.5,
						"zoom": 5
					},
					{
						"opacity": 1,
						"zoom": 6
					},
					{
						"opacity": 1,
						"zoom": 7
					},
					{
						"opacity": 1,
						"zoom": 8
					},
					{
						"opacity": 1,
						"zoom": 9
					},
					{
						"opacity": 1,
						"zoom": 10
					},
					{
						"opacity": 1,
						"zoom": 11
					},
					{
						"opacity": 1,
						"zoom": 12
					},
					{
						"opacity": 1,
						"zoom": 13
					},
					{
						"opacity": 1,
						"zoom": 14
					},
					{
						"opacity": 1,
						"zoom": 15
					},
					{
						"opacity": 1,
						"zoom": 16
					},
					{
						"opacity": 1,
						"zoom": 17
					},
					{
						"opacity": 1,
						"zoom": 18
					},
					{
						"opacity": 1,
						"zoom": 19
					},
					{
						"opacity": 1,
						"zoom": 20
					},
					{
						"opacity": 1,
						"zoom": 21
					}
				]
			},
			{
				"tags": {
					"any": "admin",
					"none": [
						"country",
						"region",
						"locality",
						"district",
						"address"
					]
				},
				"elements": "geometry.outline",
				"stylers": [
					{
						"color": "#c1d7c2"
					},
					{
						"opacity": 0.15,
						"zoom": 0
					},
					{
						"opacity": 0.15,
						"zoom": 1
					},
					{
						"opacity": 0.15,
						"zoom": 2
					},
					{
						"opacity": 0.15,
						"zoom": 3
					},
					{
						"opacity": 0.15,
						"zoom": 4
					},
					{
						"opacity": 0.15,
						"zoom": 5
					},
					{
						"opacity": 0.25,
						"zoom": 6
					},
					{
						"opacity": 0.5,
						"zoom": 7
					},
					{
						"opacity": 0.47,
						"zoom": 8
					},
					{
						"opacity": 0.44,
						"zoom": 9
					},
					{
						"opacity": 0.41,
						"zoom": 10
					},
					{
						"opacity": 0.38,
						"zoom": 11
					},
					{
						"opacity": 0.35,
						"zoom": 12
					},
					{
						"opacity": 0.33,
						"zoom": 13
					},
					{
						"opacity": 0.3,
						"zoom": 14
					},
					{
						"opacity": 0.28,
						"zoom": 15
					},
					{
						"opacity": 0.25,
						"zoom": 16
					},
					{
						"opacity": 0.25,
						"zoom": 17
					},
					{
						"opacity": 0.25,
						"zoom": 18
					},
					{
						"opacity": 0.25,
						"zoom": 19
					},
					{
						"opacity": 0.25,
						"zoom": 20
					},
					{
						"opacity": 0.25,
						"zoom": 21
					}
				]
			},
			{
				"tags": {
					"any": "landcover",
					"none": "vegetation"
				},
				"stylers": [
					{
						"hue": "#c7dbc8"
					}
				]
			},
			{
				"tags": "vegetation",
				"elements": "geometry",
				"stylers": [
					{
						"color": "#a8c7a9",
						"opacity": 0.1,
						"zoom": 0
					},
					{
						"color": "#a8c7a9",
						"opacity": 0.1,
						"zoom": 1
					},
					{
						"color": "#a8c7a9",
						"opacity": 0.1,
						"zoom": 2
					},
					{
						"color": "#a8c7a9",
						"opacity": 0.1,
						"zoom": 3
					},
					{
						"color": "#a8c7a9",
						"opacity": 0.1,
						"zoom": 4
					},
					{
						"color": "#a8c7a9",
						"opacity": 0.1,
						"zoom": 5
					},
					{
						"color": "#a8c7a9",
						"opacity": 0.2,
						"zoom": 6
					},
					{
						"color": "#c7dbc8",
						"opacity": 0.3,
						"zoom": 7
					},
					{
						"color": "#c7dbc8",
						"opacity": 0.4,
						"zoom": 8
					},
					{
						"color": "#c7dbc8",
						"opacity": 0.6,
						"zoom": 9
					},
					{
						"color": "#c7dbc8",
						"opacity": 0.8,
						"zoom": 10
					},
					{
						"color": "#c7dbc8",
						"opacity": 1,
						"zoom": 11
					},
					{
						"color": "#c7dbc8",
						"opacity": 1,
						"zoom": 12
					},
					{
						"color": "#c7dbc8",
						"opacity": 1,
						"zoom": 13
					},
					{
						"color": "#cddfce",
						"opacity": 1,
						"zoom": 14
					},
					{
						"color": "#d3e3d4",
						"opacity": 1,
						"zoom": 15
					},
					{
						"color": "#d3e3d4",
						"opacity": 1,
						"zoom": 16
					},
					{
						"color": "#d3e3d4",
						"opacity": 1,
						"zoom": 17
					},
					{
						"color": "#d3e3d4",
						"opacity": 1,
						"zoom": 18
					},
					{
						"color": "#d3e3d4",
						"opacity": 1,
						"zoom": 19
					},
					{
						"color": "#d3e3d4",
						"opacity": 1,
						"zoom": 20
					},
					{
						"color": "#d3e3d4",
						"opacity": 1,
						"zoom": 21
					}
				]
			},
			{
				"tags": "park",
				"elements": "geometry",
				"stylers": [
					{
						"color": "#c7dbc8",
						"opacity": 0.1,
						"zoom": 0
					},
					{
						"color": "#c7dbc8",
						"opacity": 0.1,
						"zoom": 1
					},
					{
						"color": "#c7dbc8",
						"opacity": 0.1,
						"zoom": 2
					},
					{
						"color": "#c7dbc8",
						"opacity": 0.1,
						"zoom": 3
					},
					{
						"color": "#c7dbc8",
						"opacity": 0.1,
						"zoom": 4
					},
					{
						"color": "#c7dbc8",
						"opacity": 0.1,
						"zoom": 5
					},
					{
						"color": "#c7dbc8",
						"opacity": 0.2,
						"zoom": 6
					},
					{
						"color": "#c7dbc8",
						"opacity": 0.3,
						"zoom": 7
					},
					{
						"color": "#c7dbc8",
						"opacity": 0.4,
						"zoom": 8
					},
					{
						"color": "#c7dbc8",
						"opacity": 0.6,
						"zoom": 9
					},
					{
						"color": "#c7dbc8",
						"opacity": 0.8,
						"zoom": 10
					},
					{
						"color": "#c7dbc8",
						"opacity": 1,
						"zoom": 11
					},
					{
						"color": "#c7dbc8",
						"opacity": 1,
						"zoom": 12
					},
					{
						"color": "#c7dbc8",
						"opacity": 1,
						"zoom": 13
					},
					{
						"color": "#cddfce",
						"opacity": 1,
						"zoom": 14
					},
					{
						"color": "#d3e3d4",
						"opacity": 1,
						"zoom": 15
					},
					{
						"color": "#d3e3d4",
						"opacity": 0.9,
						"zoom": 16
					},
					{
						"color": "#d3e3d4",
						"opacity": 0.8,
						"zoom": 17
					},
					{
						"color": "#d3e3d4",
						"opacity": 0.7,
						"zoom": 18
					},
					{
						"color": "#d3e3d4",
						"opacity": 0.7,
						"zoom": 19
					},
					{
						"color": "#d3e3d4",
						"opacity": 0.7,
						"zoom": 20
					},
					{
						"color": "#d3e3d4",
						"opacity": 0.7,
						"zoom": 21
					}
				]
			},
			{
				"tags": "national_park",
				"elements": "geometry",
				"stylers": [
					{
						"color": "#c7dbc8",
						"opacity": 0.1,
						"zoom": 0
					},
					{
						"color": "#c7dbc8",
						"opacity": 0.1,
						"zoom": 1
					},
					{
						"color": "#c7dbc8",
						"opacity": 0.1,
						"zoom": 2
					},
					{
						"color": "#c7dbc8",
						"opacity": 0.1,
						"zoom": 3
					},
					{
						"color": "#c7dbc8",
						"opacity": 0.1,
						"zoom": 4
					},
					{
						"color": "#c7dbc8",
						"opacity": 0.1,
						"zoom": 5
					},
					{
						"color": "#c7dbc8",
						"opacity": 0.2,
						"zoom": 6
					},
					{
						"color": "#c7dbc8",
						"opacity": 0.3,
						"zoom": 7
					},
					{
						"color": "#c7dbc8",
						"opacity": 0.4,
						"zoom": 8
					},
					{
						"color": "#c7dbc8",
						"opacity": 0.6,
						"zoom": 9
					},
					{
						"color": "#c7dbc8",
						"opacity": 0.8,
						"zoom": 10
					},
					{
						"color": "#c7dbc8",
						"opacity": 1,
						"zoom": 11
					},
					{
						"color": "#c7dbc8",
						"opacity": 1,
						"zoom": 12
					},
					{
						"color": "#c7dbc8",
						"opacity": 1,
						"zoom": 13
					},
					{
						"color": "#cddfce",
						"opacity": 1,
						"zoom": 14
					},
					{
						"color": "#d3e3d4",
						"opacity": 1,
						"zoom": 15
					},
					{
						"color": "#d3e3d4",
						"opacity": 0.7,
						"zoom": 16
					},
					{
						"color": "#d3e3d4",
						"opacity": 0.7,
						"zoom": 17
					},
					{
						"color": "#d3e3d4",
						"opacity": 0.7,
						"zoom": 18
					},
					{
						"color": "#d3e3d4",
						"opacity": 0.7,
						"zoom": 19
					},
					{
						"color": "#d3e3d4",
						"opacity": 0.7,
						"zoom": 20
					},
					{
						"color": "#d3e3d4",
						"opacity": 0.7,
						"zoom": 21
					}
				]
			},
			{
				"tags": "cemetery",
				"elements": "geometry",
				"stylers": [
					{
						"color": "#c7dbc8",
						"zoom": 0
					},
					{
						"color": "#c7dbc8",
						"zoom": 1
					},
					{
						"color": "#c7dbc8",
						"zoom": 2
					},
					{
						"color": "#c7dbc8",
						"zoom": 3
					},
					{
						"color": "#c7dbc8",
						"zoom": 4
					},
					{
						"color": "#c7dbc8",
						"zoom": 5
					},
					{
						"color": "#c7dbc8",
						"zoom": 6
					},
					{
						"color": "#c7dbc8",
						"zoom": 7
					},
					{
						"color": "#c7dbc8",
						"zoom": 8
					},
					{
						"color": "#c7dbc8",
						"zoom": 9
					},
					{
						"color": "#c7dbc8",
						"zoom": 10
					},
					{
						"color": "#c7dbc8",
						"zoom": 11
					},
					{
						"color": "#c7dbc8",
						"zoom": 12
					},
					{
						"color": "#c7dbc8",
						"zoom": 13
					},
					{
						"color": "#cddfce",
						"zoom": 14
					},
					{
						"color": "#d3e3d4",
						"zoom": 15
					},
					{
						"color": "#d3e3d4",
						"zoom": 16
					},
					{
						"color": "#d3e3d4",
						"zoom": 17
					},
					{
						"color": "#d3e3d4",
						"zoom": 18
					},
					{
						"color": "#d3e3d4",
						"zoom": 19
					},
					{
						"color": "#d3e3d4",
						"zoom": 20
					},
					{
						"color": "#d3e3d4",
						"zoom": 21
					}
				]
			},
			{
				"tags": "sports_ground",
				"elements": "geometry",
				"stylers": [
					{
						"color": "#b7d1ba",
						"opacity": 0,
						"zoom": 0
					},
					{
						"color": "#b7d1ba",
						"opacity": 0,
						"zoom": 1
					},
					{
						"color": "#b7d1ba",
						"opacity": 0,
						"zoom": 2
					},
					{
						"color": "#b7d1ba",
						"opacity": 0,
						"zoom": 3
					},
					{
						"color": "#b7d1ba",
						"opacity": 0,
						"zoom": 4
					},
					{
						"color": "#b7d1ba",
						"opacity": 0,
						"zoom": 5
					},
					{
						"color": "#b7d1ba",
						"opacity": 0,
						"zoom": 6
					},
					{
						"color": "#b7d1ba",
						"opacity": 0,
						"zoom": 7
					},
					{
						"color": "#b7d1ba",
						"opacity": 0,
						"zoom": 8
					},
					{
						"color": "#b7d1ba",
						"opacity": 0,
						"zoom": 9
					},
					{
						"color": "#b7d1ba",
						"opacity": 0,
						"zoom": 10
					},
					{
						"color": "#b7d1ba",
						"opacity": 0,
						"zoom": 11
					},
					{
						"color": "#b7d1ba",
						"opacity": 0,
						"zoom": 12
					},
					{
						"color": "#b7d1ba",
						"opacity": 0,
						"zoom": 13
					},
					{
						"color": "#bdd5c0",
						"opacity": 0,
						"zoom": 14
					},
					{
						"color": "#c4d9c6",
						"opacity": 0.5,
						"zoom": 15
					},
					{
						"color": "#c5dac7",
						"opacity": 1,
						"zoom": 16
					},
					{
						"color": "#c6dac8",
						"opacity": 1,
						"zoom": 17
					},
					{
						"color": "#c7dbc9",
						"opacity": 1,
						"zoom": 18
					},
					{
						"color": "#c8dcca",
						"opacity": 1,
						"zoom": 19
					},
					{
						"color": "#c9dccb",
						"opacity": 1,
						"zoom": 20
					},
					{
						"color": "#caddcc",
						"opacity": 1,
						"zoom": 21
					}
				]
			},
			{
				"tags": "terrain",
				"elements": "geometry",
				"stylers": [
					{
						"hue": "#e6efe6"
					},
					{
						"opacity": 0.3,
						"zoom": 0
					},
					{
						"opacity": 0.3,
						"zoom": 1
					},
					{
						"opacity": 0.3,
						"zoom": 2
					},
					{
						"opacity": 0.3,
						"zoom": 3
					},
					{
						"opacity": 0.3,
						"zoom": 4
					},
					{
						"opacity": 0.35,
						"zoom": 5
					},
					{
						"opacity": 0.4,
						"zoom": 6
					},
					{
						"opacity": 0.6,
						"zoom": 7
					},
					{
						"opacity": 0.8,
						"zoom": 8
					},
					{
						"opacity": 0.9,
						"zoom": 9
					},
					{
						"opacity": 1,
						"zoom": 10
					},
					{
						"opacity": 1,
						"zoom": 11
					},
					{
						"opacity": 1,
						"zoom": 12
					},
					{
						"opacity": 1,
						"zoom": 13
					},
					{
						"opacity": 1,
						"zoom": 14
					},
					{
						"opacity": 1,
						"zoom": 15
					},
					{
						"opacity": 1,
						"zoom": 16
					},
					{
						"opacity": 1,
						"zoom": 17
					},
					{
						"opacity": 1,
						"zoom": 18
					},
					{
						"opacity": 1,
						"zoom": 19
					},
					{
						"opacity": 1,
						"zoom": 20
					},
					{
						"opacity": 1,
						"zoom": 21
					}
				]
			},
			{
				"tags": "geographic_line",
				"elements": "geometry",
				"stylers": [
					{
						"color": "#6aa06a"
					}
				]
			},
			{
				"tags": "land",
				"elements": "geometry",
				"stylers": [
					{
						"color": "#e7efe7",
						"zoom": 0
					},
					{
						"color": "#e7efe7",
						"zoom": 1
					},
					{
						"color": "#e7efe7",
						"zoom": 2
					},
					{
						"color": "#e7efe7",
						"zoom": 3
					},
					{
						"color": "#e7efe7",
						"zoom": 4
					},
					{
						"color": "#eaf1ea",
						"zoom": 5
					},
					{
						"color": "#edf3ed",
						"zoom": 6
					},
					{
						"color": "#f0f5f0",
						"zoom": 7
					},
					{
						"color": "#f3f7f3",
						"zoom": 8
					},
					{
						"color": "#f3f7f3",
						"zoom": 9
					},
					{
						"color": "#f3f7f3",
						"zoom": 10
					},
					{
						"color": "#f3f7f3",
						"zoom": 11
					},
					{
						"color": "#f3f7f3",
						"zoom": 12
					},
					{
						"color": "#f3f7f3",
						"zoom": 13
					},
					{
						"color": "#f6f9f6",
						"zoom": 14
					},
					{
						"color": "#f9fbf9",
						"zoom": 15
					},
					{
						"color": "#f9fbf9",
						"zoom": 16
					},
					{
						"color": "#fafcfa",
						"zoom": 17
					},
					{
						"color": "#fafcfa",
						"zoom": 18
					},
					{
						"color": "#fbfcfb",
						"zoom": 19
					},
					{
						"color": "#fbfdfb",
						"zoom": 20
					},
					{
						"color": "#fcfdfc",
						"zoom": 21
					}
				]
			},
			{
				"tags": "residential",
				"elements": "geometry",
				"stylers": [
					{
						"color": "#e6efe6",
						"opacity": 0.5,
						"zoom": 0
					},
					{
						"color": "#e6efe6",
						"opacity": 0.5,
						"zoom": 1
					},
					{
						"color": "#e6efe6",
						"opacity": 0.5,
						"zoom": 2
					},
					{
						"color": "#e6efe6",
						"opacity": 0.5,
						"zoom": 3
					},
					{
						"color": "#e6efe6",
						"opacity": 0.5,
						"zoom": 4
					},
					{
						"color": "#e6efe6",
						"opacity": 0.5,
						"zoom": 5
					},
					{
						"color": "#e6efe6",
						"opacity": 0.5,
						"zoom": 6
					},
					{
						"color": "#e6efe6",
						"opacity": 0.5,
						"zoom": 7
					},
					{
						"color": "#e6efe6",
						"opacity": 0.5,
						"zoom": 8
					},
					{
						"color": "#e6efe6",
						"opacity": 0.5,
						"zoom": 9
					},
					{
						"color": "#e6efe6",
						"opacity": 0.5,
						"zoom": 10
					},
					{
						"color": "#e6efe6",
						"opacity": 0.5,
						"zoom": 11
					},
					{
						"color": "#e6efe6",
						"opacity": 0.5,
						"zoom": 12
					},
					{
						"color": "#e6efe6",
						"opacity": 1,
						"zoom": 13
					},
					{
						"color": "#ecf3ec",
						"opacity": 1,
						"zoom": 14
					},
					{
						"color": "#f3f7f3",
						"opacity": 1,
						"zoom": 15
					},
					{
						"color": "#f4f8f4",
						"opacity": 1,
						"zoom": 16
					},
					{
						"color": "#f5f8f5",
						"opacity": 1,
						"zoom": 17
					},
					{
						"color": "#f6f9f6",
						"opacity": 1,
						"zoom": 18
					},
					{
						"color": "#f7faf7",
						"opacity": 1,
						"zoom": 19
					},
					{
						"color": "#f8faf8",
						"opacity": 1,
						"zoom": 20
					},
					{
						"color": "#f9fbf9",
						"opacity": 1,
						"zoom": 21
					}
				]
			},
			{
				"tags": "locality",
				"elements": "geometry",
				"stylers": [
					{
						"color": "#e6efe6",
						"zoom": 0
					},
					{
						"color": "#e6efe6",
						"zoom": 1
					},
					{
						"color": "#e6efe6",
						"zoom": 2
					},
					{
						"color": "#e6efe6",
						"zoom": 3
					},
					{
						"color": "#e6efe6",
						"zoom": 4
					},
					{
						"color": "#e6efe6",
						"zoom": 5
					},
					{
						"color": "#e6efe6",
						"zoom": 6
					},
					{
						"color": "#e6efe6",
						"zoom": 7
					},
					{
						"color": "#e6efe6",
						"zoom": 8
					},
					{
						"color": "#e6efe6",
						"zoom": 9
					},
					{
						"color": "#e6efe6",
						"zoom": 10
					},
					{
						"color": "#e6efe6",
						"zoom": 11
					},
					{
						"color": "#e6efe6",
						"zoom": 12
					},
					{
						"color": "#e6efe6",
						"zoom": 13
					},
					{
						"color": "#ecf3ec",
						"zoom": 14
					},
					{
						"color": "#f3f7f3",
						"zoom": 15
					},
					{
						"color": "#f4f8f4",
						"zoom": 16
					},
					{
						"color": "#f5f8f5",
						"zoom": 17
					},
					{
						"color": "#f6f9f6",
						"zoom": 18
					},
					{
						"color": "#f7faf7",
						"zoom": 19
					},
					{
						"color": "#f8faf8",
						"zoom": 20
					},
					{
						"color": "#f9fbf9",
						"zoom": 21
					}
				]
			},
			{
				"tags": {
					"any": "structure",
					"none": [
						"building",
						"fence"
					]
				},
				"elements": "geometry",
				"stylers": [
					{
						"opacity": 0.9
					},
					{
						"color": "#e6efe6",
						"zoom": 0
					},
					{
						"color": "#e6efe6",
						"zoom": 1
					},
					{
						"color": "#e6efe6",
						"zoom": 2
					},
					{
						"color": "#e6efe6",
						"zoom": 3
					},
					{
						"color": "#e6efe6",
						"zoom": 4
					},
					{
						"color": "#e6efe6",
						"zoom": 5
					},
					{
						"color": "#e6efe6",
						"zoom": 6
					},
					{
						"color": "#e6efe6",
						"zoom": 7
					},
					{
						"color": "#e6efe6",
						"zoom": 8
					},
					{
						"color": "#e6efe6",
						"zoom": 9
					},
					{
						"color": "#e6efe6",
						"zoom": 10
					},
					{
						"color": "#e6efe6",
						"zoom": 11
					},
					{
						"color": "#e6efe6",
						"zoom": 12
					},
					{
						"color": "#e6efe6",
						"zoom": 13
					},
					{
						"color": "#ecf3ec",
						"zoom": 14
					},
					{
						"color": "#f3f7f3",
						"zoom": 15
					},
					{
						"color": "#f4f8f4",
						"zoom": 16
					},
					{
						"color": "#f5f8f5",
						"zoom": 17
					},
					{
						"color": "#f6f9f6",
						"zoom": 18
					},
					{
						"color": "#f7faf7",
						"zoom": 19
					},
					{
						"color": "#f8faf8",
						"zoom": 20
					},
					{
						"color": "#f9fbf9",
						"zoom": 21
					}
				]
			},
			{
				"tags": "building",
				"elements": "geometry.fill",
				"stylers": [
					{
						"color": "#d3e3d4"
					},
					{
						"opacity": 0.7,
						"zoom": 0
					},
					{
						"opacity": 0.7,
						"zoom": 1
					},
					{
						"opacity": 0.7,
						"zoom": 2
					},
					{
						"opacity": 0.7,
						"zoom": 3
					},
					{
						"opacity": 0.7,
						"zoom": 4
					},
					{
						"opacity": 0.7,
						"zoom": 5
					},
					{
						"opacity": 0.7,
						"zoom": 6
					},
					{
						"opacity": 0.7,
						"zoom": 7
					},
					{
						"opacity": 0.7,
						"zoom": 8
					},
					{
						"opacity": 0.7,
						"zoom": 9
					},
					{
						"opacity": 0.7,
						"zoom": 10
					},
					{
						"opacity": 0.7,
						"zoom": 11
					},
					{
						"opacity": 0.7,
						"zoom": 12
					},
					{
						"opacity": 0.7,
						"zoom": 13
					},
					{
						"opacity": 0.7,
						"zoom": 14
					},
					{
						"opacity": 0.7,
						"zoom": 15
					},
					{
						"opacity": 0.9,
						"zoom": 16
					},
					{
						"opacity": 0.6,
						"zoom": 17
					},
					{
						"opacity": 0.6,
						"zoom": 18
					},
					{
						"opacity": 0.6,
						"zoom": 19
					},
					{
						"opacity": 0.6,
						"zoom": 20
					},
					{
						"opacity": 0.6,
						"zoom": 21
					}
				]
			},
			{
				"tags": "building",
				"elements": "geometry.outline",
				"stylers": [
					{
						"color": "#bbd3bc"
					},
					{
						"opacity": 0.5,
						"zoom": 0
					},
					{
						"opacity": 0.5,
						"zoom": 1
					},
					{
						"opacity": 0.5,
						"zoom": 2
					},
					{
						"opacity": 0.5,
						"zoom": 3
					},
					{
						"opacity": 0.5,
						"zoom": 4
					},
					{
						"opacity": 0.5,
						"zoom": 5
					},
					{
						"opacity": 0.5,
						"zoom": 6
					},
					{
						"opacity": 0.5,
						"zoom": 7
					},
					{
						"opacity": 0.5,
						"zoom": 8
					},
					{
						"opacity": 0.5,
						"zoom": 9
					},
					{
						"opacity": 0.5,
						"zoom": 10
					},
					{
						"opacity": 0.5,
						"zoom": 11
					},
					{
						"opacity": 0.5,
						"zoom": 12
					},
					{
						"opacity": 0.5,
						"zoom": 13
					},
					{
						"opacity": 0.5,
						"zoom": 14
					},
					{
						"opacity": 0.5,
						"zoom": 15
					},
					{
						"opacity": 0.5,
						"zoom": 16
					},
					{
						"opacity": 1,
						"zoom": 17
					},
					{
						"opacity": 1,
						"zoom": 18
					},
					{
						"opacity": 1,
						"zoom": 19
					},
					{
						"opacity": 1,
						"zoom": 20
					},
					{
						"opacity": 1,
						"zoom": 21
					}
				]
			},
			{
				"tags": {
					"any": "urban_area",
					"none": [
						"residential",
						"industrial",
						"cemetery",
						"park",
						"medical",
						"sports_ground",
						"beach",
						"construction_site"
					]
				},
				"elements": "geometry",
				"stylers": [
					{
						"color": "#dae7da",
						"opacity": 1,
						"zoom": 0
					},
					{
						"color": "#dae7da",
						"opacity": 1,
						"zoom": 1
					},
					{
						"color": "#dae7da",
						"opacity": 1,
						"zoom": 2
					},
					{
						"color": "#dae7da",
						"opacity": 1,
						"zoom": 3
					},
					{
						"color": "#dae7da",
						"opacity": 1,
						"zoom": 4
					},
					{
						"color": "#dae7da",
						"opacity": 1,
						"zoom": 5
					},
					{
						"color": "#dae7da",
						"opacity": 1,
						"zoom": 6
					},
					{
						"color": "#dae7da",
						"opacity": 1,
						"zoom": 7
					},
					{
						"color": "#dae7da",
						"opacity": 1,
						"zoom": 8
					},
					{
						"color": "#dae7da",
						"opacity": 1,
						"zoom": 9
					},
					{
						"color": "#dae7da",
						"opacity": 1,
						"zoom": 10
					},
					{
						"color": "#dae7da",
						"opacity": 1,
						"zoom": 11
					},
					{
						"color": "#dae7da",
						"opacity": 1,
						"zoom": 12
					},
					{
						"color": "#dae7da",
						"opacity": 1,
						"zoom": 13
					},
					{
						"color": "#e1ece1",
						"opacity": 1,
						"zoom": 14
					},
					{
						"color": "#e9f1e9",
						"opacity": 1,
						"zoom": 15
					},
					{
						"color": "#f1f6f1",
						"opacity": 0.67,
						"zoom": 16
					},
					{
						"color": "#f9fbf9",
						"opacity": 0.33,
						"zoom": 17
					},
					{
						"color": "#f9fbf9",
						"opacity": 0,
						"zoom": 18
					},
					{
						"color": "#f9fbf9",
						"opacity": 0,
						"zoom": 19
					},
					{
						"color": "#f9fbf9",
						"opacity": 0,
						"zoom": 20
					},
					{
						"color": "#f9fbf9",
						"opacity": 0,
						"zoom": 21
					}
				]
			},
			{
				"tags": "poi",
				"elements": "label.icon",
				"stylers": [
					{
						"color": "#d3e3d4"
					},
					{
						"secondary-color": "#ffffff"
					},
					{
						"tertiary-color": "#ffffff"
					}
				]
			},
			{
				"tags": "poi",
				"elements": "label.text.fill",
				"stylers": [
					{
						"color": "#3c5d3e"
					}
				]
			},
			{
				"tags": "poi",
				"elements": "label.text.outline",
				"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"opacity": 0.5
					}
				]
			},
			{
				"tags": "outdoor",
				"elements": "label.icon",
				"stylers": [
					{
						"color": "#d3e3d4"
					},
					{
						"secondary-color": "#ffffff"
					},
					{
						"tertiary-color": "#ffffff"
					}
				]
			},
			{
				"tags": "outdoor",
				"elements": "label.text.fill",
				"stylers": [
					{
						"color": "#3c5d3e"
					}
				]
			},
			{
				"tags": "outdoor",
				"elements": "label.text.outline",
				"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"opacity": 0.5
					}
				]
			},
			{
				"tags": "park",
				"elements": "label.icon",
				"stylers": [
					{
						"color": "#d3e3d4"
					},
					{
						"secondary-color": "#ffffff"
					},
					{
						"tertiary-color": "#ffffff"
					}
				]
			},
			{
				"tags": "park",
				"elements": "label.text.fill",
				"stylers": [
					{
						"color": "#3c5d3e"
					}
				]
			},
			{
				"tags": "park",
				"elements": "label.text.outline",
				"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"opacity": 0.5
					}
				]
			},
			{
				"tags": "cemetery",
				"elements": "label.icon",
				"stylers": [
					{
						"color": "#d3e3d4"
					},
					{
						"secondary-color": "#ffffff"
					},
					{
						"tertiary-color": "#ffffff"
					}
				]
			},
			{
				"tags": "cemetery",
				"elements": "label.text.fill",
				"stylers": [
					{
						"color": "#3c5d3e"
					}
				]
			},
			{
				"tags": "cemetery",
				"elements": "label.text.outline",
				"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"opacity": 0.5
					}
				]
			},
			{
				"tags": "beach",
				"elements": "label.icon",
				"stylers": [
					{
						"color": "#d3e3d4"
					},
					{
						"secondary-color": "#ffffff"
					},
					{
						"tertiary-color": "#ffffff"
					}
				]
			},
			{
				"tags": "beach",
				"elements": "label.text.fill",
				"stylers": [
					{
						"color": "#3c5d3e"
					}
				]
			},
			{
				"tags": "beach",
				"elements": "label.text.outline",
				"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"opacity": 0.5
					}
				]
			},
			{
				"tags": "medical",
				"elements": "label.icon",
				"stylers": [
					{
						"color": "#d3e3d4"
					},
					{
						"secondary-color": "#ffffff"
					},
					{
						"tertiary-color": "#ffffff"
					}
				]
			},
			{
				"tags": "medical",
				"elements": "label.text.fill",
				"stylers": [
					{
						"color": "#3c5d3e"
					}
				]
			},
			{
				"tags": "medical",
				"elements": "label.text.outline",
				"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"opacity": 0.5
					}
				]
			},
			{
				"tags": "shopping",
				"elements": "label.icon",
				"stylers": [
					{
						"color": "#d3e3d4"
					},
					{
						"secondary-color": "#ffffff"
					},
					{
						"tertiary-color": "#ffffff"
					}
				]
			},
			{
				"tags": "shopping",
				"elements": "label.text.fill",
				"stylers": [
					{
						"color": "#3c5d3e"
					}
				]
			},
			{
				"tags": "shopping",
				"elements": "label.text.outline",
				"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"opacity": 0.5
					}
				]
			},
			{
				"tags": "commercial_services",
				"elements": "label.icon",
				"stylers": [
					{
						"color": "#d3e3d4"
					},
					{
						"secondary-color": "#ffffff"
					},
					{
						"tertiary-color": "#ffffff"
					}
				]
			},
			{
				"tags": "commercial_services",
				"elements": "label.text.fill",
				"stylers": [
					{
						"color": "#3c5d3e"
					}
				]
			},
			{
				"tags": "commercial_services",
				"elements": "label.text.outline",
				"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"opacity": 0.5
					}
				]
			},
			{
				"tags": "food_and_drink",
				"elements": "label.icon",
				"stylers": [
					{
						"color": "#d3e3d4"
					},
					{
						"secondary-color": "#ffffff"
					},
					{
						"tertiary-color": "#ffffff"
					}
				]
			},
			{
				"tags": "food_and_drink",
				"elements": "label.text.fill",
				"stylers": [
					{
						"color": "#3c5d3e"
					}
				]
			},
			{
				"tags": "food_and_drink",
				"elements": "label.text.outline",
				"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"opacity": 0.5
					}
				]
			},
			{
				"tags": "road",
				"elements": "label.icon",
				"types": "point",
				"stylers": [
					{
						"color": "#d3e3d4"
					},
					{
						"secondary-color": "#ffffff"
					},
					{
						"tertiary-color": "#ffffff"
					}
				]
			},
			{
				"tags": "road",
				"elements": "label.text.fill",
				"types": "point",
				"stylers": [
					{
						"color": "#ffffff"
					}
				]
			},
			{
				"tags": "entrance",
				"elements": "label.icon",
				"stylers": [
					{
						"color": "#d3e3d4"
					},
					{
						"secondary-color": "#ffffff"
					},
					{
						"hue": "#d3e3d4"
					}
				]
			},
			{
				"tags": "locality",
				"elements": "label.icon",
				"stylers": [
					{
						"color": "#d3e3d4"
					},
					{
						"secondary-color": "#ffffff"
					}
				]
			},
			{
				"tags": "country",
				"elements": "label.text.fill",
				"stylers": [
					{
						"opacity": 0.8
					},
					{
						"color": "#5a8c5d"
					}
				]
			},
			{
				"tags": "country",
				"elements": "label.text.outline",
				"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"opacity": 0.5
					}
				]
			},
			{
				"tags": "region",
				"elements": "label.text.fill",
				"stylers": [
					{
						"color": "#5a8c5d"
					},
					{
						"opacity": 0.8
					}
				]
			},
			{
				"tags": "region",
				"elements": "label.text.outline",
				"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"opacity": 0.5
					}
				]
			},
			{
				"tags": "district",
				"elements": "label.text.fill",
				"stylers": [
					{
						"color": "#5a8c5d"
					},
					{
						"opacity": 0.8
					}
				]
			},
			{
				"tags": "district",
				"elements": "label.text.outline",
				"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"opacity": 0.5
					}
				]
			},
			{
				"tags": {
					"any": "admin",
					"none": [
						"country",
						"region",
						"locality",
						"district",
						"address"
					]
				},
				"elements": "label.text.fill",
				"stylers": [
					{
						"color": "#5a8c5d"
					}
				]
			},
			{
				"tags": {
					"any": "admin",
					"none": [
						"country",
						"region",
						"locality",
						"district",
						"address"
					]
				},
				"elements": "label.text.outline",
				"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"opacity": 0.5
					}
				]
			},
			{
				"tags": "locality",
				"elements": "label.text.fill",
				"stylers": [
					{
						"color": "#3c5d3e",
						"zoom": 0
					},
					{
						"color": "#3c5d3e",
						"zoom": 1
					},
					{
						"color": "#3c5d3e",
						"zoom": 2
					},
					{
						"color": "#3c5d3e",
						"zoom": 3
					},
					{
						"color": "#3c5d3e",
						"zoom": 4
					},
					{
						"color": "#3a5b3c",
						"zoom": 5
					},
					{
						"color": "#39583b",
						"zoom": 6
					},
					{
						"color": "#375639",
						"zoom": 7
					},
					{
						"color": "#355337",
						"zoom": 8
					},
					{
						"color": "#345136",
						"zoom": 9
					},
					{
						"color": "#324e34",
						"zoom": 10
					},
					{
						"color": "#324e34",
						"zoom": 11
					},
					{
						"color": "#324e34",
						"zoom": 12
					},
					{
						"color": "#324e34",
						"zoom": 13
					},
					{
						"color": "#324e34",
						"zoom": 14
					},
					{
						"color": "#324e34",
						"zoom": 15
					},
					{
						"color": "#324e34",
						"zoom": 16
					},
					{
						"color": "#324e34",
						"zoom": 17
					},
					{
						"color": "#324e34",
						"zoom": 18
					},
					{
						"color": "#324e34",
						"zoom": 19
					},
					{
						"color": "#324e34",
						"zoom": 20
					},
					{
						"color": "#324e34",
						"zoom": 21
					}
				]
			},
			{
				"tags": "locality",
				"elements": "label.text.outline",
				"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"opacity": 0.5
					}
				]
			},
			{
				"tags": "road",
				"elements": "label.text.fill",
				"types": "polyline",
				"stylers": [
					{
						"color": "#466d48"
					}
				]
			},
			{
				"tags": "road",
				"elements": "label.text.outline",
				"types": "polyline",
				"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"opacity": 0.5
					}
				]
			},
			{
				"tags": "road",
				"elements": "geometry.fill.pattern",
				"types": "polyline",
				"stylers": [
					{
						"scale": 1
					},
					{
						"color": "#73a576"
					}
				]
			},
			{
				"tags": "road",
				"elements": "label.text.fill",
				"types": "point",
				"stylers": [
					{
						"color": "#ffffff"
					}
				]
			},
			{
				"tags": "structure",
				"elements": "label.text.fill",
				"stylers": [
					{
						"color": "#507c50"
					},
					{
						"opacity": 0.5
					}
				]
			},
			{
				"tags": "structure",
				"elements": "label.text.outline",
				"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"opacity": 0.5
					}
				]
			},
			{
				"tags": "address",
				"elements": "label.text.fill",
				"stylers": [
					{
						"color": "#507c50"
					},
					{
						"opacity": 0.9,
						"zoom": 0
					},
					{
						"opacity": 0.9,
						"zoom": 1
					},
					{
						"opacity": 0.9,
						"zoom": 2
					},
					{
						"opacity": 0.9,
						"zoom": 3
					},
					{
						"opacity": 0.9,
						"zoom": 4
					},
					{
						"opacity": 0.9,
						"zoom": 5
					},
					{
						"opacity": 0.9,
						"zoom": 6
					},
					{
						"opacity": 0.9,
						"zoom": 7
					},
					{
						"opacity": 0.9,
						"zoom": 8
					},
					{
						"opacity": 0.9,
						"zoom": 9
					},
					{
						"opacity": 0.9,
						"zoom": 10
					},
					{
						"opacity": 0.9,
						"zoom": 11
					},
					{
						"opacity": 0.9,
						"zoom": 12
					},
					{
						"opacity": 0.9,
						"zoom": 13
					},
					{
						"opacity": 0.9,
						"zoom": 14
					},
					{
						"opacity": 0.9,
						"zoom": 15
					},
					{
						"opacity": 0.9,
						"zoom": 16
					},
					{
						"opacity": 1,
						"zoom": 17
					},
					{
						"opacity": 1,
						"zoom": 18
					},
					{
						"opacity": 1,
						"zoom": 19
					},
					{
						"opacity": 1,
						"zoom": 20
					},
					{
						"opacity": 1,
						"zoom": 21
					}
				]
			},
			{
				"tags": "address",
				"elements": "label.text.outline",
				"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"opacity": 0.5
					}
				]
			},
			{
				"tags": "landscape",
				"elements": "label.text.fill",
				"stylers": [
					{
						"color": "#5a8c5d",
						"opacity": 1,
						"zoom": 0
					},
					{
						"color": "#5a8c5d",
						"opacity": 1,
						"zoom": 1
					},
					{
						"color": "#5a8c5d",
						"opacity": 1,
						"zoom": 2
					},
					{
						"color": "#5a8c5d",
						"opacity": 1,
						"zoom": 3
					},
					{
						"color": "#507c50",
						"opacity": 0.5,
						"zoom": 4
					},
					{
						"color": "#507c50",
						"opacity": 0.5,
						"zoom": 5
					},
					{
						"color": "#507c50",
						"opacity": 0.5,
						"zoom": 6
					},
					{
						"color": "#507c50",
						"opacity": 0.5,
						"zoom": 7
					},
					{
						"color": "#507c50",
						"opacity": 0.5,
						"zoom": 8
					},
					{
						"color": "#507c50",
						"opacity": 0.5,
						"zoom": 9
					},
					{
						"color": "#507c50",
						"opacity": 0.5,
						"zoom": 10
					},
					{
						"color": "#507c50",
						"opacity": 0.5,
						"zoom": 11
					},
					{
						"color": "#507c50",
						"opacity": 0.5,
						"zoom": 12
					},
					{
						"color": "#507c50",
						"opacity": 0.5,
						"zoom": 13
					},
					{
						"color": "#507c50",
						"opacity": 0.5,
						"zoom": 14
					},
					{
						"color": "#507c50",
						"opacity": 0.5,
						"zoom": 15
					},
					{
						"color": "#507c50",
						"opacity": 0.5,
						"zoom": 16
					},
					{
						"color": "#507c50",
						"opacity": 0.5,
						"zoom": 17
					},
					{
						"color": "#507c50",
						"opacity": 0.5,
						"zoom": 18
					},
					{
						"color": "#507c50",
						"opacity": 0.5,
						"zoom": 19
					},
					{
						"color": "#507c50",
						"opacity": 0.5,
						"zoom": 20
					},
					{
						"color": "#507c50",
						"opacity": 0.5,
						"zoom": 21
					}
				]
			},
			{
				"tags": "landscape",
				"elements": "label.text.outline",
				"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"opacity": 0.5,
						"zoom": 0
					},
					{
						"opacity": 0.5,
						"zoom": 1
					},
					{
						"opacity": 0.5,
						"zoom": 2
					},
					{
						"opacity": 0.5,
						"zoom": 3
					},
					{
						"opacity": 0,
						"zoom": 4
					},
					{
						"opacity": 0,
						"zoom": 5
					},
					{
						"opacity": 0,
						"zoom": 6
					},
					{
						"opacity": 0,
						"zoom": 7
					},
					{
						"opacity": 0,
						"zoom": 8
					},
					{
						"opacity": 0,
						"zoom": 9
					},
					{
						"opacity": 0,
						"zoom": 10
					},
					{
						"opacity": 0,
						"zoom": 11
					},
					{
						"opacity": 0,
						"zoom": 12
					},
					{
						"opacity": 0,
						"zoom": 13
					},
					{
						"opacity": 0,
						"zoom": 14
					},
					{
						"opacity": 0,
						"zoom": 15
					},
					{
						"opacity": 0,
						"zoom": 16
					},
					{
						"opacity": 0,
						"zoom": 17
					},
					{
						"opacity": 0,
						"zoom": 18
					},
					{
						"opacity": 0,
						"zoom": 19
					},
					{
						"opacity": 0,
						"zoom": 20
					},
					{
						"opacity": 0,
						"zoom": 21
					}
				]
			},
			{
				"tags": "water",
				"elements": "label.text.fill",
				"stylers": [
					{
						"color": "#4e7950"
					},
					{
						"opacity": 0.8
					}
				]
			},
			{
				"tags": "water",
				"elements": "label.text.outline",
				"types": "polyline",
				"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"opacity": 0.2
					}
				]
			},
			{
				"tags": {
					"any": "road_1",
					"none": "is_tunnel"
				},
				"elements": "geometry.fill",
				"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"scale": 0,
						"zoom": 0
					},
					{
						"scale": 0,
						"zoom": 1
					},
					{
						"scale": 0,
						"zoom": 2
					},
					{
						"scale": 0,
						"zoom": 3
					},
					{
						"scale": 0,
						"zoom": 4
					},
					{
						"scale": 0,
						"zoom": 5
					},
					{
						"scale": 2.97,
						"zoom": 6
					},
					{
						"scale": 3.19,
						"zoom": 7
					},
					{
						"scale": 3.53,
						"zoom": 8
					},
					{
						"scale": 4,
						"zoom": 9
					},
					{
						"scale": 3.61,
						"zoom": 10
					},
					{
						"scale": 3.06,
						"zoom": 11
					},
					{
						"scale": 2.64,
						"zoom": 12
					},
					{
						"scale": 2.27,
						"zoom": 13
					},
					{
						"scale": 2.03,
						"zoom": 14
					},
					{
						"scale": 1.9,
						"zoom": 15
					},
					{
						"scale": 1.86,
						"zoom": 16
					},
					{
						"scale": 1.48,
						"zoom": 17
					},
					{
						"scale": 1.21,
						"zoom": 18
					},
					{
						"scale": 1.04,
						"zoom": 19
					},
					{
						"scale": 0.94,
						"zoom": 20
					},
					{
						"scale": 0.9,
						"zoom": 21
					}
				]
			},
			{
				"tags": {
					"any": "road_1"
				},
				"elements": "geometry.outline",
				"stylers": [
					{
						"color": "#00000000",
						"scale": 1.4,
						"zoom": 0
					},
					{
						"color": "#00000000",
						"scale": 1.4,
						"zoom": 1
					},
					{
						"color": "#00000000",
						"scale": 1.4,
						"zoom": 2
					},
					{
						"color": "#00000000",
						"scale": 1.4,
						"zoom": 3
					},
					{
						"color": "#00000000",
						"scale": 1.4,
						"zoom": 4
					},
					{
						"color": "#00000000",
						"scale": 1.4,
						"zoom": 5
					},
					{
						"color": "#00000000",
						"scale": 3.05,
						"zoom": 6
					},
					{
						"color": "#00000000",
						"scale": 3.05,
						"zoom": 7
					},
					{
						"color": "#e0ebe0",
						"scale": 3.15,
						"zoom": 8
					},
					{
						"color": "#e6efe6",
						"scale": 3.37,
						"zoom": 9
					},
					{
						"color": "#e6efe6",
						"scale": 3.36,
						"zoom": 10
					},
					{
						"color": "#e6efe6",
						"scale": 3.17,
						"zoom": 11
					},
					{
						"color": "#e6efe6",
						"scale": 3,
						"zoom": 12
					},
					{
						"color": "#e6efe6",
						"scale": 2.8,
						"zoom": 13
					},
					{
						"color": "#ecf3ec",
						"scale": 2.66,
						"zoom": 14
					},
					{
						"color": "#ecf3ec",
						"scale": 2.61,
						"zoom": 15
					},
					{
						"color": "#eef4ee",
						"scale": 2.64,
						"zoom": 16
					},
					{
						"color": "#f1f6f1",
						"scale": 2.14,
						"zoom": 17
					},
					{
						"color": "#f3f7f3",
						"scale": 1.79,
						"zoom": 18
					},
					{
						"color": "#f6f9f6",
						"scale": 1.55,
						"zoom": 19
					},
					{
						"color": "#f7faf7",
						"scale": 1.41,
						"zoom": 20
					},
					{
						"color": "#f9fbf9",
						"scale": 1.35,
						"zoom": 21
					}
				]
			},
			{
				"tags": {
					"any": "road_2",
					"none": "is_tunnel"
				},
				"elements": "geometry.fill",
				"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"scale": 0,
						"zoom": 0
					},
					{
						"scale": 0,
						"zoom": 1
					},
					{
						"scale": 0,
						"zoom": 2
					},
					{
						"scale": 0,
						"zoom": 3
					},
					{
						"scale": 0,
						"zoom": 4
					},
					{
						"scale": 0,
						"zoom": 5
					},
					{
						"scale": 2.97,
						"zoom": 6
					},
					{
						"scale": 3.19,
						"zoom": 7
					},
					{
						"scale": 3.53,
						"zoom": 8
					},
					{
						"scale": 4,
						"zoom": 9
					},
					{
						"scale": 3.61,
						"zoom": 10
					},
					{
						"scale": 3.06,
						"zoom": 11
					},
					{
						"scale": 2.64,
						"zoom": 12
					},
					{
						"scale": 2.27,
						"zoom": 13
					},
					{
						"scale": 2.03,
						"zoom": 14
					},
					{
						"scale": 1.9,
						"zoom": 15
					},
					{
						"scale": 1.86,
						"zoom": 16
					},
					{
						"scale": 1.48,
						"zoom": 17
					},
					{
						"scale": 1.21,
						"zoom": 18
					},
					{
						"scale": 1.04,
						"zoom": 19
					},
					{
						"scale": 0.94,
						"zoom": 20
					},
					{
						"scale": 0.9,
						"zoom": 21
					}
				]
			},
			{
				"tags": {
					"any": "road_2"
				},
				"elements": "geometry.outline",
				"stylers": [
					{
						"color": "#00000000",
						"scale": 1.4,
						"zoom": 0
					},
					{
						"color": "#00000000",
						"scale": 1.4,
						"zoom": 1
					},
					{
						"color": "#00000000",
						"scale": 1.4,
						"zoom": 2
					},
					{
						"color": "#00000000",
						"scale": 1.4,
						"zoom": 3
					},
					{
						"color": "#00000000",
						"scale": 1.4,
						"zoom": 4
					},
					{
						"color": "#00000000",
						"scale": 1.4,
						"zoom": 5
					},
					{
						"color": "#00000000",
						"scale": 3.05,
						"zoom": 6
					},
					{
						"color": "#00000000",
						"scale": 3.05,
						"zoom": 7
					},
					{
						"color": "#e0ebe0",
						"scale": 3.15,
						"zoom": 8
					},
					{
						"color": "#e6efe6",
						"scale": 3.37,
						"zoom": 9
					},
					{
						"color": "#e6efe6",
						"scale": 3.36,
						"zoom": 10
					},
					{
						"color": "#e6efe6",
						"scale": 3.17,
						"zoom": 11
					},
					{
						"color": "#e6efe6",
						"scale": 3,
						"zoom": 12
					},
					{
						"color": "#e6efe6",
						"scale": 2.8,
						"zoom": 13
					},
					{
						"color": "#ecf3ec",
						"scale": 2.66,
						"zoom": 14
					},
					{
						"color": "#ecf3ec",
						"scale": 2.61,
						"zoom": 15
					},
					{
						"color": "#eef4ee",
						"scale": 2.64,
						"zoom": 16
					},
					{
						"color": "#f1f6f1",
						"scale": 2.14,
						"zoom": 17
					},
					{
						"color": "#f3f7f3",
						"scale": 1.79,
						"zoom": 18
					},
					{
						"color": "#f6f9f6",
						"scale": 1.55,
						"zoom": 19
					},
					{
						"color": "#f7faf7",
						"scale": 1.41,
						"zoom": 20
					},
					{
						"color": "#f9fbf9",
						"scale": 1.35,
						"zoom": 21
					}
				]
			},
			{
				"tags": {
					"any": "road_3",
					"none": "is_tunnel"
				},
				"elements": "geometry.fill",
				"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"scale": 0,
						"zoom": 0
					},
					{
						"scale": 0,
						"zoom": 1
					},
					{
						"scale": 0,
						"zoom": 2
					},
					{
						"scale": 0,
						"zoom": 3
					},
					{
						"scale": 0,
						"zoom": 4
					},
					{
						"scale": 0,
						"zoom": 5
					},
					{
						"scale": 0,
						"zoom": 6
					},
					{
						"scale": 0,
						"zoom": 7
					},
					{
						"scale": 0,
						"zoom": 8
					},
					{
						"scale": 2.51,
						"zoom": 9
					},
					{
						"scale": 2.62,
						"zoom": 10
					},
					{
						"scale": 1.68,
						"zoom": 11
					},
					{
						"scale": 1.67,
						"zoom": 12
					},
					{
						"scale": 1.38,
						"zoom": 13
					},
					{
						"scale": 1.19,
						"zoom": 14
					},
					{
						"scale": 1.08,
						"zoom": 15
					},
					{
						"scale": 1.04,
						"zoom": 16
					},
					{
						"scale": 0.91,
						"zoom": 17
					},
					{
						"scale": 0.84,
						"zoom": 18
					},
					{
						"scale": 0.82,
						"zoom": 19
					},
					{
						"scale": 0.84,
						"zoom": 20
					},
					{
						"scale": 0.9,
						"zoom": 21
					}
				]
			},
			{
				"tags": {
					"any": "road_3"
				},
				"elements": "geometry.outline",
				"stylers": [
					{
						"color": "#ffffff",
						"scale": 1.6,
						"zoom": 0
					},
					{
						"color": "#ffffff",
						"scale": 1.6,
						"zoom": 1
					},
					{
						"color": "#ffffff",
						"scale": 1.6,
						"zoom": 2
					},
					{
						"color": "#ffffff",
						"scale": 1.6,
						"zoom": 3
					},
					{
						"color": "#ffffff",
						"scale": 1.6,
						"zoom": 4
					},
					{
						"color": "#ffffff",
						"scale": 1.6,
						"zoom": 5
					},
					{
						"color": "#ffffff",
						"scale": 1.6,
						"zoom": 6
					},
					{
						"color": "#ffffff",
						"scale": 1.6,
						"zoom": 7
					},
					{
						"color": "#ffffff",
						"scale": 1.29,
						"zoom": 8
					},
					{
						"color": "#e6efe6",
						"scale": 4.21,
						"zoom": 9
					},
					{
						"color": "#e6efe6",
						"scale": 2.74,
						"zoom": 10
					},
					{
						"color": "#e6efe6",
						"scale": 2.04,
						"zoom": 11
					},
					{
						"color": "#e6efe6",
						"scale": 2.13,
						"zoom": 12
					},
					{
						"color": "#e6efe6",
						"scale": 1.88,
						"zoom": 13
					},
					{
						"color": "#ecf3ec",
						"scale": 1.7,
						"zoom": 14
					},
					{
						"color": "#ecf3ec",
						"scale": 1.59,
						"zoom": 15
					},
					{
						"color": "#eef4ee",
						"scale": 1.55,
						"zoom": 16
					},
					{
						"color": "#f1f6f1",
						"scale": 1.37,
						"zoom": 17
					},
					{
						"color": "#f3f7f3",
						"scale": 1.27,
						"zoom": 18
					},
					{
						"color": "#f6f9f6",
						"scale": 1.23,
						"zoom": 19
					},
					{
						"color": "#f7faf7",
						"scale": 1.26,
						"zoom": 20
					},
					{
						"color": "#f9fbf9",
						"scale": 1.35,
						"zoom": 21
					}
				]
			},
			{
				"tags": {
					"any": "road_4",
					"none": "is_tunnel"
				},
				"elements": "geometry.fill",
				"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"scale": 0,
						"zoom": 0
					},
					{
						"scale": 0,
						"zoom": 1
					},
					{
						"scale": 0,
						"zoom": 2
					},
					{
						"scale": 0,
						"zoom": 3
					},
					{
						"scale": 0,
						"zoom": 4
					},
					{
						"scale": 0,
						"zoom": 5
					},
					{
						"scale": 0,
						"zoom": 6
					},
					{
						"scale": 0,
						"zoom": 7
					},
					{
						"scale": 0,
						"zoom": 8
					},
					{
						"scale": 0,
						"zoom": 9
					},
					{
						"scale": 1.69,
						"zoom": 10
					},
					{
						"scale": 1.26,
						"zoom": 11
					},
					{
						"scale": 1.41,
						"zoom": 12
					},
					{
						"scale": 1.19,
						"zoom": 13
					},
					{
						"scale": 1.04,
						"zoom": 14
					},
					{
						"scale": 0.97,
						"zoom": 15
					},
					{
						"scale": 1.15,
						"zoom": 16
					},
					{
						"scale": 0.99,
						"zoom": 17
					},
					{
						"scale": 0.89,
						"zoom": 18
					},
					{
						"scale": 0.85,
						"zoom": 19
					},
					{
						"scale": 0.85,
						"zoom": 20
					},
					{
						"scale": 0.9,
						"zoom": 21
					}
				]
			},
			{
				"tags": {
					"any": "road_4"
				},
				"elements": "geometry.outline",
				"stylers": [
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 0
					},
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 1
					},
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 2
					},
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 3
					},
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 4
					},
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 5
					},
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 6
					},
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 7
					},
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 8
					},
					{
						"color": "#ffffff",
						"scale": 1.12,
						"zoom": 9
					},
					{
						"color": "#e6efe6",
						"scale": 1.9,
						"zoom": 10
					},
					{
						"color": "#e6efe6",
						"scale": 1.62,
						"zoom": 11
					},
					{
						"color": "#e6efe6",
						"scale": 1.83,
						"zoom": 12
					},
					{
						"color": "#e6efe6",
						"scale": 1.64,
						"zoom": 13
					},
					{
						"color": "#ecf3ec",
						"scale": 1.51,
						"zoom": 14
					},
					{
						"color": "#ecf3ec",
						"scale": 1.44,
						"zoom": 15
					},
					{
						"color": "#eef4ee",
						"scale": 1.69,
						"zoom": 16
					},
					{
						"color": "#f1f6f1",
						"scale": 1.47,
						"zoom": 17
					},
					{
						"color": "#f3f7f3",
						"scale": 1.34,
						"zoom": 18
					},
					{
						"color": "#f6f9f6",
						"scale": 1.28,
						"zoom": 19
					},
					{
						"color": "#f7faf7",
						"scale": 1.28,
						"zoom": 20
					},
					{
						"color": "#f9fbf9",
						"scale": 1.34,
						"zoom": 21
					}
				]
			},
			{
				"tags": {
					"any": "road_5",
					"none": "is_tunnel"
				},
				"elements": "geometry.fill",
				"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"scale": 0,
						"zoom": 0
					},
					{
						"scale": 0,
						"zoom": 1
					},
					{
						"scale": 0,
						"zoom": 2
					},
					{
						"scale": 0,
						"zoom": 3
					},
					{
						"scale": 0,
						"zoom": 4
					},
					{
						"scale": 0,
						"zoom": 5
					},
					{
						"scale": 0,
						"zoom": 6
					},
					{
						"scale": 0,
						"zoom": 7
					},
					{
						"scale": 0,
						"zoom": 8
					},
					{
						"scale": 0,
						"zoom": 9
					},
					{
						"scale": 0,
						"zoom": 10
					},
					{
						"scale": 0,
						"zoom": 11
					},
					{
						"scale": 1.25,
						"zoom": 12
					},
					{
						"scale": 0.95,
						"zoom": 13
					},
					{
						"scale": 0.81,
						"zoom": 14
					},
					{
						"scale": 0.95,
						"zoom": 15
					},
					{
						"scale": 1.1,
						"zoom": 16
					},
					{
						"scale": 0.93,
						"zoom": 17
					},
					{
						"scale": 0.85,
						"zoom": 18
					},
					{
						"scale": 0.82,
						"zoom": 19
					},
					{
						"scale": 0.84,
						"zoom": 20
					},
					{
						"scale": 0.9,
						"zoom": 21
					}
				]
			},
			{
				"tags": {
					"any": "road_5"
				},
				"elements": "geometry.outline",
				"stylers": [
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 0
					},
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 1
					},
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 2
					},
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 3
					},
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 4
					},
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 5
					},
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 6
					},
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 7
					},
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 8
					},
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 9
					},
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 10
					},
					{
						"color": "#ffffff",
						"scale": 0.62,
						"zoom": 11
					},
					{
						"color": "#e6efe6",
						"scale": 1.61,
						"zoom": 12
					},
					{
						"color": "#e6efe6",
						"scale": 1.36,
						"zoom": 13
					},
					{
						"color": "#ecf3ec",
						"scale": 1.22,
						"zoom": 14
					},
					{
						"color": "#ecf3ec",
						"scale": 1.41,
						"zoom": 15
					},
					{
						"color": "#eef4ee",
						"scale": 1.63,
						"zoom": 16
					},
					{
						"color": "#f1f6f1",
						"scale": 1.4,
						"zoom": 17
					},
					{
						"color": "#f3f7f3",
						"scale": 1.27,
						"zoom": 18
					},
					{
						"color": "#f6f9f6",
						"scale": 1.23,
						"zoom": 19
					},
					{
						"color": "#f7faf7",
						"scale": 1.25,
						"zoom": 20
					},
					{
						"color": "#f9fbf9",
						"scale": 1.34,
						"zoom": 21
					}
				]
			},
			{
				"tags": {
					"any": "road_6",
					"none": "is_tunnel"
				},
				"elements": "geometry.fill",
				"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"scale": 0,
						"zoom": 0
					},
					{
						"scale": 0,
						"zoom": 1
					},
					{
						"scale": 0,
						"zoom": 2
					},
					{
						"scale": 0,
						"zoom": 3
					},
					{
						"scale": 0,
						"zoom": 4
					},
					{
						"scale": 0,
						"zoom": 5
					},
					{
						"scale": 0,
						"zoom": 6
					},
					{
						"scale": 0,
						"zoom": 7
					},
					{
						"scale": 0,
						"zoom": 8
					},
					{
						"scale": 0,
						"zoom": 9
					},
					{
						"scale": 0,
						"zoom": 10
					},
					{
						"scale": 0,
						"zoom": 11
					},
					{
						"scale": 0,
						"zoom": 12
					},
					{
						"scale": 2.25,
						"zoom": 13
					},
					{
						"scale": 1.27,
						"zoom": 14
					},
					{
						"scale": 1.25,
						"zoom": 15
					},
					{
						"scale": 1.31,
						"zoom": 16
					},
					{
						"scale": 1.04,
						"zoom": 17
					},
					{
						"scale": 0.9,
						"zoom": 18
					},
					{
						"scale": 0.85,
						"zoom": 19
					},
					{
						"scale": 0.85,
						"zoom": 20
					},
					{
						"scale": 0.9,
						"zoom": 21
					}
				]
			},
			{
				"tags": {
					"any": "road_6"
				},
				"elements": "geometry.outline",
				"stylers": [
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 0
					},
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 1
					},
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 2
					},
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 3
					},
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 4
					},
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 5
					},
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 6
					},
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 7
					},
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 8
					},
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 9
					},
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 10
					},
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 11
					},
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 12
					},
					{
						"color": "#e6efe6",
						"scale": 2.31,
						"zoom": 13
					},
					{
						"color": "#ecf3ec",
						"scale": 1.7,
						"zoom": 14
					},
					{
						"color": "#ecf3ec",
						"scale": 1.76,
						"zoom": 15
					},
					{
						"color": "#eef4ee",
						"scale": 1.89,
						"zoom": 16
					},
					{
						"color": "#f1f6f1",
						"scale": 1.55,
						"zoom": 17
					},
					{
						"color": "#f3f7f3",
						"scale": 1.36,
						"zoom": 18
					},
					{
						"color": "#f6f9f6",
						"scale": 1.27,
						"zoom": 19
					},
					{
						"color": "#f7faf7",
						"scale": 1.27,
						"zoom": 20
					},
					{
						"color": "#f9fbf9",
						"scale": 1.34,
						"zoom": 21
					}
				]
			},
			{
				"tags": {
					"any": "road_7",
					"none": "is_tunnel"
				},
				"elements": "geometry.fill",
				"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"scale": 0,
						"zoom": 0
					},
					{
						"scale": 0,
						"zoom": 1
					},
					{
						"scale": 0,
						"zoom": 2
					},
					{
						"scale": 0,
						"zoom": 3
					},
					{
						"scale": 0,
						"zoom": 4
					},
					{
						"scale": 0,
						"zoom": 5
					},
					{
						"scale": 0,
						"zoom": 6
					},
					{
						"scale": 0,
						"zoom": 7
					},
					{
						"scale": 0,
						"zoom": 8
					},
					{
						"scale": 0,
						"zoom": 9
					},
					{
						"scale": 0,
						"zoom": 10
					},
					{
						"scale": 0,
						"zoom": 11
					},
					{
						"scale": 0,
						"zoom": 12
					},
					{
						"scale": 0,
						"zoom": 13
					},
					{
						"scale": 0.9,
						"zoom": 14
					},
					{
						"scale": 0.78,
						"zoom": 15
					},
					{
						"scale": 0.88,
						"zoom": 16
					},
					{
						"scale": 0.8,
						"zoom": 17
					},
					{
						"scale": 0.78,
						"zoom": 18
					},
					{
						"scale": 0.79,
						"zoom": 19
					},
					{
						"scale": 0.83,
						"zoom": 20
					},
					{
						"scale": 0.9,
						"zoom": 21
					}
				]
			},
			{
				"tags": {
					"any": "road_7"
				},
				"elements": "geometry.outline",
				"stylers": [
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 0
					},
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 1
					},
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 2
					},
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 3
					},
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 4
					},
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 5
					},
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 6
					},
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 7
					},
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 8
					},
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 9
					},
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 10
					},
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 11
					},
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 12
					},
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 13
					},
					{
						"color": "#ecf3ec",
						"scale": 1.31,
						"zoom": 14
					},
					{
						"color": "#ecf3ec",
						"scale": 1.19,
						"zoom": 15
					},
					{
						"color": "#eef4ee",
						"scale": 1.31,
						"zoom": 16
					},
					{
						"color": "#f1f6f1",
						"scale": 1.21,
						"zoom": 17
					},
					{
						"color": "#f3f7f3",
						"scale": 1.17,
						"zoom": 18
					},
					{
						"color": "#f6f9f6",
						"scale": 1.18,
						"zoom": 19
					},
					{
						"color": "#f7faf7",
						"scale": 1.23,
						"zoom": 20
					},
					{
						"color": "#f9fbf9",
						"scale": 1.33,
						"zoom": 21
					}
				]
			},
			{
				"tags": {
					"any": "road_minor",
					"none": "is_tunnel"
				},
				"elements": "geometry.fill",
				"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"scale": 0,
						"zoom": 0
					},
					{
						"scale": 0,
						"zoom": 1
					},
					{
						"scale": 0,
						"zoom": 2
					},
					{
						"scale": 0,
						"zoom": 3
					},
					{
						"scale": 0,
						"zoom": 4
					},
					{
						"scale": 0,
						"zoom": 5
					},
					{
						"scale": 0,
						"zoom": 6
					},
					{
						"scale": 0,
						"zoom": 7
					},
					{
						"scale": 0,
						"zoom": 8
					},
					{
						"scale": 0,
						"zoom": 9
					},
					{
						"scale": 0,
						"zoom": 10
					},
					{
						"scale": 0,
						"zoom": 11
					},
					{
						"scale": 0,
						"zoom": 12
					},
					{
						"scale": 0,
						"zoom": 13
					},
					{
						"scale": 0,
						"zoom": 14
					},
					{
						"scale": 0,
						"zoom": 15
					},
					{
						"scale": 0.9,
						"zoom": 16
					},
					{
						"scale": 0.9,
						"zoom": 17
					},
					{
						"scale": 0.9,
						"zoom": 18
					},
					{
						"scale": 0.9,
						"zoom": 19
					},
					{
						"scale": 0.9,
						"zoom": 20
					},
					{
						"scale": 0.9,
						"zoom": 21
					}
				]
			},
			{
				"tags": {
					"any": "road_minor"
				},
				"elements": "geometry.outline",
				"stylers": [
					{
						"color": "#ffffff",
						"scale": 0.4,
						"zoom": 0
					},
					{
						"color": "#ffffff",
						"scale": 0.4,
						"zoom": 1
					},
					{
						"color": "#ffffff",
						"scale": 0.4,
						"zoom": 2
					},
					{
						"color": "#ffffff",
						"scale": 0.4,
						"zoom": 3
					},
					{
						"color": "#ffffff",
						"scale": 0.4,
						"zoom": 4
					},
					{
						"color": "#ffffff",
						"scale": 0.4,
						"zoom": 5
					},
					{
						"color": "#ffffff",
						"scale": 0.4,
						"zoom": 6
					},
					{
						"color": "#ffffff",
						"scale": 0.4,
						"zoom": 7
					},
					{
						"color": "#ffffff",
						"scale": 0.4,
						"zoom": 8
					},
					{
						"color": "#ffffff",
						"scale": 0.4,
						"zoom": 9
					},
					{
						"color": "#ffffff",
						"scale": 0.4,
						"zoom": 10
					},
					{
						"color": "#ffffff",
						"scale": 0.4,
						"zoom": 11
					},
					{
						"color": "#ffffff",
						"scale": 0.4,
						"zoom": 12
					},
					{
						"color": "#ffffff",
						"scale": 0.4,
						"zoom": 13
					},
					{
						"color": "#ecf3ec",
						"scale": 0.4,
						"zoom": 14
					},
					{
						"color": "#ecf3ec",
						"scale": 0.4,
						"zoom": 15
					},
					{
						"color": "#eef4ee",
						"scale": 1.4,
						"zoom": 16
					},
					{
						"color": "#f1f6f1",
						"scale": 1.27,
						"zoom": 17
					},
					{
						"color": "#f3f7f3",
						"scale": 1.27,
						"zoom": 18
					},
					{
						"color": "#f6f9f6",
						"scale": 1.29,
						"zoom": 19
					},
					{
						"color": "#f7faf7",
						"scale": 1.31,
						"zoom": 20
					},
					{
						"color": "#f9fbf9",
						"scale": 1.32,
						"zoom": 21
					}
				]
			},
			{
				"tags": {
					"any": "road_unclassified",
					"none": "is_tunnel"
				},
				"elements": "geometry.fill",
				"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"scale": 0,
						"zoom": 0
					},
					{
						"scale": 0,
						"zoom": 1
					},
					{
						"scale": 0,
						"zoom": 2
					},
					{
						"scale": 0,
						"zoom": 3
					},
					{
						"scale": 0,
						"zoom": 4
					},
					{
						"scale": 0,
						"zoom": 5
					},
					{
						"scale": 0,
						"zoom": 6
					},
					{
						"scale": 0,
						"zoom": 7
					},
					{
						"scale": 0,
						"zoom": 8
					},
					{
						"scale": 0,
						"zoom": 9
					},
					{
						"scale": 0,
						"zoom": 10
					},
					{
						"scale": 0,
						"zoom": 11
					},
					{
						"scale": 0,
						"zoom": 12
					},
					{
						"scale": 0,
						"zoom": 13
					},
					{
						"scale": 0,
						"zoom": 14
					},
					{
						"scale": 0,
						"zoom": 15
					},
					{
						"scale": 0.9,
						"zoom": 16
					},
					{
						"scale": 0.9,
						"zoom": 17
					},
					{
						"scale": 0.9,
						"zoom": 18
					},
					{
						"scale": 0.9,
						"zoom": 19
					},
					{
						"scale": 0.9,
						"zoom": 20
					},
					{
						"scale": 0.9,
						"zoom": 21
					}
				]
			},
			{
				"tags": {
					"any": "road_unclassified"
				},
				"elements": "geometry.outline",
				"stylers": [
					{
						"color": "#ffffff",
						"scale": 0.4,
						"zoom": 0
					},
					{
						"color": "#ffffff",
						"scale": 0.4,
						"zoom": 1
					},
					{
						"color": "#ffffff",
						"scale": 0.4,
						"zoom": 2
					},
					{
						"color": "#ffffff",
						"scale": 0.4,
						"zoom": 3
					},
					{
						"color": "#ffffff",
						"scale": 0.4,
						"zoom": 4
					},
					{
						"color": "#ffffff",
						"scale": 0.4,
						"zoom": 5
					},
					{
						"color": "#ffffff",
						"scale": 0.4,
						"zoom": 6
					},
					{
						"color": "#ffffff",
						"scale": 0.4,
						"zoom": 7
					},
					{
						"color": "#ffffff",
						"scale": 0.4,
						"zoom": 8
					},
					{
						"color": "#ffffff",
						"scale": 0.4,
						"zoom": 9
					},
					{
						"color": "#ffffff",
						"scale": 0.4,
						"zoom": 10
					},
					{
						"color": "#ffffff",
						"scale": 0.4,
						"zoom": 11
					},
					{
						"color": "#ffffff",
						"scale": 0.4,
						"zoom": 12
					},
					{
						"color": "#ffffff",
						"scale": 0.4,
						"zoom": 13
					},
					{
						"color": "#ecf3ec",
						"scale": 0.4,
						"zoom": 14
					},
					{
						"color": "#ecf3ec",
						"scale": 0.4,
						"zoom": 15
					},
					{
						"color": "#eef4ee",
						"scale": 1.4,
						"zoom": 16
					},
					{
						"color": "#f1f6f1",
						"scale": 1.27,
						"zoom": 17
					},
					{
						"color": "#f3f7f3",
						"scale": 1.27,
						"zoom": 18
					},
					{
						"color": "#f6f9f6",
						"scale": 1.29,
						"zoom": 19
					},
					{
						"color": "#f7faf7",
						"scale": 1.31,
						"zoom": 20
					},
					{
						"color": "#f9fbf9",
						"scale": 1.32,
						"zoom": 21
					}
				]
			},
			{
				"tags": {
					"all": "is_tunnel",
					"none": "path"
				},
				"elements": "geometry.fill",
				"stylers": [
					{
						"color": "#e0ebe0",
						"zoom": 0
					},
					{
						"color": "#e0ebe0",
						"zoom": 1
					},
					{
						"color": "#e0ebe0",
						"zoom": 2
					},
					{
						"color": "#e0ebe0",
						"zoom": 3
					},
					{
						"color": "#e0ebe0",
						"zoom": 4
					},
					{
						"color": "#e0ebe0",
						"zoom": 5
					},
					{
						"color": "#e0ebe0",
						"zoom": 6
					},
					{
						"color": "#e0ebe0",
						"zoom": 7
					},
					{
						"color": "#e0ebe0",
						"zoom": 8
					},
					{
						"color": "#e0ebe0",
						"zoom": 9
					},
					{
						"color": "#e0ebe0",
						"zoom": 10
					},
					{
						"color": "#e0ebe0",
						"zoom": 11
					},
					{
						"color": "#e0ebe0",
						"zoom": 12
					},
					{
						"color": "#e0ebe0",
						"zoom": 13
					},
					{
						"color": "#e6efe6",
						"zoom": 14
					},
					{
						"color": "#ecf3ec",
						"zoom": 15
					},
					{
						"color": "#edf4ed",
						"zoom": 16
					},
					{
						"color": "#eef4ee",
						"zoom": 17
					},
					{
						"color": "#eff5ef",
						"zoom": 18
					},
					{
						"color": "#f1f6f1",
						"zoom": 19
					},
					{
						"color": "#f2f6f2",
						"zoom": 20
					},
					{
						"color": "#f3f7f3",
						"zoom": 21
					}
				]
			},
			{
				"tags": {
					"all": "path",
					"none": "is_tunnel"
				},
				"elements": "geometry.fill",
				"stylers": [
					{
						"color": "#89b38c"
					}
				]
			},
			{
				"tags": {
					"all": "path",
					"none": "is_tunnel"
				},
				"elements": "geometry.outline",
				"stylers": [
					{
						"opacity": 0.7
					},
					{
						"color": "#e6efe6",
						"zoom": 0
					},
					{
						"color": "#e6efe6",
						"zoom": 1
					},
					{
						"color": "#e6efe6",
						"zoom": 2
					},
					{
						"color": "#e6efe6",
						"zoom": 3
					},
					{
						"color": "#e6efe6",
						"zoom": 4
					},
					{
						"color": "#e6efe6",
						"zoom": 5
					},
					{
						"color": "#e6efe6",
						"zoom": 6
					},
					{
						"color": "#e6efe6",
						"zoom": 7
					},
					{
						"color": "#e6efe6",
						"zoom": 8
					},
					{
						"color": "#e6efe6",
						"zoom": 9
					},
					{
						"color": "#e6efe6",
						"zoom": 10
					},
					{
						"color": "#e6efe6",
						"zoom": 11
					},
					{
						"color": "#e6efe6",
						"zoom": 12
					},
					{
						"color": "#e6efe6",
						"zoom": 13
					},
					{
						"color": "#ecf3ec",
						"zoom": 14
					},
					{
						"color": "#f3f7f3",
						"zoom": 15
					},
					{
						"color": "#f4f8f4",
						"zoom": 16
					},
					{
						"color": "#f5f8f5",
						"zoom": 17
					},
					{
						"color": "#f6f9f6",
						"zoom": 18
					},
					{
						"color": "#f7faf7",
						"zoom": 19
					},
					{
						"color": "#f8faf8",
						"zoom": 20
					},
					{
						"color": "#f9fbf9",
						"zoom": 21
					}
				]
			},
			{
				"tags": "road_construction",
				"elements": "geometry.fill",
				"stylers": [
					{
						"color": "#ffffff"
					}
				]
			},
			{
				"tags": "road_construction",
				"elements": "geometry.outline",
				"stylers": [
					{
						"color": "#a8c7aa",
						"zoom": 0
					},
					{
						"color": "#a8c7aa",
						"zoom": 1
					},
					{
						"color": "#a8c7aa",
						"zoom": 2
					},
					{
						"color": "#a8c7aa",
						"zoom": 3
					},
					{
						"color": "#a8c7aa",
						"zoom": 4
					},
					{
						"color": "#a8c7aa",
						"zoom": 5
					},
					{
						"color": "#a8c7aa",
						"zoom": 6
					},
					{
						"color": "#a8c7aa",
						"zoom": 7
					},
					{
						"color": "#a8c7aa",
						"zoom": 8
					},
					{
						"color": "#a8c7aa",
						"zoom": 9
					},
					{
						"color": "#a8c7aa",
						"zoom": 10
					},
					{
						"color": "#a8c7aa",
						"zoom": 11
					},
					{
						"color": "#a8c7aa",
						"zoom": 12
					},
					{
						"color": "#a8c7aa",
						"zoom": 13
					},
					{
						"color": "#89b38c",
						"zoom": 14
					},
					{
						"color": "#a8c7aa",
						"zoom": 15
					},
					{
						"color": "#adcaaf",
						"zoom": 16
					},
					{
						"color": "#b2ceb4",
						"zoom": 17
					},
					{
						"color": "#b7d1b9",
						"zoom": 18
					},
					{
						"color": "#bdd4be",
						"zoom": 19
					},
					{
						"color": "#c2d8c3",
						"zoom": 20
					},
					{
						"color": "#c7dbc8",
						"zoom": 21
					}
				]
			},
			{
				"tags": {
					"any": "ferry"
				},
				"stylers": [
					{
						"color": "#7fad82"
					}
				]
			},
			{
				"tags": "transit_location",
				"elements": "label.icon",
				"stylers": [
					{
						"hue": "#d3e3d4"
					},
					{
						"saturation": -0.78
					}
				]
			},
			{
				"tags": "transit_location",
				"elements": "label.text.fill",
				"stylers": [
					{
						"color": "#7ab87e"
					}
				]
			},
			{
				"tags": "transit_location",
				"elements": "label.text.outline",
				"stylers": [
					{
						"color": "#ffffff"
					}
				]
			},
			{
				"tags": "transit_schema",
				"elements": "geometry.fill",
				"stylers": [
					{
						"color": "#7ab87e"
					},
					{
						"scale": 0.7
					},
					{
						"opacity": 0.6,
						"zoom": 0
					},
					{
						"opacity": 0.6,
						"zoom": 1
					},
					{
						"opacity": 0.6,
						"zoom": 2
					},
					{
						"opacity": 0.6,
						"zoom": 3
					},
					{
						"opacity": 0.6,
						"zoom": 4
					},
					{
						"opacity": 0.6,
						"zoom": 5
					},
					{
						"opacity": 0.6,
						"zoom": 6
					},
					{
						"opacity": 0.6,
						"zoom": 7
					},
					{
						"opacity": 0.6,
						"zoom": 8
					},
					{
						"opacity": 0.6,
						"zoom": 9
					},
					{
						"opacity": 0.6,
						"zoom": 10
					},
					{
						"opacity": 0.6,
						"zoom": 11
					},
					{
						"opacity": 0.6,
						"zoom": 12
					},
					{
						"opacity": 0.6,
						"zoom": 13
					},
					{
						"opacity": 0.6,
						"zoom": 14
					},
					{
						"opacity": 0.5,
						"zoom": 15
					},
					{
						"opacity": 0.4,
						"zoom": 16
					},
					{
						"opacity": 0.4,
						"zoom": 17
					},
					{
						"opacity": 0.4,
						"zoom": 18
					},
					{
						"opacity": 0.4,
						"zoom": 19
					},
					{
						"opacity": 0.4,
						"zoom": 20
					},
					{
						"opacity": 0.4,
						"zoom": 21
					}
				]
			},
			{
				"tags": "transit_schema",
				"elements": "geometry.outline",
				"stylers": [
					{
						"opacity": 0
					}
				]
			},
			{
				"tags": "transit_line",
				"elements": "geometry.fill.pattern",
				"stylers": [
					{
						"color": "#a3c2a5"
					},
					{
						"opacity": 0,
						"zoom": 0
					},
					{
						"opacity": 0,
						"zoom": 1
					},
					{
						"opacity": 0,
						"zoom": 2
					},
					{
						"opacity": 0,
						"zoom": 3
					},
					{
						"opacity": 0,
						"zoom": 4
					},
					{
						"opacity": 0,
						"zoom": 5
					},
					{
						"opacity": 0,
						"zoom": 6
					},
					{
						"opacity": 0,
						"zoom": 7
					},
					{
						"opacity": 0,
						"zoom": 8
					},
					{
						"opacity": 0,
						"zoom": 9
					},
					{
						"opacity": 0,
						"zoom": 10
					},
					{
						"opacity": 0,
						"zoom": 11
					},
					{
						"opacity": 0,
						"zoom": 12
					},
					{
						"opacity": 1,
						"zoom": 13
					},
					{
						"opacity": 1,
						"zoom": 14
					},
					{
						"opacity": 1,
						"zoom": 15
					},
					{
						"opacity": 1,
						"zoom": 16
					},
					{
						"opacity": 1,
						"zoom": 17
					},
					{
						"opacity": 1,
						"zoom": 18
					},
					{
						"opacity": 1,
						"zoom": 19
					},
					{
						"opacity": 1,
						"zoom": 20
					},
					{
						"opacity": 1,
						"zoom": 21
					}
				]
			},
			{
				"tags": "transit_line",
				"elements": "geometry.fill",
				"stylers": [
					{
						"color": "#a3c2a5"
					},
					{
						"scale": 0.4
					},
					{
						"opacity": 0,
						"zoom": 0
					},
					{
						"opacity": 0,
						"zoom": 1
					},
					{
						"opacity": 0,
						"zoom": 2
					},
					{
						"opacity": 0,
						"zoom": 3
					},
					{
						"opacity": 0,
						"zoom": 4
					},
					{
						"opacity": 0,
						"zoom": 5
					},
					{
						"opacity": 0,
						"zoom": 6
					},
					{
						"opacity": 0,
						"zoom": 7
					},
					{
						"opacity": 0,
						"zoom": 8
					},
					{
						"opacity": 0,
						"zoom": 9
					},
					{
						"opacity": 0,
						"zoom": 10
					},
					{
						"opacity": 0,
						"zoom": 11
					},
					{
						"opacity": 0,
						"zoom": 12
					},
					{
						"opacity": 1,
						"zoom": 13
					},
					{
						"opacity": 1,
						"zoom": 14
					},
					{
						"opacity": 1,
						"zoom": 15
					},
					{
						"opacity": 1,
						"zoom": 16
					},
					{
						"opacity": 1,
						"zoom": 17
					},
					{
						"opacity": 1,
						"zoom": 18
					},
					{
						"opacity": 1,
						"zoom": 19
					},
					{
						"opacity": 1,
						"zoom": 20
					},
					{
						"opacity": 1,
						"zoom": 21
					}
				]
			},
			{
				"tags": "water",
				"elements": "geometry",
				"stylers": [
					{
						"color": "#9fc1a0",
						"zoom": 0
					},
					{
						"color": "#9fc1a0",
						"zoom": 1
					},
					{
						"color": "#9fc1a0",
						"zoom": 2
					},
					{
						"color": "#9fc1a0",
						"zoom": 3
					},
					{
						"color": "#9fc1a0",
						"zoom": 4
					},
					{
						"color": "#9fc1a0",
						"zoom": 5
					},
					{
						"color": "#9fc1a0",
						"zoom": 6
					},
					{
						"color": "#9fc1a0",
						"zoom": 7
					},
					{
						"color": "#a1c2a2",
						"zoom": 8
					},
					{
						"color": "#a3c4a4",
						"zoom": 9
					},
					{
						"color": "#a5c5a6",
						"zoom": 10
					},
					{
						"color": "#a6c6a7",
						"zoom": 11
					},
					{
						"color": "#a7c6a8",
						"zoom": 12
					},
					{
						"color": "#a8c7a9",
						"zoom": 13
					},
					{
						"color": "#a9c8ab",
						"zoom": 14
					},
					{
						"color": "#abc9ac",
						"zoom": 15
					},
					{
						"color": "#accaae",
						"zoom": 16
					},
					{
						"color": "#aecbaf",
						"zoom": 17
					},
					{
						"color": "#afccb1",
						"zoom": 18
					},
					{
						"color": "#b1cdb3",
						"zoom": 19
					},
					{
						"color": "#b2ceb4",
						"zoom": 20
					},
					{
						"color": "#b4cfb6",
						"zoom": 21
					}
				]
			},
			{
				"tags": "water",
				"elements": "geometry",
				"types": "polyline",
				"stylers": [
					{
						"opacity": 0.4,
						"zoom": 0
					},
					{
						"opacity": 0.4,
						"zoom": 1
					},
					{
						"opacity": 0.4,
						"zoom": 2
					},
					{
						"opacity": 0.4,
						"zoom": 3
					},
					{
						"opacity": 0.6,
						"zoom": 4
					},
					{
						"opacity": 0.8,
						"zoom": 5
					},
					{
						"opacity": 1,
						"zoom": 6
					},
					{
						"opacity": 1,
						"zoom": 7
					},
					{
						"opacity": 1,
						"zoom": 8
					},
					{
						"opacity": 1,
						"zoom": 9
					},
					{
						"opacity": 1,
						"zoom": 10
					},
					{
						"opacity": 1,
						"zoom": 11
					},
					{
						"opacity": 1,
						"zoom": 12
					},
					{
						"opacity": 1,
						"zoom": 13
					},
					{
						"opacity": 1,
						"zoom": 14
					},
					{
						"opacity": 1,
						"zoom": 15
					},
					{
						"opacity": 1,
						"zoom": 16
					},
					{
						"opacity": 1,
						"zoom": 17
					},
					{
						"opacity": 1,
						"zoom": 18
					},
					{
						"opacity": 1,
						"zoom": 19
					},
					{
						"opacity": 1,
						"zoom": 20
					},
					{
						"opacity": 1,
						"zoom": 21
					}
				]
			},
			{
				"tags": "bathymetry",
				"elements": "geometry",
				"stylers": [
					{
						"hue": "#9fc1a0"
					}
				]
			},
			{
				"tags": {
					"any": [
						"industrial",
						"construction_site"
					]
				},
				"elements": "geometry",
				"stylers": [
					{
						"color": "#e0ebe1",
						"zoom": 0
					},
					{
						"color": "#e0ebe1",
						"zoom": 1
					},
					{
						"color": "#e0ebe1",
						"zoom": 2
					},
					{
						"color": "#e0ebe1",
						"zoom": 3
					},
					{
						"color": "#e0ebe1",
						"zoom": 4
					},
					{
						"color": "#e0ebe1",
						"zoom": 5
					},
					{
						"color": "#e0ebe1",
						"zoom": 6
					},
					{
						"color": "#e0ebe1",
						"zoom": 7
					},
					{
						"color": "#e0ebe1",
						"zoom": 8
					},
					{
						"color": "#e0ebe1",
						"zoom": 9
					},
					{
						"color": "#e0ebe1",
						"zoom": 10
					},
					{
						"color": "#e0ebe1",
						"zoom": 11
					},
					{
						"color": "#e0ebe1",
						"zoom": 12
					},
					{
						"color": "#e0ebe1",
						"zoom": 13
					},
					{
						"color": "#e6efe7",
						"zoom": 14
					},
					{
						"color": "#ecf3ed",
						"zoom": 15
					},
					{
						"color": "#edf4ee",
						"zoom": 16
					},
					{
						"color": "#eef4ef",
						"zoom": 17
					},
					{
						"color": "#eff5f0",
						"zoom": 18
					},
					{
						"color": "#f0f6f1",
						"zoom": 19
					},
					{
						"color": "#f1f6f2",
						"zoom": 20
					},
					{
						"color": "#f2f7f3",
						"zoom": 21
					}
				]
			},
			{
				"tags": {
					"any": "transit",
					"none": [
						"transit_location",
						"transit_line",
						"transit_schema",
						"is_unclassified_transit"
					]
				},
				"elements": "geometry",
				"stylers": [
					{
						"color": "#e0ebe1",
						"zoom": 0
					},
					{
						"color": "#e0ebe1",
						"zoom": 1
					},
					{
						"color": "#e0ebe1",
						"zoom": 2
					},
					{
						"color": "#e0ebe1",
						"zoom": 3
					},
					{
						"color": "#e0ebe1",
						"zoom": 4
					},
					{
						"color": "#e0ebe1",
						"zoom": 5
					},
					{
						"color": "#e0ebe1",
						"zoom": 6
					},
					{
						"color": "#e0ebe1",
						"zoom": 7
					},
					{
						"color": "#e0ebe1",
						"zoom": 8
					},
					{
						"color": "#e0ebe1",
						"zoom": 9
					},
					{
						"color": "#e0ebe1",
						"zoom": 10
					},
					{
						"color": "#e0ebe1",
						"zoom": 11
					},
					{
						"color": "#e0ebe1",
						"zoom": 12
					},
					{
						"color": "#e0ebe1",
						"zoom": 13
					},
					{
						"color": "#e6efe7",
						"zoom": 14
					},
					{
						"color": "#ecf3ed",
						"zoom": 15
					},
					{
						"color": "#edf4ee",
						"zoom": 16
					},
					{
						"color": "#eef4ef",
						"zoom": 17
					},
					{
						"color": "#eff5f0",
						"zoom": 18
					},
					{
						"color": "#f1f6f1",
						"zoom": 19
					},
					{
						"color": "#f2f6f2",
						"zoom": 20
					},
					{
						"color": "#f3f7f3",
						"zoom": 21
					}
				]
			},
			{
				"tags": "fence",
				"elements": "geometry.fill",
				"stylers": [
					{
						"color": "#d3e4d4"
					},
					{
						"opacity": 0.75,
						"zoom": 0
					},
					{
						"opacity": 0.75,
						"zoom": 1
					},
					{
						"opacity": 0.75,
						"zoom": 2
					},
					{
						"opacity": 0.75,
						"zoom": 3
					},
					{
						"opacity": 0.75,
						"zoom": 4
					},
					{
						"opacity": 0.75,
						"zoom": 5
					},
					{
						"opacity": 0.75,
						"zoom": 6
					},
					{
						"opacity": 0.75,
						"zoom": 7
					},
					{
						"opacity": 0.75,
						"zoom": 8
					},
					{
						"opacity": 0.75,
						"zoom": 9
					},
					{
						"opacity": 0.75,
						"zoom": 10
					},
					{
						"opacity": 0.75,
						"zoom": 11
					},
					{
						"opacity": 0.75,
						"zoom": 12
					},
					{
						"opacity": 0.75,
						"zoom": 13
					},
					{
						"opacity": 0.75,
						"zoom": 14
					},
					{
						"opacity": 0.75,
						"zoom": 15
					},
					{
						"opacity": 0.75,
						"zoom": 16
					},
					{
						"opacity": 0.45,
						"zoom": 17
					},
					{
						"opacity": 0.45,
						"zoom": 18
					},
					{
						"opacity": 0.45,
						"zoom": 19
					},
					{
						"opacity": 0.45,
						"zoom": 20
					},
					{
						"opacity": 0.45,
						"zoom": 21
					}
				]
			},
			{
				"tags": "medical",
				"elements": "geometry",
				"stylers": [
					{
						"color": "#e0ebe1",
						"zoom": 0
					},
					{
						"color": "#e0ebe1",
						"zoom": 1
					},
					{
						"color": "#e0ebe1",
						"zoom": 2
					},
					{
						"color": "#e0ebe1",
						"zoom": 3
					},
					{
						"color": "#e0ebe1",
						"zoom": 4
					},
					{
						"color": "#e0ebe1",
						"zoom": 5
					},
					{
						"color": "#e0ebe1",
						"zoom": 6
					},
					{
						"color": "#e0ebe1",
						"zoom": 7
					},
					{
						"color": "#e0ebe1",
						"zoom": 8
					},
					{
						"color": "#e0ebe1",
						"zoom": 9
					},
					{
						"color": "#e0ebe1",
						"zoom": 10
					},
					{
						"color": "#e0ebe1",
						"zoom": 11
					},
					{
						"color": "#e0ebe1",
						"zoom": 12
					},
					{
						"color": "#e0ebe1",
						"zoom": 13
					},
					{
						"color": "#e6efe7",
						"zoom": 14
					},
					{
						"color": "#ecf3ed",
						"zoom": 15
					},
					{
						"color": "#edf4ee",
						"zoom": 16
					},
					{
						"color": "#eef4ef",
						"zoom": 17
					},
					{
						"color": "#eff5f0",
						"zoom": 18
					},
					{
						"color": "#f0f6f1",
						"zoom": 19
					},
					{
						"color": "#f1f6f2",
						"zoom": 20
					},
					{
						"color": "#f2f7f3",
						"zoom": 21
					}
				]
			},
			{
				"tags": "beach",
				"elements": "geometry",
				"stylers": [
					{
						"color": "#e0ebe1",
						"opacity": 0.3,
						"zoom": 0
					},
					{
						"color": "#e0ebe1",
						"opacity": 0.3,
						"zoom": 1
					},
					{
						"color": "#e0ebe1",
						"opacity": 0.3,
						"zoom": 2
					},
					{
						"color": "#e0ebe1",
						"opacity": 0.3,
						"zoom": 3
					},
					{
						"color": "#e0ebe1",
						"opacity": 0.3,
						"zoom": 4
					},
					{
						"color": "#e0ebe1",
						"opacity": 0.3,
						"zoom": 5
					},
					{
						"color": "#e0ebe1",
						"opacity": 0.3,
						"zoom": 6
					},
					{
						"color": "#e0ebe1",
						"opacity": 0.3,
						"zoom": 7
					},
					{
						"color": "#e0ebe1",
						"opacity": 0.3,
						"zoom": 8
					},
					{
						"color": "#e0ebe1",
						"opacity": 0.3,
						"zoom": 9
					},
					{
						"color": "#e0ebe1",
						"opacity": 0.3,
						"zoom": 10
					},
					{
						"color": "#e0ebe1",
						"opacity": 0.3,
						"zoom": 11
					},
					{
						"color": "#e0ebe1",
						"opacity": 0.3,
						"zoom": 12
					},
					{
						"color": "#e0ebe1",
						"opacity": 0.65,
						"zoom": 13
					},
					{
						"color": "#e6efe7",
						"opacity": 1,
						"zoom": 14
					},
					{
						"color": "#ecf3ed",
						"opacity": 1,
						"zoom": 15
					},
					{
						"color": "#edf4ee",
						"opacity": 1,
						"zoom": 16
					},
					{
						"color": "#eef4ef",
						"opacity": 1,
						"zoom": 17
					},
					{
						"color": "#eff5f0",
						"opacity": 1,
						"zoom": 18
					},
					{
						"color": "#f0f6f1",
						"opacity": 1,
						"zoom": 19
					},
					{
						"color": "#f1f6f2",
						"opacity": 1,
						"zoom": 20
					},
					{
						"color": "#f2f7f3",
						"opacity": 1,
						"zoom": 21
					}
				]
			},
			{
				"tags": {
					"all": [
						"is_tunnel",
						"path"
					]
				},
				"elements": "geometry.fill",
				"stylers": [
					{
						"color": "#83af86"
					},
					{
						"opacity": 0.3
					}
				]
			},
			{
				"tags": {
					"all": [
						"is_tunnel",
						"path"
					]
				},
				"elements": "geometry.outline",
				"stylers": [
					{
						"opacity": 0
					}
				]
			},
			{
				"tags": "road_limited",
				"elements": "geometry.fill",
				"stylers": [
					{
						"color": "#98bd9b"
					},
					{
						"scale": 0,
						"zoom": 0
					},
					{
						"scale": 0,
						"zoom": 1
					},
					{
						"scale": 0,
						"zoom": 2
					},
					{
						"scale": 0,
						"zoom": 3
					},
					{
						"scale": 0,
						"zoom": 4
					},
					{
						"scale": 0,
						"zoom": 5
					},
					{
						"scale": 0,
						"zoom": 6
					},
					{
						"scale": 0,
						"zoom": 7
					},
					{
						"scale": 0,
						"zoom": 8
					},
					{
						"scale": 0,
						"zoom": 9
					},
					{
						"scale": 0,
						"zoom": 10
					},
					{
						"scale": 0,
						"zoom": 11
					},
					{
						"scale": 0,
						"zoom": 12
					},
					{
						"scale": 0.1,
						"zoom": 13
					},
					{
						"scale": 0.2,
						"zoom": 14
					},
					{
						"scale": 0.3,
						"zoom": 15
					},
					{
						"scale": 0.5,
						"zoom": 16
					},
					{
						"scale": 0.6,
						"zoom": 17
					},
					{
						"scale": 0.7,
						"zoom": 18
					},
					{
						"scale": 0.79,
						"zoom": 19
					},
					{
						"scale": 0.83,
						"zoom": 20
					},
					{
						"scale": 0.9,
						"zoom": 21
					}
				]
			},
			{
				"tags": "road_limited",
				"elements": "geometry.outline",
				"stylers": [
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 0
					},
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 1
					},
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 2
					},
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 3
					},
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 4
					},
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 5
					},
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 6
					},
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 7
					},
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 8
					},
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 9
					},
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 10
					},
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 11
					},
					{
						"color": "#ffffff",
						"scale": 1.4,
						"zoom": 12
					},
					{
						"color": "#ffffff",
						"scale": 0.1,
						"zoom": 13
					},
					{
						"color": "#ecf3ec",
						"scale": 0.2,
						"zoom": 14
					},
					{
						"color": "#ecf3ec",
						"scale": 0.3,
						"zoom": 15
					},
					{
						"color": "#eef4ee",
						"scale": 0.5,
						"zoom": 16
					},
					{
						"color": "#f1f6f1",
						"scale": 0.6,
						"zoom": 17
					},
					{
						"color": "#f3f7f3",
						"scale": 0.7,
						"zoom": 18
					},
					{
						"color": "#f6f9f6",
						"scale": 1.18,
						"zoom": 19
					},
					{
						"color": "#f7faf7",
						"scale": 1.23,
						"zoom": 20
					},
					{
						"color": "#f9fbf9",
						"scale": 1.33,
						"zoom": 21
					}
				]
			},
			{
				"tags": {
					"any": "landcover",
					"none": "vegetation"
				},
				"stylers": {
					"visibility": "off"
				}
			}
		];
		var myMap = new ymaps.Map('map1', {
			center: [57.936938, 56.035272],
			zoom: 17,
			controls: []
		}, {
			searchControlProvider: 'yandex#search'
		});
		var myPlacemark1 = new ymaps.Placemark([57.936938, 56.035272], {
			hintContent: "г. Пермь, д. Ясыри, ш. Космонавтов 370	"
		}, {
			iconLayout: 'default#image',
			iconImageHref: _ball_bg,
			iconImageSize: _ball_Size,
			iconImageOffset: _ball_Offset
		});


		myMap.geoObjects.add(myPlacemark1);
		var zoomControl = new ymaps.control.ZoomControl({
			options: {
				size: "small",
				position: {
					top: 150,
					left: 50,
					right: 'auto',
				}
			}
		});

		myMap.controls.add(zoomControl)
		myMap.behaviors.disable('scrollZoom');

	})

}


$( function(){
	initYandexMap();
});


