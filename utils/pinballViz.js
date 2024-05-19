/**********************
 * 
 * PWA
 * 
 */
window.onload = () => {
    "use strict";
  
    if ( "serviceWorker" in navigator ) {
      navigator.serviceWorker.register( "../sw.js" );
    }
  };
  
/**********************
 * Tracking Events
 */
const trackInteraction = ( type, dims = {} ) => gtag( 'event', type, dims );

/**********************
 * Pinball Data
 */
const pinballData = {
    "_id": "659c0b07e672b4d69374e6c6",
    "channelName": "competition-corner",
    "weekNumber": 188,
    "periodStart": "2024-01-08",
    "periodEnd": "2024-01-14",
    "table": "Banzai Run (Williams 1988)",
    "authorName": "TastyWasps, RothbauerW, Sixtoe, Redbone, Apophis, JPSalas, Aubrel, EbIsLit, Redbone, Lio, Freylis, Destruk",
    "versionNumber": "1.01",
    "vpsId": "U83TvLj0JE",
    "mode": "default",
    "tableUrl": "https://vpuniverse.com/files/file/17811-banzai-run-williams-1988/",
    "romUrl": "http://www.vpforums.org/index.php?app=downloads&showfile=909",
    "romName": "bnzai_l3",
    "b2sUrl": "https://vpuniverse.com/files/file/13322-banzai-run-williams-1988-marquee-backglass/",
    "season": null,
    "currentSeasonWeekNumber": 33,
    "notes": null,
    "scores": [
        {
            "username": "tastywasps",
            "userAvatarUrl": "https://cdn.discordapp.com/avatars/406927861627355145/645b51faec2328c2fbb101a52a17c6e5.webp",
            "score": 9786660,
            "diff": 4654100,
            "mode": "default",
            "posted": "01/10/2024 06:00:43",
            "points": 12
        },
        {
            "username": "pinstratsdan",
            "userAvatarUrl": "https://cdn.discordapp.com/avatars/455659136777191425/3065b5cbb515ad97f1c4fc73d6a57b99.webp",
            "score": 6456500,
            "diff": 1437860,
            "mode": "default",
            "posted": "01/09/2024 12:26:54",
            "points": 10
        },
        {
            "username": "ballmrk",
            "userAvatarUrl": "https://cdn.discordapp.com/avatars/887351015043653663/941d8780e75b4271cd062c13cecd9fb8.webp",
            "score": 5676540,
            "diff": 2708930,
            "mode": "default",
            "posted": "01/10/2024 02:41:41",
            "points": 9
        },
        {
            "username": "primetime5k",
            "userAvatarUrl": "https://cdn.discordapp.com/avatars/713782752662781982/88195e524aa76cd8e6307b78524bf8d7.webp",
            "score": 5363380,
            "diff": 2344470,
            "mode": "default",
            "posted": "01/14/2024 02:01:36",
            "points": 8
        },
        {
            "username": "mikepmcs",
            "userAvatarUrl": "https://cdn.discordapp.com/embed/avatars/0.png",
            "score": 4748350,
            "diff": 1745950,
            "mode": "default",
            "posted": "01/10/2024 13:12:02",
            "points": 7
        },
        {
            "username": "sergiostubborngamer",
            "userAvatarUrl": "https://cdn.discordapp.com/embed/avatars/0.png",
            "score": 3419100,
            "diff": 185130,
            "mode": "default",
            "posted": "01/12/2024 05:00:07",
            "points": 6
        },
        {
            "username": "den_laef",
            "userAvatarUrl": "https://cdn.discordapp.com/avatars/618736726478815232/93b82a5dd5fe774520c2116813f59be9.webp",
            "score": 3406650,
            "diff": 405270,
            "mode": "default",
            "posted": "01/14/2024 00:55:21",
            "points": 5
        },
        {
            "username": "lminimart",
            "userAvatarUrl": "https://cdn.discordapp.com/avatars/975365507794493490/c5e007672c76a09f26066bc10b8ded41.webp",
            "score": 3346760,
            "diff": 381150,
            "mode": "default",
            "posted": "01/13/2024 16:42:37",
            "points": 4
        },
        {
            "username": "krondorf",
            "userAvatarUrl": "https://cdn.discordapp.com/avatars/475614338607087617/ec3bb8ed636ffaad755c7da8ea68de8b.webp",
            "score": 3201930,
            "diff": 1393700,
            "mode": "default",
            "posted": "01/13/2024 04:25:43",
            "points": 3
        },
        {
            "username": "emb417",
            "userAvatarUrl": "https://cdn.discordapp.com/avatars/718313274164117505/1e488b873bedd65a46cee6cd9a4bf998.webp",
            "score": 2881360,
            "diff": 691970,
            "mode": "default",
            "posted": "01/15/2024 02:14:02",
            "points": 2
        },
        {
            "username": "janke23",
            "userAvatarUrl": "https://cdn.discordapp.com/avatars/1007411473259188326/a7ba5405cc342b2898e3842b86a95b09.webp",
            "score": 2768050,
            "diff": 1457530,
            "mode": "default",
            "posted": "01/09/2024 16:46:44",
            "points": 1
        },
        {
            "username": "luckidog",
            "userAvatarUrl": "https://cdn.discordapp.com/avatars/624239060935901224/0d0dd0cb5279a541e123a47a187eccd6.webp",
            "score": 2618710,
            "diff": 2618710,
            "mode": "default",
            "posted": "01/14/2024 04:56:30",
            "points": 1
        },
        {
            "username": "kalamo_",
            "userAvatarUrl": "https://cdn.discordapp.com/avatars/212319448596611072/825ec96011d25f9d588fd579920c954b.webp",
            "score": 2413020,
            "diff": 2413020,
            "mode": "default",
            "posted": "01/09/2024 20:48:37",
            "points": 1
        },
        {
            "username": "j.r.0815",
            "userAvatarUrl": "https://cdn.discordapp.com/embed/avatars/0.png",
            "score": 1981590,
            "diff": 1981590,
            "mode": "default",
            "posted": "01/14/2024 16:07:04",
            "points": 1
        },
        {
            "username": "mkds_luke",
            "userAvatarUrl": "https://cdn.discordapp.com/avatars/770653529223462962/e075a0a37518a9743956a75d71d38c0b.webp",
            "score": 1773400,
            "diff": 592960,
            "mode": "default",
            "posted": "01/08/2024 18:51:54",
            "points": 1
        },
        {
            "username": "goldfinger_81",
            "userAvatarUrl": "https://cdn.discordapp.com/avatars/227059062305456128/13206a8df2d543b92264c09c3e40319f.webp",
            "score": 1732080,
            "diff": 1732080,
            "mode": "default",
            "posted": "01/12/2024 01:11:40",
            "points": 1
        },
        {
            "username": "xerohour",
            "userAvatarUrl": "https://cdn.discordapp.com/avatars/195352139982176256/e4b27ddab4ce93d963715066890a1c12.webp",
            "score": 1717780,
            "diff": 1717780,
            "mode": "default",
            "posted": "01/09/2024 15:48:30",
            "points": 1
        },
        {
            "username": "smedleybumblechuck",
            "userAvatarUrl": "https://cdn.discordapp.com/avatars/999038745242239028/5ae60b29788c6270e3258027168c4d5f.webp",
            "score": 1660640,
            "diff": 87490,
            "mode": "default",
            "posted": "01/11/2024 15:53:06",
            "points": 1
        },
        {
            "username": "static9",
            "userAvatarUrl": "https://cdn.discordapp.com/avatars/239950968114905091/b23de7e71202dcb97f93a531a160e2ad.webp",
            "score": 1644320,
            "diff": 530930,
            "mode": "default",
            "posted": "01/14/2024 03:18:13",
            "points": 1
        },
        {
            "username": "gerhardk_74946",
            "userAvatarUrl": "https://cdn.discordapp.com/embed/avatars/0.png",
            "score": 1427200,
            "diff": 1427200,
            "mode": "default",
            "posted": "01/10/2024 21:43:48",
            "points": 1
        },
        {
            "username": "wylte",
            "userAvatarUrl": "https://cdn.discordapp.com/avatars/222859065720700939/d526c51492c65de53cca149529b6c41e.webp",
            "score": 1415730,
            "diff": 1415730,
            "mode": "default",
            "posted": "01/13/2024 04:46:49",
            "points": 1
        },
        {
            "username": "codebrewer",
            "userAvatarUrl": "https://cdn.discordapp.com/avatars/761771973629313095/738f54322c2cd908b2e6072a31fae598.webp",
            "score": 1100040,
            "diff": 154270,
            "mode": "default",
            "posted": "01/14/2024 06:51:02",
            "points": 1
        },
        {
            "username": "djdfrag",
            "userAvatarUrl": "https://cdn.discordapp.com/avatars/345266146947104768/930636a6748dc1bad3bec197a3881ff3.webp",
            "score": 1096410,
            "diff": 1096410,
            "mode": "default",
            "posted": "01/11/2024 04:26:16",
            "points": 1
        },
        {
            "username": "vincewrx",
            "userAvatarUrl": "https://cdn.discordapp.com/avatars/217683793287315457/f240a0ac5b8b1c37f68032416e0ca4fb.webp",
            "score": 1095760,
            "diff": 1095760,
            "mode": "default",
            "posted": "01/08/2024 16:37:06",
            "points": 1
        },
        {
            "username": "nelsonpj",
            "userAvatarUrl": "https://cdn.discordapp.com/avatars/447126071008165903/08d239ec62c0872559ec337c54aa9551.webp",
            "score": 1034920,
            "diff": 1034920,
            "mode": "default",
            "posted": "01/08/2024 22:25:28",
            "points": 1
        },
        {
            "username": "imaginarysonicscape",
            "userAvatarUrl": "https://cdn.discordapp.com/avatars/860867937987985409/a48989df13b9829e10839bc0a7b81cca.webp",
            "score": 1024900,
            "diff": 1024900,
            "mode": "default",
            "posted": "01/13/2024 13:18:53",
            "points": 1
        }
    ],
    "teams": [],
    "isArchived": true
};

/**********************
 * Helpers
 */

function getUsernames(item) {
    return [item.username];
}

function getScores(item) {
    return [item.score];
}

function getPoints(item) {
    return [item.points];
}

/**********************
 * Data Visualization
 */
const pinballViz = {
    canvas: document.getElementById( 'pinballViz' ),
    config: {
        type: 'bar',
        data: {
          labels: pinballData.scores.map( getUsernames ),
          datasets: [
            {
              label: pinballData.table,
              data: pinballData.scores.map( getPoints )
            }
          ]
        },
        options: {
            animation: true,
            plugins: {
              legend: {
                display: true
              },
              tooltip: {
                enabled: true
              }
            }
        }
    },
    initialize: function( canvas, config ){
        this.canvas = canvas || this.canvas;
        this.config = config || this.config;
        new Chart( this.canvas, this.config );
    }
}

// 'https://virtualpinballchat.com:6080/api/v1/weeksByChannelName'
/***
 fetch( 'https://www.metaforiq.com/vpc-weekly.json', {
    mode:  'no-cors',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
})
.then( response => response.body )
.then( data => { 
    console.log(data);
    pinballViz.initialize();
} )
.catch( error => console.error(error) );
 */

pinballViz.initialize();