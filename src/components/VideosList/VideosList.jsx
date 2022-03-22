import React, { useContext, useEffect, useState } from 'react';
import { videosContext } from '../../Context/videosContext';
import Card from '../Card/Card';

const VideosList = () => {
    const {getAllVideos, videos} = useContext(videosContext);
    
    useEffect(() => {getAllVideos()}, [])
    console.log(videos)
    // const [state, setState] = useState("")
    // const [state2, setState2] = useState("")
    // !реагирует при каждом изменении в компоненте
    // useEffect(() => {console.log("useEffect!!")})
    // !реагирует при каждом изменении state
    // useEffect(() => {console.log("state изменился")}, [state])
    // ! реагирует при загрузке страницы
    // useEffect(() => {getAllVideos()}, [])
    return (
        <div>
            {
                videos.map((item) => (<Card key={item.id} item={item} />))
            }
            {/* <input type="text" value={state} onChange={(e) => setState(e.target.value)}/>
            <input type="text" value={state2} onChange={(e) => setState2(e.target.value)}/> */}
        </div>
    );
};

export default VideosList;