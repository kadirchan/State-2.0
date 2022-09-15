import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BigNumber, ethers, utils } from 'ethers';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-make-appoinment',
  templateUrl: './make-appoinment.component.html',
  styleUrls: ['./make-appoinment.component.css'],
})
export class MakeAppoinmentComponent implements OnInit {
  private provider!: any;
  private Contract!: any;
  constructor(private http: HttpClient, private dservice: DataService) {}
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

  async callServer(date: string, patientAddress: string) {
    let signerAddress = this.provider.getSigner().getAddress();
    let signerInfo = await this.Contract['getBasicInfo'](signerAddress);
    let info = await this.Contract['getMedicalInfo'](patientAddress);
    let Address = ethers.utils.parseBytes32String(info[5]);
    let doctorName =
      ethers.utils.parseBytes32String(signerInfo[0]) +
      ' ' +
      ethers.utils.parseBytes32String(signerInfo[1]);
    let mail = {
      address: Address,
      text:
        'Your appointment to doctor ' +
        doctorName +
        ' has been created on ' +
        date,
    };
    this.http
      .put(
        'http://localhost:3000/send/' + mail.address + '/' + mail.text,
        JSON.stringify(mail)
      )
      .subscribe();
  }
}
