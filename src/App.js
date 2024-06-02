import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import './App.css';

const initialMarkdown = `
# Heading 1
## Heading 2
[Link](https://example.com)
Inline \`code\`
\`\`\`
Code block
\`\`\`
- List item
> Blockquote
![Image](https://via.placeholder.com/150)
**Bold text**
`;

function App() {
  const [markdown, setMarkdown] = useState(initialMarkdown);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  useEffect(() => {
    document.getElementById('preview').innerHTML = marked(markdown);
  }, [markdown]);

  return (
    <div className="App container">
      <h1 className="text-center my-4">Markdown Previewer</h1>
      <div className="row">
        <div className="col-6">
          <textarea
            id="editor"
            className="form-control"
            value={markdown}
            onChange={handleChange}
            rows="15"
          />
        </div>
        <div className="col-6">
          <div
            id="preview"
            className="preview p-3 border"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
