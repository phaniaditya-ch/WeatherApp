import React, { useState } from 'react';
import Wcard from './Wcard';
import { useContext } from 'react';
import Context from '../context/Context';

function Search() {

	const props = useContext(Context);
	let [value, setValue] = useState("");
	let [items, setItems] = useState([]);
	const handleChange = (event) => {
		setValue(event.target.value);
	}

	const getAttributes = async (valueInput) => {
		let api = "https://api.weatherapi.com/v1/current.json?key=9e2bc817157543ada30181318232605&q=" + valueInput + "&aqi=no";
		fetch(api)
			.then((res) => {
				if (res.ok) {
					return res.json();
				}
				else {
					throw new Error('Not found, enter valid details');
				}
			})
			.then((details) => {
				setItems([{
					l: details.location,
					c: details.current
				}])
			}
			).catch((err) => {
				alert("Not found, enter valid details");
				console.log("rejected :", err);
			})
	}

	const handleClick = () => {
		let dup = props.state;
		dup.name = value;
		props.update(dup);
		getAttributes(value);
	}

	return (
		<div>
			<div className='form-div'>
				<label>Search for a location.</label>
				<input value={value} onChange={handleChange} name='location-input' />
				<button className='btn btn-primary mt-4' onClick={handleClick}>SUBMIT</button>
			</div>
			<div className='tables-div'>
				{
					items.map((element) => {
						return <div className='table-div' key={element}>
							<Wcard elements={element} />
						</div>
					})
				}
			</div>
		</div>
	)
}

export default Search