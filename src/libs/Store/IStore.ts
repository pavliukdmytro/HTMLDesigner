interface ICommit {
  (name: string, payload?: any): void;
}
export interface IStore {
  commit: ICommit;
}
