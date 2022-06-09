import { processTest, populateTransaction } from './test.fixture';

const contractName = 'AdminUpgradeabilityProxy';

const testLabel = 'swapExactAmountOut'; // <= Name of the test
const testNetwork = 'ethereum';
const signedPlugin = false;
const chainID = 1;

const contractAddr = '0xf5ba2e5dded276fc0f7a7637a61157a4be79c626';

const transactions = [
    {
        // FROM : https://etherscan.io/tx/0xb1cc665c5f05dbc9dc6c1bc7ff0d46469daf9e9d7ece64f8c8967b87f1889f5b
        contract: '90D-Paladin-palStkAAVE-1',
        inputData: '0x16dc3ace000000000000000000000000c61c0f4961f2093a083f47a4b783ad260deaf7ea00000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000160000000000000000000000000000000000000000000000000fa1e38fe5831f6fc0000000000000000000000000000000000000000000000093739534d28680000000000000000000000000000e171e110cfe6f658c4421c2da4c86e4933919de40000000000000000000000000000000000000000000000000000017fde96f7b8000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001',
        nanosSteps: 10,
        nanospSteps: 7,
        nanoxSteps: 7,
    },
    {
        // FROM : https://etherscan.io/tx/0x7d43bf4dce5a90d0146804767f02b29d29fc2ed9f7cd396f5c2464debbb4ea5b
        contract: '90D-ParaSwap-SPSP_PP4',
        inputData: '0x16dc3ace000000000000000000000000a4085c106c7a9a7ad0574865bbd7cac5e109819500000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000140000000000000000000000000000000000000000000006f5da3243a88bc51b2c6000000000000000000000000000000000000000000005d2c72a2ac16a30000000000000000000000000000000edefa91e99da1eddd1372c1743a63b1595fc413000000000000000000000000000000000000000000000000000001811e3ba9ab000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001',
        nanosSteps: 10,
        nanospSteps: 7,
        nanoxSteps: 7,
    },
    {
        // FROM : https://etherscan.io/tx/0xac15e5dec7beb295bbab24aed5c763a3608749a3c52cddb64126f71db4133e61
        contract: '90D-TrueFi-tfUSDC',
        inputData: '0x16dc3ace0000000000000000000000000cc36e3cc5eaca6d046b537703ae946874d5729900000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000140000000000000000000000000000000000000000000000000000000035e19e1e0000000000000000000000000000000000000000000000000000000004190ab00000000000000000000000000c6051396a4f76d69c1f53d8d9a24f0f0524764310000000000000000000000000000000000000000000000000000017fd77db0aa000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000',
        nanosSteps: 8,
        nanospSteps: 7,
        nanoxSteps: 7,
    },
    {
        // FROM : https://etherscan.io/tx/0xf3b3180fef6079fac81a3fe7c7d81949e231a8bc2a1566b13bede1a339b47058
        contract: '90D-Aave-aUSDT',
        inputData: '0x16dc3ace000000000000000000000000b932c4801240753604c768c991eb640bcd7c06eb000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001400000000000000000000000000000000000000000000000000000000040a097fd00000000000000000000000000000000000000000000000000000004a817c800000000000000000000000000dd84ce1adcb3a4908db61a1dfa3353c3974c5a2b0000000000000000000000000000000000000000000000000000017fbaeff42f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001',
        nanosSteps: 8,
        nanospSteps: 7,
        nanoxSteps: 7,
    },
    {
        // FROM : https://etherscan.io/tx/0x82ae39a3440d9a893f14382f447607f6b62753b64267a5d84ce016b4ebcf46c5
        contract: '90D-ParaSwap-SPSP_PP3',
        inputData: '0x16dc3ace00000000000000000000000049cbbfedb15b5c22cac53daf104512a5de9c84570000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000016000000000000000000000000000000000000000000000007a1686cfad96571db700000000000000000000000000000000000000000000021e19e0c9bab2400000000000000000000000000000ec13489d022102dde8234d8c22b25b0bed2e7b540000000000000000000000000000000000000000000000000000017fa6d877ea000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001',
        nanosSteps: 10,
        nanospSteps: 7,
        nanoxSteps: 7,
    },
];

transactions.forEach((tx) => {
    const devices = [
        {
            name: 'nanos',
            label: 'Nano S',
            steps: tx.nanosSteps, // <= Define the number of steps for this test case and this device
        },
        {
            name: 'nanox',
            label: 'Nano X',
            steps: tx.nanoxSteps, // <= Define the number of steps for this test case and this device
        },
        {
            name: 'nanosp',
            label: 'Nano S+',
            steps: tx.nanospSteps, // <= Define the number of steps for this test case and this device
        },
    ];

    const testDirSuffix = `swap_exact_amount_out_${tx.contract}`; // <= directory to compare device snapshots to
    const serializedTx = populateTransaction(contractAddr, tx.inputData, chainID);
    devices.forEach((device) => processTest(device, contractName, `${testLabel}_${tx.contract}`, testDirSuffix, '', signedPlugin, serializedTx, testNetwork));
});