import dotenv from 'dotenv';
import { 
  createPublicClient, 
  http, 
  formatEther, 
  Hex,
  createWalletClient,
  Chain,
} from 'viem';
import { holesky } from 'viem/chains';
import { privateKeyToAccount } from 'viem/accounts';

dotenv.config();

const publicClient = createPublicClient({ 
  chain: holesky,
  transport: http()
});

const privateKey = process.env.PRIVATE_KEY as Hex;

const account = privateKeyToAccount(privateKey);
const walletClient = createWalletClient({
  account,
  transport: http(process.env.HOLESKY),
  chain: holesky
});

async function init() {
  const { address } = account;

  const balance = await publicClient.getBalance({ address });
  console.log(formatEther(balance));

  const transactionsAmount = await publicClient.getTransactionCount({ address });
  console.log(transactionsAmount);

  const hash = await walletClient.sendTransaction({
    to: process.env.RECEIVER_ADDRESS as Hex,
    value: BigInt(1000000000000000000),
  });

  console.log(hash);
}

init();