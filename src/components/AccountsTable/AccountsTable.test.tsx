import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import AccountsTable from '.';

const accountsTypes = [
  {
    id: 'IGSB',
    title: 'Spread bet account',
  },
  {
    id: 'IGCFD',
    title: 'CFD account',
  },
  {
    id: 'IGSTK',
    title: 'Share dealing account',
  },
  {
    id: 'IGISA',
    title: 'Individual Savings Account',
  },
  {
    id: 'IGFX',
    title: 'Forex account',
  },
];

const accounts = [
  {
    id: 1,
    name: 'Spread bet',
    default: true,
    funds: 10000,
    profitLoss: 0.23,
    accountType: 'IGSB',
    isDemo: false,
    currency: '$',
  },
  {
    id: 2,
    name: 'New Spread bet',
    default: false,
    funds: 1000,
    profitLoss: -679,
    accountType: 'IGSB',
    isDemo: false,
    currency: '$',
  },
  {
    id: 3,
    name: 'Spread bet - demo',
    default: false,
    funds: 20000000,
    profitLoss: 16.211,
    accountType: 'IGSB',
    isDemo: true,
    currency: '$',
  },
  {
    id: 4,
    name: 'CFD - demo',
    default: false,
    funds: 20000000,
    profitLoss: 16679,
    accountType: 'IGCFD',
    isDemo: true,
    currency: '€',
  },
  {
    id: 6,
    name: 'Stockbroking - DEMO',
    default: true,
    funds: 0,
    profitLoss: 200045,
    accountType: 'IGSTK',
    isDemo: true,
    currency: '$',
  },
];

const accountTypesMap = new Map();

accountsTypes.forEach((item) => {
  accountTypesMap.set(item.id, item);
});

describe('AccountsTable test', () => {
  it('should show table with correct headers', () => {
    render(
      <AccountsTable
        accountsList={accounts}
        accountsTypesMap={accountTypesMap}
      />
    );

    expect(screen.getByText(/Name/i)).toBeDefined();
    expect(screen.getByText(/Profit & Loss/i)).toBeDefined();
    expect(screen.getByText(/Account Type/i)).toBeDefined();
  });

  it('should render correct number of rows', () => {
    render(
      <AccountsTable
        accountsList={accounts}
        accountsTypesMap={accountTypesMap}
      />
    );
    expect(screen.getAllByRole('row')).toHaveLength(6);
  });
});
