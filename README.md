# HTML to Image in React
In this project one can easily download the image of the div container with the download button in the format of JPEG or PNG

# Previous Approach
When looking for npm packages to HTML to image the normal size of the package is more than 400kb.
But the size of htmltocanvas package is only 40kb.

# Current Approach
To solve the size issue mentioned above here I have used only htmltocanvas package and create a htmltoimg js file 
+-- src
|   +-- htmltoimg.js
to export the PNG and JPEG component.

# How to run
copy paste the code below in the file where you want to create HTML to Image component.

```

import { exportComponentAsJPEG, exportComponentAsPNG } from './htmltoimg';
import React, { useRef } from 'react';

const ComponentToPrint = React.forwardRef((props, ref) => (
  <div ref={ref}>Hello World</div>
));

const MyComponent = () => {
  const componentRef = useRef();

  return (
    <React.Fragment>
      <ComponentToPrint ref={componentRef} />
      <button onClick={() => exportComponentAsJPEG(componentRef)}>
        Export As JPEG
      </button>
      <button onClick={() => exportComponentAsPNG(componentRef)}>
        Export As PNG
      </button>
    </React.Fragment>
  );
};

export default MyComponent;

```

## Alternate method
Clone git repository:
`$ git clone git@github.com:indu-bakshi/htmltoimg.git`

Install dependencies:
`$ npm install`

 Start:
 `$ npm start`

