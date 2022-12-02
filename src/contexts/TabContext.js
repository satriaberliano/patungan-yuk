import React from 'react';

const TabContext = React.createContext();

export const TabProvider = TabContext.Provider;
export const TabConsumer = TabContext.Consumer;

export default TabContext;
