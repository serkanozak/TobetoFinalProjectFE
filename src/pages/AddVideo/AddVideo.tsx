import React from 'react'
import videoService from '../../services/videoService'

type Props = {}

const AddVideo = (props: Props) => {

    const addVideo = () => {
        videoService.add({});
    }

    return (
        <div>AddVideo</div>
    )
}

export default AddVideo