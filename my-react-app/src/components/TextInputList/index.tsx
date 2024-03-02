import { RecipeStepTypes } from "../../interfaces/index.t";
import { RiDeleteBinFill } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";
import Button from "../Button";
import Input from "../Input";
import "./index.scss";

interface TextInputListProps {
  textInputData: RecipeStepTypes[];
  handleChangeData: (data: RecipeStepTypes[]) => void;
  placeholderForTextInput: string;
  textAddBtn: string;
}

const TextInputList = ({
  textInputData,
  handleChangeData,
  placeholderForTextInput,
  textAddBtn,
}: TextInputListProps) => {
  const handleAddTextInput = () => {
    const newTextInput: RecipeStepTypes = {
      id: uuidv4(),
      description: "",
    };
    handleChangeData([...textInputData, newTextInput]);
  };
  const handleChangeTextInput = (value: string, id: string) => {
    const updatedData = textInputData.map((dataInput) =>
      dataInput.id === id ? { ...dataInput, description: value } : dataInput
    );
    handleChangeData(updatedData);
  };

  const handleDeleteTextInput = (id: string) => {
    const updatedData = textInputData.filter(
      (dataInput) => dataInput.id !== id
    );
    handleChangeData(updatedData);
  };

  return (
    <div className="text--input--list--container">
      <Button
        borderRadius={10}
        text={textAddBtn}
        onClick={handleAddTextInput}
      />
      <div className="text--input--list--items">
        {textInputData &&
          textInputData.map((textInput, index) => {
            return (
              <div className="text--input--list--item" key={textInput.id}>
                <span>{index + 1}.</span>
                <Input
                  placeholder={placeholderForTextInput}
                  value={textInput.description}
                  type="text"
                  onChange={(value) =>
                    handleChangeTextInput(value, textInput.id)
                  }
                />
                <div
                  className="text--input--delete"
                  onClick={() => handleDeleteTextInput(textInput.id)}
                >
                  <RiDeleteBinFill />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TextInputList;
