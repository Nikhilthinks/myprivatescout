import React, {Fragment, useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getPosts} from '../../actions/post'

const posts = ({getPosts, post: {posts}}) => {

    useEffect(() => {
        getPosts();
    }, [getPosts])

    return (
        <div>
            
        </div>
    )
}

posts.propTypes = {
getPosts: PropTypes.func.isRequired,
post: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    post: state.post
})

export default connect(mapStateToProps, {getPosts}){posts}
