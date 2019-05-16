import React, { FunctionComponent, memo, useState } from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { fileChosen } from '../store';
import './upload.less';
import { Redirect } from 'react-router';

interface DispachProps {
  handleFileChosen(event: any): void;
}

const Upload: FunctionComponent<DispachProps> = ({ handleFileChosen }): JSX.Element => {
  const [load, redirect] = useState<boolean>(false);
  if (load) return <Redirect to='/overview' />;
  return (
    <>
      <label id='largeFile' htmlFor='file' className='label'>
        <input
          id='file'
          type='file'
          accept='.csv'
          onChange={(e: any) => {
            handleFileChosen(e.target.files[0]);
            redirect(true);
          }}
          placeholder='Click to Upload'
        />
      </label>
    </>
  );
};
const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispachProps => {
  return {
    handleFileChosen: (file: any) => {
      dispatch(fileChosen(file));
    }
  };
};
const UploadBox = connect(
  null,
  mapDispatchToProps
)(Upload);

export default memo(() => <UploadBox />);
