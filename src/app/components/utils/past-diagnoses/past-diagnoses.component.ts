import { Component, OnInit } from '@angular/core';
import { BigNumber, ethers, Signer, utils } from 'ethers';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-past-diagnoses',
  templateUrl: './past-diagnoses.component.html',
  styleUrls: ['./past-diagnoses.component.css'],
})
export class PastDiagnosesComponent implements OnInit {
  private provider!: any;
  private Contract!: any;
  Status!: string;
  balance!: string;
  Diagnoses!: any;

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
    if (this.dservice.getMemberRank() == 2) {
      var x = document.getElementById('past-diagnoses-doctor');
      if (x?.style.display == 'none') x.style.display = 'block';
    } else if (this.dservice.getMemberRank() != 0) {
      this.PastDiagnoses_Self();
    }
  }

  async PastDiagnoses_Self() {
    let signer = await this.provider.getSigner().getAddress();
    if (await this.Contract['isCitizien'](signer)) {
      try {
        this.Diagnoses = await this.Contract['getDiagnoses'](signer);
        console.log(this.Diagnoses);
      } catch (error) {
        console.log(error);
        this.Error();
      }
    } else {
      this.NotCitizien();
    }
  }

  async PastDiagnoses_Patient(patientAddress: string) {
    let signer = await this.provider.getSigner().getAddress();
    if (await this.Contract['isCitizien'](signer)) {
      try {
        this.Diagnoses = await this.Contract['getDiagnoses'](patientAddress);
        console.log(this.Diagnoses);
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

  OnlyDoctor() {
    var x = document.getElementById('Status');
    if (x?.style.display == 'none') x.style.display = 'block';
    this.Status = 'Only Doctor!';
  }
}
