export type CSVkey =
  | 'Date'
  | 'Extension Name'
  | 'Extension Client ID'
  | 'Extension Details Page Visits'
  | 'Unique Extension Details Page Visits'
  | 'Installs'
  | 'Uninstalls'
  | 'Activations'
  | 'Unique Active Channels'
  | 'Unique Active Channels Last 7 Days'
  | 'Unique Active Channels Last 30 Days'
  | 'Unique Identity Links'
  | 'Unique Identity Unlinks'
  | 'Renders'
  | 'Unique Renderers'
  | 'Unique Renderers Last 7 Days'
  | 'Unique Renderers Last 30 Days'
  | 'Views'
  | 'Unique Viewers'
  | 'Unique Viewers Last 7 Days'
  | 'Unique Viewers Last 30 Days'
  | 'Mouseenters'
  | 'Unique Mouseenters'
  | 'Unique Mouseenters Last 7 Days'
  | 'Unique Mouseenters Last 30 Days'
  | 'Mouseenters Per Viewer'
  | 'Mouseenter Rate'
  | 'Clicks'
  | 'Unique Interactors'
  | 'Unique Interactors Last 7 Days'
  | 'Unique Interactors Last 30 Days'
  | 'Clicks Per Interactor'
  | 'Interaction Rate'
  | 'Minimizations'
  | 'Unique Minimizers'
  | 'Minimization Rate'
  | 'Unminimizations'
  | 'Unique Unminimizers'
  | 'Unminimization Rate'
  | 'Bits Revenue USD'
  | 'Bits Used'
  | 'Bits Transactions'
  | 'Bits Per Transaction'
  | 'Unique Bits Users'
  | 'Unique Bits Users Last 7 Days'
  | 'Unique Bits Users Last 30 Days'
  | 'Bits Used Per User';
export interface ITwitchExtensionPrimitiveCSV {
  [key: string]: string | number;
  Date: string;
  'Extension Name': string;
  'Extension Client ID': string;
  'Extension Details Page Visits': string;
  'Unique Extension Details Page Visits': string;
  Installs: string;
  Uninstalls: string;
  Activations: string;
  'Unique Active Channels': string;
  'Unique Active Channels Last 7 Days': string;
  'Unique Active Channels Last 30 Days': string;
  'Unique Identity Links': string;
  'Unique Identity Unlinks': string;
  Renders: string;
  'Unique Renderers': string;
  'Unique Renderers Last 7 Days': string;
  'Unique Renderers Last 30 Days': string;
  Views: string;
  'Unique Viewers': string;
  'Unique Viewers Last 7 Days': string;
  'Unique Viewers Last 30 Days': string;
  Mouseenters: string;
  'Unique Mouseenters': string;
  'Unique Mouseenters Last 7 Days': string;
  'Unique Mouseenters Last 30 Days': string;
  'Mouseenters Per Viewer': string;
  'Mouseenter Rate': string;
  Clicks: string;
  'Unique Interactors': string;
  'Unique Interactors Last 7 Days': string;
  'Unique Interactors Last 30 Days': string;
  'Clicks Per Interactor': string;
  'Interaction Rate': string;
  Minimizations: string;
  'Unique Minimizers': string;
  'Minimization Rate': string;
  Unminimizations: string;
  'Unique Unminimizers': string;
  'Unminimization Rate': string;
  'Bits Revenue USD': string;
  'Bits Used': string;
  'Bits Transactions': string;
  'Bits Per Transaction': string;
  'Unique Bits Users': string;
  'Unique Bits Users Last 7 Days': string;
  'Unique Bits Users Last 30 Days': string;
  'Bits Used Per User': string;
}

export interface IDataBitsStatistic {
  name: string;
  bitsUsed: number;
  transactions: number;
  USD: number;
}

export interface IDataInstalls {
  name: string;
  install: number;
  uninstalls: number;
  activations: number;
}

export interface IIteraction {
  name: string;
  interactionRate: number;
  minimizations: number;
  unminimizations: number;
}
export interface IStatistic {
  [key: string]: string | number;
  title: string;
  precision: number;
  icon: string;
}
