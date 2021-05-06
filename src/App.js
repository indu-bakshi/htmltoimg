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
