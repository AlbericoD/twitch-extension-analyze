import React, { Component } from 'react';
import { Layout, DatePicker, Row, Col, PageHeader, Spin } from 'antd';
import moment, { Moment } from 'moment';

import { ITwitchExtensionPrimitiveCSV } from './components/index';
import { Sider, Top } from './components/menu';
import { ContentBox } from './containers';
import { makeRanges, csvToJSON } from './utils';

const { Header, Content, Footer } = Layout;
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';

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
      menu: 'upload-csv'
    };
  }
  delay = (ms: number = 0, menu: string = this.state.menu): NodeJS.Timeout =>
    setTimeout(() => {
      this.setState({ load: false, menu });
    }, ms);
  handleFileRead = () => {
    if (typeof this.state.fileReader.result === 'string') {
      const content: string = this.state.fileReader.result;
      this.setState({ csv: csvToJSON(content) }, () => {
        setTimeout(
          () => {
            if (this.state.csv !== null) {
              this.setState(
                {
                  name: this.state.csv[0]['Extension Name'],
                  initialDateIndex: this.state.csv.length - 1,
                  lastDateIndex: 0
                },
                () => this.setState({ load: false, menu: 'overview' })
              );
            }
          },
          this.state.csv !== null ? this.state.csv.length * 2 : 2
        );
      });
    }
  };

  toggle = () => {
    this.setState(
      {
        collapsed: !this.state.collapsed,
        load: true
      },
      this.delay.bind(0.2)
    );
  };
  handleClick = (e: any) => {
    this.setState(
      { menu: e.key, load: true },
      this.delay.bind(this.state.csv !== null ? this.state.csv.length : 0.2)
    );
  };
  handleFileChosen = (file: any) => {
    this.setState({ load: true }, () => {
      this.state.fileReader.onloadend = this.handleFileRead;
      this.state.fileReader.readAsText(file);
    });
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
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          current={this.state.menu}
          collapsed={this.state.collapsed}
          handleClick={this.handleClick}
          onCollapse={this.toggle}
          loadedCsv={this.state.csv === null}
        />
        <Layout style={{ padding: '0 0 24px', marginBottom: 20 }}>
          <Header style={{ position: 'fixed', zIndex: 2, width: '100%' }}>
            <Top name={this.state.name}>
              {csv !== null && menu !== 'activated' ? (
                <PageHeader
                  title='Graph Range Date'
                  subTitle={
                    <RangePicker
                      defaultValue={[
                        moment(csv[csv.length - 1].Date, dateFormat),
                        moment(csv[0].Date, dateFormat)
                      ]}
                      ranges={makeRanges(csv)}
                      format={dateFormat}
                      size={'large'}
                      onChange={(e: any) => this.parseDateToIndex(e)}
                      disabled={csv === null}
                    />
                  }
                />
              ) : null}
            </Top>
          </Header>
          <Content style={{ width: '100%', minHeight: '70vh', marginTop: 60 }}>
            <Row gutter={16}>
              <Col span={24}>
                {!load ? (
                  <ContentBox
                    menu={menu}
                    initialDateIndex={initialDateIndex}
                    lastDateIndex={lastDateIndex}
                    handleFileChosen={this.handleFileChosen}
                    csv={csv !== null ? csv : []}
                  />
                ) : (
                  <div className='load-csv'>
                    <Spin tip='loading ...' />
                  </div>
                )}
              </Col>
            </Row>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Extension Analyze ©2019 Created by&nbsp;&nbsp;
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
