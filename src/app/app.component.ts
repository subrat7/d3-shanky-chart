import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  rotate = false;

  ONT = {
    nodes: [
      {
        id: 'inbound',
        name: 'Inbound',
      },
      {
        id: 'reruns',
        name: 'Reruns',
      },
      {
        id: 'scan tunnels',
        name: 'Scan Tunnels',
      },
      {
        id: 'eurosort',
        name: 'Eurosort',
      },
      {
        id: 'cross belt',
        name: 'Crosss Belt',
      },
      {
        id: 'outbound',
        name: 'Outbound',
      },
      {
        id: 'qa',
        name: 'QA',
      },
    ],
    links: [
      {
        source: 'inbound',
        target: 'scan tunnels',
        value: 306666,
      },
      {
        source: 'inbound',
        target: 'eurosort',
        value: 208521,
      },
      {
        source: 'scan tunnels',
        target: 'qa',
        value: 36262,
      },
      {
        source: 'eurosort',
        target: 'qa',
        value: 25697,
      },
      {
        source: 'scan tunnels',
        target: 'cross belt',
        value: 270404,
      },
      {
        source: 'cross belt',
        target: 'qa',
        value: 27310,
      },
      {
        source: 'cross belt',
        target: 'outbound',
        value: 255832,
      },
      {
        source: 'cross belt',
        target: 'eurosort',
        value: 82250,
      },
      {
        source: 'eurosort',
        target: 'outbound',
        value: 265074,
      },
      {
        source: 'reruns',
        target: 'cross belt',
        value: 94988,
      },
    ],
  };

  BOS = {
    nodes: [
      {
        id: 'inbound',
        name: 'Inbound',
      },
      {
        id: 'reruns',
        name: 'Reruns',
      },
      {
        id: 'scan tunnels',
        name: 'Scan Tunnels',
      },
      {
        id: 'eurosort',
        name: 'eurosort',
      },
      {
        id: 'cross belt',
        name: 'Crosss Belt',
      },
      {
        id: 'outbound',
        name: 'Outbound',
      },
      {
        id: 'qa',
        name: 'QA',
      },
    ],
    links: [
      {
        source: 'inbound',
        target: 'scan tunnels',
        value: 406666,
      },
      {
        source: 'inbound',
        target: 'eurosort',
        value: 308521,
      },
      {
        source: 'scan tunnels',
        target: 'qa',
        value: 60262,
      },
      {
        source: 'eurosort',
        target: 'qa',
        value: 194081,
      },
      {
        source: 'scan tunnels',
        target: 'cross belt',
        value: 346404,
      },
      {
        source: 'cross belt',
        target: 'qa',
        value: 17310,
      },
      {
        source: 'cross belt',
        target: 'outbound',
        value: 338522,
      },
      {
        source: 'cross belt',
        target: 'eurosort',
        value: 185560,
      },
      {
        source: 'eurosort',
        target: 'outbound',
        value: 300000,
      },
      {
        source: 'reruns',
        target: 'cross belt',
        value: 194988,
      },
    ],
  };

  facilityData = {
    nodes: [
      {
        id: 'bos',
        name: 'BOS',
      },
      {
        id: 'ewr',
        name: 'EWR',
      },
      {
        id: 'bwi',
        name: 'BWI',
      },
      {
        id: 'cvg',
        name: 'CVG',
      },
      {
        id: 'atl',
        name: 'ATL',
      },
      {
        id: 'mco',
        name: 'MCO',
      },
      {
        id: 'dfw',
        name: 'DFW',
      },
      {
        id: 'ind',
        name: 'IND',
      },
      {
        id: 'ord',
        name: 'ORD',
      },
      {
        id: 'slc',
        name: 'SLC',
      },
      {
        id: 'rno',
        name: 'RNO',
      },
      {
        id: 'ont',
        name: 'ONT',
      },
    ],
    links: [
      {
        source: 'bos',
        target: 'ewr',
        value: 100000,
      },
      {
        source: 'ewr',
        target: 'bwi',
        value: 20000,
      },
      {
        source: 'ewr',
        target: 'cvg',
        value: 10000,
      },
      {
        source: 'ewr',
        target: 'atl',
        value: 30000,
      },
      {
        source: 'atl',
        target: 'mco',
        value: 5000,
      },
      {
        source: 'ewr',
        target: 'dfw',
        value: 10000,
      },
      {
        source: 'ewr',
        target: 'ind',
        value: 20000,
      },
      {
        source: 'ind',
        target: 'ord',
        value: 10000,
      },
      {
        source: 'ind',
        target: 'slc',
        value: 5000,
      },
      {
        source: 'ind',
        target: 'rno',
        value: 2000,
      },
      {
        source: 'ewr',
        target: 'ont',
        value: 10000,
      },
    ],
  };

  facilityInboundData = {
    nodes: [
      {
        id: 'atl',
        name: 'ATL',
      },
      {
        id: 'bos',
        name: 'BOS',
      },
      {
        id: 'bwi',
        name: 'BWI',
      },
      {
        id: 'cvg',
        name: 'CVG',
      },
      {
        id: 'dfw',
        name: 'DFW',
      },
      {
        id: 'ewr',
        name: 'EWR',
      },
      {
        id: 'ind',
        name: 'IND',
      },
      {
        id: 'mco',
        name: 'MCO',
      },
      {
        id: 'ont',
        name: 'ONT',
      },
      {
        id: 'ord',
        name: 'ORD',
      },
      {
        id: 'rno',
        name: 'RNO',
      },
      {
        id: 'slc',
        name: 'SLC',
      },
    ],
    links: [
      {
        source: 'bos',
        target: 'dfw',
        value: 100000,
      },
      {
        source: 'ewr',
        target: 'dfw',
        value: 200000,
      },
      {
        source: 'atl',
        target: 'dfw',
        value: 35000,
      },
      {
        source: 'mco',
        target: 'dfw',
        value: 45000,
      },
      {
        source: 'ind',
        target: 'dfw',
        value: 90000,
      },
      {
        source: 'ord',
        target: 'dfw',
        value: 200000,
      },
      {
        source: 'slc',
        target: 'dfw',
        value: 100000,
      },
      {
        source: 'rno',
        target: 'dfw',
        value: 50000,
      },
      {
        source: 'ont',
        target: 'dfw',
        value: 300000,
      },
      {
        source: 'cvg',
        target: 'dfw',
        value: 150000,
      },
      {
        source: 'bwi',
        target: 'dfw',
        value: 500000,
      },
    ],
  };

  sampleData = this.ONT;

  onFacilitySelect($event) {
    console.log('ON SELECT: ', $event);
  }

  onChange($event) {
    console.log('ON CHANGE: ', $event);
    // this.sampleData = this[$event.target.value];

    console.log(this.sampleData);
  }
}
