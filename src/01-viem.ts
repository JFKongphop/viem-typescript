import dotenv from 'dotenv';
import { 
  createPublicClient, 
  http, 
} from 'viem';
import { 
  generatePrivateKey, 
  privateKeyToAccount 
} from 'viem/accounts';
import { mainnet } from 'viem/chains';

dotenv.config();

const publicClient = createPublicClient({ 
  chain: mainnet,
  transport: http()
})

async function init() {
  const blockNumber = Number(await publicClient.getBlockNumber());
  console.log(blockNumber);
  
  const privateKey = generatePrivateKey();
  const account = privateKeyToAccount(privateKey);

  console.log(account);
}

init();