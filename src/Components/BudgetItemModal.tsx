import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,
    Form, FormGroup, Label, Input, FormText } from 'reactstrap';


type ModalProps = {
    modal: boolean;
    toggle: () => void;
};

type BudgetItem = {
    itemType: string;
    itemName: string;
    itemAmount: number;
}

const BudgetItemModal : React.FC<ModalProps> = (props: ModalProps) => {
    const [inputs, setInputs] = useState<BudgetItem>({ itemType: "", itemName: "", itemAmount: 0 });

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        if(e) {
            e.preventDefault();
            alert(JSON.stringify({...inputs}));
            
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist();
        setInputs(inputs => ({...inputs, [e.target.name] : e.target.value }));
    }

    return (
        <Modal isOpen={props.modal} toggle={props.toggle}>
            <ModalHeader toggle={props.toggle}>Budget Item</ModalHeader>
            <ModalBody>
            <Form>
                <FormGroup>
                    <Label for="itemType">Item Type</Label>
                    <Input type="select" name="itemType" id="itemType" onChange={handleInputChange} value={inputs.itemType}>
                        <option>Income</option>
                        <option>Savings</option>
                        <option>Expense</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="itemName">Name</Label>
                    <Input type="text" name="itemName" id="itemName" placeholder="Name" onChange={handleInputChange} value={inputs.itemName} />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Amount</Label>
                    <Input type="number" name="itemAmount" id="itemAmount" placeholder="Amount" onChange={handleInputChange} value={inputs.itemAmount} />
                </FormGroup>
            </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleSubmit}>Save</Button>{' '}
                <Button color="secondary" onClick={props.toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
}

export default BudgetItemModal;