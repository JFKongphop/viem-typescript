import dotenv from 'dotenv';
import { Address, createPublicClient, http, formatEther } from 'viem'
import { holesky } from 'viem/chains'
import { privateKeyToAccount } from 'viem/accounts'

 
dotenv.config();

const publicClient = createPublicClient({ 
  chain: holesky,
  transport: http()
})

const account = privateKeyToAccount(process.env.PRIVATE_KEY as Address)
console.log(account)

// publicClient.
//   getBalance({
//     address: account.address,
// }).then((data)  => console.log(formatEther(data)))


