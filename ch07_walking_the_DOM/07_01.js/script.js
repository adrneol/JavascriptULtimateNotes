// text node, element node, comment node
//  <title>Walking the DOM</title> titel is a element node, text is a text node
//  <body>
//    <h1>Walking the DOM</h1>
//    <p>Walking the DOM is easy.</p>
//  </body>
// comment node is <!-- This is a comment -->

// Auto correction in JS
 /*
 <body>
    Hello World
    <span>Walking the DOM</div> here JS will auto correct the closing tag to </span> , it wont accept </div> as closing tag for <span>
  </body>
 */
// document.documentElement gives Html page tag, document.head gives head tag, document.body gives body tag
// document.title gives the title of the page, also it writtens string not title tag.
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
console.log(document.title);