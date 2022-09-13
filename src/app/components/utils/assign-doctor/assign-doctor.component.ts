import { Component, OnInit } from '@angular/core';
import { BigNumber, ethers, utils } from 'ethers';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-assign-doctor',
  templateUrl: './assign-doctor.component.html',
  styleUrls: ['./assign-doctor.component.css'],
})
export class AssignDoctorComponent implements OnInit {
  private provider!: any;
  private Contract!: any;
  Name!: string;
  Status!: string;
  currentDate!: Date;

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

  async assignDoctor(doctorAddress: string) {
    let name = await this.Contract['getBasicInfo'](doctorAddress);
    this.Name =
      ethers.utils.parseBytes32String(name[0]) +
      ' ' +
      ethers.utils.parseBytes32String(name[1]);

    if (!(await this.Contract['isDoctor'](doctorAddress))) {
      try {
        this.WaitingApproval();
        let response = await this.Contract['assignDoctor'](doctorAddress);
        this.Pending();
        const TransactionReceipt = await response.wait(1);
        this.Assigned();
      } catch (error) {
        console.log(error);
        this.Error();
      }
    } else {
      this.AlreadyDoctor();
    }
  }

  Error() {
    var x = document.getElementById('Status');
    if (x?.style.display == 'none') x.style.display = 'block';
    x = document.getElementById('Pending');
    if (x?.style.display == 'block') x.style.display = 'none';
    this.Status = 'Error';
  }
  AlreadyDoctor() {
    var x = document.getElementById('Status');
    if (x?.style.display == 'none') x.style.display = 'block';
    this.Status = 'Already assigned!';
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
  Assigned() {
    var x = document.getElementById('Status');
    if (x?.style.display == 'none') x.style.display = 'block';
    x = document.getElementById('Pending');
    if (x?.style.display == 'block') x.style.display = 'none';
    this.Status = 'Assigned!';
  }
}
