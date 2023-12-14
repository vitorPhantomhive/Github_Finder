import { UserProps } from "../types/user";
import Search from "../components/Search";
import { useState } from "react";
import User from "../components/User";
import Error from "../components/Error";

const Home = () => {
    //iniciamos um ESTADO para controlar o valor da variavel user, o setUser é uma função que recebe o tipo UserProps ou NULL e iniciamos o valor de user como null
    const [user, setUser] = useState<UserProps | null>(null);

    const [error, setError] = useState(false);

    /**
     * Função que pesquisa o usuario na api do github
     * @param {string} userName - nome do usuario a ser pesquisado
     */
    const loadUser = async (userName: string) => {
            setError(false);
            setUser(null);
            
        const res = await fetch(`https://api.github.com/users/${userName}`);

        const data = await res.json();

        if(res.status === 404){
            setError(true);
            return;
        }


        const {avatar_url, login, location, followers, following} = data;

        const userData: UserProps = {
            avatar_url,
            login,
            location,
            followers,
            following
        };
        
        setUser(userData);
    }

    return (
        <div>
            <Search loadUser={loadUser}/>
            {user && <User {...user}/>}
            {error &&  <Error/>}
        </div>
    )
}
export default Home