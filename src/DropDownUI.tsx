// @codepen
import * as React from "react";

import {
  Dropdown,
  IDropdown,
  DropdownMenuItemType,
  IDropdownOption
} from "office-ui-fabric-react/lib/Dropdown";
import { BaseComponent, createRef } from "office-ui-fabric-react/lib/Utilities";

export default class DropDownInputComponent extends BaseComponent<
  any,
  {
    selectedItem?: { key: string | number | undefined };
    selectedItems: string[];
  }
> {
  private _basicDropdown = createRef<IDropdown>();

  constructor(props: {}) {
    super(props);
    this.state = {
      selectedItem: undefined,
      selectedItems: []
    };
  }

  public render() {
    const { selectedItem, selectedItems } = this.state;
    const { Props } = this.props;

    return (
      <div className="docs-DropdownExample">
        <Dropdown
          label="Controlled example:"
          selectedKey={selectedItem ? selectedItem.key : undefined}
          onChanged={this.changeState}
          // onFocus={this._log("onFocus called")}
          // onBlur={this._log("onBlur called")}
          placeHolder="Select an Option"
          {...Props}
        />
      </div>
    );
  }
  // private _log = () => {};

  public changeState = (item: IDropdownOption): void => {
    console.log(
      "here is the things updating..." +
        item.key +
        " " +
        item.text +
        " " +
        item.selected
    );
    this.setState({ selectedItem: item });
  };
}
