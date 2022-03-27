import "./styles.css";
import { useAppSelector, useAppDispatch } from "../../utils/reduxhooks";
import { changeName } from "./CreateDAO/DaoCreationSlice";
import { Input } from "antd";
import {
  AlchemyLinks,
  InputFormAlchemy,
  InputFormHeader,
  InputGroup,
  InputSubheading,
} from "./InputFormAlchemy";

export default function BasicDetails() {
  const name = useAppSelector((state) => state.Alchemy.name);

  const dispatch = useAppDispatch();

  return (
    <>
      <InputFormAlchemy>
        <InputFormHeader>Basic Details</InputFormHeader>
        <InputGroup>
          <InputSubheading>DAO Name</InputSubheading>
          <Input
            value={name}
            onChange={(e) => dispatch(changeName(String(e.target.value)))}
            placeholder="Name"
            className="alchemy--input"
            style={{ width: 200 }}
            required
          ></Input>
        </InputGroup>
        <AlchemyLinks
          Back="/Alchemy"
          Next="/Alchemy/create/governance"
        ></AlchemyLinks>
      </InputFormAlchemy>
    </>
  );
}
