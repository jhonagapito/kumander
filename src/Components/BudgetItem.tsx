import React from 'react';

interface BudgetItemProps {
    item: System.BudgetItem
}

const BudgetItem : React.FC<BudgetItemProps> = (props: BudgetItemProps) => {
    return (
        <div className="row mb-1 budget-entry">
            <div className="col-lg-6">
            { 
                (props.item.itemType === 'Savings' || props.item.itemType === 'Expense') &&
                <>
                    <h4 className="small font-weight-bold">{props.item.itemName} <span className="float-left">{props.item.itemAmount.toLocaleString(navigator.language, {minimumFractionDigits: 2})}</span></h4>
                    <div className="progress mb-2 outflow">
                        <div className={(props.item.itemType === 'Savings' ? 'progress-bar bg-info' : 'progress-bar bg-danger')} role="progressbar" style={{width: '20%'}} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}></div>
                    </div>
                </>
            }
            </div>
            <div className="col-lg-6">
            {
                (props.item.itemType === 'Income') &&
                <>
                    <h4 className="small font-weight-bold">{props.item.itemName} <span className="float-right">{props.item.itemAmount.toLocaleString(navigator.language, {minimumFractionDigits: 2})}</span></h4>
                    <div className="progress mb-2">
                        <div className="progress-bar bg-success" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
                    </div>
                </>
            }
            </div>
        </div>
    );
}

export default BudgetItem;