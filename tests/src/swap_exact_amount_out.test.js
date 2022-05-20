import { processTest } from "./test.fixture";

const contractName = "AdminUpgradeabilityProxy";

const testLabel = "swap_exact_amount_out"; // <= Name of the test
const testNetwork = "ethereum";
const signedPlugin = false;

// From : https://etherscan.io/tx/0x975ec4126dd425ba520432c9b381b5c51529c14f7ef1f17bd4d57f6139c2f96b

var rawTxs = {
    "stkAAVE": {
        "rawTx": "0x02f901f2016c8459682f0085165095555e830a2e8794b6e370d83a180ea3667db41a2acfaf605fa0378880b901848b9c185a000000000000000000000000c61c0f4961f2093a083f47a4b783ad260deaf7ea00000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000120000000000000000000000000000000000000000000000000c1749d0b2ecfd758000000000000000000000000000000000000000000000000c249fdd32778000000000000000000000000000079603115df2ba00659adc63192325cf104ca529c0000000000000000000000000000000000000000000000000000017efea1cd8600000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000c001a0b73d930658cb1e0b6d863beaaf3e10537a1e045ed9712080e8381e26df28c76fa03fbf3a35c5afe906e639215dcc3a61849ed293f4f3b5d7c48f55af8507dffac8",
        "nanos_steps" : 12
    },
    "WETH": {
        "rawTx": "0x02f901f2016c8459682f0085165095555e830a2e8794b6e370d83a180ea3667db41a2acfaf605fa0378880b901848b9c185a0000000000000000000000001604c5e9ab488d66e983644355511dcef5c32edf00000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000120000000000000000000000000000000000000000000000000c1749d0b2ecfd758000000000000000000000000000000000000000000000000c249fdd32778000000000000000000000000000079603115df2ba00659adc63192325cf104ca529c0000000000000000000000000000000000000000000000000000017efea1cd8600000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000c001a0b73d930658cb1e0b6d863beaaf3e10537a1e045ed9712080e8381e26df28c76fa03fbf3a35c5afe906e639215dcc3a61849ed293f4f3b5d7c48f55af8507dffac8",
        "nanos_steps" : 11
    },
    "PSP/sPSP-4": {
        "rawTx": "0x02f901f2016c8459682f0085165095555e830a2e8794b6e370d83a180ea3667db41a2acfaf605fa0378880b901848b9c185a000000000000000000000000a4085c106c7a9a7ad0574865bbd7cac5e109819500000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000120000000000000000000000000000000000000000000000000c1749d0b2ecfd758000000000000000000000000000000000000000000000000c249fdd32778000000000000000000000000000079603115df2ba00659adc63192325cf104ca529c0000000000000000000000000000000000000000000000000000017efea1cd8600000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000c001a0b73d930658cb1e0b6d863beaaf3e10537a1e045ed9712080e8381e26df28c76fa03fbf3a35c5afe906e639215dcc3a61849ed293f4f3b5d7c48f55af8507dffac8",
        "nanos_steps" : 12
    },
    "USDC": {
        "rawTx": "0x02f901f2016c8459682f0085165095555e830a2e8794b6e370d83a180ea3667db41a2acfaf605fa0378880b901848b9c185a0000000000000000000000000cc36e3cc5eaca6d046b537703ae946874d5729900000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000120000000000000000000000000000000000000000000000000c1749d0b2ecfd758000000000000000000000000000000000000000000000000c249fdd32778000000000000000000000000000079603115df2ba00659adc63192325cf104ca529c0000000000000000000000000000000000000000000000000000017efea1cd8600000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000c001a0b73d930658cb1e0b6d863beaaf3e10537a1e045ed9712080e8381e26df28c76fa03fbf3a35c5afe906e639215dcc3a61849ed293f4f3b5d7c48f55af8507dffac8",
        "nanos_steps" : 11
    },
    "FRAX3CRV-f/StakeDAO": {
        "rawTx": "0x02f901f2016c8459682f0085165095555e830a2e8794b6e370d83a180ea3667db41a2acfaf605fa0378880b901848b9c185a000000000000000000000000839bb033738510aa6b4f78af20f066bdc824b18900000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000120000000000000000000000000000000000000000000000000c1749d0b2ecfd758000000000000000000000000000000000000000000000000c249fdd32778000000000000000000000000000079603115df2ba00659adc63192325cf104ca529c0000000000000000000000000000000000000000000000000000017efea1cd8600000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000c001a0b73d930658cb1e0b6d863beaaf3e10537a1e045ed9712080e8381e26df28c76fa03fbf3a35c5afe906e639215dcc3a61849ed293f4f3b5d7c48f55af8507dffac8",
        "nanos_steps" : 12
    },
    "USDT": {
        "rawTx": "0x02f901f2016c8459682f0085165095555e830a2e8794b6e370d83a180ea3667db41a2acfaf605fa0378880b901848b9c185a000000000000000000000000b932c4801240753604c768c991eb640bcd7c06eb00000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000120000000000000000000000000000000000000000000000000c1749d0b2ecfd758000000000000000000000000000000000000000000000000c249fdd32778000000000000000000000000000079603115df2ba00659adc63192325cf104ca529c0000000000000000000000000000000000000000000000000000017efea1cd8600000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000c001a0b73d930658cb1e0b6d863beaaf3e10537a1e045ed9712080e8381e26df28c76fa03fbf3a35c5afe906e639215dcc3a61849ed293f4f3b5d7c48f55af8507dffac8",
        "nanos_steps" : 11
    },
    "PSP/sPSP-3": {
        "rawTx": "0x02f901f2016c8459682f0085165095555e830a2e8794b6e370d83a180ea3667db41a2acfaf605fa0378880b901848b9c185a00000000000000000000000049cbbfedb15b5c22cac53daf104512a5de9c845700000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000120000000000000000000000000000000000000000000000000c1749d0b2ecfd758000000000000000000000000000000000000000000000000c249fdd32778000000000000000000000000000079603115df2ba00659adc63192325cf104ca529c0000000000000000000000000000000000000000000000000000017efea1cd8600000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000c001a0b73d930658cb1e0b6d863beaaf3e10537a1e045ed9712080e8381e26df28c76fa03fbf3a35c5afe906e639215dcc3a61849ed293f4f3b5d7c48f55af8507dffac8",
        "nanos_steps" : 12
    },
    "SUSHI": {
        "rawTx": "0x02f901f2016c8459682f0085165095555e830a2e8794b6e370d83a180ea3667db41a2acfaf605fa0378880b901848b9c185a000000000000000000000000cba960001307a16ce8a9e326d73e92d53b446e8100000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000120000000000000000000000000000000000000000000000000c1749d0b2ecfd758000000000000000000000000000000000000000000000000c249fdd32778000000000000000000000000000079603115df2ba00659adc63192325cf104ca529c0000000000000000000000000000000000000000000000000000017efea1cd8600000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000c001a0b73d930658cb1e0b6d863beaaf3e10537a1e045ed9712080e8381e26df28c76fa03fbf3a35c5afe906e639215dcc3a61849ed293f4f3b5d7c48f55af8507dffac8",
        "nanos_steps" : 11
    },
    "ibEUR+sEUR-f": {
        "rawTx": "0x02f901f2016c8459682f0085165095555e830a2e8794b6e370d83a180ea3667db41a2acfaf605fa0378880b901848b9c185a000000000000000000000000bc35b70ccc8ef4ec1ccc34fab60ccbba162011e400000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000120000000000000000000000000000000000000000000000000c1749d0b2ecfd758000000000000000000000000000000000000000000000000c249fdd32778000000000000000000000000000079603115df2ba00659adc63192325cf104ca529c0000000000000000000000000000000000000000000000000000017efea1cd8600000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000c001a0b73d930658cb1e0b6d863beaaf3e10537a1e045ed9712080e8381e26df28c76fa03fbf3a35c5afe906e639215dcc3a61849ed293f4f3b5d7c48f55af8507dffac8",
        "nanos_steps" : 12
    },
    "OHM": {
        "rawTx": "0x02f901f2016c8459682f0085165095555e830a2e8794b6e370d83a180ea3667db41a2acfaf605fa0378880b901848b9c185a0000000000000000000000001089f7bbf8c680db92759a30d42ddfba7c794bd200000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000120000000000000000000000000000000000000000000000000c1749d0b2ecfd758000000000000000000000000000000000000000000000000c249fdd32778000000000000000000000000000079603115df2ba00659adc63192325cf104ca529c0000000000000000000000000000000000000000000000000000017efea1cd8600000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000c001a0b73d930658cb1e0b6d863beaaf3e10537a1e045ed9712080e8381e26df28c76fa03fbf3a35c5afe906e639215dcc3a61849ed293f4f3b5d7c48f55af8507dffac8",
        "nanos_steps" : 11
    },
    "FARM": {
        "rawTx": "0x02f901f2016c8459682f0085165095555e830a2e8794b6e370d83a180ea3667db41a2acfaf605fa0378880b901848b9c185a0000000000000000000000004df9bb881e5e61034001440aaaff2fb2932e288300000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000120000000000000000000000000000000000000000000000000c1749d0b2ecfd758000000000000000000000000000000000000000000000000c249fdd32778000000000000000000000000000079603115df2ba00659adc63192325cf104ca529c0000000000000000000000000000000000000000000000000000017efea1cd8600000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000c001a0b73d930658cb1e0b6d863beaaf3e10537a1e045ed9712080e8381e26df28c76fa03fbf3a35c5afe906e639215dcc3a61849ed293f4f3b5d7c48f55af8507dffac8",
        "nanos_steps" : 11
    },
    "crv3crypto": {
        "rawTx": "0x02f901f2016c8459682f0085165095555e830a2e8794b6e370d83a180ea3667db41a2acfaf605fa0378880b901848b9c185a0000000000000000000000007259114df363de5d42fdf00b705fad7c85f8f79500000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000120000000000000000000000000000000000000000000000000c1749d0b2ecfd758000000000000000000000000000000000000000000000000c249fdd32778000000000000000000000000000079603115df2ba00659adc63192325cf104ca529c0000000000000000000000000000000000000000000000000000017efea1cd8600000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000c001a0b73d930658cb1e0b6d863beaaf3e10537a1e045ed9712080e8381e26df28c76fa03fbf3a35c5afe906e639215dcc3a61849ed293f4f3b5d7c48f55af8507dffac8",
        "nanos_steps" : 12
    },
    "FRAX3CRV-f/Idle": {
        "rawTx": "0x02f901f2016c8459682f0085165095555e830a2e8794b6e370d83a180ea3667db41a2acfaf605fa0378880b901848b9c185a000000000000000000000000ea851503ff416e34585d28c248918344c569b21900000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000120000000000000000000000000000000000000000000000000c1749d0b2ecfd758000000000000000000000000000000000000000000000000c249fdd32778000000000000000000000000000079603115df2ba00659adc63192325cf104ca529c0000000000000000000000000000000000000000000000000000017efea1cd8600000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000c001a0b73d930658cb1e0b6d863beaaf3e10537a1e045ed9712080e8381e26df28c76fa03fbf3a35c5afe906e639215dcc3a61849ed293f4f3b5d7c48f55af8507dffac8",
        "nanos_steps" : 13
    },
    "ib3CRV": {
        "rawTx": "0x02f901f2016c8459682f0085165095555e830a2e8794b6e370d83a180ea3667db41a2acfaf605fa0378880b901848b9c185a0000000000000000000000001a6525e4a4ab2e3aea7ed3cf813e8ed07fa3446d00000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000120000000000000000000000000000000000000000000000000c1749d0b2ecfd758000000000000000000000000000000000000000000000000c249fdd32778000000000000000000000000000079603115df2ba00659adc63192325cf104ca529c0000000000000000000000000000000000000000000000000000017efea1cd8600000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000c001a0b73d930658cb1e0b6d863beaaf3e10537a1e045ed9712080e8381e26df28c76fa03fbf3a35c5afe906e639215dcc3a61849ed293f4f3b5d7c48f55af8507dffac8",
        "nanos_steps" : 12
    },
};


for (var token in rawTxs) {
    const devices = [
        {
            name: "nanos",
            label: "Nano S",
            steps: rawTxs[token]["nanos_steps"], // <= Define the number of steps for this test case and this device
        },
        {
            name: "nanox",
            label: "Nano X",
            steps: 7, // <= Define the number of steps for this test case and this device
        }
    ];
    const testDirSuffix = testLabel+"_"+token; // <= directory to compare device snapshots to
    const rawTx = rawTxs[token]["rawTx"];
    devices.forEach((device) =>
        processTest(device, contractName, testLabel+"_"+token, testDirSuffix, rawTx, signedPlugin, "", testNetwork)
    );
};