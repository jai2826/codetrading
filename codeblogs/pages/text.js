const ReactDOMServer = require('react-dom/server');
const HtmlToReactParser = require('html-to-react').Parser;
import React from 'react'

const text = () => {
    const htmlInput = '<div style="margin:100px; background-color:red;"><h1>Title</h1><p>A paragraph</p><img src="https://m.media-amazon.com/images/I/61mu7OP5oQL._AC_SY135_.jpg"</div>';
    const htmlToReactParser = new HtmlToReactParser();
    const reactElement = htmlToReactParser.parse(htmlInput);
    const reactHtml = ReactDOMServer.renderToStaticMarkup(reactElement);

  return (
    <div dangerouslySetInnerHTML={{__html:reactHtml}}></div>
  )
}

export default text