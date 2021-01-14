/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "0.0.0.0", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: [], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "sk",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"],
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: 'MMM-Remote-Control',
			// uncomment the following line to show the URL of the remote control on the mirror
			// , position: 'bottom_left'
			// you can hide this module afterwards from the remote control itself
			config: {
				customCommand: {},  // Optional, See "Using Custom Commands" below
				//customMenu: "custom_menu.json", // Optional, See "Custom Menu Items" below
				//showModuleApiMenu: true, // Optional, Enable the Module Controls menu
				//apiKey: "",         // Optional, See API/README.md for details
			}
		},
		{
			module: "updatenotification",
			position: "bottom_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "MMM-Meniny",
			  position: "top_left",
			  config: {
				message: "Meniny má <i>$TODAY$</i>. <br/> Zajtra <i>$TOMORROW$</i>."
			  // you can use $TODAY$ as name of today, $TOMORROW$ as name of tomorrow.
			  }
        },
		{
			module: "calendar",
			header: "Sviatky",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check-o ",
						url: "webcal://calendar.zoznam.sk/icalendar/create-vcard-multiple.php?fName=sk&hy=2020"
					}
				],
				maximumEntries: "3",
				fetchInterval: "3600000"
			}
		},
		{
			module: "calendar",
			header: "Lukáš súkromný kalendár",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check-o",
						url: "webcal://calendar.google.com/calendar/ical/xxx.ics"
					},
				],
				maximumEntries: "5",
				fetchInterval: "300000"
			}
		},
		{
			module: "calendar",
			header: "Lukáš pracovný kalendár",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check-o",
						url: "webcal://calendar.google.com/calendar/ical/xxx.ics"
					}
				],
				maximumEntries: "3",
				fetchInterval: "620000"
			}
		}, 
		{
			module: "calendar",
			header: "Majka pracovný kalendár",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check-o",
						url: "webcal://calendar.google.com/calendar/ical/xxx.ics"
					}
				],
				maximumEntries: "3",
				fetchInterval: "620000"
			}
		}, 
		{
			module: "MMM-DarkSkyForecast",
			header: "",
			position: "top_right",
			classes: "default everyone",
			disabled: false,
			language: "sk",
			config: {
			  apikey: "xxx",
			  latitude: "48.xxx",
			  longitude: "18.xxx",      
			  iconset: "4c",
			  concise: true,
			  forecastLayout: "table",
			  useAnimatedIcons: false,
			  label_timeFormat: "k[h]",
			  //label_days: "['Ned','Pon','Uto', 'Str', 'Štv', 'Pia', 'Sob']",
			  showHourlyForecast: false,
			}
		  },
		{
			module: 'MMM-AQI',
			position: 'top_right',
			header: 'Kvalita vzduchu (AQI)',
			config: {
				token: "xxx",
				city: "Trencin",
				iaqi: false,
				updateInterval: 30 * 60 * 1000, // Every half hour.
				initialLoadDelay: 0,
				animationSpeed: 1000,
				debug: false
			}
		},
		{
			module: 'MMM-SingleStock',
			position: 'top_right',
			config: {
			  stockSymbol: 'TSLA',
			  apiToken: 'xxx',  // Unique, private API key obtained from https://iexcloud.io/console/tokens
			  updateInterval: 3600000, // 1 hour in milliseconds
			  showChange: true,        // false | true
			  label: 'companyName',         // 'symbol' | 'companyName' | 'none' | any string
			  colorized: true
			}
		},
		{
			module: 'MMM-SingleStock',
			position: 'top_right',
			config: {
			  stockSymbol: 'AMD',
			  apiToken: 'xxx',  // Unique, private API key obtained from https://iexcloud.io/console/tokens
			  updateInterval: 3600000, // 1 hour in milliseconds
			  showChange: true,        // false | true
			  label: 'companyName',          // 'symbol' | 'companyName' | 'none' | any string
			  colorized: true
			}
		},
		{
			module: 'MMM-SingleStock',
			position: 'top_right',
			config: {
			  stockSymbol: 'AAPL',
			  apiToken: 'xxx',  // Unique, private API key obtained from https://iexcloud.io/console/tokens
			  updateInterval: 3600000, // 1 hour in milliseconds
			  showChange: true,        // false | true
			  label: 'companyName',         // 'symbol' | 'companyName' | 'none' | any string
			  colorized: true
			}
		},
		{
			module: "MMM-cryptocurrency",
			position: "top_right",
			config: {
				apikey: 'xxx',
				currency: ['bitcoin'],
				conversion: 'EUR',
				displayType: 'logoWithChanges',
				showGraphs: true,
				logoHeaderText: '',
				maximumFractionDigits: 2
			}
		},
		{
			module: "newsfeed",
			position: "top_bar",
			config: {
				feeds: [
					{
						title: "TA3 z domova",
						url: "https://www.ta3.com/rss/3/novinky-z-domova.html"
					},
					{
						title: "TA3 zo sveta",
						url: "https://www.ta3.com/rss/4/novinky-zo-zahranicia.html"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				reloadInterval: 600000
			}
		},
		{
	        module: 'MMM-SimpleLogo',
	        position: 'bottom_left',    // This can be any of the regions.
	        header: 'Kamera kukátko',
	        config: {
	            // The config property is optional.
	            // See 'Configuration options' for more information.
	            fileUrl: 'https://url.tld/camera/stream',
	            //fileUrl: 'https://via.placeholder.com/400',
				width: '350px',
	            position: 'center',
	            refreshInterval: 2 * 1000,
	        }
	    },
		{
	        module: 'MMM-SimpleLogo',
	        position: 'bottom_left',    // This can be any of the regions.
	        header: 'Kamera balkón',
	        config: {
	            // The config property is optional.
	            // See 'Configuration options' for more information.
	            fileUrl: 'https://url.tld/jpg/image.jpg',
	            width: '350px',
	            position: 'center',
				refreshInterval: 3 * 1000,
				requestDelay: 2000
	        }
		},		
		{
            module: 'MMM-google-route',
            position: 'bottom_left',
            header: 'Premávka do ',
            config: {
				key: 'xxx',
				minimumRefreshPeriod: 2,
                directionsRequest:{
                    origin: '018 41 Dubnica nad Váhom',
                    destination: 'company'
                },
                height: '200px',
                fontSize: '70%',
                refreshPeriod: 15,
            }
		}, 
		{
			module: 'MMM-ModuleScheduler',
			config: {
				notification_schedule: [
					// Refresh the route every minute from 7:00 AM to 8:00 AM, monday to friday
					{ notification: 'MMM-google-route/refresh', schedule: '* 7 * * 1-5' }
				]
			}
		}, 
		{
			module: 'MMM-homeassistant-sensors',
			position: 'top_right',
			config: {
				host: 'url.tld',
				port: '8123',
				https: true,
				token: 'xxx',
				prettyName: true,
				stripName: false,
				updateInterval: '30000',
				fade: '500',
				values: [
					{
						sensor: "lock.zamok_do_bytu",
						name: "Zámok do bytu",
						icons: [{
								"locked": "shield-lock",
								"unlocked": "lock-open-variant-outline"
							}
						],
						replace: [{
								"locked": "Zamknutý",
								"unlocked": "Odomknutý"
							}
						]
					},
					{
						sensor: "sensor.dnesna_cena_elektriny_byt",
						icons: [{
								"default": "currency-eur"
							}
						]
					},
					{
						sensor: "sensor.cena_nedoplatku_elektriny",
						icons: [{
								"default": "currency-eur"
							}
						]
					},
					{
						sensor: "sensor.dnesna_spotreba_teplej_vody",
						name: "Dnešná spotreba teplej vody",
						displayunit: true,
						highAlertThreshold: 120,
						icons: [{
								"default": "water-pump"
							}
						]
					},
					{
						sensor: "sensor.dnesna_spotreba_studenej_vody",
						name: "Dnešná spotreba studenej vody",
						displayunit: true,
						highAlertThreshold: 120,
						icons: [{
								"default": "water-pump"
							}
						]
					},
					{
						sensor: "sensor.dnesna_cena_vody_byt",
						icons: [{
								"default": "currency-eur"
							}
						]
					},
					{
						sensor: "sensor.pocet_sprav_v_schranke",
						name: "Počet správ v schránke",
						defunit: " ",
						icons: [{
								"default": "email-check-outline"
							}
						],
						replace: [{
							"0": "prázdna"
						}]
					},
					{
						sensor: "sensor.pocet_prani_tento_mesiac",
						name: "Počet praní tento mesiac",
						defunit: " ",
						useValue: false,
						icons: [{
								"default": "washing-machine"
							}
						]
					},
					{
						sensor: "sensor.pocet_prani_tento_rok",
						name: "Počet praní tento rok",
						defunit: " ",
						icons: [{
								"default": "washing-machine"
							}
						]
					},
					{
						sensor: "sensor.kupelna_teplota",
						name: "Teplota v kúpelni",
						icons: [{
								"default": "home-thermometer-outline"
							}
						]
					},
					{
						sensor: "sensor.kupelna_vlhkost",
						name: "Vlhkosť v kúpelni",
						icons: [{
								"default": "water-percent"
							}
						]
					},
					{
						sensor: "sensor.teplota_vody_v_akvariu",
						name: "Teplota v akváriu",
						icons: [{
								"default": "fishbowl"
							}
						]
					},
					{
						sensor: "sensor.teplota_zrkadlo_kupelna",
						name: "Teplota za zrkadlom",
						icons: [{
								"default": "mirror"
							}
						]
					},
					{
						sensor: "person.lukas",
						name: "Lukáš je %v%",
						displayvalue: false,
						replace: [{
								"home": "doma",
								"not_home" : "preč"
							}
						]
					},
					{
						sensor: "person.majka",
						name: "Majka je %v%",
						displayvalue: false,
						replace: [{
								"home": "doma",
								"not_home" : "preč"
							}
						]
					},
					{
						sensor: "proximity.parking",
						name: "Octavia parkuje %v% metrov od domu",
						displayvalue: false,
						displayunit: false,
						icons: [{
							"default": "car-key"
						}
					]
					},
				]
			}
		},
	   {
		module: 'MMM-SimpleLogo',	// Elektrina
		position: 'bottom_right',    // This can be any of the regions.
		header: 'Spotreba elektriny',
		config: {
			// The config property is optional.
			// See 'Configuration options' for more information.
			fileUrl: 'https://url.tld/render/d-solo/xxxxx//spotreba-vody?orgId=2&theme=dark&panelId=4&width=350&height=175&tz=Europe%2FBratislava',
			//fileUrl: 'https://via.placeholder.com/400',
			width: '350px',
			position: 'center',
			refreshInterval: 60 * 60 * 1000,
			}
		},
	   {
		module: 'MMM-SimpleLogo',	// Tepla voda
		position: 'bottom_right',    // This can be any of the regions.
		header: 'Spotreba teplej vody',
		config: {
			// The config property is optional.
			// See 'Configuration options' for more information.
			fileUrl: 'https://url.tld/render/d-solo/xxxxx//spotreba-vody?orgId=2&panelId=2&width=350&height=175&tz=Europe%2FBratislava',
			//fileUrl: 'https://via.placeholder.com/400',
			width: '350px',
			position: 'center',
			refreshInterval: 60 * 60 * 1000,
			requestDelay: 5000
			}
		},
		{
		    module: "MMM-NowPlayingOnSpotify",
		    position: "bottom_center",
   			header: "",
		    config: {
		        showCoverArt: false,
		        updatesEvery: 5,
				clientID: "xxx",
			    clientSecret: "249261206xxx5ce4e3087094b3f8416f8d2",
			    accessToken: "xxxxxx",
				refreshToken: "xxx"		    
			}
		},
		{
			disabled: false,
			module: 'MMM-RAIN-RADAR',
			position: 'bottom_center',
			config: {
				useHeader: false, // true if you want a header
				lat: "48.xxx", // Latitude
				lon: "17.yyy", // Longitude
				area: 'IL', // US State
				zoomLevel: 8,
				mapType: 2, //0-Road Map 1-Satellite 2-Dark Map 3-OpenStreetMaps 4-Light Map
				color: 6, //0-Original 1-Universal Blue 2-TITAN 3-The Weather Channel 5-NEXRAD Level-III 6-RAINBOW @ SELEX-SI
				snow: 1,
				smoothing: 1,
				opacity: 50,
				fastAnimation: 0,
				coverage: 0,
				darkTheme: 1,
				UTCtime: 0,
				legend: 1,
				legendMin: 1, //set legend to 1 if you want legendMin to show
				animate: 1,
				updateOnWarning: 0, // 1: after updateInterval, weather warnings for your US states will be used to determine if module should be hidden. 0 module is perpertually displayed
				updateInterval: 5 * 60 * 1000, // number of milliseconds. change 5 to 60 and it will update each 10 minutes
			}
		},
		{
			module: 'MMM-SimpleLogo',	// Studena voda
			position: 'bottom_center',    // This can be any of the regions.
			header: 'Spotreba studenej vody',
			config: {
				// The config property is optional.
				// See 'Configuration options' for more information.
				fileUrl: 'https://url.tld/render/d-solo/xxxxx/spotreba-vody?orgId=2&theme=dark&panelId=3&width=350&height=175&tz=Europe%2FBratislava',
				//fileUrl: 'https://via.placeholder.com/400',
				width: '350px',
				position: 'center',
				refreshInterval: 60 * 60 * 1000,
				requestDelay: 10000
			}
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
