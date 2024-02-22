import { View, Text, Button } from 'react-native';
import { useState } from 'react';
import { useKeyboard } from "@react-native-community/hooks";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CodeEditor, { CodeEditorSyntaxStyles } from "@rivascva/react-native-code-editor";
import { styles } from './KataPageStyleSheet';

export default function CodeInputEditor({ setInput } : { setInput: any }) {
  const [ code, setCode ] = useState('');

  return (
    <View>
      <View style={styles.codeEditor}>
        <CodeEditor
          style={getEditorStyle()}
          language="javascript"
          syntaxStyle={CodeEditorSyntaxStyles.atomOneDark}
          showLineNumbers
          onChange={(data) => setCode(data || "")} // data is intitalised as undefined so || is needed!
        />
      </View>
      <View style={styles.submitButton}>
        <Button title="Submit" onPress={() => setInput(code)} />
      </View>
    </View>
  )
}

function getEditorStyle()  {
  const keyboard = useKeyboard();
  const insets = useSafeAreaInsets();

  return {...{
    fontSize: 20,
    width: 300,
    height: 300,
    inputLineHeight: 26,
    highlighterLineHeight: 26,
  },
    ...(keyboard.keyboardShown
      ? { marginBottom: keyboard.keyboardHeight - insets.bottom }
      : {}),
  }
}