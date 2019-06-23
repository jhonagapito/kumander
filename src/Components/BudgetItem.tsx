import React from 'react';

interface BudgetItemProps {
    item: System.BudgetItem,
    maxAmount: number
}

const BudgetItem : React.FC<BudgetItemProps> = (props: BudgetItemProps) => {

    const getAmountPercentage = () => {
        const itemPercentage = ((props.item.itemAmount / props.maxAmount) * 100);
        return itemPercentage.toString() + '%';
    }

    const getFormattedAmount = (amount: number) => {
        return amount.toLocaleString(navigator.language, {minimumFractionDigits: 2});
    }

    return (
        <div className="row mb-1 budget-entry">
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
        </div>
    );
}

export default BudgetItem;