import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavTabs from '../NavTabs';
afterEach(cleanup);
describe('Nav component', () => {
    it('renders', () => {
        render(<NavTabs />);
    });
        it('matches snapshot', () => {
            const { asFragment } = render(<NavTabs />);
      });
    })