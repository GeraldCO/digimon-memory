import './App.css';
import React, { useState } from 'react';
import ImageCard from './components/ImageCard.js'
import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';
import image4 from './images/4.webp';
import image5 from './images/5.jpg';
import image6 from './images/6.jpg';
import image7 from './images/7.jpg';
import image8 from './images/8.webp';
import image9 from './images/9.jpg';
import image10 from './images/10.webp'
import image11 from './images/11.webp'
import image12 from './images/12.png'

 

function App() {

	const images = [
		image1,
		image2,
		image3,
		image4,
		image5,
		image6,
		image7,
		image8,
		image9,
		image10,
		image11,
		image12
	];

	const [ listImgElements , setListImgElements] = React.useState(images);
	const [ clickedImages, setClickedImages ] = React.useState([]);
	//const [gameStatus, setGameStatus] = useState(true);
	const [score, setScore] = useState(0);
	const [highestScore, setHighestScore] = useState(0);


	React.useEffect(() => {
		// Update the document title using the browser API
		setListImgElements(images);		
	},[]);

	function shuffle(array) {
		let currentIndex = array.length
		let randomIndex;
	
		// While there remain elements to shuffle...
		while (currentIndex !== 0) {
		
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;
		
			// And swap it with the current element.
			[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
		}
		console.log('shuffleing');

		return array;
	}
	
	const clickImage = function (url){
		for(let i= 0; i < clickedImages.length; i++){
			if(clickedImages[i] === url){
				setScore(0);
				setClickedImages([]);
			}
		}

		
		setClickedImages( (oldImages)=> [...oldImages, url ]);
		setListImgElements(shuffle(listImgElements));
		setScore((prevScore)=> prevScore + 1 );
		setHighestScore((prevHighestScore)=> {
			if(prevHighestScore <= score ){
				return score;
			} else {
				return (prevHighestScore);
			}
			});
			
	}
  return (
    <div className="App">
		<header>
			<div>
				<h1>
					Digimon memory game
				</h1>
				<p>Get points by clicking on an image but don't click on any more than once!</p>
			</div>
			<div>
				<p className='points'> score: {score}</p>
				<p className='points'>Best score: {highestScore > score ? highestScore : score}</p>
			</div>
		</header>
		
		<div className='grid-container'>
			{
				listImgElements.map((e) => {
					return <ImageCard key={e} src={e} onClick={clickImage}/>
				})
			}			
		</div>
		
    </div>
  );
}

export default App;
