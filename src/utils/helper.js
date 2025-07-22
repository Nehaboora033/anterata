import { Facebook, Graphics, Help, Instagram, Linkedien, Logout, Portfolio, Timeline, Twitter, } from "./icon";
import Img1 from './../assets/webp/img1.webp'
import Img2 from './../assets/webp/img2.webp'
import Img3 from './../assets/webp/img3.webp'
import Img4 from './../assets/webp/img4.webp'
import setting from './../assets/png/settings.png'
import profile from './../assets/png/user.png'

export const Social_Links = [
  {
    icon: Facebook,
    link: "https://www.facebook.com/",
  },
  {
    icon: Instagram,
    link: "https://www.instagram.com/",
  },
  {
    icon: Twitter,
    link: "https://twitter.com/",
  },
  {
    icon: Linkedien,
    link: "https://in.linkedin.com/",
  },
];

export const SideBar_Data = [
  {
    icon: Timeline,
    name: "Timeline",
    link: "/",
  },
  {
    icon: Graphics,
    name: "Graphics",
    link: "graphics",
  },
  {
    icon: Portfolio,
    name: "Portfolio",
    link: "portfolio",
  },
];

export const Sidebar_DownData = [
  {
    icon: Help,
    name: "Help",
  },
  {
    icon: Logout,
    name: "Logout",
  },
];

export const Hero_Card = [
  {
    title: 'Working Capital Loan',
    info: 'Type of instrument',
  },
  {
    title: '16.00%',
    info: 'Interest rate',
  },
  {
    title: '$ 5,565,099.00',
    info: 'Total amount',
  },
]

export const Invest_Data = [
  {
    title: 'Net Income',
    value: "$00.00",
  },
  {
    title: 'Maximum investment per user',
    value: '$ 5565099.00'
  },
  {
    title: 'Your investment in the product',
    value: '$ 00.00',
  },
]

export const Gallery = [
  {
    image: Img1,
  },
  {
    image: Img2,
  },
  {
    image: Img3,
  },
  {
    image: Img4,
  },
]

export const  Accordian = [
  {
    image: profile,
    name: 'profile',
  },
  {
    image:setting,
    name: 'setting',

  },
  {
    image: Logout,
    name: 'Logout',
  },

]