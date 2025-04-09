'use client';

import React, { createContext, useContext } from 'react';

interface ABTestContextType {
    variant: string;
}

export const ABTestContext = createContext<ABTestContextType>({ variant: 'A' });

interface ABTestProviderProps {
    children: React.ReactNode;
    variant: string;
}

export const ABTestProvider: React.FC<ABTestProviderProps> = ({ children, variant }) => {
    return <ABTestContext.Provider value={{ variant }}>{children}</ABTestContext.Provider>;
};

export const useABVariant = () => useContext(ABTestContext).variant; 