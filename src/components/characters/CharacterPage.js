import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom';
import './CharacterPage.css'


function Character({ location }){
	const history = useHistory();

	const [char, setChar] = useState('');
	const [occu, setOccu] = useState('');
	const [img, setImg] = useState('');
	const [birthday, setBirthday] = useState('');
	const [status, setStatus] = useState('');
	const [nick, setNick] = useState('');
	const [actname, setActname] = useState('');
	const [appearance, setAppearance] = useState('');
	const [quote, setQuote] = useState('');


	

	  // equivalent to componentDidMount, fires once when component mounts
	  useEffect(() => {
	    // get all the URLParams
	    const params = new URLSearchParams(window.location.search);
	    // get the q param
	    const q = params.get('q');
	    const o = params.get('o');
	    const i = params.get('i');
	    const d = params.get('d');
	    const s = params.get('s');
	    const n = params.get('n');
	    const an = params.get('an');
	    const a = params.get('a');
	    const qu = params.get('quote');

	    // set language in state to the q parameter
	    setChar(q ? q : 'Walter White');
	    setOccu(o ? o : 'No Occupation');
	    setImg(i ? i : 'No Image');
	    setBirthday(d ? d : 'Birthday not available');
	    setStatus(s ? s : 'Status Unavailable');
	    setNick(n ? n : 'No Nickname');
	    setActname(an ? an : 'Actor Name');
	    setAppearance(a ? a : 'No Appearance');
	    setQuote(qu ? qu : 'No Quotes');
	    //eslint-disable-next-line
	  }, []);


	return(
		<div className="char__page">
			<div className="char__img">
				<img src={img} alt="" className="char__img-img" />
			</div>

			<div className="char__data">
				<div className="char__name"> Name : {char} </div>
				<div className="char__occu">Occupation : {occu}</div>
				<div className="char__status">Status : {status}</div>
				<div className="char__nick">Nickname : {nick}</div>
				<div className="char__actname">Actor Name : {actname}</div>
				<div className="char__season">Seasons Appearance : {appearance}</div>
				<div className="char__quote">All Quotes : {quote}</div>
			</div>
			
		</div>
	)
}

export default Character

{/*
1. Name & Image of the character
2. Date of Birth
3. Occupation
4. Status (dead or alive)
5. Nickname (if present)
6. Actor who portrays the character
7. Seasons in which the character appears
8. All quotes by the character
*/}