import React from 'react';
import { ConnectWallet } from '@thirdweb-dev/react';

function Wallet() {
  return (
    <div>
      <ConnectWallet colorMode="light" accentColor="navy" />
    </div>
  );
}

export default Wallet;
