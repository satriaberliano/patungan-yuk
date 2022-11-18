import React from 'react';
 
const TabContext = React.createContext();
 
export const LocaleProvider = TabContext.Provider;
export const LocaleConsumer = TabContext.Consumer;
 
export default TabContext;