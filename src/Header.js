import React, { useEffect, useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './Header.css'
import Body from './Body';
export const WordContext = React.createContext();   

function Header() {

    const [searchWord,setSearchWord] = useState("")

    return (
        <div className="header">
            <WordContext.Provider value={searchWord}>
                <div className="header_logo">
                    <p>CountryPedia</p>
                </div>
                <div className="header_search">
                    <div className="header_search_icon">
                        <SearchIcon />
                    </div>
                    <div className="header_search_input">
                        <input value={searchWord} type="text" id="search_input" placeholder="Search Country"
                        onChange={
                            e=>{
                                setSearchWord(e.target.value)
                            }
                        }
                        />
                    </div>
                </div>
                {console.log(searchWord)}
            
                        <Body />
            </WordContext.Provider>
        </div>
    )
}

export default Header
