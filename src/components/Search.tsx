type SearchProps = {
    loadUser: (userName: string) => Promise<void>;
}

import { useState, KeyboardEvent } from "react";
import { BsSearch } from "react-icons/bs";
import classes from './Search.module.css';


const Search = ({ loadUser }: SearchProps) => {
    
    const handleKeyDown = (e: KeyboardEvent) => {
        if(e.key === "Enter"){
            loadUser(userName);
        }
    }

    const [userName, setUserName] = useState("");

    return (
        <div className={classes.search}>
            <h2>Busque por usuario</h2>
            <p>Conheça seus melhores repositórios</p>
            <div className={classes.search_container}>
                <input type="text" placeholder="Digite o nome do user" 
                onKeyDown={handleKeyDown}
                onChange={(e) => {
                    // Setando na variavel userName o valor que o usuario digita pego no evento de change
                    setUserName(e.target.value);
                }} />
                <button onClick={() => loadUser(userName)}>
                    <BsSearch />
                </button>
            </div>
        </div>
    )
}

export default Search;