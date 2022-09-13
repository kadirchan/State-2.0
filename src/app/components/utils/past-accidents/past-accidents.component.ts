import { Component, OnInit } from '@angular/core';
import { BigNumber, ethers, Signer, utils } from 'ethers';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-past-accidents',
  templateUrl: './past-accidents.component.html',
  styleUrls: ['./past-accidents.component.css'],
})
export class PastAccidentsComponent implements OnInit {
  private provider!: any;
  private Contract!: any;
  Status!: string;
  balance!: string;
  Accidents!: any;

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
    if (this.dservice.getMemberRank() == 3) {
      var x = document.getElementById('past-accidents-police');
      if (x?.style.display == 'none') x.style.display = 'block';
    } else if (this.dservice.getMemberRank() != 0) {
      this.PastAccidents_Self();
    }
  }

  async PastAccidents_Self() {
    let signer = await this.provider.getSigner().getAddress();
    if (await this.Contract['isCitizien'](signer)) {
      try {
        this.Accidents = await this.Contract['getAccidents'](signer);
        console.log(this.Accidents);
      } catch (error) {
        console.log(error);
        this.Error();
      }
    } else {
      this.NotCitizien();
    }
  }

  async PastAccidents_Patient(patientAddress: string) {
    let signer = await this.provider.getSigner().getAddress();
    if (await this.Contract['isCitizien'](signer)) {
      try {
        this.Accidents = await this.Contract['getAccidents'](patientAddress);
        console.log(this.Accidents);
      } catch (error) {
        console.log(error);
        this.Error();
      }
    } else {
      this.NotCitizien();
      console.log('not member');
    }
  }

  NotCitizien() {
    var x = document.getElementById('Status');
    if (x?.style.display == 'none') x.style.display = 'block';
    this.Status = 'Not Citizien';
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
}
