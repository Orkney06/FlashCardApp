import React, {useState, useEffect} from 'react';
import BodyCard from './BodyCard';
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios';

const cardContent =
  {
    avatarUrl: "https://joeschmoe.io/api/v1/random",
    imageUrl: "https://picsum.photos/150"
  }


function Content() {
  const [post, setPosts] = useState([])

  useEffect(() => {
    axios.get('https://flash-card-app-2022.herokuapp.com/api/posts/')
    .then(res => {
      setPosts(res.data)
    })
  }, [])
 
  const getCardContent = getObj => {
    const bodyCardContent = {...getObj, ...cardContent};
    return (
      <Grid item xs={12} sm={4} key={getObj.id}>
        <BodyCard {...bodyCardContent} />
      </Grid>
    );
  };
  return (
    <Grid container spacing={2}>
      {post.map(contentObj => getCardContent(contentObj))}
    </Grid>
  );
}

export default Content;