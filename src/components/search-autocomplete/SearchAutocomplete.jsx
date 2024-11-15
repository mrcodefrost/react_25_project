import { useEffect } from "react";
import { useState } from "react"
import Suggestions from "./Suggestions";

const SearchAutocomplete = () => {


    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState([]);

    function handleChange(event) {
        const query = event.target.value.toLowerCase();
        setSearchParams(query);
        if (query.length > 1) {

            const filteredData = users && users.length
                ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
                : [];

            setFilteredUsers(filteredData);
            setShowDropdown(true);
        } else {
            setShowDropdown(false);
        }
    }

    function handleClick(event) {
        console.log(event.target.innerText);
        setShowDropdown(false);
        setSearchParams(event.target.innerText);
        setFilteredUsers([]);
    }

    async function fetchListOfUsers() {
        try {
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/users`);
            const data = await response.json();

            console.log(data);
            if (data && data.users && data.users.length) {
                // since this will be used only for search auto complete,
                // we only need to store the users' first names
                setUsers(data.users.map((userItem) => userItem.firstName));
                setLoading(false);
                setError(null)
            }

        } catch (err) {
            setLoading(false);
            console.log(err);
            setError(err);
        }
    }

    useEffect(() => {
        fetchListOfUsers();
    }, []);

    console.log(users, filteredUsers);

    return (
        <div className="search-autocomplete-container">
            {
                loading
                    ? (<h1>Loading !</h1>)
                    : (
                        <input
                            type="text"
                            name="search-users"
                            placeholder="Search Users"
                            value={searchParams}
                            onChange={handleChange}
                        />
                    )

            }

            {
                showDropdown && <Suggestions
                    handleClick={handleClick}
                    data={filteredUsers} />
            }
        </div>
    )
}
export default SearchAutocomplete