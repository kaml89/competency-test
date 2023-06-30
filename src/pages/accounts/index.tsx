import { useEffect, useState } from 'react';
import { AccountService } from '../../services/accounts';
import { IAccount, IAccountType } from '../../types/account';
import AccountsTable from '../../components/AccountsTable';
import { CircularProgress } from '@mui/material';

const Accounts = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [accountsList, setAccountsList] = useState<Array<IAccount>>();
  const [accountTypes, setAccountTypes] = useState<Map<string, IAccountType>>(
    new Map([])
  );

  const fetchData = async () => {
    setLoading(true);
    try {
      const [accountsResponse, accountsTypesResponse] = await Promise.all([
        AccountService.getAllAccounts(),
        AccountService.getAccountTypes(),
      ]);

      setAccountsList(accountsResponse.data);

      let accountTypesMap = new Map<string, IAccountType>();

      accountsTypesResponse.data.forEach((item) => {
        accountTypesMap.set(item.id, item);
      });

      setAccountTypes(accountTypesMap);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <CircularProgress />;

  return (
    <>
      {accountsList && (
        <AccountsTable
          accountsList={accountsList}
          accountsTypesMap={accountTypes}
        />
      )}
    </>
  );
};

export default Accounts;
