const questions = [
    {
        "question": "Oh no! You and your date are caught up in a Valentine's Day cave tragedy! Which cave are you stuck in?",
        "a": "Glowworm Caves",
        "a-img": "https://media.timeout.com/images/105875360/1536/1152/image.jpg",
        "b": "Blue Grotto Caves",
        "b-img": "https://media.timeout.com/images/105875362/1536/1152/image.jpg",
        "c": "Marble Cathedral",
        "c-img": "https://media.timeout.com/images/105875361/1536/1152/image.jpg",
        "d": "Reed Flute Cave",
        "d-img": "https://media.timeout.com/images/105875359/1536/1152/image.jpg"
    },
    {
        "question": "Some say you need chemistry for love ❤️‍🔥 MIT says you need chemistry to graduate 💀. Choose an element.",
        "a": "Uranium",
        "a-img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/HEUraniumC.jpg/1200px-HEUraniumC.jpg",
        "b": "Carbon",
        "b-img": "https://static.dezeen.com/uploads/2021/06/Dezeen-guide-to-carbon_01-hero-852x479.jpg",
        "c": "Yttrium",
        "c-img": "https://www.chemistrylearner.com/wp-content/uploads/2018/02/Yttrium-Pictures.jpg",
        "d": "Sodium",
        "d-img": "https://www.health.com/thmb/2N5aZlsztGbblqojy5ET1L3CZRw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gettyimages-88175170-2000-40871c1cbb9442288b6a783588705e70.jpg"
    },
    {
        "question": "Growing up, what was your favorite Valentine's Day candy?",
        "a": "Pixy Stix",
        "a-img": "https://www.ferraracandyshopusa.com/sites/default/files/2022-05/small-2_13.jpg",
        "b": "Candy Hearts",
        "b-img": "https://gray-wilx-prod.cdn.arcpublishing.com/resizer/uK7g4dl9EuiZ9uJHoze-TRIcMaY=/1200x1800/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/QB57H727E5LIRH66APV77PNKCI.jpg",
        "c": "Box of Chocolates",
        "c-img": "https://static.onecms.io/wp-content/uploads/sites/19/2017/12/06/GettyImages-505595343-2000.jpg",
        "d": "Chocolate Rose",
        "d-img": "https://candylandstore.com/wp-content/uploads/2016/09/chocolate-rose.jpg"
    },
    {
        "question": "Not everything goes according to plan! Which unlucky situation do you most want to avoid on Valentine's Day?",
        "a": "Fired as CEO",
        "a-img": "https://www.cicar.com/html/images/logocicar-original.jpg",
        "b": "COVID on Vacation",
        "b-img": "https://medlineplus.gov/images/COVID19_share.jpg",
        "c": "Electric Car out of Power",
        "c-img": "https://electrek.co/wp-content/uploads/sites/3/2016/09/aaa-charging-truck.png",
        "d": "Lost Voice",
        "d-img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPvYYbNEuDLZit9cKhdHzdqyBgfo2n8LMvoizEIW4gx090PyEjrKB0599_tvWL0NaymgQ&usqp=CAU"
    },
    {
        "question": "Pick a Valentine's Day cat.",
        "a": "Franklin",
        "a-img": "https://us.123rf.com/450wm/lesovaia/lesovaia2111/lesovaia211100160/lesovaia211100160.jpg?ver=6",
        "b": "Carol",
        "b-img": "https://www.animalbehaviorcollege.com/wp-content/uploads/2019/09/Valentines-Day.jpg",
        "c": "Antonio",
        "c-img": "https://cdn.shopify.com/s/files/1/0182/9624/2240/articles/Love_Song_-_Cat_Model1_2000x_4499d999-149a-4e56-b0bc-4078ed1f98fe_1080x.jpg?v=1611337556",
        "d": "Rosa",
        "d-img": "https://i-10b32.kxcdn.com/2015/cat-valentine.jpg"
    },
    {
        "question": "Which rezhn of the Kcymaerxthaere is known for having the hottest singles in your area?",
        "a": "[pSambamsa Bdfadk]",
        "a-img": "https://i0.wp.com/maps.org/wp-content/uploads/2021/08/MAPS-Bulletin-2021-v2-Front-1200x630-1.png?fit=1200%2C630&ssl=1",
        "b": "kyjgswq elmeipsycdlrdep",
        "b-img": "https://i.ytimg.com/vi/kqPGHE4Ubew/maxresdefault.jpg",
        "c": "kNow Estrelliia",
        "c-img": "https://cdn.powerofpositivity.com/wp-content/uploads/2015/01/power-of-the-mind-study-1200x675.jpg",
        "d": "[feather]",
        "d-img": "https://www.treehugger.com/thmb/8JpTnetsSGclxjD3cSwXryN8CX0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2018__11__feathers-a51ccbea232e481cb263de664914305a.jpg"
    },
    {
        "question": "Time for a Valentine's Day Espresso! Where should the beans be sourced from?",
        "a": "Ethiopia",
        "a-img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_Ethiopia.svg/800px-Flag_of_Ethiopia.svg.png",
        "b": "Colombia",
        "b-img": "https://cdn.britannica.com/68/7668-004-08492AB7/Flag-Colombia.jpg",
        "c": "Guatemala",
        "c-img": "https://cdn.britannica.com/13/7213-004-FFC58C1D/Flag-Guatemala.jpg",
        "d": "Costa Rica",
        "d-img": "https://cdn.britannica.com/25/7225-004-65F33B16/Flag-Costa-Rica.jpg"
    },
    {
        "question": "Choose a Star Wars character to be your 💫 Valentine 💕.",
        "a": "Chewbacca",
        "a-img": "https://www.memesmonkey.com/images/memesmonkey/d5/d53cc994e552d0092fa948cedda7a57f.jpeg",
        "b": "Anakin",
        "b-img": "https://i.pinimg.com/originals/5f/f8/37/5ff8379f36f33901674f3d745ec3c356.jpg",
        "c": "Kylo Ren",
        "c-img": "https://i.pinimg.com/736x/2c/14/04/2c14042ebcf399195b6c2053b51bdefb--starwars-force.jpg",
        "d": "Yoda",
        "d-img": "https://pbs.twimg.com/media/Canm7BjUsAAgxYI.jpg"
    },
    {
        "question": "¿Qué actividad te gusta hacer más sin ropa?",
        "a": "Escalar",
        "a-img": "https://www.outsideonline.com/wp-content/uploads/2019/02/22/alex-honnold-free-solo-el-cap_s.jpg",
        "b": "Cocinar",
        "b-img": "https://www.you.co.uk/wp-content/uploads/2020/09/gordon-ramsay-unchartered-recipes.jpg",
        "c": "Tocar el Piano",
        "c-img": "https://d.newsweek.com/en/full/1989687/woman-playing-piano.jpg",
        "d": "Chingar",
        "d-img": "https://assets.reedpopcdn.com/the-sims-4-woohoo-7007-1581696154551.jpg/BROK/thumbnail/1200x900/quality/100/the-sims-4-woohoo-7007-1581696154551.jpg"
    },
    {
        "question": "Some claim that Danish is the language of love because it sounds so alluring... Choose a phrase in Danish.",
        "a": "Er du WiFi?",
        "a-img": "https://assets.euromoneydigital.com/dims4/default/037441f/2147483647/strip/true/crop/995x559+0+0/resize/840x472!/quality/90/?url=http%3A%2F%2Feuromoney-brightspot.s3.amazonaws.com%2F2c%2Fdd%2F1a63d309c6eb12225471a90a58f0%2Fserveimage",
        "b": "Rødgrød med Fløde",
        "b-img": "https://images.arla.com/recordid/654FB6BD-E580-4DB5-A66EE1A6027C4C23/rodgrod-med-flode.jpg?width=375&height=265&mode=crop",
        "c": "Søren Kierkegaard",
        "c-img": "https://images.mubicdn.net/images/film/223187/cache-626755-1609596431/image-w1280.jpg?size=800x",
        "d": "Dronning Margrethe II",
        "d-img": "https://denmark.dk/-/media/websites/denmarkdk/list-images/queen-margrethe-ll-of-denmark.ashx?mw=1600&hash=8CA6E7415D9D8BC7A0EE4C17793747E4"
    },
    {
        "question": "Choose the best place to go on a 🥵 hot 🌡️ date 🌶️.",
        "a": "Park Siam",
        "a-img": "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6c/47/1b.jpg",
        "b": "Bastard Cafe",
        "b-img": "https://live.staticflickr.com/692/22122019341_3dec230838_b.jpg",
        "c": "The Prado",
        "c-img": "https://www.livingtours.com/public/blog/posts/20190515174117-u80qZ0Z2.jpg",
        "d": "Playa de Benijo",
        "d-img": "https://i0.wp.com/lacosmopolilla.com/wp-content/uploads/2020/09/La-playa-de-Benijo-Tenerife-e1601198045270.jpg?ssl=1"
    },
    {
        "question": "Choose the most sensual piece of artwork.",
        "a": "The Great Masturbator",
        "a-img": "https://i.ebayimg.com/images/g/3QkAAOSwZPNcsv-j/s-l1600.jpg",
        "b": "The Statue of Liberty",
        "b-img": "https://www.history.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY1MTc1MTk3ODI0MDAxNjA5/topic-statue-of-liberty-gettyimages-960610006-promo.jpg",
        "c": "American Gothic",
        "c-img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg/1200px-Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg",
        "d": "The Better Mona Lisa",
        "d-img": "https://upload.wikimedia.org/wikipedia/commons/9/99/Gioconda_%28copia_del_Museo_del_Prado_restaurada%29.jpg"
    },
    {
        "question": "Everyone knows the only real way to find 😍 true love ✨ is on a reality dating show. Pick the most trashy.",
        "a": "90 Day Fiance",
        "a-img": "https://i.ytimg.com/vi/N1pk_d_fliM/maxresdefault.jpg",
        "b": "Too Hot to Handle",
        "b-img": "https://m.media-amazon.com/images/M/MV5BYmM0M2M3N2YtMzQ2OS00YTIzLTk4MWQtNzg1ZWFmNzE3NTEzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        "c": "Love Island",
        "c-img": "https://i.ytimg.com/vi/ClQ2Wj7FqOA/maxresdefault.jpg",
        "d": "The Bachelor in Paradise",
        "d-img": "https://media.zenfs.com/en/stylecaster_935/ad1d5b8d959e8100a1cf5c88fb25cb13"
    },
    {
        "question": "Which constellation is the most romantic to see on Valentine's day?",
        "a": "An Arrow",
        "a-img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyXjrp-a8X0ZnrqdcxWOSxknpaQxrVPSm4ICSZyZjK4CcQDmqtxF0yQIZE6UnMqrap5e4&usqp=CAU",
        "b": "Orion",
        "b-img": "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL29yaW9ucy1iZWx0LTMuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoiMTIwMCJ9fX0=",
        "c": "Leo",
        "c-img": "https://star-name-registry.com/modules/starconstpg/views/img/new/leo-cons-m.jpg",
        "d": "The Little Dipper",
        "d-img": "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/msnbc/Components/Photos/071012/071012_dippers_vmed_10a.jpg"
    },
    {
        "question": "Choose a 😩 sexy 💦 Airbnb for Valentine's Day night.",
        "a": "The Spaceship House",
        "a-img": "https://media.timeout.com/images/105862152/1536/1152/image.jpg",
        "b": "The Potato House",
        "b-img": "https://images2.dwell.com/photos/6063391372700811264/6531916973225750528/original.jpg?auto=format&q=35&w=1760",
        "c": "The Spice Girls' Bus",
        "c-img": "https://i.pcmag.com/imagery/roundup-products/0085Fe3CHiY0BtT5uaz3oAS.fit_lim.size_1688x950.v1659624966.jpg",
        "d": "The Pirate Ship",
        "d-img": "https://i.pcmag.com/imagery/roundup-products/00j7O9YdWf709PECZIt9gSH.fit_lim.size_1688x950.v1659561626.jpg"
    }
]

export default questions