const activities = [
  {
    id: '1',
    title: 'GulliPark Thiais',
    type: 'Playground',
    age: '3-10',
    favorite: false,
    package: '1',
    location: { latitude: 48.7639, longitude: 2.3755 },
    image: require('../../assets/images/Activity/guillipark-thiais.jpg'),
    recommended: true,
  },
  {
    id: '2',
    title: 'Haumea Baby Spa',
    type: 'Spa',
    age: '0-3',
    favorite: true,
    package: '3',
    location: { latitude: 48.8566, longitude: 2.3522 },
    image: require('../../assets/images/Activity/spa.jpg'),
    recommended: true,
  },
  {
    id: '3',
    title: 'Funland Park',
    type: 'Playground',
    age: '3-8',
    favorite: false,
    package: '1',
    location: { latitude: 48.7200, longitude: 2.3000 },
    image: require('../../assets/images/Activity/funland.jpg'),
    recommended: false,
  },
  {
    id: '4',
    title: 'Aquapark Kids',
    type: 'Water Park',
    age: '2-6',
    favorite: false,
    package: '2',
    location: { latitude: 48.9100, longitude: 2.2600 },
    image: require('../../assets/images/Activity/aquaparkkids.png'),
    distance : 0.5,
  },
  {
    id: '5',
    title: 'Le Petit Zoo',
    type: 'Zoo',
    age: '0-6',
    favorite: true,
    package: '2',
    location: { latitude: 48.8700, longitude: 2.3200 },
    image: require('../../assets/images/Activity/LePetitZoo.jpg'),
    distance : 0.1,
  },
  {
    id: '6',
    title: 'Bubbles Spa',
    type: 'Spa',
    age: '0-3',
    favorite: false,
    package: '3',
    location: { latitude: 48.8500, longitude: 2.3000 },
    image: require('../../assets/images/Activity/bubleSpa.jpg'),
    distance : 1,
  },
  {
    id: '7',
    title: 'Jungle Gym',
    type: 'Playground',
    age: '3-10',
    favorite: false,
    package: '1',
    location: { latitude: 48.9500, longitude: 2.2500 },
    image: require('../../assets/images/Activity/JungleGym.jpg'),
  },
  {
    id: '8',
    title: 'Planetarium Paris',
    type: 'Museum',
    age: '4-10',
    favorite: false,
    package: '4',
    location: { latitude: 48.8200, longitude: 2.4000 },
    image: require('../../assets/images/Activity/PlanetariumParis.jpg'),
    description : "Grâce à ses dix vidéoprojecteurs, le planétarium bénéficie d'un système de projection Laser Haute Définition en 8K. Le détail illimité du simulateur astronomique vous donnera une sensation de profondeur, d’immensité et rendra l’expérience impressionnante... Laissez-vous surprendre ! ",
    price : "15-20",
    date : "12 juillet 2025",
    address : "30 Av. Corentin Carlou, 75019 Paris"

  },
  {
    id: '9',
    title: 'Artistic Workshop',
    type: 'Arts',
    age: '5-10',
    favorite: true,
    package: '4',
    location: { latitude: 48.7800, longitude: 2.3700 },
    image: require('../../assets/images/Activity/ArtisticWorkshop.webp'),
  },
  {
    id: '10',
    title: 'La Cité des Enfants',
    type: 'Museum',
    age: '3-12',
    favorite: true,
    package: '2',
    location: { latitude: 48.8900, longitude: 2.3500 },
    image: require('../../assets/images/Activity/LaCitedesEnfants.jpg'),
  },
  {
    id: '11',
    title: 'Rollerblade Park',
    type: 'Sports',
    age: '6-15',
    favorite: false,
    package: '1',
    location: { latitude: 48.7600, longitude: 2.4100 },
    image: require('../../assets/images/Activity/aquaparkkids.png'),
  },
  {
    id: '12',
    title: 'Baby Bubbles',
    type: 'Spa',
    age: '0-3',
    favorite: true,
    package: '3',
    location: { latitude: 48.8500, longitude: 2.3500 },
    image: require('../../assets/images/Activity/aquaparkkids.png'),
  },
  {
    id: '13',
    title: 'Vélo au Parc',
    type: 'Outdoors',
    age: '5-10',
    favorite: false,
    package: '1',
    location: { latitude: 48.8700, longitude: 2.2800 },
    image: require('../../assets/images/Activity/aquaparkkids.png'),
  },
  {
    id: '14',
    title: 'Circuit Aventure',
    type: 'Outdoors',
    age: '6-12',
    favorite: true,
    package: '2',
    location: { latitude: 48.9200, longitude: 2.3000 },
    image: require('../../assets/images/Activity/aquaparkkids.png'),
  },
  {
    id: '15',
    title: 'Parc Asterix',
    type: 'Playground',
    age: '3-12',
    favorite: false,
    package: '1',
    location: { latitude: 49.0000, longitude: 2.4700 },
  },
  {
    id: '16',
    title: 'Exploradôme',
    type: 'Museum',
    age: '4-10',
    favorite: false,
    package: '4',
    location: { latitude: 48.8500, longitude: 2.3300 },
  },
  {
    id: '17',
    title: 'Parc Zoologique de Paris',
    type: 'Zoo',
    age: '0-10',
    favorite: true,
    package: '2',
    location: { latitude: 48.8400, longitude: 2.3700 },
  },
  {
    id: '18',
    title: 'Climbing Wall',
    type: 'Sports',
    age: '7-15',
    favorite: false,
    package: '1',
    location: { latitude: 48.8900, longitude: 2.4000 },
  },
  {
    id: '19',
    title: 'Kids Art Center',
    type: 'Arts',
    age: '3-6',
    favorite: false,
    package: '4',
    location: { latitude: 48.8100, longitude: 2.3200 },
  },
  {
    id: '20',
    title: 'Green Escape',
    type: 'Outdoors',
    age: '4-10',
    favorite: true,
    package: '2',
    location: { latitude: 48.9200, longitude: 2.2500 },
  },

  {
   id: '21',
   title: 'Funland Park',
   type: 'Playground',
   age: '3-8',
   favorite: false,
   package: '1',
   location: { latitude: 48.7200, longitude: 2.3000 },
 },
 {
   id: '22',
   title: 'Aquapark Kids',
   type: 'Water Park',
   age: '2-6',
   favorite: false,
   package: '2',
   location: { latitude: 48.9100, longitude: 2.2600 },
 },
 {
   id: '23',
   title: 'Le Petit Zoo',
   type: 'Zoo',
   age: '0-6',
   favorite: true,
   package: '2',
   location: { latitude: 48.8700, longitude: 2.3200 },
 },
 {
   id: '24',
   title: 'Bubbles Spa',
   type: 'Spa',
   age: '0-3',
   favorite: false,
   package: '3',
   location: { latitude: 48.8500, longitude: 2.3000 },
 },
 {
   id: '25',
   title: 'Jungle Gym',
   type: 'Playground',
   age: '3-10',
   favorite: false,
   package: '1',
   location: { latitude: 48.9500, longitude: 2.2500 },
 },
 {
   id: '26',
   title: 'Planetarium Paris',
   type: 'Museum',
   age: '4-10',
   favorite: false,
   package: '4',
   location: { latitude: 48.8200, longitude: 2.4000 },
 },
 {
   id: '27',
   title: 'Artistic Workshop',
   type: 'Arts',
   age: '5-10',
   favorite: true,
   package: '4',
   location: { latitude: 48.7800, longitude: 2.3700 },
 },
 {
   id: '28',
   title: 'La Cité des Enfants',
   type: 'Museum',
   age: '3-12',
   favorite: true,
   package: '2',
   location: { latitude: 48.8900, longitude: 2.3500 },
 },
 {
   id: '29',
   title: 'Rollerblade Park',
   type: 'Sports',
   age: '6-15',
   favorite: false,
   package: '1',
   location: { latitude: 48.7600, longitude: 2.4100 },
 },
 {
   id: '30',
   title: 'Baby Bubbles',
   type: 'Spa',
   age: '0-3',
   favorite: true,
   package: '3',
   location: { latitude: 48.8500, longitude: 2.3500 },
 },
 {
   id: '31',
   title: 'Vélo au Parc',
   type: 'Outdoors',
   age: '5-10',
   favorite: false,
   package: '1',
   location: { latitude: 48.8700, longitude: 2.2800 },
 },
 {
   id: '32',
   title: 'Circuit Aventure',
   type: 'Outdoors',
   age: '6-12',
   favorite: true,
   package: '2',
   location: { latitude: 48.9200, longitude: 2.3000 },
 },
 {
   id: '33',
   title: 'Parc Asterix',
   type: 'Playground',
   age: '3-12',
   favorite: false,
   package: '1',
   location: { latitude: 49.0000, longitude: 2.4700 },
 },
 {
   id: '34',
   title: 'Exploradôme',
   type: 'Museum',
   age: '4-10',
   favorite: false,
   package: '4',
   location: { latitude: 48.8500, longitude: 2.3300 },
 },
 {
   id: '35',
   title: 'Parc Zoologique de Paris',
   type: 'Zoo',
   age: '0-10',
   favorite: true,
   package: '2',
   location: { latitude: 48.8400, longitude: 2.3700 },
 },
 {
   id: '36',
   title: 'Climbing Wall',
   type: 'Sports',
   age: '7-15',
   favorite: false,
   package: '1',
   location: { latitude: 48.8900, longitude: 2.4000 },
 },
 {
   id: '37',
   title: 'Kids Art Center',
   type: 'Arts',
   age: '3-6',
   favorite: false,
   package: '4',
   location: { latitude: 48.8100, longitude: 2.3200 },
 },
 {
   id: '38',
   title: 'Green Escape',
   type: 'Outdoors',
   age: '4-10',
   favorite: true,
   package: '2',
   location: { latitude: 48.9200, longitude: 2.2500 },
 },
 {
   id: '39',
   title: 'Petting Zoo',
   type: 'Zoo',
   age: '2-8',
   favorite: false,
   package: '1',
   location: { latitude: 48.7800, longitude: 2.4100 },

 },
 {
   id: '40',
   title: 'Music Time',
   type: 'Arts',
   age: '4-7',
   favorite: true,
   package: '3',
   location: { latitude: 48.7600, longitude: 2.4500 },
 },
 {
   id: '41',
   title: 'Giant Slide',
   type: 'Playground',
   age: '3-8',
   favorite: false,
   package: '1',
   location: { latitude: 48.8900, longitude: 2.2800 },
 },
 {
   id: '42',
   title: 'Mini Golf Adventure',
   type: 'Sports',
   age: '5-10',
   favorite: true,
   package: '2',
   location: { latitude: 48.8600, longitude: 2.3700 },
 },
 {
   id: '43',
   title: 'Paint & Play',
   type: 'Arts',
   age: '3-7',
   favorite: false,
   package: '4',
   location: { latitude: 48.9100, longitude: 2.3500 },
 },
];

export default activities;
