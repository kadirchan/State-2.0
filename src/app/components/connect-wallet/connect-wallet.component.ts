import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ethers } from 'ethers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connect-wallet',
  templateUrl: './connect-wallet.component.html',
  styleUrls: ['./connect-wallet.component.css'],
})
export class ConnectWalletComponent implements OnInit {
  Contract!: any;
  provider!: any;
  signerAddress!: any;
  button_status!: string;
  connect_status!: string;
  Balance!: string;

  constructor(private dservice: DataService, public router: Router) {
    this.button_status = 'Connect';
    this.router.navigate(['welcome']);
  }

  ngOnInit(): void {}

  async connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
      this.provider = new ethers.providers.Web3Provider(window.ethereum);
      await this.provider.send('eth_requestAccounts', []);
      if (window.ethereum.isConnected()) this.button_status = 'Connected';
      else this.button_status = 'Error';

      let chainId = await window.ethereum.request({ method: 'eth_chainId' });
      if (chainId != '0x3') {
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x3' }],
          });
        } catch (error: any) {
          if (error.code === 4902) {
            try {
              await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [
                  {
                    chainId: '0x3',
                    rpcUrl: 'https://ropsten.infura.io/v3/',
                  },
                ],
              });
            } catch (addError) {
              console.error(addError);
            }
          }
        }
      }

      //reload window when change chain
      window.ethereum.on('chainChanged', () => {
        window.location.reload();
      });
      //reload member details when change account or log out
      window.ethereum.on('accountsChanged', async (accounts: Array<string>) => {
        window.location.reload();
        if (accounts.length == 0) {
          console.log('disconnected');
        } else {
          this.signerAddress = await this.provider.getSigner().getAddress();
          await this.getRank();
        }
      });

      this.signerAddress = await this.provider.getSigner().getAddress();
      await this.getRank();
    } else {
      console.log('MetaMask not installed!');
    }
  }

  async getBalance() {
    this.Contract = new ethers.Contract(
      this.dservice.getContractAddress(),
      this.dservice.getABI(),
      this.provider.getSigner()
    );
    this.Balance =
      'State balance: ' +
      ethers.utils.formatEther(await this.Contract['getBalance']()) +
      ' ETH';
  }

  async getRank() {
    this.Contract = new ethers.Contract(
      this.dservice.getContractAddress(),
      this.dservice.getABI(),
      this.provider.getSigner()
    );

    var x = document.getElementById('Connect');
    if (x?.style.display == 'none') x.style.display = 'block';

    let president = await this.Contract['president']();

    if (await this.Contract['isCitizien'](this.signerAddress)) {
      this.Balance =
        'Your balance: ' +
        ethers.utils.formatEther(await this.Contract['getBalance']()) +
        ' ETH';
      if (president == this.signerAddress) {
        this.dservice.setMemberRank(5);
        this.connect_status = 'Welcome! President';
        console.log(this.connect_status);
        this.router.navigate(['president']);
        x = document.getElementById('president-nav');
        if (x?.style.display == 'none') x.style.display = 'block';
        x = document.getElementById('citizien-nav');
        if (x?.style.display == 'none') x.style.display = 'block';
      } else if (await this.Contract['isAccountant'](this.signerAddress)) {
        this.dservice.setMemberRank(4);
        this.router.navigate(['accountant']);
        this.connect_status = 'Welcome! Accountant';
        x = document.getElementById('accountant-nav');
        if (x?.style.display == 'none') x.style.display = 'block';
        x = document.getElementById('citizien-nav');
        if (x?.style.display == 'none') x.style.display = 'block';
      } else if (await this.Contract['isPolice'](this.signerAddress)) {
        this.dservice.setMemberRank(3);
        this.router.navigate(['police']);
        this.connect_status = 'Welcome! Officer';
        x = document.getElementById('police-nav');
        if (x?.style.display == 'none') x.style.display = 'block';
        x = document.getElementById('citizien-nav');
        if (x?.style.display == 'none') x.style.display = 'block';
      } else if (await this.Contract['isDoctor'](this.signerAddress)) {
        this.dservice.setMemberRank(2);
        this.router.navigate(['doctor']);
        this.connect_status = 'Welcome! Doctor';
        x = document.getElementById('doctor-nav');
        if (x?.style.display == 'none') x.style.display = 'block';
        x = document.getElementById('citizien-nav');
        if (x?.style.display == 'none') x.style.display = 'block';
      } else {
        this.dservice.setMemberRank(1);
        this.router.navigate(['citizien']);
        this.connect_status = 'Welcome! Citizien';
      }
    } else {
      this.dservice.setMemberRank(0);
      this.router.navigate(['non-citizien']);
      this.connect_status = 'Welcome! Suri';
    }
  }
}
declare global {
  interface Window {
    ethereum: any;
  }
}

interface ProviderRpcError extends Error {
  message: string;
  code: number;
  data?: unknown;
}
