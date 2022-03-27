import { useAppSelector, useAppDispatch } from "../../utils/reduxhooks";
import "./styles.css";
import { Slider, InputNumber, Row, Col } from "antd";
import {
  changeProposalPassing,
  changeQuorum,
  changeVoteDurationDays,
  changeVoteDurationWeeks,
} from "./CreateDAO/DaoCreationSlice";
import {
  AlchemyLinks,
  InputFormAlchemy,
  InputFormHeader,
  InputGroup,
  InputSubheading,
} from "./InputFormAlchemy";

export default function Governance() {
  const inputs = useAppSelector((state) => {
    const inputs = state.Alchemy;
    return inputs;
  });

  const {
    proposalPassing,
    quorumPercentage,
    voteDurationDays,
    voteDurationWeeks,
  } = inputs;

  const dispatch = useAppDispatch();

  return (
    <>
      <InputFormAlchemy>
        <InputFormHeader>Governance</InputFormHeader>
        <InputGroup>
          <InputSubheading>Proposal Passing %</InputSubheading>
          <Row>
            <Col span={12}>
              <Slider
                min={1}
                max={100}
                value={proposalPassing}
                onChange={(value) =>
                  dispatch(changeProposalPassing(Number(value)))
                }
              />
            </Col>
            <Col span={4}>
              <InputNumber
                min={0}
                max={100}
                style={{ margin: "0 32px" }}
                type="number"
                value={proposalPassing}
                onChange={(value) =>
                  dispatch(changeProposalPassing(Number(value)))
                }
                required
                className="alchemy--input"
              />
            </Col>
          </Row>
        </InputGroup>
        <InputGroup>
          <InputSubheading>Quorum %</InputSubheading>
          <Row>
            <Col span={12}>
              <Slider
                min={1}
                max={100}
                onChange={(value) => dispatch(changeQuorum(Number(value)))}
                value={quorumPercentage}
              />
            </Col>
            <Col span={4}>
              <InputNumber
                min={0}
                max={100}
                style={{ margin: "0 32px" }}
                value={quorumPercentage}
                onChange={(value) => dispatch(changeQuorum(Number(value)))}
                required
                className="alchemy--input"
              />
            </Col>
          </Row>
        </InputGroup>
        <InputGroup>
          <InputSubheading>Basic Vote Duration</InputSubheading>
          <InputNumber
            min={0}
            max={10}
            bordered={false}
            // style={{ marginRight: `30px` }}
            value={voteDurationWeeks}
            onChange={(value) =>
              dispatch(changeVoteDurationWeeks(Number(value)))
            }
            required
            className="alchemy--input"
          />{" "}
          Weeks
          <InputNumber
            min={0}
            max={10}
            bordered={false}
            style={{ marginLeft: `30px` }}
            value={voteDurationDays}
            onChange={(value) =>
              dispatch(changeVoteDurationDays(Number(value)))
            }
            className="alchemy--input"
          />{" "}
          Days
        </InputGroup>
        <AlchemyLinks
          Back="/Alchemy/create/"
          Next="/Alchemy/create/tokenomics"
        ></AlchemyLinks>
      </InputFormAlchemy>
    </>
  );
}
