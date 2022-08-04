export const MENU_MAP = {
  home: {path: '/', label: 'Home'},
  jsonKeySorter: {label: 'JSON Key Sorter', path: '/json-key-sorter'},
  internetSpeedTest: {label: 'Internet Speed Test', path: '/internet-speed-test'},
  compareJSON: {label: 'Compare JSON', path: 'compare-json'},
  urlEncoder: {label: 'URL Encode/Decode', path: '/url-en-decoder'},
  urlParser: {label: 'URL Parser', path: '/url-parser'},
  formatters: {label: 'Formatters', path: '/formatters'},
  whiteboard: {label: 'Quick Whiteboard', path: '/whiteboard'},
  umlTools: {label: 'UML Tools', path: '/uml-tools'},
  fileSharing: {label: 'Quick File Sharing', path: '/quick-file-share'},
  temporaryEmail: {label: 'Temporary Email', path: '/temp-emails'},
  textManipulation: {label: 'Text Manipulation', path: '/text-manipulation'},
  qrCodeGenerator: {label: 'QR Code Generator', path: '/qr-code'},
  tokenGenerator:{label:'Token Generator', path: '/token-generator'}
};

// TODO change base url
export let basePath = 'http://localhost:3000';

export const birdNames = [
  'abbotts-babbler',
  'abbotts-booby',
  'abyssinian-ground-hornbill',
  'african-crowned-crane',
  'african-emerald-cuckoo',
  'african-firefinch',
  'african-oyster-catcher',
  'albatross',
  'alberts-towhee',
  'alexandrine-parakeet',
  'alpine-chough',
  'altamira-yellowthroat',
  'american-avocet',
  'american-bittern',
  'american-coot',
  'american-goldfinch',
  'american-kestrel',
  'american-pipit',
  'american-redstart',
  'amethyst-woodstar',
  'andean-goose',
  'andean-lapwing',
  'andean-siskin',
  'anhinga',
  'anianiau',
  'annas-hummingbird',
  'antbird',
  'antillean-euphonia',
  'apapane',
  'apostlebird',
  'araripe-manakin',
  'ashy-thrushbird',
  'asian-crested-ibis',
  'avadavat',
  'azure-jay',
  'azure-tanager',
  'azure-tit',
  'baikal-teal',
  'bald-eagle',
  'bald-ibis',
  'bali-starling',
  'baltimore-oriole',
  'bananaquit',
  'band-tailed-guan',
  'banded-broadbill',
  'banded-pita',
  'banded-stilt',
  'bar-tailed-godwit',
  'barn-owl',
  'barn-swallow',
  'barred-puffbird',
  'barrows-goldeneye',
  'bay-breasted-warbler',
  'bearded-barbet',
  'bearded-bellbird',
  'bearded-reedling',
  'belted-kingfisher',
  'bird-of-paradise',
  'black-&-yellow-broadbill',
  'black-baza',
  'black-cockato',
  'black-francolin',
  'black-skimmer',
  'black-swan',
  'black-tail-crake',
  'black-throated-bushtit',
  'black-throated-warbler',
  'black-vulture',
  'black-capped-chickadee',
  'black-necked-grebe',
  'black-throated-sparrow',
  'blackburniam-warbler',
  'blonde-crested-woodpecker',
  'blue-coau',
  'blue-grouse',
  'blue-heron',
  'blue-throated-toucanet',
  'bobolink',
  'bornean-bristlehead',
  'bornean-leafbird',
  'bornean-pheasant',
  'brandt-cormarant',
  'brown-crepper',
  'brown-noody',
  'brown-thrasher',
  'bulwers-pheasant',
  'bush-turkey',
  'cactus-wren',
  'california-condor',
  'california-gull',
  'california-quail',
  'canary',
  'cape-glossy-starling',
  'cape-longclaw',
  'cape-may-warbler',
  'cape-rock-thrush',
  'capped-heron',
  'capuchinbird',
  'carmine-bee-eater',
  'caspian-tern',
  'cassowary',
  'cedar-waxwing',
  'cerulean-warbler',
  'chara-de-collar',
  'chattering-lory',
  'chestnet-bellied-euphonia',
  'chinese-bamboo-partridge',
  'chinese-pond-heron',
  'chipping-sparrow',
  'chucao-tapaculo',
  'chukar-partridge',
  'cinnamon-attila',
  'cinnamon-flycatcher',
  'cinnamon-teal',
  'clarks-nutcracker',
  'cock-of-the-rock',
  'cockatoo',
  'collared-aracari',
  'common-firecrest',
  'common-grackle',
  'common-house-martin',
  'common-iora',
  'common-loon',
  'common-poorwill',
  'common-starling',
  'coppery-tailed-coucal',
  'crab-plover',
  'crane-hawk',
  'cream-colored-woodpecker',
  'crested-auklet',
  'crested-caracara',
  'crested-coua',
  'crested-fireback',
  'crested-kingfisher',
  'crested-nuthatch',
  'crested-oropendola',
  'crested-shriketit',
  'crimson-chat',
  'crimson-sunbird',
  'crow',
  'crowned-pigeon',
  'cuban-tody',
  'cuban-trogon',
  'curl-crested-aracuri',
  'd-arnauds-barbet',
  'dark-eyed-junco',
  'demoiselle-crane',
  'double-barred-finch',
  'double-brested-cormarant',
  'double-eyed-fig-parrot',
  'downy-woodpecker',
  'dusky-lory',
  'eared-pita',
  'eastern-bluebird',
  'eastern-golden-weaver',
  'eastern-meadowlark',
  'eastern-rosella',
  'eastern-towee',
  'elegant-trogon',
  'elliots-pheasant',
  'emerald-tanager',
  'emperor-penguin',
  'emu',
  'enggano-myna',
  'eurasian-golden-oriole',
  'eurasian-magpie',
  'european-goldfinch',
  'european-turtle-dove',
  'evening-grosbeak',
  'fairy-bluebird',
  'fairy-tern',
  'fiordland-penguin',
  'fire-tailled-myzornis',
  'flame-bowerbird',
  'flame-tanager',
  'flamingo',
  'frigate',
  'gambels-quail',
  'gang-gang-cockatoo',
  'gila-woodpecker',
  'gilded-flicker',
  'glossy-ibis',
  'go-away-bird',
  'gold-wing-warbler',
  'golden-cheeked-warbler',
  'golden-chlorophonia',
  'golden-eagle',
  'golden-pheasant',
  'golden-pipit',
  'gouldian-finch',
  'gray-catbird',
  'gray-kingbird',
  'gray-partridge',
  'great-gray-owl',
  'great-jacamar',
  'great-kiskadee',
  'great-potoo',
  'greator-sage-grouse',
  'green-broadbill',
  'green-jay',
  'green-magpie',
  'grey-plover',
  'groved-billed-ani',
  'guinea-turaco',
  'guineafowl',
  'gurneys-pitta',
  'gyrfalcon',
  'hammerkop',
  'harlequin-duck',
  'harlequin-quail',
  'harpy-eagle',
  'hawaiian-goose',
  'hawfinch',
  'helmet-vanga',
  'hepatic-tanager',
  'himalayan-bluetail',
  'himalayan-monal',
  'hoatzin',
  'hooded-merganser',
  'hoopoes',
  'hornbill',
  'horned-guan',
  'horned-lark',
  'horned-sungem',
  'house-finch',
  'house-sparrow',
  'hyacinth-macaw',
  'iberian-magpie',
  'ibisbill',
  'imperial-shaq',
  'inca-tern',
  'indian-bustard',
  'indian-pitta',
  'indian-roller',
  'indigo-bunting',
  'inland-dotterel',
  'ivory-gull',
  'iwi',
  'jabiru',
  'jack-snipe',
  'jandaya-parakeet',
  'japanese-robin',
  'java-sparrow',
  'kagu',
  'kakapo',
  'killdear',
  'king-vulture',
  'kiwi',
  'kookaburra',
  'lark-bunting',
  'lazuli-bunting',
  'lesser-adjutant',
  'lilac-roller',
  'little-auk',
  'long-eared-owl',
  'magpie-goose',
  'malabar-hornbill',
  'malachite-kingfisher',
  'malagasy-white-eye',
  'maleo',
  'mallard-duck',
  'mandrin-duck',
  'mangrove-cuckoo',
  'marabou-stork',
  'masked-booby',
  'masked-lapwing',
  'mikado-pheasant',
  'mourning-dove',
  'myna',
  'nicobar-pigeon',
  'noisy-friarbird',
  'northern-cardinal',
  'northern-flicker',
  'northern-fulmar',
  'northern-gannet',
  'northern-goshawk',
  'northern-jacana',
  'northern-mockingbird',
  'northern-parula',
  'northern-red-bishop',
  'northern-shoveler',
  'ocellated-turkey',
  'okinawa-rail',
  'orange-brested-bunting',
  'oriental-bay-owl',
  'osprey',
  'ostrich',
  'ovenbird',
  'oyster-catcher',
  'painted-bunting',
  'palila',
  'paradise-tanager',
  'parakett-akulet',
  'parus-major',
  'patagonian-sierra-finch',
  'peacock',
  'pelican',
  'peregrine-falcon',
  'philippine-eagle',
  'pink-robin',
  'pomarine-jaeger',
  'puffin',
  'purple-finch',
  'purple-gallinule',
  'purple-martin',
  'purple-swamphen',
  'pygmy-kingfisher',
  'quetzal',
  'rainbow-lorikeet',
  'razorbill',
  'red-bearded-bee-eater',
  'red-bellied-pitta',
  'red-browed-finch',
  'red-faced-cormorant',
  'red-faced-warbler',
  'red-fody',
  'red-headed-duck',
  'red-headed-woodpecker',
  'red-honey-creeper',
  'red-naped-trogon',
  'red-tailed-hawk',
  'red-tailed-thrush',
  'red-winged-blackbird',
  'red-wiskered-bulbul',
  'regent-bowerbird',
  'ring-necked-pheasant',
  'roadrunner',
  'robin',
  'rock-dove',
  'rosy-faced-lovebird',
  'rough-leg-buzzard',
  'royal-flycatcher',
  'ruby-throated-hummingbird',
  'rudy-kingfisher',
  'rufous-kingfisher',
  'rufuos-motmot',
  'samatran-thrush',
  'sand-martin',
  'sandhill-crane',
  'satyr-tragopan',
  'scarlet-crowned-fruit-dove',
  'scarlet-ibis',
  'scarlet-macaw',
  'scarlet-tanager',
  'shoebill',
  'short-billed-dowitcher',
  'smiths-longspur',
  'snowy-egret',
  'snowy-owl',
  'sora',
  'spangled-cotinga',
  'splendid-wren',
  'spoon-biled-sandpiper',
  'spoonbill',
  'spotted-catbird',
  'sri-lanka-blue-magpie',
  'steamer-duck',
  'stork-billed-kingfisher',
  'strawberry-finch',
  'striped-owl',
  'stripped-manakin',
  'stripped-swallow',
  'superb-starling',
  'swinhoes-pheasant',
  'tailorbird',
  'taiwan-magpie',
  'takahe',
  'tasmanian-hen',
  'teal-duck',
  'tit-mouse',
  'touchan',
  'townsends-warbler',
  'tree-swallow',
  'tropical-kingbird',
  'trumpter-swan',
  'turkey-vulture',
  'turquoise-motmot',
  'umbrella-bird',
  'varied-thrush',
  'venezuelian-troupial',
  'vermilion-flycather',
  'victoria-crowned-pigeon',
  'violet-green-swallow',
  'violet-turaco',
  'vulturine-guineafowl',
  'wall-creaper',
  'wattled-curassow',
  'wattled-lapwing',
  'whimbrel',
  'white-browed-crake',
  'white-cheeked-turaco',
  'white-necked-raven',
  'white-tailed-tropic',
  'white-throated-bee-eater',
  'wild-turkey',
  'wilsons-bird-of-paradise',
  'wood-duck',
  'yellow-bellied-flowerpecker',
  'yellow-cacique',
  'yellow-headed-blackbird'
];
