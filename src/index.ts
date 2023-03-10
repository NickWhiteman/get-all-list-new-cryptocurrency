import express from 'express';
import * as moralis from 'moralis';
import { EvmChain } from '@moralisweb3/common-evm-utils';
import dotenv from 'dotenv';
import { env } from 'process';

dotenv.config();
const app = express();
const port = 3000;
const Moralis = moralis.default;

const MORALIS_API_KEY = env.MORALIS_API_KEY!;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const startServer = async () => {
  await Moralis.start({
    apiKey: MORALIS_API_KEY,
    formatEvmChainId: +EvmChain.BSC,
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

startServer();
