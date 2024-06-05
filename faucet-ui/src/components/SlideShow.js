import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
  {
    url: 'https://goguides.azureedge.net/media/p1xjd4qt/518a11e1-afad-4031-8dc9-3e2b26f1a5f0.jpg?anchor=center&mode=crop&width=1600&height=1066&quality=50',
    
  },
  {
    url: 'https://goguides.azureedge.net/media/n1pntcrp/74a3f863-4933-4c6e-b802-23bfe3896cfe.jpg?anchor=center&mode=crop&width=1600&height=1066&quality=50',
    
  },
  {
    url: 'https://goguides.azureedge.net/media/ahglcnwc/0b9454f5-c60c-43ae-888f-aa589ec08ac9.jpg?anchor=center&mode=crop&width=1600&height=1066&quality=50',
    
  },
  {
    url: 'https://goguides.azureedge.net/media/rbtlhfsg/9bf4578c-3bfc-43eb-934d-ee29eec8b2af.jpg?anchor=center&mode=crop&width=1600&height=1066&quality=50',
    
  },
  {
    url: 'https://goguides.azureedge.net/media/jn1dbh1e/62258b90-378a-4daf-8d85-1324728ee0f9.jpg?anchor=center&mode=crop&width=1600&height=1066&quality=50',
    
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img style={{ width: '100%' }} src={fadeImage.url} />
          </div>
        ))}
      </Fade>
    </div>
  )
}



export default Slideshow;