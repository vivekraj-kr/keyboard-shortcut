import React, { useEffect } from 'react';
import keypress from 'keypress';

const KeyboardShortcut = ({ combo, callback, children }) => {
  useEffect(() => {
    const listener = new keypress.Listener();
    listener.simple_combo(combo, callback);
  }, [combo, callback])

  return <div> {children} </div>
}

export default KeyboardShortcut;