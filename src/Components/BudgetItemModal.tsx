import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,
    Form, FormGroup, Label, Input } from 'reactstrap';
import { v1 } from 'uuid';


const BudgetItemModal : React.FC<System.ModalProps> = (props: System.ModalProps) => {
    //states
    const [inputs, setInputs] = useState<System.BudgetItem>({ itemId: v1(), itemType: "Income", itemName: "", itemAmount: 0 });

    //methods
    const intializeInputValue = () => {
        console.log('intializeInputValue for Modal');
        console.log(props.budgetItem);
        if(props.budgetItem && props.budgetItem.itemId != "") {
            return { 
                itemId: props.budgetItem.itemId,
                itemType: props.budgetItem.itemType, 
                itemName: props.budgetItem.itemName, 
                itemAmount: props.budgetItem.itemAmount 
            };
        } else {
            return { itemId: v1(), itemType: "Income", itemName: "", itemAmount: 0 };
        }
    }

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        if(e) {
            e.preventDefault();
            props.saveBudgetItem(inputs);
            handleToggle();
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist();
        if (e.target.name === "itemAmount") {
            setInputs(inputs => ({...inputs, ["itemAmount"] : +e.target.value }));
        }
        else {
            setInputs(inputs => ({...inputs, [e.target.name] : e.target.value }));
        }
    }

    const handleToggle = () => {
        props.toggle(); 
    }

    //effects
    useEffect(() => {
        if(props.modal) {
            setInputs(intializeInputValue());
        }
    }, [props.modal]);

    return (
        <Modal isOpen={props.modal} toggle={handleToggle}>
            <ModalHeader toggle={handleToggle}>Budget Item</ModalHeader>
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
                <Button color="secondary" onClick={handleToggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
}

export default BudgetItemModal;