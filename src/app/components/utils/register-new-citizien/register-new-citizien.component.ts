import { Component, OnInit } from '@angular/core';
import { BigNumber, ethers, utils } from 'ethers';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-register-new-citizien',
  templateUrl: './register-new-citizien.component.html',
  styleUrls: ['./register-new-citizien.component.css'],
})
export class RegisterNewCitizienComponent implements OnInit {
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
  async register(
    name: string,
    surname: string,
    country: string,
    bloodGroup: string,
    driverLicence: boolean,
    birthDate: string,
    mailAddress: string
  ) {
    let signer = await this.provider.getSigner().getAddress();
    if (!(await this.Contract['isCitizien'](signer))) {
      try {
        this.WaitApproval();
        const response = await this.Contract['registerCitizien'](
          ethers.utils.formatBytes32String(name),
          ethers.utils.formatBytes32String(surname),
          ethers.utils.formatBytes32String(country),
          ethers.utils.formatBytes32String(birthDate),
          driverLicence,
          ethers.utils.formatBytes32String(bloodGroup),
          ethers.utils.formatBytes32String(mailAddress)
        );
        this.Pending();
        const TransactionReceipt = await response.wait(1);
        this.Registered();
        window.location.reload();
      } catch (error) {
        console.log(error);
        this.Error();
      }
    } else {
      this.AlreadyMember();
    }
  }

  Error() {
    var x = document.getElementById('Status');
    if (x?.style.display == 'none') x.style.display = 'block';
    x = document.getElementById('Pending');
    if (x?.style.display == 'block') x.style.display = 'none';
    this.Status = 'Error';
  }
  AlreadyMember() {
    var x = document.getElementById('Status');
    if (x?.style.display == 'none') x.style.display = 'block';
    this.Status = 'Already registered!';
  }
  WaitApproval() {
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
  Registered() {
    var x = document.getElementById('Status');
    if (x?.style.display == 'none') x.style.display = 'block';
    x = document.getElementById('Pending');
    if (x?.style.display == 'block') x.style.display = 'none';
    this.Status = 'Registered!';
  }
}
