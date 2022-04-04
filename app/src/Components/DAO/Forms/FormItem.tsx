import React from "react"
import { InputNumber, Input } from "antd";

interface Props {
    inputTitle?: string,
    placeHolder?: string,
    disabled?: boolean
}

const defaultProps = {
    inputTitle: "Form Title",
    placeHolder: "Placeholder",
    diabled: false
}

const FormItem: React.FC<Props> = (props: Props) => {

    return(
        <>
        <div>
            <strong 
            style={{color: '#ffffff'}}
            >
                {props.inputTitle}
            </strong>
        </div>
        <div>
        <Input
            disabled={props.disabled}
            maxLength={25}
            // style={{ width: 300 }}
            type="string"
            value={props.placeHolder}
            //   onChange={(e) => dispatch(changeTokenName(String(e.target.value)))}
            className="form--input"
        />
        </div>
        
        </>
    )
}

FormItem.defaultProps = defaultProps
export default FormItem