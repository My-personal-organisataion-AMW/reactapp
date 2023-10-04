const startPoint =
  "https://www.google.com/maps/dir/Zimmerstra%C3%9Fe+50,+Berlin/";

const options = [
  {
    name: "Bánh mì Sài Gòn - Vietnamesisches Baguette",
    tags: [
      "asian",
      "sandwich",
      "has-sitting-places",
      "reachable-without-a-bike",
    ],
    mapLink: `${startPoint}B%C3%A1nh+m%C3%AC+S%C3%A0i+G%C3%B2n+-+Vietnamesisches+Baguette,+Wallstra%C3%9Fe+21,+10179+Berlin/@52.5098702,13.4006765,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x47a85152c7a7f411:0xf454b46331cb7df7!2m2!1d13.3982198!2d52.5082933!1m5!1m1!1s0x47a84fdab4f26bff:0xfc584e2391ae9603!2m2!1d13.4075106!2d52.5114533!3e2`,
  },
  {
    name: "Blumen laden viet",
    tags: [
      "asian",
      "vegan-friendly",
      "soup",
      "fish",
      "has-sitting-places",
      "reachable-without-a-bike",
    ],
    mapLink: `${startPoint}Haicoffee+%26+Asianfood,+Wallstra%C3%9Fe+2,+10179+Berlin/@52.509822,13.3985832,17z/data=!3m2!4b1!5s0x47a84e27e2389f8b:0xecfdd5de1cee09c4!4m14!4m13!1m5!1m1!1s0x47a85152c7a7f411:0xf454b46331cb7df7!2m2!1d13.3982198!2d52.5082933!1m5!1m1!1s0x47a84faca54e547b:0x9e7692981f88f88a!2m2!1d13.4033187!2d52.5112!3e2`,
  },
  {
    name: "Café Journale",
    tags: [
      "extra-quicky",
      "pizza",
      "pasta",
      "bier",
      "has-sitting-places",
      "reachable-without-a-bike",
    ],
    mapLink: `${startPoint}cafe+journal/@52.5075676,13.3963007,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x47a85152c7a7f411:0xf454b46331cb7df7!2m2!1d13.3982198!2d52.5082933!1m5!1m1!1s0x47a851d6141bce99:0x4736cd730843f140!2m2!1d13.3983255!2d52.5068426!3e2`,
    menuLink:
      "http://www.cafe-journale.de/speisen-getraenke/unsere-top-angebote/",
  },
  {
    name: "Caphe Hoa",
    tags: [
      "asian",
      "vegan-friendly",
      "has-sitting-places",
      "reachable-without-a-bike",
    ],
    hint: "ONLY vegan | Super tasty",
    mapLink: `${startPoint}Caphe+HOA,+Stallschreiberstra%C3%9Fe+15,+10179+Berlin/@52.507427,13.4007048,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x47a85152c7a7f411:0xf454b46331cb7df7!2m2!1d13.3982198!2d52.5082933!1m5!1m1!1s0x47a84f789df11933:0xf8846c3ba98321de!2m2!1d13.4079898!2d52.5064871!3e1`,
    menuLink: "https://www.caphe-hoa.com/hoa1-startseite",
  },
  {
    name: "Canteen & Diner (Axel Springer)",
    tags: [
      "very-cheap",
      "vegan-friendly",
      "extra-quicky",
      "fish",
      "has-sitting-places",
      "reachable-without-a-bike",
    ],
    hint: "Paparazzi | Mon-Fri: 11:30 a.m. - 3 p.m.",
    menuLink: `https://confluence.eu.idealo.com/pages/viewpage.action?pageId=225330284`,
    timeBasedFilter: {
      hours: { showFrom: "11:28:00", dontShowAfter: "14:53:00" },
    },
  },
  {
    name: "Charlotte 1",
    tags: ["reachable-without-a-bike", "pizza", "very-cheap", "new-places"],
    hint: "no sitting places! cheap pizza",
    mapLink: `${startPoint}LCharlotte+1,+Charlottenstraße+1,+10969+Berlin/@52.5065598,13.390505,17z/data=!3m2!4b1!5s0x47a85191d67efc55:0x45cff7b5ae0f3c02!4m14!4m13!1m5!1m1!1s0x47a851d14a7c756f:0xc8695c302425726e!2m2!1d13.3923017!2d52.5078243!1m5!1m1!1s0x47a851d415b6771b:0xf18afe0a148141c7!2m2!1d13.3930857!2d52.5052963!3e2`,
  },
  {
    name: "China City",
    tags: [
      "chinese",
      "has-sitting-places",
      "huge-portions",
      "lifestyle",
      "new-places",
      "reachable-without-a-bike",
      "we-have-time",
    ],
    hint: "best agree on dishes to be shared",
    mapLink: `${startPoint}China+-+City,+Leipziger+Str.+46,+10117+Berlin/@52.509368,13.3926723,17z/data=!3m2!4b1!5s0x47a851d777cd8059:0x2a1b1285dcbe7e27!4m14!4m13!1m5!1m1!1s0x47a851d14a7c756f:0xc8695c302425726e!2m2!1d13.3923017!2d52.5078243!1m5!1m1!1s0x47a851d77784a4b9:0x23c249679cf4cbab!2m2!1d13.3975505!2d52.5105115!3e1`,
    menuLink: "http://china-city.eu/our-menu/",
  },
  {
    name: "Chineese noodles",
    tags: [
      "we-have-time",
      "asian",
      "has-sitting-places",
      "reachable-without-a-bike",
    ],
    mapLink: `${startPoint}LIU+%E6%88%90%E9%83%BD%E5%91%B3%E9%81%93%E9%9D%A2%E9%A6%86+Nudelhaus,+Kronenstra%C3%9Fe+72,+10117+Berlin/@52.509587,13.3903726,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x47a85152c7a7f411:0xf454b46331cb7df7!2m2!1d13.3982198!2d52.5082933!1m5!1m1!1s0x47a8519fcb30e9fd:0x52f7745843796fe1!2m2!1d13.3875929!2d52.5112094!3e2`,
    menuLink: "https://chengduweidao.de/speisekarte/",
  },
  {
    name: "Chuppenga Burritos",
    tags: [
      "bier",
      "has-sitting-places",
      "reachable-without-a-bike",
      "vegan-friendly",
      "wrap",
    ],
    mapLink: `${startPoint}Chupenga+Burritos+%26+Salads,+Charlottenstra%C3%9Fe+4,+10969+Berlin/@52.5073626,13.3934922,17z/data=!3m2!4b1!5s0x47a851d6a6d50e25:0xc44b4099f69e892d!4m14!4m13!1m5!1m1!1s0x47a85152c7a7f411:0xf454b46331cb7df7!2m2!1d13.3982198!2d52.5082933!1m5!1m1!1s0x47a851d6a3ffb2e7:0x76b522c48c123569!2m2!1d13.392965!2d52.506432!3e2`,
    menuLink:
      "https://res.cloudinary.com/www-chupenga-de/images/v1652010239/wordpress_assets_chupenga/Chupenga_Menu_Mai-2022_allstores_PRINT/Chupenga_Menu_Mai-2022_allstores_PRINT.jpg?_i=AA",
  },
  {
    name: "Choppaluna",
    tags: [
      "asian",
      "bowl",
      "has-sitting-places",
      "reachable-without-a-bike",
      "vegan-friendly",
      "wrap",
    ],
    hint: "very bad idea: extremly loud and stressfull",
    mapLink: `${startPoint}Choppaluna,+Rudi-Dutschke-Stra%C3%9Fe,+Berlin/@52.5075038,13.3934922,17z/data=!3m2!4b1!5s0x47a851d6a6d50e25:0xc44b4099f69e892d!4m14!4m13!1m5!1m1!1s0x47a85152c7a7f411:0xf454b46331cb7df7!2m2!1d13.3982198!2d52.5082933!1m5!1m1!1s0x47a8511b4039af17:0xea6bd994340038f4!2m2!1d13.3934226!2d52.5067144!3e2`,
    menuLink: "https://www.choppaluna-berlin.de/#cat1",
  },
  {
    name: "DIY",
    tags: [
      "bier",
      "extra-quicky",
      "pizza",
      "pasta",
      "sandwich",
      "vegan-friendly",
      "very-cheap",
      "we-have-time",
      "has-sitting-places",
      "reachable-without-a-bike",
    ],
    hint: "Staying in the office is an option too! Pasta | Pizza from a freezer | Bread w/ stuff | Veggies | Eat Apples | Beer | Wine | Whiskey | Be creative!",
  },
  {
    name: "Datscha",
    tags: [
      "bier",
      "fish",
      "has-sitting-places",
      "vegan-friendly",
      "we-have-time",
    ],
    mapLink: `${startPoint}Graefestra%C3%9Fe+83,+10967+Berlin/@52.501048,13.3977532,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x47a85152c7a7f411:0xf454b46331cb7df7!2m2!1d13.3982198!2d52.5082933!1m5!1m1!1s0x47a84fcbc0045e91:0xe7fd7b7b24d05b31!2m2!1d13.4187578!2d52.4939387!3e1`,
    menuLink: "https://datscha.de/speisekarte.html",
  },
  {
    name: "Gasprom Viet aka. Huong Sen",
    tags: [
      "asian",
      "has-sitting-places",
      "reachable-without-a-bike",
      "very-cheap",
    ],
    mapLink: `${startPoint}Markgrafenstra%C3%9Fe+57,+10117+Berlin/@52.5084514,13.3950042,18z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x47a85152c7a7f411:0xf454b46331cb7df7!2m2!1d13.3982198!2d52.5082933!1m5!1m1!1s0x47a851d6d09082a9:0x3ad8b8405d45c36b!2m2!1d13.3939513!2d52.5084079`,
    menuLink:
      "https://www.huongsen.de/wp-content/uploads/2022/09/Karte-September-2022-1-1.pdf",
  },
  {
    name: "Gasprom Viet aka. Pagashi-Luu",
    tags: [
      "asian",
      "very-cheap",
      "has-sitting-places",
      "reachable-without-a-bike",
    ],
    mapLink: `${startPoint}Pagashi-Luu,+Markgrafenstra%C3%9Fe+56,+10117+Berlin/@52.5084514,13.3949645,18z/data=!3m2!4b1!5s0x47a851d6da7df6f3:0xa9759c67e65c148a!4m14!4m13!1m5!1m1!1s0x47a85152c7a7f411:0xf454b46331cb7df7!2m2!1d13.3982198!2d52.5082933!1m5!1m1!1s0x47a851d6d0d17035:0xa360397610d4d388!2m2!1d13.393871!2d52.5085177!3e2`,
  },
  {
    name: "Huong Lua",
    tags: ["has-sitting-places", "reachable-without-a-bike", "asian"],
    mapLink: `${startPoint}Huong+Lua,+Charlottenstraße+76,+10117+Berlin/@52.5083921,13.3906405,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x47a85152c7a7f411:0xf454b46331cb7df7!2m2!1d13.3982198!2d52.5082933!1m5!1m1!1s0x47a8518e1efaf9c9:0xffbe320fb8907898!2m2!1d13.3919354!2d52.5088893!3e2`,
    menuLink: "https://cdn.website.dish.co/media/5d/1f/5413582/Speisekarte.pdf",
  },
  {
    name: "Gino",
    tags: [
      "bier",
      "has-sitting-places",
      "pasta",
      "pizza",
      "reachable-without-a-bike",
      "salad",
      "soup",
    ],
    mapLink: `${startPoint}La+Gino,+Rudi-Dutschke-Stra%C3%9Fe+20,+10969+Berlin/@52.5075989,13.3911752,16z/data=!3m2!4b1!5s0x47a851d6a6d50e25:0xc44b4099f69e892d!4m14!4m13!1m5!1m1!1s0x47a85152c7a7f411:0xf454b46331cb7df7!2m2!1d13.3982198!2d52.5082933!1m5!1m1!1s0x416523bc26b05255:0xc9afba23ba3f2f63!2m2!1d13.392202!2d52.5069848!3e2`,
    menuLink: "https://www.laginoberlin.de/",
  },
  {
    name: "Market",
    tags: [
      "has-sitting-places",
      "huge-portions",
      "reachable-without-a-bike",
      "very-cheap",
    ],
    hint: "Öffnungszeiten | Mittwoch 	09:00 – 16:00 Uhr | Freitag 	11:00 – 18:00 Uhr",
    mapLink: `${startPoint}Wochenmarkt+Spittelmarkt,+Leipziger+Str.+54,+10117+Berlin/@52.5098462,13.3974752,17z/data=!3m2!4b1!5s0x47a851d6a6d50e25:0xc44b4099f69e892d!4m14!4m13!1m5!1m1!1s0x47a85152c7a7f411:0xf454b46331cb7df7!2m2!1d13.3982198!2d52.5082933!1m5!1m1!1s0x47a851d81a3601e9:0x646e0de0df97f985!2m2!1d13.4005641!2d52.5114712!3e2`,
    timeBasedFilter: { days: [3, 5] }, // day 3 is wednesday
  },
  {
    name: "Maximilian",
    tags: [
      "bier",
      "fish",
      "has-sitting-places",
      "reachable-without-a-bike",
      "we-have-time",
    ],
    mapLink: `${startPoint}Restaurant+Maximilians+Berlin,+Friedrichstraße+185-190,+10117+Berlin/@52.5105815,13.3956403,17z/data=!4m13!4m12!1m5!1m1!1s0x47a85152c7a7f411:0xf454b46331cb7df7!2m2!1d13.3982198!2d52.5082933!1m5!1m1!1s0x47a851d07038fccd:0xee7212867d17fced!2m2!1d13.3892688!2d52.5114055?entry=ttu`,
    menuLink: "https://www.maximilians-berlin.de/mittagstisch",
  },
  {
    name: "Ishin",
    tags: [
      "asian",
      "bier",
      "fish",
      "has-sitting-places",
      "japanese",
      "reachable-without-a-bike",
      "sushi",
    ],
    mapLink: `${startPoint}Ishin,+Charlottenstra%C3%9Fe+16,+10117+Berlin/@52.5080195,13.3942365,18z/data=!3m2!4b1!5s0x47a851d133885a7d:0xcb6b0bd710d1b22!4m14!4m13!1m5!1m1!1s0x47a85152c7a7f411:0xf454b46331cb7df7!2m2!1d13.3982198!2d52.5082933!1m5!1m1!1s0x47a851d13503c889:0x400e7ce504d574b9!2m2!1d13.3924932!2d52.5081615!3e2`,
    menuLink: "https://ishin.de/speisekarte",
  },
  {
    name: "Izumi",
    tags: [
      "asian",
      "fish",
      "has-sitting-places",
      "japanese",
      "new-places",
      "reachable-without-a-bike",
      "sushi",
      "we-have-time",
    ],
    mapLink: `${startPoint}Izumi+Restaurant-Sushi+Bar+%26+Lieferservice,+Kronenstra%C3%9Fe+66,+10117+Berlin/@52.509587,13.3912776,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x47a85152c7a7f411:0xf454b46331cb7df7!2m2!1d13.3982198!2d52.5082933!1m5!1m1!1s0x47a851d06bc40143:0x8b763c3653d8fda7!2m2!1d13.3886859!2d52.5112976!3e2`,
    menuLink: "https://www.sushi-izumi.de/index.php?page=angebote",
  },
  {
    name: "Kumpir Club",
    tags: [
      "bowl",
      "has-sitting-places",
      "new-places",
      "potato",
      "reachable-without-a-bike",
    ],
    mapLink: `${startPoint}KUMPIR+CLUB+fresh+food+%26+coffee,+Kommandantenstra%C3%9Fe+71,+10117+Berlin/@52.5078992,13.3991502,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x47a85152c7a7f411:0xf454b46331cb7df7!2m2!1d13.3982198!2d52.5082933!1m5!1m1!1s0x47a84f5973813ad9:0xc6acc78364d8f7a4!2m2!1d13.4035547!2d52.5085124!3e2`,
  },
  {
    name: "Little Green Rabbit",
    tags: [
      "has-sitting-places",
      "new-places",
      "potato",
      "reachable-without-a-bike",
      "salad",
      "soup",
    ],
    mapLink: `${startPoint}Little+Green+Rabbit+-+Checkpoint+Charlie,+Friedrichstraße+200,+10117+Berlin/@52.5083357,13.3893224,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x47a85152c7a7f411:0xf454b46331cb7df7!2m2!1d13.3982198!2d52.5082933!1m5!1m1!1s0x47a851d10852533f:0xfcdb65fbcafc8dd6!2m2!1d13.3893705!2d52.5087669!3e2`,
    menuLink:
      "https://uploads-ssl.webflow.com/5f627a7ebad0f338a856c1ec/6331c4e0ee543e729c3a47a9_LGR%20Speisekarte_F200_Okt22_DE.pdf",
  },
  {
    name: "Mix and Match by Seven Coffee (Kumpir & stuff)",
    tags: [
      "has-sitting-places",
      "new-places",
      "potato",
      "reachable-without-a-bike",
    ],
    mapLink: `${startPoint}Mix+and+Match+by+Seven+Coffee,+Markgrafenstra%C3%9Fe+56,+10117+Berlin/@52.5084514,13.3949529,18z/data=!3m2!4b1!5s0x47a851d6d0a5a689:0xc8c79cdafa035237!4m14!4m13!1m5!1m1!1s0x47a85152c7a7f411:0xf454b46331cb7df7!2m2!1d13.3982198!2d52.5082933!1m5!1m1!1s0x47a8518a122e042d:0x7d69c9849510bb9a!2m2!1d13.3938478!2d52.5086439!3e2`,
    menuLink: "https://mix-match-cafe.business.site/#gallery",
  },
  {
    name: "NOUMì",
    tags: [
      "asian",
      "has-sitting-places",
      "new-places",
      "reachable-without-a-bike",
    ],
    mapLink: `${startPoint}NOUMI+Mitte/@52.5137412,13.396076,18z/data=!4m6!3m5!1s0x47a85102542881b3:0x6bfd99925f0d32b5!8m2!3d52.5143007!4d13.397416!16s%2Fg%2F11htqygydm`,
    menuLink: "https://noumi-noodles.com/mitte#menue",
  },
  {
    name: "Otito Vietnamese Food",
    tags: [
      "asian",
      "has-sitting-places",
      "reachable-without-a-bike",
      "we-have-time",
    ],
    mapLink: `${startPoint}Otito+Vietnamese+Food,+Leipziger+Stra%C3%9Fe,+Berlin/@52.5090704,13.3919498,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x47a85152c7a7f411:0xf454b46331cb7df7!2m2!1d13.3982198!2d52.5082933!1m5!1m1!1s0x47a851d0506271af:0x732febe466b1ed5b!2m2!1d13.3907171!2d52.5102414!3e2`,
    menuLink: "https://menu.happz.de/l/otito",
  },
  {
    name: "Papa",
    tags: [
      "extra-quicky",
      "has-sitting-places",
      "reachable-without-a-bike",
      "vegan-friendly",
      "very-cheap",
    ],
    hint: "very bad idea",
    mapLink: `${startPoint}PAPA+by+Pace,+Zimmerstra%C3%9Fe,+Berlin/@52.508064,13.3950051,17z/data=!3m2!4b1!5s0x47a851d6a6d50e25:0xc44b4099f69e892d!4m14!4m13!1m5!1m1!1s0x47a85152c7a7f411:0xf454b46331cb7df7!2m2!1d13.3982198!2d52.5082933!1m5!1m1!1s0x47a851d69a1a5e19:0x9f2458790cdfeb50!2m2!1d13.3961756!2d52.5078348!3e2`,
  },
  {
    name: "Poke bowl (Maloa)",
    tags: [
      "asian",
      "bowl",
      "has-sitting-places",
      "reachable-without-a-bike",
      "vegan-friendly",
    ],
    hint: "only cold food!",
    mapLink: `${startPoint}MALOA+Poke+Bowl,+Zimmerstra%C3%9Fe,+Berlin/@52.5081302,13.3937242,17z/data=!3m2!4b1!5s0x47a851d6a6d50e25:0xc44b4099f69e892d!4m14!4m13!1m5!1m1!1s0x47a85152c7a7f411:0xf454b46331cb7df7!2m2!1d13.3982198!2d52.5082933!1m5!1m1!1s0x47a8510601873af5:0x1f278d1adde45d25!2m2!1d13.3935791!2d52.5080523!3e2`,
  },
  {
    name: "Ristorante Lungomare",
    tags: [
      "bier",
      "has-sitting-places",
      "new-places",
      "pizza",
      "reachable-without-a-bike",
    ],
    mapLink: `${startPoint}Ristorante+Lungomare,+Krausenstra%C3%9Fe+11,+10117+Berlin/@52.5086225,13.3927909,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x47a85152c7a7f411:0xf454b46331cb7df7!2m2!1d13.3982198!2d52.5082933!1m5!1m1!1s0x47a851d0e065bb39:0x1dc1b25b157ced20!2m2!1d13.3918528!2d52.5093853!3e1`,
  },
  {
    name: "Spaetzle",
    tags: ["huge-portions", "has-sitting-places", "reachable-without-a-bike"],
    timeBasedFilter: {
      // crowded
      hours: { dontShowAfter: "11:45:00", showFrom: "13:30:00" },
    },
    mapLink: `${startPoint}Sp%C3%A4tzle+Club,+Seydelstra%C3%9Fe+2,+10117+Berlin/@52.5097351,13.3982039,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x47a85152c7a7f411:0xf454b46331cb7df7!2m2!1d13.3982198!2d52.5082933!1m5!1m1!1s0x47a84e28071e9ed1:0x4b5143e7c4540230!2m2!1d13.4024409!2d52.510562!3e2`,
  },
  {
    name: "Taka Fish House | Kotti",
    tags: ["fish", "has-sitting-places", "we-have-time"],
    mapLink: `${startPoint}TAKA+Fisch+House,+Adalbertstra%C3%9Fe+97,+10999+Berlin/@52.5044983,13.3992997,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x47a85152c7a7f411:0xf454b46331cb7df7!2m2!1d13.3982198!2d52.5082933!1m5!1m1!1s0x47a84e336cde3b7d:0xf799ba168b2cccef!2m2!1d13.4179115!2d52.4999783!3e1`,
  },
  {
    name: "The small garden",
    tags: [
      "bowl",
      "has-sitting-places",
      "new-places",
      "reachable-without-a-bike",
      "salad",
      "vegan-friendly",
      "wrap",
    ],
    mapLink: `${startPoint}The+small+garden,+Charlottenstra%C3%9Fe,+Berlin/@52.5083922,13.3928826,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x47a85152c7a7f411:0xf454b46331cb7df7!2m2!1d13.3982198!2d52.5082933!1m5!1m1!1s0x47a851c315841d91:0x904e5aa88c862c93!2m2!1d13.391896!2d52.5080153!3e2`,
    menuLink: "https://www.the-small-garden.de/#cat4",
  },
  {
    name: "Shisomen - Vegan Ramen",
    tags: [
      "asian",
      "has-sitting-places",
      "japanese",
      "reachable-without-a-bike",
      "soup",
      "vegan-friendly",
    ],
    mapLink: `${startPoint}Shisomen+-+Vegan+Ramen+und+Cocktail+Bar,+Gertrud-Kolmar-Stra%C3%9Fe+4,+10117+Berlin/@52.5099435,13.3852801,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x47a85152c7a7f411:0xf454b46331cb7df7!2m2!1d13.3982198!2d52.5082933!1m5!1m1!1s0x47a851e1c6039e53:0x151636a566c1ab02!2m2!1d13.3810847!2d52.5121297!3e2`,
  },
  {
    name: "Q-burger",
    tags: [
      "bier",
      "burger",
      "has-sitting-places",
      "reachable-without-a-bike",
      "vegan-friendly",
    ],
    hint: "variety of vegan and vegetarian burgers!",
    mapLink: `${startPoint}Q+Burger,+Zimmerstra%C3%9Fe,+Berlin/@52.5081438,13.3949856,18z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x47a85152c7a7f411:0xf454b46331cb7df7!2m2!1d13.3982198!2d52.5082933!1m5!1m1!1s0x47a851d6c5ddbeb9:0x2de3116e00ae6f6a!2m2!1d13.3939132!2d52.5081566!3e2`,
    menuLink: "https://www.qburgerberlin.de/#cat2",
  },
  {
    name: "Yusuf - Falafel, Halloumi & Schawarma",
    tags: ["new-places", "reachable-without-a-bike"],
    hint: "We do not know anyone who came back alive. Please go and let us know.",
    mapLink: `${startPoint}Yusuf+-+Falafel,+Halloumi+%26+Schawarma,+Axel-Springer-Stra%C3%9Fe+43,+10969+Berlin/@52.5077217,13.3976897,18z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x47a85152c7a7f411:0xf454b46331cb7df7!2m2!1d13.3982198!2d52.5082933!1m5!1m1!1s0x47a8514a9b92f611:0x5775be34c2f1e23d!2m2!1d13.3993956!2d52.50812!3e2`,
  },
  {
    name: "Vapiano",
    tags: [
      "has-sitting-places",
      "new-places",
      "pasta",
      "pizza",
      "reachable-without-a-bike",
      "risotto",
      "salad",
      "vegan-friendly",
    ],
    mapLink: `${startPoint}VAPIANO+Berlin+Friedrichstraße,+Friedrichstraße+50-55,+10117+Berlin/@52.5082008,13.3920196,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x47a85152c7a7f411:0xf454b46331cb7df7!2m2!1d13.3982198!2d52.5082933!1m5!1m1!1s0x47a851d1108c4713:0xe457ba13e59e93b0!2m2!1d13.3903524!2d52.5087171!3e1`,
    menuLink: "https://www.vapiano.de/de/vegan/berlin-checkpoint-charlie",
  },
  {
    name: "Caramel Mittags-Lounge",
    tags: [
      "has-sitting-places",
      "new-places",
      "reachable-without-a-bike",
      "feeling-lucky",
    ],
    mapLink: `${startPoint}Caramel,+Zimmerstraße,+Berlin/@52.5078437,13.3930289,18.59z/data=!3m1!5s0x47a851d6b7a15137:0xf17af2b347a48425!4m14!4m13!1m5!1m1!1s0x47a85152c7a7f411:0xf454b46331cb7df7!2m2!1d13.3982198!2d52.5082933!1m5!1m1!1s0x47a851d6b5da5de5:0x6d138a3c563602af!2m2!1d13.3931424!2d52.5076905!3e2`,
    menuLink: "http://www.caramelberlin.de/pdf/menue_aktuell.pdf",
  },
];

export const people = [
  {
    name: "Daniel",
    noGoPlaces: ["Taka Fish House | Kotti"], // Daniel doesn't like fishes, they offer only fishes
    noGoTags: ["asian"],
  },
  {
    name: "Anna",
    noGoPlaces: ["Papa", "Choppaluna"],
  },
  {
    name: "Agustin",
    noGoPlaces: ["Papa", "Choppaluna"],
  },
  {
    name: "Robert",
    mustTags: ["vegan-friendly", "reachable-without-a-bike"],
    noGoPlaces: ["Spaetzle"],
  },
  {
    name: "Farida",
    noGoPlaces: ["Maximilian"],
  },
  {
    name: "Heiko",
    noGoPlaces: ["Yusuf - Falafel, Halloumi & Schawarma"],
  },
  {
    name: "Axel",
    mustTags: ["has-sitting-places"],
  },
  {
    name: "Günther",
  },
  {
    name: "Mahmoud",
  },
  {
    name: "Johannes",
    noGoPlaces: ["Spaetzle"],
    noGoTags: ["burger"], // unless bun ist glutenfree
  },
];

export default options;
