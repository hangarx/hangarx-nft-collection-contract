import { toNano, Cell, Address } from "ton";
import { NetworkProvider } from '@ton-community/blueprint';
// ================================================================= //
import { NftItem } from "../wrappers/NFTItem";
// ================================================================= //

export async function run(provider: NetworkProvider) {
    let nftItem = provider.open(NftItem.fromAddress(Address.parse('nft_address')))
    await nftItem.send(
        provider.sender(),
        { value: toNano("0.2") },
        {
            $$type: "Transfer",
            query_id: 0n,
            new_owner: Address.parse('0QB9jXxrcc7BIilYq415-bDpGWAc_eFiQh2VO6P5pB3rVcZE'),
            response_destination: owner,
            custom_payload: null,
            forward_amount: toNano("0.05"),
            forward_payload: new Cell(),
            nft_offchain_id: null
        }
    )
}