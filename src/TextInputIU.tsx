// @codepen
import * as React from "react";
import { TextField } from "office-ui-fabric-react/lib/TextField";

export default class TextInputUI extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className="docs-TextFieldExample">
        <TextField onChange={this.props.onChange} {...this.props.Props} />
      </div>
    );
  }
}
