import * as React from "react";
import { render } from "react-dom";

import {
  Dropdown,
  IDropdown,
  DropdownMenuItemType,
  IDropdownOption
} from "office-ui-fabric-react/lib/Dropdown";

import { BaseComponent, createRef } from "office-ui-fabric-react/lib/Utilities";

import FormData from "./formData.config";

class FormRender extends BaseComponent<any, any> {
  private _basicDropdown = createRef<IDropdown>();
  constructor() {
    super();
    this.state = {
      selectedItem: undefined,
      selectedItems: [],
      data: this.props.data
    };
  }

  public onHandler = (
    inputEvent: IDropdownOption,
    FormItem: any,
    formItemIndex: number,
    parenthood: any
  ): void => {
    console.log("here is the things updating..." + inputEvent.selected);
    // this.setState(
    //   {
    //     formData: {
    //       ...this.state.formData,
    //       [FormItem.FieldName]: evnt.target.value
    //     }
    //   },
    //   () => console.log(this.state.formData)
    // );
    // this.props.onChange(value, actionType, index);
  };

  renderDropDownInput = (props: any): JSX.Element => {
    return <Dropdown {...props} onChange={this.onHandler} />;
  };

  formItemRenderer = (data = []) => {
    return data.map((FormItem: any, FormItemIndex: number) => {
      return (
        <div style={{ background: FormItem.bgStyle, padding: 10 }}>
          <h3>{FormItem.Label}</h3>
          {FormItem.Type &&
            FormItem.isVisible && (
              <div>
                <div>
                  <FormItem.Type
                    {...FormItem.Props}
                    key={FormItemIndex.toString()}
                    onChange={(e: any): void =>
                      this.onHandler(e, FormItem, FormItemIndex, "parent")
                    }
                  />
                </div>
              </div>
            )}
          {FormItem.Children && FormItem.Children.length > 0
            ? this.childrenRenderer(FormItem.Children)
            : null}
        </div>
      );
    });
  };

  childrenRenderer = (data = []) => {
    return data.map((FormItem: any, formItemIndex: number) => {
      return (
        <div>
          <div>
            <FormItem.Type
              {...FormItem.Props}
              key={formItemIndex.toString()}
              onChange={(e: any) =>
                this.onHandler(e, FormItem, formItemIndex, "child")
              }
            />
          </div>
        </div>
      );
    });
  };

  public render(): JSX.Element {
    return <div>{this.formItemRenderer(this.state.data)}</div>;
  }
}

render(<div />, document.getElementById("root"));

// {
//   FormItem.Children.length > 0
//   ? this.childrenRenderer(FormItem.children)
//   : null
// }
