import React, { NamedExoticComponent, memo } from 'react';
import { Icon } from 'antd';
import { AppState } from '../../../store';
import { connect } from 'react-redux';
import { ITwitchExtensionPrimitiveCSV } from '../..';
import './index.less';
interface IProps {
  csv: ITwitchExtensionPrimitiveCSV[] | null;
}
export const TopNavHeader: NamedExoticComponent<IProps> = memo(({ csv }) => {
  return (
    <div className={`head`}>
      <div className={`main`}>
        <div className={'left'}>
          <div className={'logo'} key='logo' id='logo' />
        </div>
        <div className={'right'}>
          <Icon type='appstore' theme='filled' />
          &nbsp; Extension Name:&nbsp;
          {csv === null || !csv.length ? 'csv not loaded' : csv[0]['Extension Name']}
        </div>
      </div>
    </div>
  );
});
const mapStateToProps = (state: AppState): IProps => ({
  csv: state.csv.data
});

const TopNavHeaderBox = connect(
  mapStateToProps,
  null
)(TopNavHeader);

export default memo(() => <TopNavHeaderBox />);
