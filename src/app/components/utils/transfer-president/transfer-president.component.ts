import { Component, OnInit } from '@angular/core';
import { BigNumber, ethers, utils } from 'ethers';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-transfer-president',
  templateUrl: './transfer-president.component.html',
  styleUrls: ['./transfer-president.component.css'],
})
export class TransferPresidentComponent implements OnInit {
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
  async transferPresident(newPresident: string) {
    let response = await this.Contract['transferPresident'](newPresident);
    await response.wait(1);
    window.location.reload();
  }
}
