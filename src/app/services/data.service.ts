import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private contractOwner!: string;
  private httpProvider: string;
  private member_rank!: number;
  private ABI!: any;
  private contractAddress!: string;
  public unlicencedDriver!: string;
  public licenceSuspended!: string;
  private mailAPI!: string;

  constructor() {
    this.httpProvider =
      'https://ropsten.infura.io/v3/5073568d7c044755a82e22f4e1081f64';
    this.ABI = '';
    this.contractAddress = '';
    this.unlicencedDriver =
      '0xa04720252783a487d3d167d92275b3458f48c17d979d67e14c38043d93c990b9';
    this.licenceSuspended =
      '0xacb00afff1d0a9ae705089ccc2ca2f2a2438b6b0b4235bd2ec6af8455a64165c';
    this.mailAPI =
      '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';
  }
  //getters
  getProvider(): string {
    return this.httpProvider;
  }
  getABI() {
    return this.ABI;
  }
  getMemberRank() {
    return this.member_rank;
  }
  getContractAddress() {
    return this.contractAddress;
  }
  getOwner() {
    return this.contractOwner;
  }
  getAPIKey() {
    return this.mailAPI;
  }

  //setters
  setMemberRank(rank: number) {
    this.member_rank = rank;
  }
  setOwner(owner: string) {
    this.contractOwner = owner;
  }
}
