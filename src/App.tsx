import React, { Component } from 'react';
import { ImportTwitchCSV, ContentBox, ITwitchExtensionPrimitiveCSV } from './components/index';
import { Layout, Icon, DatePicker, Row, Col, PageHeader, Menu, Empty, Spin } from 'antd';
import moment, { Moment } from 'moment';
import { RangePickerPresetRange } from 'antd/lib/date-picker/interface';

const { Header, Sider, Content, Footer } = Layout;

const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
interface IRange {
  [range: string]: RangePickerPresetRange;
}
interface IState {
  fileReader: FileReader;
  uploadCSV: boolean;
  load: boolean;
  csv: ITwitchExtensionPrimitiveCSV[] | null;
  name: string;
  initialDateIndex: number;
  lastDateIndex: number;
  collapsed: boolean;
  menu: string;
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
      name: 'Extension Name',
      initialDateIndex: 0,
      lastDateIndex: 0,
      collapsed: false,
      menu: '1'
    };
  }
  csvJSON(csv: string): ITwitchExtensionPrimitiveCSV[] {
    const lines = csv.split('\n');
    const headers = lines[0].split(',');
    let result: ITwitchExtensionPrimitiveCSV[] = [];

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
        setTimeout(
          () => {
            if (this.state.csv !== null) {
              this.setState(
                {
                  name: this.state.csv[0]['Extension Name'],
                  initialDateIndex: this.state.csv.length - 1,
                  lastDateIndex: 0
                },
                () => this.setState({ load: false })
              );
            }
          },
          this.state.csv !== null ? this.state.csv.length * 2 : 2
        );
      });
    }
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  handleClick = (e: any) => {
    this.setState({ menu: e.key, load: true }, () =>
      setTimeout(
        () => {
          this.setState({ load: false });
        },
        this.state.csv !== null ? this.state.csv.length : 2
      )
    );
  };
  handleFileChosen = (file: any) => {
    this.setState({ load: true }, () => {
      this.state.fileReader.onloadend = this.handleFileRead;
      this.state.fileReader.readAsText(file);
    });
  };
  makeRanges = (data: ITwitchExtensionPrimitiveCSV[]): IRange => {
    if (data.length >= 0 && data.length <= 6) {
      return {
        'First Extension Release - Last Date CSV': [
          moment(data[data.length - 1].Date, dateFormat),
          moment(data[0].Date, dateFormat)
        ],
        'Last 7 Days': [moment(data[6].Date, dateFormat), moment(data[0].Date, dateFormat)]
      };
    } else if (data.length >= 0 && data.length >= 29) {
      return {
        'First Extension Release - Last Date CSV': [
          moment(data[data.length - 1].Date, dateFormat),
          moment(data[0].Date, dateFormat)
        ],
        'Last 7 Days': [moment(data[6].Date, dateFormat), moment(data[0].Date, dateFormat)],
        'Last 30 Days': [moment(data[29].Date, dateFormat), moment(data[0].Date, dateFormat)]
      };
    } else {
      return {
        'First Extension Release - Last Date CSV': [
          moment(data[data.length - 1].Date, dateFormat),
          moment(data[0].Date, dateFormat)
        ]
      };
    }
  };

  parseDateToIndex = (dates: Moment[]) => {
    const { csv } = this.state;
    if (csv !== null && dates.length === 2) {
      dates.forEach((date, ind) => {
        const index = csv.findIndex(item => item.Date === date.format('YYYY-MM-DD'));
        if (index !== -1 && ind === 0) this.setState({ initialDateIndex: index });
        if (index !== -1 && ind === 1) this.setState({ lastDateIndex: index });
      });
    }
  };
  render() {
    const { csv, initialDateIndex, lastDateIndex, menu, load } = this.state;
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          breakpoint='sm'
          style={{
            background: '#0f0e11',
            border: '1px solid hsla(0,0%,100%,.09)',
            boxShadow:
              '0 2px 4px -1px hsla(0,0%,100%,.05),0 2px 2px -2px hsla(0,0%,100%,.05),0 1px 4px 0 hsla(0,0%,100%,.05)'
          }}>
          <div className='logo'>
            <a href='https://github.com/AlbericoD' target='__blank'>
              <Icon type='github' style={{ color: '#fff', fontSize: '1.5em', margin: '5px 6px' }} />
            </a>
          </div>
          <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']} onClick={this.handleClick}>
            <Menu.Item
              key='1'
              style={{
                background: '#6441a4',
                border: '1px solid hsla(0,0%,100%,.09)'
              }}>
              <Icon type='dashboard' />
              <span>Overview</span>
            </Menu.Item>
            <Menu.Item
              key='2'
              style={{
                background: '#6441a4',
                border: '1px solid hsla(0,0%,100%,.09)'
              }}>
              <Icon type='bar-chart' />
              <span>Installations Graph </span>
            </Menu.Item>
            <Menu.Item
              key='3'
              style={{
                background: '#6441a4',
                border: '1px solid hsla(0,0%,100%,.09)'
              }}>
              <Icon type='line-chart' />
              <span>Monetization Graph</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 0 24px' }}>
          <Menu
            theme='light'
            mode='horizontal'
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}>
            {/* <Menu.Item key='collap'>
              <Icon
                className='trigger'
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
                style={{
                  color: 'black',
                  fontSize: '1.5em'
                }}
              />
            </Menu.Item> */}

            <Menu.Item key='0'>
              <PageHeader title='Extension: ' subTitle={this.state.name} />
            </Menu.Item>

            <Menu.Item key='2'>
              {csv !== null ? (
                <PageHeader
                  title='Graph Range Date'
                  subTitle={
                    <RangePicker
                      defaultValue={[
                        moment(csv[csv.length - 1].Date, dateFormat),
                        moment(csv[0].Date, dateFormat)
                      ]}
                      ranges={this.makeRanges(csv)}
                      format={dateFormat}
                      size={'large'}
                      onChange={(e: any) => this.parseDateToIndex(e)}
                      disabled={csv === null}
                    />
                  }
                />
              ) : (
                'Graph Range Date'
              )}
            </Menu.Item>
          </Menu>
          <Content>
            <Row gutter={16}>
              <Col span={24}>
                {csv !== null ? (
                  !load ? (
                    <ContentBox
                      menu={menu}
                      csv={csv}
                      initialDateIndex={initialDateIndex}
                      lastDateIndex={lastDateIndex}
                    />
                  ) : (
                    <div className='load-csv'>
                      <Spin tip='loading ...' />
                    </div>
                  )
                ) : (
                  <Empty
                    style={{ height: '75vh', margin: 20, padding: 30 }}
                    description={<span>Please click the button to import your CSV file</span>}>
                    <PageHeader
                      title='CSV File'
                      subTitle={<ImportTwitchCSV handleFileChosen={this.handleFileChosen} />}
                    />
                  </Empty>
                )}
              </Col>
            </Row>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Extension Analyze ©2019 Created by
            <a href='https://github.com/AlbericoD' target='__blank'>
              Albérico Dias Barreto Filho
            </a>
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
