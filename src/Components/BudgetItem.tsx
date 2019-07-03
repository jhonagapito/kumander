import React, { useState } from 'react';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';

import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { v1 } from 'uuid';
interface BudgetItemProps {
    item: System.BudgetItem,
    maxAmount: number,
    handleEdit: (item: System.BudgetItem) => void;
    handleDelete: (itemId: string) => void;
}

const BudgetItem : React.FC<BudgetItemProps> = (props: BudgetItemProps) => {
    //states
    const [popoverOpen, setPopover] = useState(false);
    
    //methods
    const getAmountPercentage = () => {
        const itemPercentage = ((props.item.itemAmount / props.maxAmount) * 100);
        return itemPercentage.toString() + '%';
    }

    const getFormattedAmount = (amount: number) => {
        return amount.toLocaleString(navigator.language, {minimumFractionDigits: 2});
    }

    const togglePopover = () => {
        setPopover(!popoverOpen);
    }
    
    const handleEdit = () => {
        console.log('Edit Budget Item');
        props.handleEdit(props.item);
    }

    const handleDelete = () => {
        console.log('Delete Budget Item');
        props.handleDelete(props.item.itemId);
    }

    return (
        <div className="row mb-1 budget-entry" id={props.item.itemName.replace(/ /g, '')} onClick={togglePopover}>
            <div className="col-lg-6">
            { 
                (props.item.itemType === 'Savings' || props.item.itemType === 'Expense') &&
                <>
                    <h4 className="small font-weight-bold">{props.item.itemName} <span className="float-left">{getFormattedAmount(props.item.itemAmount)}</span></h4>
                    <div className="progress mb-2 outflow">
                        <div className={(props.item.itemType === 'Savings' ? 'progress-bar bg-info' : 'progress-bar bg-danger')} role="progressbar" style={{width: getAmountPercentage()}} aria-valuenow={20} aria-valuemin={0} aria-valuemax={props.maxAmount}></div>
                    </div>
                </>
            }
            </div>
            <div className="col-lg-6">
            {
                (props.item.itemType === 'Income') &&
                <>
                    <h4 className="small font-weight-bold">{props.item.itemName} <span className="float-right">{getFormattedAmount(props.item.itemAmount)}</span></h4>
                    <div className="progress mb-2">
                        <div className="progress-bar bg-success" role="progressbar" style={{width: getAmountPercentage()}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={props.maxAmount}></div>
                    </div>
                </>
            }
            </div>

            <Popover trigger="legacy" placement="bottom-end" isOpen={popoverOpen} target={props.item.itemName.replace(/ /g, '')} toggle={togglePopover}>
                <PopoverHeader>{props.item.itemName}</PopoverHeader>
                <PopoverBody>
                <a href="#" className="btn btn-info btn-circle btn-sm" onClick={handleEdit}>
                    <FontAwesomeIcon icon={faEdit} />
                </a>
                {' '}
                <a href="#" className="btn btn-danger btn-circle btn-sm" onClick={handleDelete}>
                <FontAwesomeIcon icon={faTrash} />
                </a>
                </PopoverBody>
            </Popover>
        </div>
    );
}

export default BudgetItem;