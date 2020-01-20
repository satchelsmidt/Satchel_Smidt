import React, { Component } from 'react'
// import axios from 'axios'
import { Link } from 'react-router-dom'
import Pokeball from '../pokeball_PNG24.png'
//import this function to return a higher order component
import { connect } from 'react-redux'

class Home extends Component {

    //////// DO NOT NEED WHEN USING REDUX////////
    // state = {
    //     posts: []
    // }

    //best lifecycle hook to grab external data is componentDidMount
    // componentDidMount() {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => {
    //             console.log(res)
    //             this.setState({
    //                 posts: res.data.slice(0, 10)
    //             })
    //         })
    // }
    //////// DO NOT NEED WHEN USING REDUX////////

    render() {
        console.log(this.props)

        const { posts } = this.props
        const postList = posts.length ? (
            posts.map((post) => {
                return (
                    <div className="post card" key={post.id}>
                        <img src={Pokeball} alt='pokeball' style={{
                            width: '50px',
                            height: '50px'
                        }} />
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

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

//since connect is a function, we call it in order to wrap the home component
//pass our state mapping function into the connect function
export default connect(mapStateToProps)(Home)