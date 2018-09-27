import * as React from "react";
import { render } from "react-dom";
import { Checkbox } from "office-ui-fabric-react/lib/Checkbox";
import DropDownInput from "./DropDownUI";
import TextInput from "./TextInputIU";

import FormData from "./formData";

interface IProps {
  required: boolean;
  label: string;
}

interface IFormType {
  Label: string;
  FieldName: string;
  Type: string | any[];
  Value: string | undefined;
  isVisible: boolean;
  Children: any[];
  Props: IProps;
  bgStyle?: string;
}

interface IFormData {
  Label: string;
  FieldName: string;
  Type: string | any[] | IFormType[];
  Value: string | undefined;
  isVisible: boolean;
  Children: any[];
  bgStyle?: string;
}

class FormRender extends React.Component<
  {
    data: IFormData[];
  },
  any
> {
  constructor(props: { data: IFormData[] }) {
    super(props);
    this.state = {
      // selectedItem: undefined,
      // selectedItems: []
    };
  }

  formRender = (data: any) => {
    return data.map((FormItem: any, FormIndex: number) => {
      if (FormItem.Type === "Dropdown") {
        return (
          <div>
            <DropDownInput Props={FormItem.Props} />
          </div>
        );
      }
      if (FormItem.Type === "TextField") {
        return (
          <div>
            <TextInput Props={FormItem.Props} />
          </div>
        );
      }
      if (FormItem.Type === "Checkbox") {
        return <Checkbox {...FormItem.Props} />;
      }

      return <div />;
    });
  };

  public render() {
    const { data } = this.props;
    return data.map((FormItem: any, FormIndex: number) => {
      if (Array.isArray(FormItem.Type)) {
        return (
          <div>
            <h3>{FormItem.Label}</h3>
            {this.formRender(FormItem.Type)}
          </div>
        );
      }
      if (FormItem.Type === "Dropdown") {
        return (
          <div>
            <DropDownInput Props={FormItem.Props} />
          </div>
        );
      }
      if (FormItem.Type === "TextField") {
        return <TextInput Props={FormItem.Props} />;
      }
      if (FormItem.Type === "Checkbox") {
        return <Checkbox {...FormItem.Props} />;
      }
      return <div />;
    });
  }
}
render(<FormRender data={FormData} />, document.getElementById("root"));

// {
//   FormItem.Children.length > 0
//   ? this.childrenRenderer(FormItem.children)
//   : null
// }
