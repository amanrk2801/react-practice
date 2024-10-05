export const loadState = (key: string): any | undefined => {
    try {
      const serializedState = localStorage.getItem(key);
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      console.error('Error loading state:', err);
      return undefined;
    }
  };
  
  export const saveState = (key: string, state: any): void => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem(key, serializedState);
    } catch (err) {
      // Ignore write errors
      console.error('Error saving state:', err);
    }
  };