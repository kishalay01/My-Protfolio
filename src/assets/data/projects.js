import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/image1.jpeg';
import NetflixImg from '../images/Netflix.jpg';
import TeslaImg from '../images/Tesla.jpg';
import TodoImg from '../images/Todo.png';
import WeatherImg from '../images/Weather.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Netflix-Clone',
    desc:
      'This is the completely Netflix clone website.I created this using React Js and this is completely responsive.',
    img: NetflixImg,
  },
  {
    id: uuidv4(),
    name: 'Tesla-Clone',
    desc:
      'This is the tesla clone using React-Redux and Styled Components.This is mobile responsive website.',
    img: TeslaImg,
  },
  {
    id: uuidv4(),
    name: 'TodoList App',
    desc:
      'Using this app you can store your Todo for work and this is very much helpful for studens for make their daily Routine. ',
    img: TodoImg,
  },
  {
    id: uuidv4(),
    name: 'Weather App',
    desc:
      'This is the dynamic weather app using api you can check weather details of any City you want.I build this using Js.',
    img: WeatherImg,
  },
  {
    id: uuidv4(),
    name: 'Basic Calculator',
    desc:
      'A Calculator for help to solve mathematical problems.I made this using pure Javascript and little bit of Css.',
    img: ProjectImg,
  },
];

export default projects;
