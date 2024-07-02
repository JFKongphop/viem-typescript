import dotenv from 'dotenv';
import { 
  createPublicClient, 
  http, 
  formatEther, 
  Hex
} from 'viem';
import { holesky } from 'viem/chains';
import { privateKeyToAccount } from 'viem/accounts';

dotenv.config();

const publicClient = createPublicClient({ 
  chain: holesky,
  transport: http()
});

const account = privateKeyToAccount(process.env.PRIVATE_KEY as Hex)

async function init() {
  const { address } = account;

  const balance = await publicClient.getBalance({ address });
  console.log(formatEther(balance));

  const transactionsAmount = await publicClient.getTransactionCount({ address });
  console.log(transactionsAmount);
}

init();