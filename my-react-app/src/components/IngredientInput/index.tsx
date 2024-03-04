import { IngredientInputTypes } from "../../interfaces/index.t";
import Input from "../Input";
import { RiDeleteBinFill } from "react-icons/ri";
import "./index.scss";

interface IngredientInputProps {
  ingredientInfo: IngredientInputTypes;
  onChangeMeasure: (value: number, id: number) => void;
  onChangeUnity: (value: string, id: number) => void;
  onDelete: (id: number) => void;
}

const IngredientInput = ({
  ingredientInfo,
  onChangeMeasure,
  onChangeUnity,
  onDelete,
}: IngredientInputProps) => {
  const handleChangeUnity = (value: string) => {
    onChangeUnity(value, ingredientInfo.ingredienteId);
  };
  const handleChangeMeasure = (value: string) => {
    onChangeMeasure(parseFloat(value), ingredientInfo.ingredienteId);
  };
  const handleDelete = () => {
    onDelete(ingredientInfo.ingredienteId);
  };

  return (
    <div className="ingredient--input--container">
      <p>{ingredientInfo.nombreIngrediente}</p>
      <Input
        type="text"
        value={ingredientInfo.unidadMedida}
        onChange={handleChangeUnity}
        placeholder="Unidad"
        regex={/^[a-zA-Z]*$/}
      />
      <Input
        type="number"
        value={String(ingredientInfo.cantidad)}
        onChange={handleChangeMeasure}
        placeholder="Cantidad"
      />
      <div className="ingredient--delete--option" onClick={handleDelete}>
        <RiDeleteBinFill />
      </div>
    </div>
  );
};

export default IngredientInput;
