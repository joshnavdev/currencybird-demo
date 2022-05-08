export interface IConfig {
  database: IDatabaseConfig;
}

export interface IDatabaseConfig {
  host: string;
  port: number;
  user: string;
  pass: string;
  name: string;
}
