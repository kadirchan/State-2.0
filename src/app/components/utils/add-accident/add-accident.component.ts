import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { BigNumber, ethers, utils } from 'ethers';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-accident',
  templateUrl: './add-accident.component.html',
  styleUrls: ['./add-accident.component.css'],
})
export class AddAccidentComponent implements OnInit {
  private provider!: any;
  private Contract!: any;
  Name!: string;
  IDNumber!: string;
  Blood!: string;
  Country!: string;
  Licence!: string;
  TrafficPoint!: string;
  Birth!: string;
  currentDate!: Date;
  Status!: string;
  Licence_status!: string;

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

  async addAccident(citizenAddress: string, accident: string, penalty: string) {
    const currentDate = new Date();
    let info = await this.Contract['getTraficInfo'](citizenAddress);
    this.Name =
      ethers.utils.parseBytes32String(info[0]) +
      ' ' +
      ethers.utils.parseBytes32String(info[1]);
    this.IDNumber = 'ID Number : ' + info[2];
    this.Blood = 'Blood group: ' + ethers.utils.parseBytes32String(info[3]);
    this.Country = 'Country: ' + ethers.utils.parseBytes32String(info[4]);
    this.Licence = info[5] ? 'Have Licence' : 'No Licence';
    this.TrafficPoint = 'Traffic Point: ' + info[6];
    this.Birth = 'Birth Date: ' + ethers.utils.parseBytes32String(info[7]);
    let signerAddress = this.provider.getSigner().getAddress();
    if (await this.Contract['isPolice'](signerAddress)) {
      try {
        this.WaitingApproval();
        let accidentWithDate =
          formatDate(currentDate, 'short', 'en-US') + ' | ' + accident;
        let response = await this.Contract['addAccident'](
          citizenAddress,
          accidentWithDate,
          parseInt(penalty)
        );
        this.Pending();
        const TransactionReceipt = await response.wait(1);
        if (
          TransactionReceipt['logs'][0]['topics'][0] ==
          this.dservice.licenceSuspended
        ) {
          this.Extra();
          this.Licence_status = 'Licence Suspended';
        } else if (
          TransactionReceipt['logs'][0]['topics'][0] ==
          this.dservice.unlicencedDriver
        ) {
          this.Extra();
          this.Licence_status = 'Unlicenced Driver';
        }
        this.Added();
      } catch (error) {
        console.log(error);
        this.Error();
      }
    } else {
      this.OnlyPolice();
    }
  }
  Error() {
    var x = document.getElementById('Status');
    if (x?.style.display == 'none') x.style.display = 'block';
    x = document.getElementById('Pending');
    if (x?.style.display == 'block') x.style.display = 'none';
    this.Status = 'Error';
  }
  OnlyPolice() {
    var x = document.getElementById('Status');
    if (x?.style.display == 'none') x.style.display = 'block';
    this.Status = 'Only Police!';
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
  Extra() {
    var x = document.getElementById('Extra');
    if (x?.style.display == 'none') x.style.display = 'block';
  }
}
