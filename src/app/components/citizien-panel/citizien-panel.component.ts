import { Component, OnInit } from '@angular/core';
import { BigNumber, ethers, utils } from 'ethers';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-citizien-panel',
  templateUrl: './citizien-panel.component.html',
  styleUrls: ['./citizien-panel.component.css'],
})
export class CitizienPanelComponent implements OnInit {
  private provider!: any;
  private Contract!: any;
  Status!: string;
  balance!: string;

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
}
