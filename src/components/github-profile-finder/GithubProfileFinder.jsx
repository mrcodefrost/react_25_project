import { useEffect, useState } from 'react';
import './GithubProfileFinder.css';
import GithubCard from './GithubCard';

const GithubProfileFinder = () => {


    const [userName, setUserName] = useState('mrcodefrost');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);


    async function fetchGithubUserData() {

        setLoading(true);
        const response = await fetch(`https://api.github.com/users/${userName}`)

        const data = await response.json();

        if(data) {
            setUserData(data);
            setLoading(false);
            setUserName('');
        }

        console.log(data);
    }

    function handleSubmit() {
        fetchGithubUserData();
    }

    useEffect(() => {
        fetchGithubUserData();
    }, []);

    if(loading) {
        return <h1>Loading</h1>
    }

    return (
        <div className='github-profile-container'>
            <div className="input-wrapper">
                <input
                    name='search-by-username'
                    type="text"
                    placeholder='Search github username'
                    value={userName}
                    onChange={(event) => setUserName(event.target.value)}
                />
                <button onClick={handleSubmit}>Search</button>
            </div>
            {
                userData !== null ? <GithubCard user={userData}/>: null
            }

        </div>
    )
}
export default GithubProfileFinder