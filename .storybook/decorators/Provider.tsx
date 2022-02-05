import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

export const StorybookProvider = (Story) => (<Router><Story /></Router>);

export default StorybookProvider;
