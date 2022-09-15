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
    this.ABI = [
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_salaryTime',
            type: 'uint256',
          },
        ],
        stateMutability: 'payable',
        type: 'constructor',
      },
      {
        inputs: [],
        name: 'PersonNotExist',
        type: 'error',
      },
      {
        inputs: [],
        name: 'accessDenied',
        type: 'error',
      },
      {
        inputs: [],
        name: 'alreadyPayed',
        type: 'error',
      },
      {
        inputs: [],
        name: 'belowMinimumAmount',
        type: 'error',
      },
      {
        inputs: [],
        name: 'citizienAlreadyExist',
        type: 'error',
      },
      {
        inputs: [],
        name: 'depositMoney',
        type: 'error',
      },
      {
        inputs: [],
        name: 'lowBalance',
        type: 'error',
      },
      {
        inputs: [],
        name: 'nope',
        type: 'error',
      },
      {
        inputs: [],
        name: 'notAccountant',
        type: 'error',
      },
      {
        inputs: [],
        name: 'notDoctor',
        type: 'error',
      },
      {
        inputs: [],
        name: 'notPolice',
        type: 'error',
      },
      {
        inputs: [],
        name: 'notPresident',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'remaining',
            type: 'uint256',
          },
        ],
        name: 'notYet',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: '',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        name: 'deposit',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'driverAddress',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'uint32',
            name: 'driverID',
            type: 'uint32',
          },
        ],
        name: 'licenceSuspended',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'citizien',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'uint32',
            name: 'ticketID',
            type: 'uint32',
          },
        ],
        name: 'newTicket',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [],
        name: 'salariesPaid',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint32',
            name: 'ticketID',
            type: 'uint32',
          },
        ],
        name: 'ticketPayed',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'driverAddress',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'uint32',
            name: 'driverID',
            type: 'uint32',
          },
        ],
        name: 'unlicensedDriver',
        type: 'event',
      },
      {
        stateMutability: 'payable',
        type: 'fallback',
      },
      {
        inputs: [],
        name: 'accountantSalary',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        name: 'accountants',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'personAddress',
            type: 'address',
          },
          {
            internalType: 'string',
            name: 'accident',
            type: 'string',
          },
          {
            internalType: 'uint8',
            name: 'penalty',
            type: 'uint8',
          },
        ],
        name: 'addAccident',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'personAddress',
            type: 'address',
          },
          {
            internalType: 'string',
            name: 'diagnose',
            type: 'string',
          },
        ],
        name: 'addDiagnose',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'personAddress',
            type: 'address',
          },
        ],
        name: 'assignAccountant',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'personAddress',
            type: 'address',
          },
        ],
        name: 'assignDoctor',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'personAddress',
            type: 'address',
          },
        ],
        name: 'assignPolice',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'newMailAddress',
            type: 'bytes32',
          },
        ],
        name: 'changeMail',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'citizienCount',
        outputs: [
          {
            internalType: 'uint64',
            name: '',
            type: 'uint64',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'doctorSalary',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        name: 'doctors',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'personAddress',
            type: 'address',
          },
        ],
        name: 'getAccidents',
        outputs: [
          {
            internalType: 'string[]',
            name: '',
            type: 'string[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getBalance',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'personAddress',
            type: 'address',
          },
        ],
        name: 'getBasicInfo',
        outputs: [
          {
            internalType: 'bytes32',
            name: '',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: '',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: '',
            type: 'bytes32',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'personAddress',
            type: 'address',
          },
        ],
        name: 'getDiagnoses',
        outputs: [
          {
            internalType: 'string[]',
            name: '',
            type: 'string[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'personAddress',
            type: 'address',
          },
        ],
        name: 'getMedicalInfo',
        outputs: [
          {
            internalType: 'bytes32',
            name: '',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: '',
            type: 'bytes32',
          },
          {
            internalType: 'uint32',
            name: '',
            type: 'uint32',
          },
          {
            internalType: 'bytes32',
            name: '',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: '',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: '',
            type: 'bytes32',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'personAddress',
            type: 'address',
          },
        ],
        name: 'getTraficInfo',
        outputs: [
          {
            internalType: 'bytes32',
            name: '',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: '',
            type: 'bytes32',
          },
          {
            internalType: 'uint32',
            name: '',
            type: 'uint32',
          },
          {
            internalType: 'bytes32',
            name: '',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: '',
            type: 'bytes32',
          },
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
          {
            internalType: 'uint8',
            name: '',
            type: 'uint8',
          },
          {
            internalType: 'bytes32',
            name: '',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: '',
            type: 'bytes32',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'personAddress',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'penalty',
            type: 'uint256',
          },
        ],
        name: 'giveTrafficTicket',
        outputs: [
          {
            internalType: 'uint32',
            name: '',
            type: 'uint32',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        name: 'isAccountant',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'personAddress',
            type: 'address',
          },
        ],
        name: 'isCitizien',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        name: 'isDoctor',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        name: 'isPolice',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint32',
            name: '',
            type: 'uint32',
          },
        ],
        name: 'isTicketPayed',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'paySalaries',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint32',
            name: 'ticketID',
            type: 'uint32',
          },
        ],
        name: 'payTrafficTicket',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'policeSalary',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        name: 'polices',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'president',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'presidentSalary',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'name',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'surname',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'country',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'birthDate',
            type: 'bytes32',
          },
          {
            internalType: 'bool',
            name: 'driverLicence',
            type: 'bool',
          },
          {
            internalType: 'bytes32',
            name: 'bloodGroup',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'mailAddress',
            type: 'bytes32',
          },
        ],
        name: 'registerCitizien',
        outputs: [
          {
            internalType: 'uint32',
            name: '',
            type: 'uint32',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'salary',
            type: 'uint256',
          },
        ],
        name: 'setAccountantSalary',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'salary',
            type: 'uint256',
          },
        ],
        name: 'setDoctorSalary',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'salary',
            type: 'uint256',
          },
        ],
        name: 'setPoliceSalary',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'salary',
            type: 'uint256',
          },
        ],
        name: 'setPresidentSalary',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint32',
            name: '',
            type: 'uint32',
          },
        ],
        name: 'tickets',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newPresident',
            type: 'address',
          },
        ],
        name: 'transferPresident',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'withdrawBalance',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        stateMutability: 'payable',
        type: 'receive',
      },
    ];
    this.contractAddress = '0xB58E2fADe1182729820401C75bb564cB38dfAA10';
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
