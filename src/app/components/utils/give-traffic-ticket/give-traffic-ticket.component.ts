import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { BigNumber, ethers, utils } from 'ethers';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-give-traffic-ticket',
  templateUrl: './give-traffic-ticket.component.html',
  styleUrls: ['./give-traffic-ticket.component.css'],
})
export class GiveTrafficTicketComponent implements OnInit {
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
  TicketId!: number;

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

  async giveTicket(citizenAddress: string, penalty: string) {
    let signerAddress = this.provider.getSigner().getAddress();

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

    if (await this.Contract['isPolice'](signerAddress)) {
      try {
        this.WaitingApproval();

        let response = await this.Contract['giveTrafficTicket'](
          citizenAddress,
          ethers.utils.parseEther(penalty)
        );
        this.Pending();
        const TransactionReceipt = await response.wait(1);
        this.TicketId = parseInt(TransactionReceipt['logs'][0]['topics'][2]);
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
    this.Status = 'Ticket ID: ' + this.TicketId;
  }
}
