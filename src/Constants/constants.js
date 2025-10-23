import { library } from '@fortawesome/fontawesome-svg-core';
import ItemRollRNG from '../assets/RNGSystem-icon.png';
import BiomeSpawnRNG from '../assets/RNGBiomeSystem-icon.jpg';
import PokemonRNG from '../assets/PokemonRNG-icon.png';
import HexGridAreaFill from '../assets/HexGridAreaFill-icon.jpg';
import Triangulate from '../assets/Triangulate-icon.png';

import Shop1 from '../assets/UIImages/Shop1.png';
import BattlePass1 from '../assets/UIImages/BattlePass1.png';
import Upgrades1 from '../assets/UIImages/Upgrades1.png';
import PlaytimeRewards1 from '../assets/UIImages/PlaytimeRewards1.png';
import Shop2 from '../assets/UIImages/Shop2.png';
import DailyRewards1 from '../assets/UIImages/DailyRewards1.png';
import Shop3 from '../assets/UIImages/Shop3.png';

import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  npmIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  pawsitivePrototype,
  memoryGame,
  avatar,
} from '../assets';

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  npmIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  avatar,
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
};

const introduction = {
  text: [
    "Hey there! Thanks for stopping by! (:",

		"I'm Jishnu Ganisetti, a 17-year-old based in California, USA, working in the world of game development. With over 3 years of experience in Roblox scripting and 1 year of experience as a Roblox UI Designer, I love creating interactive and fun experiences for players.",
    "Outside of coding, I'm passionate about exploring new technologies, gaming, and learning how to build engaging systems. My goal is to continue growing as a developer and connect with like-minded individuals who share the same enthusiasm for game development and innovation.",
    "Feel free to explore my portfolio, and I look forward to creating amazing things together!"
  ],
};

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'scriptingProjects',
    title: 'Scripting',
  },
  {
    id: 'uiDesignProjects',
    title: 'UI Design'
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const scriptingProjects = [
  {
    name: "Triangulate",
    description: 'A fast-paced cooperative factory game on Roblox. Players enable droppers, build conveyor setups, and route shapes into a selling pit to meet daily quotas. Includes procedurally-adjusted quotas, special round modifiers, a rune/shop system for persistent player modifiers, upgrade generation and application, and leaderboard/datastore integration for long-term stats and badges.',
    image: Triangulate,
    demo_link: 'https://youtu.be/9WqgkNeYZG8',
  },

  {
    name: "Pokemon RNG Simulator",
    description: 'A roll-based Pokémon unboxing experience on Roblox. every spin gives a random Pokémon based on weighted rarities. collect and equip your finds with dynamic scale and billboard effects, earn and stack temporary luck buffs to boost drop odds, and customize your spinner with gamepasses like fast roll and multi-roll for even more excitement.',
    image: PokemonRNG,
    demo_link: 'https://youtu.be/m_pMc9mVvv8',
  },

  {
    name: "HexGrid Area Fill",
    description: 'Smoothly claims and fills enclosed hex regions row by row, minimizing client lag. Utilizes BFS to detect interior tiles and animates ownership changes over Heartbeat.',
    image: HexGridAreaFill,
    demo_link: 'https://youtu.be/6q02WLSRCtE',
  },

  {
    name: "Biome Spawn RNG",
    description: 'A randomized biome-spawning system for Roblox. Every time a player resets, they\'re teleported to a biome based on set rarity chances (e.g., 50% for plains, 25% for desert). Each biome has unique visuals and behavior, including dynamic skyboxes and custom scripts.',
    image: BiomeSpawnRNG,
    demo_link: 'https://youtu.be/u4lrgaazyFk',
  },

  {
    name: "Item Roll RNG",
    description: 'An RNG-based luck game built in Roblox. Roll to unlock items of varying rarity, track your stats on the leaderboard, and equip your rarest finds to show off your luck in style.',
    image: ItemRollRNG,
    demo_link: 'https://youtu.be/-Ky1kCx2-Co',
  },
];

const uiDesignProjects = [
  {
    name: "Vote for an Upgrade",
    demo_image: Upgrades1,
  },
  
  {
    name: "Currency Shop",
    demo_image: Shop1,
  },

  {
    name: "Gems Shop",
    demo_image: Shop2,
  },

  {
    name: "Battlepass leveling",
    demo_image: BattlePass1,
  },

  {
    name: "Seasonal Playtime Rewards",
    demo_image: PlaytimeRewards1,
  },

  {
    name: "Daily Rewards",
    demo_image: DailyRewards1,
  },

  {
    name: "Blue Lock Shop",
    demo_image: Shop3,
  },
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: 'html',
    title: 'HTML',
    icon: htmlIcon,
    description:
      'I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.',
  },
  {
    id: 'css',
    title: 'CSS',
    icon: cssIcon,
    description:
    'I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.',
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    icon: jsIcon,
    description:
    'I have substantial experience in employing JavaScript to introduce interactivity and functionality into web pages, resulting in dynamic user interfaces.',
  },
  {
    id: 'react',
    title: 'React',
    icon: reactIcon,
    description:
      'I am well-versed in React, proficient in creating reusable components and managing application state using hooks and context.',
  },
  {
    id: 'java',
    title: 'Java',
    icon: javaIcon,
    description:
      'I have extensive experience utilizing Java for object-oriented programming (OOP) and implementing data structures.',
  },
  {
    id: 'aws',
    title: 'Amazon Web Services',
    icon: awsIcon,
    description:
      'I am certified in AWS and proficient in working with EC2 and RDS instances, leveraging the power of cloud computing for scalable and reliable infrastructure.',
  },
  {
    id: 'figma',
    title: 'Figma',
    icon: figmaIcon,
    description:
    'In my Figma skills, I unleash creativity, designing captivating user interfaces and collaborating seamlessly with designers and developers.',
  },
  {
    id: 'git',
    title: 'Git',
    icon: gitIcon,
    description:
    'I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.',
  },
  {
    id: 'github',
    title: 'GitHub',
    icon: githubIcon,
    description:
      'I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.',
  },
  {
    id: 'psql',
    title: 'Postgresql',
    icon: psqlIcon,
    description:
      'I have a strong command of PostgreSQL, encompassing a wide range of skills such as database normalization, triggers, front-end connectivity, and data analysis using software like Power BI.',
  },
  {
    id: 'vite',
    title: 'Vite',
    icon: viteIcon,
    description:
      'I have gained considerable experience working with Vite for approximately six months, leveraging its capabilities to build React websites and seamlessly deploy them on platforms like Netlify.',
  },
  {
    id: 'py',
    title: 'Python',
    icon: pyIcon,
    description:
      'With 3 years of Python experience, I am adept at coding functions and creating graphic interfaces using Tkinter.',
  },
  {
    id: 'npm',
    title: 'npm',
    icon: npmIcon,
    description:
      'When it comes to building web applications, I prefer using npm as my runtime environment over Yarn. I have expertise to develop powerful and scalable web applications.',
  },
  {
    id: 'neo',
    title: 'Neo4j',
    icon: neoIcon,
    description:
      'I am knowledgeable in Neo4j, the graph database management system. I have expertise in utilizing GraphOS to build robust recommendation systems, leveraging the strength of graph-based data modeling.',
  },
  {
    id: 'raspi',
    title: 'Raspberry Pi',
    icon: raspIcon,
    description:
      'I have hands-on experience with Raspberry Pi, where I utilized a virtual Linux machine to execute programs written in assembly language. This allowed me to explore low-level computing and develop efficient code for the Raspberry Pi platform.',
  },
  {
    id: 'eslint',
    title: 'Eslint',
    icon: eslintIcon,
    description:
      'I utilize ESLint to identify and resolve code issues, as well as standardize the structure of my projects. With ESLint, I ensure code quality and consistency throughout my development process.',
  },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export {
  media,
  introduction,
  scriptingProjects,
  uiDesignProjects,
  memoji,
  skills,
  markerSvg,
  icons,
};
