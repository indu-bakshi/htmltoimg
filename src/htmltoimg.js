import html2canvas from 'html2canvas';
import ReactDOM from 'react-dom';

const fileType = {
    PNG: 'image/png',
    JPEG: 'image/jpeg',
};

const DEFAULT_PNG = {
    fileName: 'Collage.png',
    type: fileType.PNG,
    html2CanvasOptions: {}
};

const DEFAULT_JPEG = {
    fileName:'Collage.jpg',
    type: fileType.JPEG,
    html2CanvasOptions: {}
};

/**
 * @param  {string} uri
 * @param  {string} filename
 */
const saveAs = (uri, filename) => {
    const link = document.createElement('a');

    if (typeof link.download === 'string') {
        link.href = uri;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        window.open(uri);
    }
};

/**
 * @param  {React.RefObject} node
 * @param  {string} fileName
 * @param  {string} type
 * @param  {object} html2CanvasOptions={}
 */


const exportComponent = (node, {
    fileName, 
    type, 
    html2CanvasOptions
}) => {
    if(!node.current) {
        throw new Error("'node' must be a RefObject")
    }

    const element = ReactDOM.findDOMNode(node.current);
    return html2canvas(element, {
        scrollY: -window.scrollY,
        useCORS: true,
        ...html2CanvasOptions
    }).then(canvas => {

            saveAs(canvas.toDataURL(type, 1.0), fileName);    

    });
};

/**
 * @param  {React.RefObject} node
 * @param  {string} fileName='Collage.png'
 * @param  {object} html2CanvasOptions={}
 */
const exportComponentAsPNG = (node, parameters = {}) => exportComponent(node, {...DEFAULT_PNG, ...parameters});

/**
 * @param  {React.RefObject} node
 * @param  {string} fileName='Collage.jpeg'
 * @param  {string} type=fileType.JPEG
 * @param  {object} html2CanvasOptions={}
 */
const exportComponentAsJPEG = (node, parameters = {}) => exportComponent(node, {...DEFAULT_JPEG, ...parameters});

export { 
    exportComponentAsJPEG,
    exportComponentAsPNG
};