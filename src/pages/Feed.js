/* eslint-disable react/function-component-definition */
import { useState, useEffect } from 'react'
import axios from 'axios'

const Feed = () => {
    const [imageUrl, setImageUrl] = useState('')

    useEffect(() => {
        const url = 'https://www.instagram.com/hmti.uho/?__a=1&__d=dis'
        const noCors = 'https://cors-anywhere.herokuapp.com/'
        axios
            .get(`${noCors}${url}`)
            .then((res) => {
                console.log(res.data.graphql.user.profile_pic_url)
                setImageUrl(res.data.graphql.user.profile_pic_url)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return <img src={imageUrl} alt="Instagram" />
}
export default Feed
