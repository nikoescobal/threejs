// import {
//   useMetamask,
//   useWalletConnect,
//   useCoinbaseWallet,
//   useNetwork,
//   useAddress,
//   useDisconnect,
// } from '@thirdweb-dev/react';

// export const ConnectWallet = ({ classNames }) => {
//   const connectWithCoinbaseWallet = useCoinbaseWallet();
//   const connectWithMetamask = useMetamask();
//   const connectWithWalletConnect = useWalletConnect();
//   const disconnectWallet = useDisconnect();
//   const address = useAddress();
//   const network = useNetwork();

//   // If a wallet is connected, show address, chainId and disconnect button
//   if (address) {
//     return (
//       <div className={classNames}>
//         Address: {address}
//         <br />
//         Chain ID: {network[0].data.chain && network[0].data.chain.id}
//         <br />
//         <button onClick={disconnectWallet}>Disconnect</button>
//       </div>
//     );
//   }

//   // If no wallet is connected, show connect wallet options
//   return (
//     <div className={classNames}>
//       <button onClick={() => connectWithCoinbaseWallet()}>
//         Connect Coinbase Wallet
//       </button>
//       <button onClick={() => connectWithMetamask()}>Connect MetaMask</button>
//       <button onClick={() => connectWithWalletConnect()}>
//         Connect WalletConnect
//       </button>
//       <button onClick={() => connectWithLegacyWallet()}>
//         Connect Legacy Wallet
//       </button>
//     </div>
//   );
// };
