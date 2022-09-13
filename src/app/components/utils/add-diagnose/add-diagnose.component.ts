import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { BigNumber, ethers, utils } from 'ethers';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-add-diagnose',
  templateUrl: './add-diagnose.component.html',
  styleUrls: ['./add-diagnose.component.css'],
})
export class AddDiagnoseComponent implements OnInit {
  private provider!: any;
  private Contract!: any;
  Name!: string;
  IDNumber!: string;
  Blood!: string;
  Birth!: string;
  currentDate!: Date;
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

  async addDiagnose(patientAddress: string, diagnose: string) {
    const currentDate = new Date();
    let info = await this.Contract['getMedicalInfo'](patientAddress);
    this.Name =
      ethers.utils.parseBytes32String(info[0]) +
      ' ' +
      ethers.utils.parseBytes32String(info[1]);
    this.IDNumber = 'ID Number : ' + info[2];
    this.Blood = 'Blood group: ' + ethers.utils.parseBytes32String(info[3]);
    this.Birth = ' Birtdate: ' + ethers.utils.parseBytes32String(info[4]);
    let signerAddress = this.provider.getSigner().getAddress();
    if (await this.Contract['isDoctor'](signerAddress)) {
      try {
        this.WaitingApproval();
        let diagnoseWithDate =
          formatDate(currentDate, 'short', 'en-US') + ' | ' + diagnose;
        let response = await this.Contract['addDiagnose'](
          patientAddress,
          diagnoseWithDate
        );
        this.Pending();
        const TransactionReceipt = await response.wait(1);
        this.Added();
      } catch (error) {
        console.log(error);
        this.Error();
      }
    } else {
      this.OnlyDoctor();
    }
  }
  Error() {
    var x = document.getElementById('Status');
    if (x?.style.display == 'none') x.style.display = 'block';
    x = document.getElementById('Pending');
    if (x?.style.display == 'block') x.style.display = 'none';
    this.Status = 'Error';
  }
  OnlyDoctor() {
    var x = document.getElementById('Status');
    if (x?.style.display == 'none') x.style.display = 'block';
    this.Status = 'Only Doctor!';
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
  Added() {
    var x = document.getElementById('Status');
    if (x?.style.display == 'none') x.style.display = 'block';
    x = document.getElementById('Pending');
    if (x?.style.display == 'block') x.style.display = 'none';
    this.Status = 'Added!';
  }
}
