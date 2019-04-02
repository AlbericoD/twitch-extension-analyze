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
  'Mouseenters per Viewer': string;
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
