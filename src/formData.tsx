export default [
  {
    Label: "Requester",
    FieldName: "Requester",
    Type: [
      {
        Label: "RequesterDisplayName",
        FieldName: "RequesterDisplayName",
        Type: "TextField",
        Value: "",
        isVisible: true,
        Children: [],
        Props: {
          required: false,
          label: "RequesterDisplayName"
        }
      },
      {
        Label: "RequesterUPN",
        FieldName: "RequesterUPN",
        Type: "TextField",
        Value: "",
        isVisible: true,
        Children: [],

        Props: {
          required: false,
          label: "RequesterUPN"
        }
      },
      {
        Label: "RequesterSharepointID",
        FieldName: "RequesterSharepointID",
        Type: "TextField",
        Value: "",
        isVisible: true,
        Children: [],
        Props: {
          required: false,
          label: "Requester"
        }
      }
    ],
    Value: "",
    isVisible: true,
    Children: [],
    bgStyle: "gray"
  },
  {
    Label: "Status",
    FieldName: "Status",
    Type: "TextField",
    Value: "",
    isVisible: true,
    Children: [],
    Props: {
      required: false,
      label: "Status",
      disabled: true
    }
  },
  {
    Label: "Plan Number",
    FieldName: "PlanNumber",
    Type: "TextField",
    Value: "",
    isVisible: true,
    Children: [],
    Mandatory: true,
    Props: {
      label: "Plan Number"
    }
  },
  {
    Label: "Year",
    FieldName: "Year",
    Type: "TextField",
    Value: "",
    isVisible: true,
    Children: [],

    Props: {
      required: false,
      label: "Year"
    }
  },
  {
    Label: "Region",
    FieldName: "Region",
    Type: "Dropdown",
    values: [],
    isVisible: true,
    Children: [],
    Props: {
      required: true,
      placeHolder: "Select an Region",
      label: "Region",
      id: "",
      ariaLabel: "Error",
      options: [
        { key: "A", text: "Option a" },
        { key: "B", text: "Option b" },
        { key: "C", text: "Option c" },
        { key: "D", text: "Option d" },
        { key: "E", text: "Option e" }
      ]
    }
  },
  {
    Label: "Country",
    FieldName: "Country",
    Type: "Dropdown",
    values: [],
    isVisible: true,
    Children: [],
    Props: {
      required: true,
      placeHolder: "Select an Country",
      label: "Country",
      id: "",
      ariaLabel: "Error message example",
      options: [
        { key: "A", text: "Option a" },
        { key: "B", text: "Option b" },
        { key: "C", text: "Option c" },
        { key: "D", text: "Option d" },
        { key: "E", text: "Option e" }
      ]
    }
  },
  {
    Label: "Company Name / Code",
    FieldName: "CompanyCode",
    Type: "Dropdown",
    values: [],
    isVisible: true,
    Children: [],
    Props: {
      required: true,
      placeHolder: "Select an Company Name / Code",
      label: "Company Name / Code",
      id: "",
      ariaLabel: "Error message Dropdown example",
      options: [
        { key: "A", text: "Option a" },
        { key: "B", text: "Option b" },
        { key: "C", text: "Option c" },
        { key: "D", text: "Option d" },
        { key: "E", text: "Option e" }
      ]
    }
  },
  {
    Label: "DCU",
    FieldName: "DCU",
    Type: "TextField",
    Value: "",
    isVisible: true,
    Children: [],
    Props: {
      required: true,
      label: "DCU"
    }
  },
  {
    Label: "Approving Department",
    FieldName: "ApprovingDepartment",
    Type: "Dropdown",
    values: [],
    isVisible: true,
    Children: [],

    Props: {
      required: false,
      placeHolder: "Select an Approving Department",
      label: "Approving Department",
      id: "",
      ariaLabel: "",
      options: [
        { key: "A", text: "Option a" },
        { key: "B", text: "Option b" },
        { key: "C", text: "Option c" },
        { key: "D", text: "Option d" },
        { key: "E", text: "Option e" }
      ]
    }
  },
  {
    Label: "Organizational Unit",
    FieldName: "OrganizationalUnit",
    Type: "TextField",
    Value: "",
    isVisible: true,
    Children: [],

    Props: {
      required: true,
      label: "Organizational Unit"
    }
  },
  {
    Label: "Budget Responsible Department Code",
    FieldName: "BudgetResponsibleDepartmentCode",
    Type: "TextField",
    Value: "",
    isVisible: true,
    Children: [],

    Props: {
      required: true,
      label: "Budget Responsible Department Code"
    }
  },
  {
    Label: "Budget Responsible Department Name",
    FieldName: "BudgetResponsibleDepartmentName",
    Type: "TextField",
    Value: "",
    isVisible: true,
    Children: [],
    Props: {
      required: true,
      label: "Budget Responsible Department Name"
    }
  },
  {
    Label: "Cost Center",
    FieldName: "CostCenter",
    Type: "Dropdown",
    values: [],
    isVisible: true,
    Children: [],
    Props: {
      required: true,
      placeHolder: "Select an Cost Center",
      label: "Cost Center",
      id: "",
      ariaLabel: "Error message Dropdown example",
      options: [
        { key: "A", text: "Option a" },
        { key: "B", text: "Option b" },
        { key: "C", text: "Option c" },
        { key: "D", text: "Option d" },
        { key: "E", text: "Option e" }
      ]
    }
  },
  {
    Label: "Cost Center Description",
    FieldName: "CostCenterDescription",
    Type: "TextField",
    Value: "",
    isVisible: true,
    Children: [],
    Props: {
      required: true,
      placeHolder: "Select an Cost Center Description",
      label: "Cost Center Description",
      id: "",
      ariaLabel: "Error message Dropdown example",
      options: [
        { key: "A", text: "Option a" },
        { key: "B", text: "Option b" },
        { key: "C", text: "Option c" },
        { key: "D", text: "Option d" },
        { key: "E", text: "Option e" }
      ]
    }
  },
  {
    Label: "Plant",
    FieldName: "Plant",
    Type: "TextField",
    Value: "",
    isVisible: true,
    Children: [],
    Props: {
      required: true,
      label: "Plant"
    }
  },
  {
    Label: "Plant Description",
    FieldName: "PlantDescription",
    Type: "TextField",
    Value: "",
    isVisible: true,
    Children: [],

    Props: {
      required: true,
      label: "Plant Description"
    }
  },
  {
    Label: "Type of Request",
    FieldName: "TypeOfRequest",

    Type: "Dropdown",
    Value: "",
    isVisible: true,
    Children: [],

    Props: {
      required: false,
      placeHolder: "Select an Cost Center",
      label: "Type of Request",
      id: "",
      ariaLabel: "Error message Dropdown example",
      options: [
        { key: "A", text: "Planed" },
        { key: "B", text: "New With Plan" },
        { key: "C", text: "New Without Plan" },
        { key: "D", text: "Budget Increase" }
      ]
    }
  },
  {
    Label: "Project No.",
    FieldName: "ProjectNumberBudgetIncrease",
    Type: "Dropdown",
    values: [],
    isVisible: true,
    Children: [],

    Props: {
      required: false,
      placeHolder: "Select an Project No.",
      label: "Project No.",
      id: "",
      ariaLabel: "Error message Dropdow example",
      options: [
        { key: "A", text: "Option a" },
        { key: "B", text: "Option b" },
        { key: "C", text: "Option c" },
        { key: "D", text: "Option d" },
        { key: "E", text: "Option e" }
      ]
    }
  },
  {
    Label: "Budget Comment",
    FieldName: "BudgetComment",
    Type: "TextField",
    Value: "",
    isVisible: true,
    Children: [],

    Props: {
      required: false,
      label: "Budget Comment"
    }
  },
  {
    Label: "Budget % value",
    FieldName: "Budget % value",
    Type: "TextField",
    Value: "",
    isVisible: true,
    Children: [],

    Props: {
      required: false,
      placeHolder: "Select an SuccessorDisplayName",
      label: "Budget % value",
      id: "",
      ariaLabel: "Error message Dropdown example",
      options: [
        { key: "A", text: "Option a" },
        { key: "B", text: "Option b" },
        { key: "C", text: "Option c" },
        { key: "D", text: "Option d" },
        { key: "E", text: "Option e" }
      ]
    }
  },
  {
    Label: "Current Prioritization",
    FieldName: "CurrentPrioritization",
    Type: "TextField",
    Value: "",
    isVisible: true,
    Children: [],
    Props: {
      required: false,
      label: "Current Prioritization"
    }
  },
  {
    Label: "Project Manager / Responsible",
    FieldName: "Project Manager / Responsible",
    Type: [
      {
        Label: "ProjectManager",
        FieldName: "ProjectManager",
        Type: "Dropdown",
        values: [],
        isVisible: true,
        Children: [],
        Mandatory: false,
        Props: {
          placeHolder: "Select an ProjectManager",
          label: "ProjectManagerDropdown",
          id: "",
          ariaLabel: "Error message Dropdown example",
          options: [
            { key: "A", text: "Option a" },
            { key: "B", text: "Option b" },
            { key: "C", text: "Option c" },
            { key: "D", text: "Option d" },
            { key: "E", text: "Option e" }
          ]
        }
      },
      {
        Label: "ProjectManagerDisplayName",
        FieldName: "ProjectManagerDisplayName",
        Type: "TextField",
        Value: "",
        isVisible: true,
        Children: [],

        Props: {
          required: true,
          label: "ProjectManagerDisplayName"
        }
      },
      {
        Label: "ProjectManagerUPN",
        FieldName: "ProjectManagerUPN",
        Type: "TextField",
        Value: "",
        isVisible: true,
        Children: [],

        Props: {
          required: true,
          label: "ProjectManagerUPN"
        }
      },
      {
        Label: "ProjectManagerSharepointID",
        FieldName: "ProjectManagerSharepointID",
        Type: "TextField",
        Value: "",
        isVisible: true,
        Children: [],

        Props: {
          required: true,
          label: "ProjectManagerSharepointID"
        }
      }
    ],
    Value: null,
    isVisible: true,
    Children: [],
    Props: {},
    bgStyle: "yellow"
  },
  {
    Label: "Project / Investment Name",
    FieldName: "ProjectInvestmentName",
    Type: "TextField",
    Value: "",
    isVisible: true,
    Children: [],

    Props: {
      required: true,
      label: "Project / Investment Name"
    }
  },
  {
    Label: "Investment Description and Background",
    FieldName: "InvestmentDescriptionAndBackground",
    Type: "TextField",
    Value: "",
    isVisible: true,
    Children: [],
    Mandatory: false,
    Props: {
      label: "Investment Description and Background"
    }
  },
  {
    Label: "Successor",
    FieldName: "Successor",
    Type: [
      {
        Label: "Successor",
        FieldName: "SuccessorDropDown",
        Type: "TextField",
        Value: "",
        isVisible: true,
        Children: [],
        Mandatory: false,
        Props: {
          label: "SuccessorDropDown"
        }
      },
      {
        Label: "Successor",
        FieldName: "SuccessorDisplayName",
        Type: "Dropdown",
        Values: [],
        isVisible: true,
        Children: [],
        Mandatory: false,
        Props: {
          placeHolder: "Select an SuccessorDisplayName",
          label: "SuccessorDisplayName",
          id: "",
          ariaLabel: "Error message dropdown example",
          options: [
            { key: "A", text: "Option a" },
            { key: "B", text: "Option b" },
            { key: "C", text: "Option c" },
            { key: "D", text: "Option d" },
            { key: "E", text: "Option e" }
          ]
        }
      },
      {
        Label: "Successor",
        FieldName: "SuccessorUPN",
        Type: "TextField",
        Value: "",
        isVisible: true,
        Children: [],
        Mandatory: false,
        Props: {
          label: "SuccessorUPN"
        }
      },
      {
        Label: "Successor",
        FieldName: "SuccessorSharepointID",
        Type: "TextField",
        Value: "",
        isVisible: true,
        Children: [],
        Mandatory: false,
        Props: {
          label: "SuccessorSharepointID"
        }
      }
    ],
    Value: null,
    isVisible: true,
    Children: [],
    Mandatory: false,
    Props: {},
    bgStyle: "pink"
  },
  {
    Label: "Units",
    FieldName: "Units",
    Type: "TextField",
    Value: "",
    isVisible: true,
    Children: [],
    Mandatory: false,
    Props: {
      label: "Units"
    }
  },
  {
    Label: "Asset Ready to use",
    FieldName: "AssetReadyToUse",
    Type: "Checkbox",
    Value: "",
    isVisible: true,
    Children: [],
    Mandatory: false,
    Props: {
      label: "Asset Ready to use"
    }
  },
  ,
  {
    Label: "1 Invoice Only",
    FieldName: "OneInvoiceOnly",
    Type: "Checkbox",
    Value: "",
    isVisible: true,
    Children: [],
    Mandatory: false,
    Props: {
      label: "1 Invoice Only"
    }
  }
];
