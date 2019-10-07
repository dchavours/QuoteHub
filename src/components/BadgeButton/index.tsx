import * as React from 'react';
import Badge from './Badge/Badge'



export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
      <div>
        <Badge/>
      </div>
    );
  }
}



// How is <IAppProps> used in this?
// Used as a way to filter props. See how 
// the interface is used above the class.