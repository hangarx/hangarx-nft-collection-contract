import { toNano, Address } from "ton";
import { NetworkProvider } from '@ton-community/blueprint';
// ================================================================= //
import { NftCollection } from "../wrappers/NFTCollection";
// ================================================================= //

export async function run(provider: NetworkProvider) {
    let collection = provider.open(NftCollection.fromAddress(Address.parse('collection_address')));


    const res = await collection.send(provider.sender(), { value: toNano("0.2") }, {
        $$type: "MintWithContent",
        query_id: 0n,
        nftOffchainId: 'meta2',
    });
    console.log(res);
}