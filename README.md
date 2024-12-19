To handle HTML-type data editing in React Native, you can use a rich text editor package compatible with mobile platforms. Here’s a solution:

### Steps:

1. **Choose a Rich Text Editor for React Native**:
   - Use a library like [`react-native-pell-rich-editor`](https://github.com/wxik/react-native-rich-editor), which supports HTML content.

2. **Fetch Data from the Server**:
   - Use an API call to retrieve the stored HTML data from your server.

3. **Display and Edit HTML**:
   - Initialize the editor with the fetched HTML content.
   - Allow users to make changes and save them back to the server.

4. **Save Updated Data**:
   - Convert the editor content to HTML (if required) and send it to the server.

### Example Code

Here’s how you can set it up:

#### React Native Setup
```javascript
import React, { useState, useRef } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { RichEditor, RichToolbar } from 'react-native-pell-rich-editor';

const RichTextEditor = ({ initialHtml }) => {
  const [content, setContent] = useState(initialHtml || '');
  const richTextRef = useRef(null);

  const saveContent = () => {
    // Save 'content' to your server
    console.log('Content saved:', content);
  };

  return (
    <View style={styles.container}>
      <RichEditor
        ref={richTextRef}
        initialContentHTML={content}
        onChange={text => setContent(text)}
        style={styles.editor}
      />
      <RichToolbar editor={richTextRef} style={styles.toolbar} />
      <Button title="Save" onPress={saveContent} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  editor: { flex: 1, borderColor: '#ccc', borderWidth: 1 },
  toolbar: { borderTopColor: '#ccc', borderTopWidth: 1 },
});

export default RichTextEditor;
```

#### Key Points:
- **Compatibility:** Ensure the React Native package supports all your use cases, especially editing and rendering HTML content.
- **Server Sync:** Use `axios` or `fetch` to handle API requests for getting and saving content.

Let me know if you’d like help setting up any specific part!