import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import Context from '../context/Context';

function Home() {

    const name = useContext(Context);
    console.log("name: ", name);
    return (
        <>
            <div className='main-content'>
                <h1 className='page-heading'>HOME</h1>
                <div className='card-div'>
                    <p>
                        Want to know location detials and weather details of any specific city/town?
                    </p>
                    <p>
                        Click this button which sends you to the search page 👇
                    </p>
                    <div className='home-button-div'>
                    <Link to="/search">
                    <button className='btn btn-primary'>
                        GO TO SEARCH PAGE
                    </button>
                    </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
