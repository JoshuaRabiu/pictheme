import * as React from 'react';
import swal from 'sweetalert2';
import { processImage } from '../actions/index.action';
import '../styles/Greeting.css';

const mobile: any = ['Android','webOS', 'iPhone', 'iPad', 'iPod','BlackBerry']

export const Greeting = () => {

  if(mobile.includes(navigator.platform)){
    swal('Notice:', 'PicTheme is best experienced on Desktop') 
  }
  
  return (<div className="wrapper">
		<h2>Turn your images into Code Editor Themes.</h2>
    <h3 className="description">PicTheme uses the color palette from images to generate code editor themes on the fly.</h3>
    <h4 className="description">Generates themes for Visual Studio Code and Sublime Text. Works with .gif, .png, .jpg, and .tiff images
    </h4>
    <h4 className="description">
      Notice: Images uploaded to PicTheme are anonymously uploaded to Imgur
    </h4>
    <br />
   <input className="upload-button" type="file" id="file-button" accept="image/*" onChange={processImage}/>
   <label className="try-it">Try it: </label><label htmlFor="file-button" className="upload-label">Upload Image</label>
</div>
  )
}