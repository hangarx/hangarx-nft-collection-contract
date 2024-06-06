import { beginCell, contractAddress, toNano, Cell, Address } from "ton";
import { NetworkProvider } from '@ton-community/blueprint';
// ================================================================= //
import { NftCollection } from "../wrappers/NFTCollection";
// ================================================================= //

export async function run(provider: NetworkProvider) {
    const OFFCHAIN_CONTENT_PREFIX = 0x01;
    const string_first = "https://asset.battlecity.io/Metadata/"; // Change to the content URL you prepared
    let newContent = beginCell()
        .storeInt(OFFCHAIN_CONTENT_PREFIX, 8).storeStringRefTail(string_first).endCell();

    let newContent2 = beginCell()
        .storeInt(OFFCHAIN_CONTENT_PREFIX, 8).storeStringRefTail(string_first).endCell();
    // ===== Parameters =====
    // Replace owner with your address (if you use deeplink)
    let owner = provider.sender().address!;

    let collection = provider.open(await NftCollection.fromInit(owner, newContent, newContent2, {
        $$type: "RoyaltyParams",
        numerator: 350n, // 350n = 35%
        denominator: 1000n,
        destination: owner,
        // royalty_factor: 350n,
        // royalty_base: 1000n,
        // royalty_address: owner,
    },));

    // Do deploy
    await collection.send(provider.sender(), { value: toNano("0.1") }, {
        $$type: "Deploy",
        queryId: 0n
    });


    await provider.waitForDeploy(collection.address);


    // let collection = provider.open(NftCollection.fromAddress(Address.parse('EQBAXQgJ-7U7oYjtf3zl8UmukXd_1DA1y8LcZHsde-fulEP7')));


    // const res = await collection.send(provider.sender(), { value: toNano("0.2") }, {
    //     $$type: "MintWithContent",
    //     query_id: 0n,
    //     nftOffchainId: 'meta2',
    // });
    // console.log(res);

    // let cell = beginCell()
    // .storeUint(920871672, 32)
    // .storeUint(0, 64)
    // .storeStringRefTail('1234567892')
    // .storeStringRefTail('2')
    // .endCell();
    // console.log( cell.toBoc().toString("base64"))

    // run methods on `collection`
}