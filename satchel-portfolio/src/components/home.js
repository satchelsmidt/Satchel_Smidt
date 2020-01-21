import React, { Component } from 'react'
// import axios from 'axios' //NOT NEEDED WITH REDUX
import { Link } from 'react-router-dom'
//import this function to return a higher order component necessary to connect to redux store
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
        // console.log(this.props)

        // const { posts } = this.props
        // const postList = posts.length ? (
        //     posts.map((post) => {
        //         return (
        //             <div className="post card amber lighten-5" key={post.id}>
        //                 <div className="card-content">
        //                     <Link to={'/' + post.id}> <span className="card-title"><h4>{post.title}</h4></span></Link>
        //                     <p>{post.body}</p>
        //                 </div>
        //             </div>
        //         )
        //     })
        // ) : (
        //         <div className="center">No Posts Yet</div>
        //     )
        return (
            // <div className="container">
            //     <h4 className="center">
            //         <p>Welcome home</p>
            //         {/* {postList} */}
            //     </h4>
            <div className="row">
                <div className="aboutText card amber lighten-5 col l8 m9 s12 offset-m3 offset-l4">
                    <h5>Welcome to My Portfolio</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <br></br>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
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