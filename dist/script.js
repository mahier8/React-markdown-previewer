function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const initialState = `
This is a paragraph

**This is bolded text**

> Block Quotes!

# Heading 1
## Heading 2

- list item 1
- list item 2
- list item 3

[visit the link](https://www.freecodecamp.com)

This is an inline div \`<div></div>\`

This is a block of code:

\`\`\`

let x = 1;
let y = 2;
let z = x + y;

\`\`\`

![React](https://goo.gl/Umyytc)
`;

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      text: initialState });_defineProperty(this, "handleChange",


    e => {
      this.setState({
        text: e.target.value });

    });}

  render() {
    const { text } = this.state;

    const markdown = marked(text, { breaks: true });

    return (
      React.createElement("div", null,
      React.createElement("h2", { className: "text-center m-4 text-white" }, "Markdown Previewer"),
      React.createElement("div", { className: "row" },
      React.createElement("div", { className: "col-6" },
      React.createElement("h5", { className: "text-center text-white" }, "Enter Markdown:"),
      React.createElement("textarea", { className: "form-control p-2", id: "editor", value: text, onChange: this.handleChange })),


      React.createElement("div", { className: "col-6" },
      React.createElement("h5", { className: "text-center text-white" }, "See results"),
      React.createElement("div", { className: "preview rounded p-2", dangerouslySetInnerHTML: { __html: markdown }, id: "preview" })))));




  }}


ReactDOM.render(React.createElement(App, null), document.getElementById('app'));