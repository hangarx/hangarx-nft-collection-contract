import { Address } from "ton";
import { NetworkProvider } from '@ton-community/blueprint';
// ================================================================= //
import { NftCollection } from "../wrappers/NFTCollection";
// ================================================================= //

export async function run(provider: NetworkProvider) {
    let collection_address = Address.parse("EQDq0ZlAkmiWuykbl77peHawvVXgSDg1QuTiVKcGMuYIU24V");

    let collection = provider.open(NftCollection.fromAddress(collection_address));

    const nft_index = 0n;
    let address_by_index = await collection.getGetNftAddressByIndex(nft_index);

    console.log("NFT ID[" + nft_index + "]: " + address_by_index);
}