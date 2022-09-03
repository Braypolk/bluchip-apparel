import Header from '../utils/header'
import WalletConnect from '../utils/walletConnect'
import { useState, useEffect } from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import Image from 'next/image'

import standingImage from '../public/assets/image2.png'
import test_sweatshirt from '../public/assets/test_sweatshirt.png'
import rectangle from '../public/assets/Rectangle.png'
const axios = require('axios')

export default function VerifiedCollection () {
    const rec = '/assets/Rectangle.png'
  const imageList = [rec, rec, rec, rec, rec]
  const [nfts, setNfts] = useState(null)
  const { publicKey } = useWallet()
  const [address, setAddress] = useState(
    'C8mgrCncLMtpfh4QzkJsPfrWd384yQeSYpdujw4LF53T'
  )

  const fetchOwnedNft = async () => {
    // const nft = await axios.get('https://solana-gateway.moralis.io/account/mainnet/C8mgrCncLMtpfh4QzkJsPfrWd384yQeSYpdujw4LF53T/nft', {
    //   headers: {
    //     'accept': 'application/json',
    //     'X-API-Key': 'BS01OQOoxLJxO01wbn9JRgIL9Rb3l5siObQWghnoZyMq1VLVaAhoPv9gg8lIYjEW'
    //   }
    // });

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const data = {
      jsonrpc: '2.0',
      id: 1,
      method: 'qn_fetchNFTs',
      params: {
        wallet: address,
        omitFields: ['provenance', 'traits']
      }
    }
    const nft = await axios
      .post(
        'https://purple-fittest-uranium.solana-mainnet.discover.quiknode.pro/4ec616bbfe086ac38d34a96fab754ce18fe7391e/',
        data,
        config
      )
      .catch(err => {
        // handle error
        console.log(err)
      })
    console.log(nft)
    setNfts(nft.data.result.assets)
  }
  return (
    <>
      <Header />
      <div className='hero'>
        <h1>Verified</h1>
        <p>exclusive collection</p>
        <p>
          some little description of what the heck we are charging stupid
          amounts of money for reason for. Buy one item of clothing of an nft
          you own. There will never be another produced, making yours a one of a
          kind. Just like your nft.
        </p>
        <WalletConnect />
        <Image src={standingImage} />
        <Image src={test_sweatshirt} />
      </div>

      <div className='verifiedImages'>
        <div className='itemGrid'>
          {imageList.map((img, key) => {
            return (
              <div className='imageBox' style={{backgroundImage: `url(${img})`, backgroundSize:'cover'}}>
              </div>
            )
          })}
        </div>
      </div>

      <div className='lower'>
        <main className='main'>
          <div className='nfts'>
            {/* {nft !== null ? nft.map((object, i) => <img src={object.metadata.image} key={i} alt="The downloaded illustration of the provided NFT address." />) : 'bad'} */}
          </div>
        </main>

        <div className='App'>
          <div className='container'>
            <h1 className='title'>NFT Mint Address</h1>
            <div className='nftForm'>
              <input
                type='text'
                value={address}
                onChange={event => setAddress(event.target.value)}
              />
              <button onClick={fetchOwnedNft}>Fetch</button>
            </div>
            {/* display nfts in wallet (no gifs) */}
            {nfts &&
              nfts.map((object, i) => (
                <div className='nftPreview'>
                  {!object.imageUrl
                    .split('.')
                    .pop()
                    .includes('gif') && (
                    <>
                      <h1>{object.name}</h1>
                      <img
                        style={{ height: '300px' }}
                        src={object.imageUrl}
                        alt='The downloaded illustration of the provided NFT address.'
                      />
                    </>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}