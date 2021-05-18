import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
    state = {
        users: [
            {
                id: '1',
                login: 'mojombo',
                avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
                html_url: 'https://github.com/mojombo'
            },
            {
                id: '2',
                login: 'defunkt',
                avatar_url: 'https://avatars.githubusercontent.com/u/3?v=4',
                html_url: 'https://github.com/pjhyett'
            },
            {
                id: '3',
                login: 'muahahaha',
                avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4',
                html_url: 'https://github.com/defunkt'
            }
        ]
    }

    // below im passing a prop of user={user} and inside UserItem.js i can now pass props
    render() {
        return (
            <div>
                { this.state.users.map(user => (
                    <UserItem key={ user.id } user={ user } />
                ))}
            </div>
        )
    }
}

export default Users
