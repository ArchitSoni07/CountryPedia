import React, { useEffect, useState, useContext } from 'react'
import './Body.css'
import axios from 'axios'
import { WordContext } from './Header'

function Body() {

    const [country,setCountry] = useState({})
    const user = useContext(WordContext)
    useEffect(()=>{
        axios.get(`https://restcountries.eu/rest/v2/name/${user}`)
            .then(response => {
                console.log(response.data)
                setCountry(response.data)
            })
            .catch(err =>{
                console.log(err)
            })
    },[])
    return (

        <div className="body">
                <div className="result">
                    <div id="result_" className="name">Name : {country.name}</div>
                    <div id="result_" className="topleveldomain">Top Level Domain : {country.topLevelDomain}</div>
                    <div id="result_" className="callingCodes">Calling Codes : {country.callingCodes}</div>
                    <div id="result_" className="capital">Capital : {country.capital}</div>
                </div>
        </div>
    )
}


export default Body
