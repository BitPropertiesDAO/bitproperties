import "./styles.css";
import { useAppSelector, useAppDispatch } from "../../utils/reduxhooks";
import { changeName } from "./CreateDAO/DaoCreationSlice";
import { Input } from "antd";
import {
  FormLinksBottom,
  AppHeader,
  InputGroup,
  InputSubheading,
} from "./InputFormAlchemy";

export default function BasicDetails() {
  const name = useAppSelector((state) => state.Alchemy.name);

  const dispatch = useAppDispatch();

  return (
    <>
      <AppHeader>Basic Details</AppHeader>
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
      <FormLinksBottom
        Back="/app/Alchemy"
        Next="/app/Alchemy/create/governance"
      ></FormLinksBottom>
    </>
  );
}
