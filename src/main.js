import { generateJoke } from "./generateJoke";
import './styles/main.scss'
import logo from './assets/svg_logo.svg'

const constLogoImg = document.getElementById('logoImg'); 
constLogoImg.src = logo //Name des importierten svg´s (path/source) wird hier gesetzt.

const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke); 


// webpack global installiert und durch npm i -D webpack webpack-cli -> json Dateien erhalten. 

generateJoke();