import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Pokeball from '../pokeball_PNG24.png'

class Home extends Component {

    state = {
        posts: []
    }

    //best lifecycle hook to grab external data is componentDidMount
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res)
                this.setState({
                    posts: res.data.slice(0, 10)
                })
            })
    }

    render() {
        const { posts } = this.state
        const postList = posts.length ? (
            posts.map((post) => {
                return (
                    <div className="post card" key={post.id}>
                        <img src={Pokeball} alt='pokeball' style={{
                            width: '50px',
                            height: '50px'
                        }}/>
                        <div className="card-content">
                            <Link to={'/' + post.id}> <span className="card-title"><h4>{post.title}</h4></span></Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
                <div className="center">No Posts Yet</div>
            )
        return (
            <div className="container">
                <h4 className="center">
                    <p>Welcome home</p>
                    {postList}
                </h4>
            </div>
        )
    }
}

export default Home