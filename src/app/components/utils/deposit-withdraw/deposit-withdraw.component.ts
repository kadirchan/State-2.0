import { Component, OnInit } from '@angular/core';
import { ethers } from 'ethers';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-deposit-withdraw',
  templateUrl: './deposit-withdraw.component.html',
  styleUrls: ['./deposit-withdraw.component.css'],
})
export class DepositWithdrawComponent implements OnInit {
  private provider!: any;
  private Contract!: any;
  Status!: string;

  constructor(private dservice: DataService) {}

  ngOnInit(): void {
    if (typeof window.ethereum !== 'undefined') {
      this.provider = new ethers.providers.Web3Provider(window.ethereum);
    }
    this.Contract = new ethers.Contract(
      this.dservice.getContractAddress(),
      this.dservice.getABI(),
      this.provider.getSigner()
    );
  }

  async depositETH(amount: string) {
    let signer = this.provider.getSigner();
    try {
      this.WaitingApproval();
      const tx = await signer.sendTransaction({
        to: this.dservice.getContractAddress(),
        value: ethers.utils.parseEther(amount),
      });
      this.Pending();
      const TransactionReceipt = await tx.wait(1);
      this.Completed();
    } catch (error) {
      console.log(error);
      this.Error();
    }
  }
  async withdrawETH(amount: string) {
    let withdrawAmount;
    if (
      ethers.utils.formatEther(await this.Contract['getBalance']()) > amount
    ) {
      withdrawAmount = amount;
    } else {
      withdrawAmount = await this.Contract['getBalance']();
    }
    try {
      this.WaitingApproval();
      let response = await this.Contract['withdrawBalance'](withdrawAmount);
      this.Pending();
      const TransactionReceipt = await response.wait(1);
      this.Completed();
    } catch (error) {
      console.log(error);
      this.Error();
    }
  }

  Error() {
    var x = document.getElementById('Status');
    if (x?.style.display == 'none') x.style.display = 'block';
    x = document.getElementById('Pending');
    if (x?.style.display == 'block') x.style.display = 'none';
    this.Status = 'Error';
  }
  WaitingApproval() {
    var x = document.getElementById('Status');
    if (x?.style.display == 'none') x.style.display = 'block';
    x = document.getElementById('Pending');
    if (x?.style.display == 'none') x.style.display = 'block';
    this.Status = 'Wait Approval';
  }
  Pending() {
    var x = document.getElementById('Status');
    if (x?.style.display == 'none') x.style.display = 'block';
    x = document.getElementById('Pending');
    if (x?.style.display == 'none') x.style.display = 'block';
    this.Status = 'Wait Confirmation';
  }
  Completed() {
    var x = document.getElementById('Status');
    if (x?.style.display == 'none') x.style.display = 'block';
    x = document.getElementById('Pending');
    if (x?.style.display == 'block') x.style.display = 'none';
    this.Status = 'Completed!';
  }
}
