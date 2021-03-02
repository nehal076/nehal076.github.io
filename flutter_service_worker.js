'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "129e3c44d1c0d09a343fc59ec786c7fb",
".git/config": "8bdd0f3c720bba7c4dd2f024cc08808f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a707003e64dcc06c9144aedb8e7e1384",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "cdccde77e56c86069b7b321d92129995",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9ec7b83c369d1a8d8202f4de4d90cef5",
".git/logs/refs/heads/master": "9ec7b83c369d1a8d8202f4de4d90cef5",
".git/logs/refs/remotes/origin/master": "d3d5107b8206eb709551f2a3ceca4eb0",
".git/objects/00/9f4c1b51fc55c9523c9be6c98119f05daa6554": "7154cd208c79e96644faef6017d08f70",
".git/objects/06/d536cb2dcf7c06ee79ea694312f751ebfe4d05": "0137c09b67db77fbde00aec2e7892b0c",
".git/objects/0b/6016618629b18e92c4cbd1fcd03f20a1005b05": "32b07e537feb2943ba1522422b3a31f5",
".git/objects/0b/c98bda32707022e5a22b06dbbe163cbea301c8": "b8060a385023b7b84daa6c48439e0d6a",
".git/objects/0e/5b278a4c0591d331969b6579b41a69864c44ad": "c8b6cbc28fb1f781fe331422525bec20",
".git/objects/0f/a6b675c0a52be9242fc68269eefce46828ad43": "3732df75a452960f40377486a7eb2955",
".git/objects/0f/a6d4a095b0a42fec781f17ee85577114fdb9e1": "b053cf786ca329aba7c2b34ecf450ea9",
".git/objects/0f/fdce26a73686b6e6bf625f29afe782a7b7740a": "9dbe2bfdfdedf9516b0f94c843ab74cf",
".git/objects/10/bab658b85e3c799e0a251bff116d8126a1b03f": "faa9e6eed6c3710d7e51593455444c5a",
".git/objects/19/544317e34f78b41ffb0ba2557120925ec4e756": "9b28d6e67b0b9206956073ae96b5db2c",
".git/objects/1a/a2d504f02e9e49332c90c5e5056dcde1ab3906": "c723f2567c6c4a9028bfbd4351bdf39a",
".git/objects/1a/a98304e59ade84a3ea585ce80918f4f2fcd1fc": "8e1a81deb89a0251cec7fc6cc3af5ce4",
".git/objects/20/02bfe1a479f8ca528c203967c8332505d0aba1": "859598dfa60374dc1e7f34f84524f3bc",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/21/6ba596e29c041e6b59dbeffa03462d69d570e5": "449943abe1b74812bcd2a4cc411919c4",
".git/objects/26/1584e17727ce592f853d5cec3b9ef0642f142d": "837b98aa1bd148fa9cf14fee6579a7eb",
".git/objects/27/53f04d83aa2121cb4777d62f7024e2a3cecc2e": "2bbc7732ae4a5fee3e3a5b2c25d51ec8",
".git/objects/27/fa42e61adaa345949db0ec5f2d37430d94f52d": "d69015b684e1838e6e6f448bbfde7e4f",
".git/objects/2c/164e6c7131f9e6d2c89a6ed1765b1b31317d59": "92abacc28f62d4c330ec986845d4ef92",
".git/objects/33/3fc3465eb41989a2e8b6dc79596294f47a4d6b": "99343c08a1a2dcdcc4c5e8ff158beec9",
".git/objects/37/da5f9d7cf621776420b2422e40ff2573f103e8": "afc9c23ec56732d0c4ddd06c7cdb1748",
".git/objects/39/271bbf93e556652e8b2db532457de8dd96a25b": "84f5099b73a205d489c0498a48a61302",
".git/objects/3c/85d2c89c760d198dc80d6ee24066123cf290f4": "67a829b3708594bcc27883eb8bbb4aeb",
".git/objects/3c/bd37e25c16c0e252bb0accda1835116a57719d": "85cc67df2953298474867c847f856bee",
".git/objects/3e/680a5bb5e15f12c4ba0b8d3f996f27ab030d74": "48d6383674fa0a520d98acdfcdf9e40f",
".git/objects/43/b01d61a8fd1085c1b6275c7fd9b3d3f2361ac9": "ef94ae0efd79e6ba0ea11570f7feda93",
".git/objects/45/1124a452e6120fc327030fdc826e7c5bf4eff2": "23aebd0b7fa204b84565b92e1b48c6b5",
".git/objects/46/222840fbb06165d12180065e930efeb3589c12": "1fd932ea53a0140092a1d9f077a73fa6",
".git/objects/48/5ae049457dc0251da1dd9a1c248b4d11cdf117": "46b0c1270f4b112e751d97738f9e0d4b",
".git/objects/48/92b4dc3c328790e83479b52a4a44b8000e2286": "1906552c05e770719c3fd4e171b06dcb",
".git/objects/48/acef37bc7f3decaf0629bb0fbc8e824d31db3a": "988a2e5626846b0c65e8f79db696978e",
".git/objects/4a/aa5ac54b81c0a50594b5985c988e286411eda3": "820d0841f590011d6513e94db95ef6b0",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/4bc97720900580aaadf63874a53215ff2e1dd9": "85c722a920609515072c0aa7798473c6",
".git/objects/4c/980dbbd223587a1b7ef5f69b64c975649961e3": "5730824dbab1c6afc6fb36150d09182f",
".git/objects/55/bb173f49672753464f988f9b90625416b867a2": "fef63df05256214d7e85cb5483b2e700",
".git/objects/58/a1753b9a47531f7c518ce4bf60325a46e572e0": "e21da677be9041aa0208c64b81dd3dce",
".git/objects/5a/2e687b989415291d0f55d928418751db6dd4d0": "2c4eb42db7645059d08fef18ddaaaf7b",
".git/objects/5a/6ae93e8d7542d20b29673c951e711daca9f428": "179d84a231eb5aad52d223b424852b63",
".git/objects/5a/d3d3b76dacfa9a3df1b78ac364eb81d21a6c8a": "742c3cb39195220e4c3e34730bfe6cd3",
".git/objects/5e/f4a7bde955e41b78923db7c4f207fc3dcd8966": "eaa7a825c03a17b690c6c9465b279940",
".git/objects/5f/7253a591aba445bc21d36e88f4c73ff31fdc46": "731d7cb6956e564abfb1ad0543e108fd",
".git/objects/5f/bbd704ef82787bc8460d840c33c6cda2fb6816": "fddce1593b7365fdee99f0ad4a557465",
".git/objects/61/6f3bb7237a6039854f611791bcc3f94eedbbee": "4889e2d7ba649fbdb760a2f39021af9c",
".git/objects/61/e7566c998725c6e47a87026af409c3b465bea0": "3a0259cf88f4b2f3813e17c8cb32284e",
".git/objects/64/491d7f0163c0760d5932e05d249383ed5a5b2f": "f2efbf44c188fb5698af301c21cb1fec",
".git/objects/64/5e8344edc3e0aa4df67afe74325433197b7dd0": "4b4f9ceeb86f240cb6d47adf87d55b26",
".git/objects/65/734597efd133012e3d61b6b5c0976b35749ebc": "197b25a5b7df75e55080408ee40b8e04",
".git/objects/65/f82f2f7245e254ffea46fd66a4285b7cf3a24f": "0d3bd8c80b4f93f89036c2778b55402c",
".git/objects/67/395a565f8f6c977710b4e21bd6fb97608ecc15": "edb74d441fb1377f3db9f4763144139e",
".git/objects/67/596b4ed3d3fc2aae20f2c534a84dc82991b8ff": "998d0c146b25210c0f023bf61608efcb",
".git/objects/69/ce58af390cc2e3b64f9608c263aa5047f76a1c": "ef8024f32e5ea37396a5288412c7938b",
".git/objects/6d/c6b4157baabf85e0f32c06918fc0c07731dd0a": "4ed35a3206c30ed4d096620f83785b76",
".git/objects/6e/4bb661d9b6a0aa6956205ae7808bec715ec824": "f34f5472c5db7a300bdfe86707918406",
".git/objects/74/ed2708b3e33f73c0dffbd0fa6ce563bdeaaf61": "9772416bc21dce297a75ffca5acf3cef",
".git/objects/78/85a78c61a460470cbb36227e57cca6bc24e5c4": "02ad7412a6d0bfc957b86e85f00426b0",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/81/18437802295336ef311600e0cf9a7656dd5a40": "6649151e9ebd7bb5725cabdf6bd473e8",
".git/objects/84/536b2aa3aaa8a30fffcc6673a9b10e16f14c63": "421729414708105605157b408161f3a0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/87fa3563e330c62c2e22ff1ff38038418955b5": "32b2e2a8c0d01fbefb3b2ba0fc2c845d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/9a/87d0a386356746e308c32c169ab5baecc3df78": "ae334eff171ad644894092cb750f8c0c",
".git/objects/9c/2c7136563d56730e5e4d5767566e17eba55d5a": "f5f7b60c98311b7c62a8c1cc99951b0b",
".git/objects/9c/aeceff6ee36f95ffad2b4724260805e88be23d": "717c26eff828baf3283ba1c82c383bfd",
".git/objects/9e/0aa5bdcb0d9877531256d8d21443d33a0d088d": "46b9e29f517efe3c5b2073f1ff6c69b9",
".git/objects/9f/ab3adb23d63362f57ea87a50eed9d9af323b02": "60a5ed1aa5e2ec27fcccf7a2cbbd0fdc",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/9d863797bc472435c6100bd78fd8eb198a5c9d": "5195b02cc2eb9e2ac836d93f8c1bbadb",
".git/objects/a6/8c492ebb8b3f83f4967fed25feba29089e156b": "8e1e5df7876efb768235a8d261d23d76",
".git/objects/a6/92cd4439d7055ba0fb5c34b1fae6117b05584c": "a01aeb5cdf3c0ec92ed03514203c429e",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a9/a64d84f0a2e918449592ae9da92e5c6ab46272": "59c9bd5db6663effd6946da17f1e3b5c",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/605f9e2e3c347708a810435ba3a7debc52e1df": "6625299185704ce425994aa2ca00c523",
".git/objects/ac/19b329149abc2af5022ff4a0d870df6deb8800": "d5d17af325de4deccb03b8d79486c6bc",
".git/objects/ac/84d3a207c46aeef651d6db50acef77e3d03573": "b9a75b290ce9d7afc9562bb816644ae2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/7349f1fa692f24e1660692ebf1390c8cb91606": "ac9e001124e0e195706b22e006897980",
".git/objects/ba/73daa115f27cd2cae5b64c0b320f83ac8558fc": "42dcb87ea49828f6607a70aa622250e3",
".git/objects/bb/eb221249eeba8037ee13148a6ec36ef02dd320": "fcdd4e90f34799e9b4cf8534b1b42577",
".git/objects/bc/25f0c432ceee03cea34dc34c44f4fb3c6e5e0d": "f0146ce20272ddb8a6c32e772a638b5a",
".git/objects/be/e09426ab74616a96867f4f01da8b86e864f2a5": "79ec2e393480e1d1b2becda19c7e9a82",
".git/objects/be/f84be6e6a4f91ed3a78a589ffa2f54e675a7d9": "608b103d8cf06950c47af63ae3aad4d1",
".git/objects/c4/192631f25b34d77a7f159aa0da0e3ae99c4ef4": "546c588f67767790fc70913da1a77878",
".git/objects/c5/92b98a0af68cbfbe521f2df1db6f83d4a3f0f6": "e77c52c97f32ddef2affe47c4b2d2f68",
".git/objects/c6/0010ee12105dcdd39ee5b7ccc78fc7c24a437f": "fe5cdda74433f76a0c1a05b88924396a",
".git/objects/c6/9b0570b9643ef67a759ac67cbb08b4f8d69210": "5ae2e3db3c0eff15f3449188bc000087",
".git/objects/cb/85e3485f56eafbf9cb1d43c6addd213c0b0887": "b4ca8031ed243416a3d4545a309a41d5",
".git/objects/cc/32831888e97e9ba4cb77ba3f311e76871be687": "a24e1b6eb71cebb1b3b385454da70a2f",
".git/objects/cd/02df3f6edc0cc9250a16b4e437a1df0cb73817": "7d1c6e8efe59c23d52431181eaa75cec",
".git/objects/d0/1b79c3eb99755c4af663d87e13889e1c34594c": "0f1bba0e85da79f17fc670e807fba4c3",
".git/objects/d0/a89ff8ba1f31798716689bcd45782f355bcf80": "2bf862c4291fb632550b5b6bb5c0af0e",
".git/objects/d2/5b6905cbb25db3fcc6319332325352f3d499fb": "7e1f67b8745b9702d8d0d849bad03a71",
".git/objects/d2/64b9f27196c0aa24f99f6e1accc5a0155c692f": "531182c76dc076f6e7f9e171b0017cf1",
".git/objects/d6/c2bd4d845be41f8d6e6f9cbd2684bb026f1464": "6965e2b331177b3dd690b3900c3df470",
".git/objects/d7/31fc173530dbdc4bbb8b8e1903463461f5a490": "78d48fd1190d799f88119c2c4826a028",
".git/objects/d8/ecaec3b95f407d3eff1d9c9a3029a89f58b657": "f7cdb820afec116ebce47f60052692e9",
".git/objects/db/fd0501496833d04e275ee2b9a495af28e0048c": "6c80444e776ad28fa6340d8c32224d53",
".git/objects/dd/46388b378789da4b194bfc40fe404e14d5bd97": "ab33d3ffb260681a655b4317c5a6c596",
".git/objects/de/e01273eb39a4e93a59def981bbbddb24c49ae2": "9454bb19649eff7532f6a54bc7d95c70",
".git/objects/e1/074e2aa4807e132497f509fc1a2afb6033e607": "b56960d5e528aaff2e76094708ea8663",
".git/objects/e4/4e959508ac9e7ea05f49c28ba930f9ced38b95": "bf54d8e9271129e90edcbf87d766a657",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e7/0cdde546a86f2f97cd245791b67a64c3d95299": "127fe35e4c96776b4db2a194acd81014",
".git/objects/e8/426d33d1a9c82cdab79f87e167fb11c9fd1b15": "8d672c68bb0a0c5af14af89d61ee0762",
".git/objects/ea/444b2eec9fa9eec278ef905022949ca31bc188": "6d575950199833c82a2b1aae2a6400cd",
".git/objects/eb/76313e82b9e5d8e81baf50e919ed867d9d3f1d": "4109840b8648777d761bc05b92ab4f2a",
".git/objects/ec/16652609c26624f398c476b90230570534f289": "e88e5287daabda42fe7ea168206cb0d4",
".git/objects/ec/3a11c0d174fa0be92fdf61a9bad0bc8e3d9e34": "1a4e18f62f3d897b70b5f6acc9592af7",
".git/objects/ef/a6fdd2329f6bb3068d49f994a11c4a25e63438": "1aea69ab6827ebf5895748b70209da77",
".git/objects/f1/c51886dcb172162ca7afcec4aa204ddbe39ec1": "0cd6f082955bd944388346dd5f71f513",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f7/47014284088fcb0d1089092a7a8068d0479bad": "a72ca724095ec06bfda3344d423a7927",
".git/objects/f9/3cd37698964bd2ec9547b5417c4541707775ae": "2243e871a4f0997deaf312bd4f353ecb",
".git/objects/fc/73ef846d2d1f4e7141fa0f221d5b5a19e810ea": "6aad01a4fa9818267349a99c4bd3b161",
".git/objects/fd/de3d8a92b8733e32af771189a35ba8f0c471ee": "8ef59dc7901934c45627a22edcab8d96",
".git/objects/fe/e0a33c06a6981d918a0eb71a192d2583a411f1": "d11cb10fda10ad790570a414e7505dae",
".git/ORIG_HEAD": "89e8f046156acfa89d9bf40b609e6a0f",
".git/refs/heads/master": "a2aec8a9a5aa07b9a6111d43d326fcbc",
".git/refs/remotes/origin/master": "a2aec8a9a5aa07b9a6111d43d326fcbc",
"assets/AssetManifest.json": "539d92b35b7180b371bd4b4e964237e3",
"assets/assets/about.html": "08a72ccf84fd1a2813c696cf6c4a68db",
"assets/assets/avatar.jpg": "b504a57caeb035b6c3f89d7d12ddb4af",
"assets/assets/certificates/allaboutweb.jpg": "cedb456f7900667189380130dba3eaba",
"assets/assets/certificates/aws.jpg": "ed9387b31b3b3438383f47a5a9c53c95",
"assets/assets/certificates/coursera.jpg": "1987a2fd0996062c03546ec233f9ae97",
"assets/assets/certificates/ducat.jpg": "133811e672b2c922c914d6c3ac151f77",
"assets/assets/certificates/ezgif-4-806e842745b7.gif": "25168fbb21e5b9aea3df3b67a8216687",
"assets/assets/certificates/ezgif-4-ec127365072d.gif": "1c10c7aa4eead3d6206ab6456590a1ec",
"assets/assets/certificates/freecodecamp.jpg": "b240e629043c3ab867b069a1b3734771",
"assets/assets/certificates/googlecloud.jpg": "2fdea4acce2c30cb63509d8eacd97e3e",
"assets/assets/certificates/ngGirls.jpg": "7c525f7a296ad612dcc57085a063d274",
"assets/assets/certificates/wscube.jpg": "80134d0f3f7e2e73b84c0dc8c222c00a",
"assets/assets/facebook.png": "021ada146ffb7c1753557ff29618d04c",
"assets/assets/FontManifest.json": "4b859210b1cb7cc0af63babc29eac841",
"assets/assets/github.png": "d22ee3727a7216019c3848df6eafa024",
"assets/assets/GoogleSansRegular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"assets/assets/instagram.png": "26631a4043b14dff84180bdf51c3cacb",
"assets/assets/linkedin.png": "926e2dcf5ab4220a359867614556df68",
"assets/assets/medium.png": "fb86f4060325caef8ea1f0fad0d25f40",
"assets/assets/medium_light.png": "bd516690c99267a778885736015befe8",
"assets/assets/moon.png": "a270b8a10d1a9a52441bf5a322dd1b86",
"assets/assets/sun.png": "b24592b9951338710eeac6e07fe16fdc",
"assets/assets/twitter.png": "8f35a40403a84631c4125c4f1859c7a6",
"assets/assets/works/bookstore.jpg": "947b111d410519870b9e733c2c3f55af",
"assets/assets/works/jh.jpg": "e4a490f17f8fe8a1f7eb11e7eddc7a91",
"assets/assets/works/medihelp.jpg": "307e6906c251d91bb6202b3dd4736d7a",
"assets/assets/works/poke.jpg": "f1e333c73d02d6f06912c58abf61fc43",
"assets/assets/works/ristorante.png": "eb267f35256591eb7733b73c0455dbfe",
"assets/assets/works/sg.jpg": "a509e56acf4931bf2d8f78401550a516",
"assets/FontManifest.json": "8f036bb4279e4857a966e259b818f8ae",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "a0ddc310d0a0074150d8fdac2baf3aba",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "96c8bfdda9df637b291b97f695c97001",
"/": "96c8bfdda9df637b291b97f695c97001",
"main.dart.js": "d3d98c923709c3f7667da21d65c915b2",
"manifest.json": "0aa4fd08aa77783b3b88e76cbea7481f",
"version.json": "5e565c2aded765818567bdcb7cc16cfc",
"_config.yml": "d178df8a46be3ea7f599296e24430ce0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
