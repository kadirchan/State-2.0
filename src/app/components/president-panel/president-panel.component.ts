import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { BigNumber, ethers, utils } from 'ethers';

@Component({
  selector: 'app-president-panel',
  templateUrl: './president-panel.component.html',
  styleUrls: ['./president-panel.component.css'],
})
export class PresidentPanelComponent implements OnInit {
  memberCount!: number;
  private Contract!: any;
  status!: string;
  private provider!: any;
  constructor(private dservice: DataService) {}

  ngOnInit(): void {
    //wallet installed
    if (typeof window.ethereum !== 'undefined') {
      this.provider = new ethers.providers.Web3Provider(window.ethereum);
    } //not installed
    else {
      this.provider = this.dservice.getProvider();
    }
    this.Contract = new ethers.Contract(
      this.dservice.getContractAddress(),
      this.dservice.getABI(),
      this.provider.getSigner()
    );
  }
}
