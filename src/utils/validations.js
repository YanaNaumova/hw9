const formInfo = [
  {
    htmlFor: "firstField",
    labelTitle: "First Field",
    type: "text",
    id: "firstField",
    name: "firstField",
    validation: {
      required: "Must not be empty",
      minLength: {
        value: 5,
        message: "Value should be langer than 5",
      },
      maxLength: {
        value: 15,
        message: "Value schoud be schorter than 15",
      },
    },
    placeholder: "more then 5 Symbols",
  },
  {
    htmlFor: "secondField",
    labelTitle: "Second Field",
    type: "text",
    id: "secondField",
    name: "secondField",
    validation: { required: "Must not be empty" },
    placeholder: "Must not be empty",
  },
];

export default formInfo;
