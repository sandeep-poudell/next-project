import React from "react";

interface User {
    id: number
    name: string
}

const UserPage = async () => {
    const res = await fetch(
        'https://jsonplaceholder.typicode.com/users',
        // Cache by default in fetch function. if we wish to not store cache,
        // {cache: 'no-cache'},
        // Cache for 10 seconds
        {next: {revalidate: 10}});
    const users: User[] = await res.json();

    return (
        <>
            <h1>Users</h1>
            <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </>
    );
};

export default UserPage;