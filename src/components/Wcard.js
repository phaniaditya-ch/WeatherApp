import React from 'react'

function Wcard(props) {
	let loc = props.elements.l;
	let curr = props.elements.c;
	// console.log("loc:", loc);
	// console.log("curr", curr);
	return (
		<div className='card-container'>
			<div className="table-div">
				<table>
					<thead>
					<tr>
						<th>Location</th>
						<td>{loc.name}</td>
					</tr>
					<tr>
						<th>Region</th>
						<td>{loc.region}</td>
					</tr>
					<tr>
						<th>Country</th>
						<td>{loc.country}</td>
					</tr>
					<tr>
						<th>Co-ords</th>
						<td>{loc.lat} lat, {loc.lon} lon</td>
					</tr>
					<tr>
						<th>Local time</th>
						<td>{loc.localtime}</td>
					</tr>
					</thead>
				</table>
			</div>
			<div className="table-div">
				<table>
					<thead>
					<tr>
						<td colSpan={2}>
							<div className='image-div'>
								<img className='image' alt='Patchy rain img' src={curr.condition.icon} />
							</div>
						</td>
					</tr>
					<tr>
						<th>Temperature</th>
						<td>{curr.temp_c}&deg;C</td>
					</tr>
					<tr>
						<th>Feels like</th>
						<td>{curr.feelslike_c}&deg;C</td>
					</tr>
					<tr>
						<th>Condition</th>
						<td>{curr.condition.text}</td>
					</tr>
					<tr>
						<th>Wind</th>
						<td>{curr.wind_kph} km/h</td>
					</tr>
					<tr>
						<th>Wind direction</th>
						<td>{curr.wind_dir}</td>
					</tr>
					<tr>
						<th>Precipitation</th>
						<td>{curr.precip_mm} mm</td>
					</tr>
					<tr>
						<th>Humidity</th>
						<td>{curr.humidity}</td>
					</tr>
					<tr>
						<th>Visibility</th>
						<td>{curr.vis_km} km</td>
					</tr>
					<tr>
						<th>Gust</th>
						<td>{curr.gust_kph} km/h</td>
					</tr>
					</thead>
				</table>
			</div>
		</div>
	)
}

export default Wcard