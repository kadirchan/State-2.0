import { Component, OnInit } from '@angular/core';
import { BigNumber, ethers, utils } from 'ethers';
import { parseEther } from 'ethers/lib/utils';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-pay-salary',
  templateUrl: './pay-salary.component.html',
  styleUrls: ['./pay-salary.component.css'],
})
export class PaySalaryComponent implements OnInit {
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
  async paySalary() {
    try {
      this.WaitingApproval();
      let response = await this.Contract['paySalaries']();
      this.Pending();
      const TransactionReceipt = await response.wait(1);
      console.log(TransactionReceipt);
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
    this.Status = 'Salaries payed!';
  }
}
