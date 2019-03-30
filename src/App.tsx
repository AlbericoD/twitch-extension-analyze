import React, { Component } from 'react';
import {
  ImportTwitchCSV,
  StatisticInstall,
  ContentBox,
  ITwitchExtensionPrimitiveCSV
} from './components/index';
import { Layout, Icon } from 'antd';

const { Header, Content } = Layout;

interface IState {
  fileReader: FileReader;
  uploadCSV: boolean;
  load: boolean;
  csv: ITwitchExtensionPrimitiveCSV[] | null;
  name: string;
}
class App extends Component<{}, IState> {
  state: IState;
  constructor(props: any) {
    super(props);
    this.state = {
      fileReader: new FileReader(),
      uploadCSV: false,
      load: false,
      csv: null,
      name: 'Extension Name'
    };
  }
  csvJSON(csv: string): ITwitchExtensionPrimitiveCSV[] {
    let lines = csv.split('\n');

    let result: ITwitchExtensionPrimitiveCSV[] = [];

    let headers = lines[0].split(',');

    for (let i = 1; i < lines.length - 1; i++) {
      let obj: any = {};
      let currentline = lines[i].split(',');

      for (let j = 0; j < headers.length; j++) {
        if (currentline[j] !== undefined && currentline[j] !== '') obj[headers[j]] = currentline[j];
      }

      result.push(obj);
    }
    return result;
  }
  handleFileRead = () => {
    if (typeof this.state.fileReader.result === 'string') {
      const content: string = this.state.fileReader.result;
      this.setState({ csv: this.csvJSON(content) }, () => {
        this.state.csv !== null
          ? this.setState({ name: this.state.csv[0]['Extension Name'] })
          : null;
      });
      // const total = data
      //   .map(item => parseFloat(item['Bits Revenue USD']))
      //   .reduce((prev, next) => prev + next);
      // const install = data
      //   .map(item => parseFloat(item.Installs))
      //   .reduce((prev, next) => prev + next);
      // const desinstall = data
      //   .map(item => parseFloat(item.Uninstalls))
      //   .reduce((prev, next) => prev + next);

      // const ac = data
      //   .map(item => parseFloat(item['Unique Active Channels']))
      //   .reduce((prev, next) => prev + next);

      // const at = data.map(item => parseFloat(item.Activations)).reduce((prev, next) => prev + next);

      // console.log('Total => ', total);
      // console.log('Install => ', install);
      // console.log('Unistall => ', desinstall);
      // console.log('AVG Instalation => ', install - desinstall);
      // console.log('Unique Active Channels => ', ac);
      // console.log('Activations => ', at);
    }
  };

  handleFileChosen = (file: any) => {
    this.setState({ load: true }, () => {
      this.state.fileReader.onloadend = this.handleFileRead;
      this.state.fileReader.readAsText(file);
    });
  };

  render() {
    return (
      <Layout>
        <Header
          style={{
            background: '#6441a4'
          }}>
          <h1 style={{ color: '#fff' }}>
            <a href='https://github.com/AlbericoD' target='__blank'>
              <Icon
                type='github'
                style={{ color: '#fff', fontSize: '1.5em', marginTop: 10, marginRight: 20 }}
              />
            </a>
            Extension Overview: {this.state.name}
          </h1>
        </Header>
        <Content>
          <ImportTwitchCSV handleFileChosen={this.handleFileChosen} />
          {this.state.csv !== null ? <ContentBox csv={this.state.csv} /> : 'Please Upload CSV'}
        </Content>
      </Layout>
    );
  }
}

export default App;
