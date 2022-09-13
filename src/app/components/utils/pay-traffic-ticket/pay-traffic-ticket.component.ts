import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { BigNumber, ethers, utils } from 'ethers';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-pay-traffic-ticket',
  templateUrl: './pay-traffic-ticket.component.html',
  styleUrls: ['./pay-traffic-ticket.component.css'],
})
export class PayTrafficTicketComponent implements OnInit {
  private provider!: any;
  private Contract!: any;
  Status!: string;
  TicketId!: number;
  Fee!: string;

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

  async payTicket(ticketID: string) {
    this.TicketId = parseInt(ticketID);
    if (!(await this.Contract['isTicketPayed'](this.TicketId))) {
      try {
        await this.WaitingApproval();
        let response = await this.Contract['payTrafficTicket'](this.TicketId);
        this.Pending();
        const TransactionReceipt = await response.wait(1);
        if (await this.Contract['isTicketPayed'](this.TicketId)) this.Payed();
        else this.Error();
      } catch (error) {
        // const abi = ['function depositMoney()'];
        // const intrfc = new ethers.utils.Interface(abi);
        // const decoded = intrfc.decodeFunctionData(
        //   intrfc.functions['depositMoney()'],
        //   error
        // );
        // console.log(decoded);
        this.Error();
      }
    } else {
      this.AlreaadyPayed();
    }
  }

  Error() {
    var x = document.getElementById('Status');
    if (x?.style.display == 'none') x.style.display = 'block';
    x = document.getElementById('Pending');
    if (x?.style.display == 'block') x.style.display = 'none';
    this.Status = 'Error';
  }
  AlreaadyPayed() {
    var x = document.getElementById('Status');
    if (x?.style.display == 'none') x.style.display = 'block';
    this.Status = 'Alreaady Payed!';
  }

  async WaitingApproval() {
    var x = document.getElementById('Status');
    if (x?.style.display == 'none') x.style.display = 'block';
    x = document.getElementById('Pending');
    if (x?.style.display == 'none') x.style.display = 'block';
    this.Status =
      'Wait Approval For: Fee ' +
      ethers.utils.formatEther(await this.Contract['tickets'](this.TicketId)) +
      ' ETH';
  }
  Pending() {
    var x = document.getElementById('Status');
    if (x?.style.display == 'none') x.style.display = 'block';
    x = document.getElementById('Pending');
    if (x?.style.display == 'none') x.style.display = 'block';
    this.Status = 'Wait Confirmation';
  }
  Payed() {
    var x = document.getElementById('Status');
    if (x?.style.display == 'none') x.style.display = 'block';
    x = document.getElementById('Pending');
    if (x?.style.display == 'block') x.style.display = 'none';
    this.Status = 'Ticket ID: ' + this.TicketId + ' payed!';
  }
}
