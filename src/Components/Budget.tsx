import React, { useState, useEffect } from 'react';

import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BudgetItemModal from './BudgetItemModal';
import BudgetItem from './BudgetItem';

const Budget : React.FC = () => {

    //Variables
    const storageKey: string = "_budget_list";
    const [openModal, toggleModal] = useState(false);
    const [budgetItems, setBudgetItems] = useState(JSON.parse(localStorage.getItem(storageKey) || '[]') as System.BudgetItem[]);
    const [editItem, setEditItem] = useState<System.BudgetItem | null>(null);
    const [addeditClicked, setAddEditClicked] = useState(false);
    //Methods
    const handleToggleModal = () => {
        toggleModal(!openModal);
    }

    const handleSaveBudgetItem = (item: System.BudgetItem) => {
        const itemExist = budgetItems.filter(i => i.itemId === item.itemId);
        if (itemExist.length > 0) {
            const nextState = budgetItems.concat();
            nextState.forEach(i => {
                if(i.itemId === item.itemId) {
                    i.itemName = item.itemName;
                    i.itemType = item.itemType;
                    i.itemAmount = item.itemAmount;
                }
            })
            setBudgetItems(nextState);
        } else {
            setBudgetItems([...budgetItems, item as System.BudgetItem]);
        }
        
        setAddEditClicked(false);
        setEditItem(null);
    }

    const handleAddBudgetItem = () => {
        console.log('handleAddBudgetItem Clicked');
        setAddEditClicked(true);
        setEditItem(null);
    }
    const handleEditBudgetItem = (item: System.BudgetItem) => {
        console.log('handleEditBudgetItem Clicked');
        setAddEditClicked(true);
        setEditItem(item);
        
    }

    const handleDeleteBudgetItem = (itemId: string) => {
        setBudgetItems(budgetItems.filter(i => i.itemId != itemId));
    }

    const getMaxMount = () => {
        return budgetItems.reduce((max, a) => a.itemAmount > max ? a.itemAmount : max, budgetItems[0].itemAmount);
    }

    const getTotalExpenses = () => {
        return budgetItems.reduce((total, item) => (item.itemType === "Savings" || item.itemType === "Expense") ? total += item.itemAmount : total, 0);
    }

    const getTotalIncome = () => {
        return budgetItems.reduce((total, item) => (item.itemType === "Income") ? total += item.itemAmount : total, 0);
    }
    //Effects
    useEffect(() => {
        console.log('editItem Effect Triggered!');
        console.log(addeditClicked);
        if(addeditClicked) {
            handleToggleModal();
        }
    }, [editItem, addeditClicked]);

    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(budgetItems));
    }, [budgetItems]);

    return (
        <div className="card shadow mb-4">
            <div className="card-header py-3 budget-header-label">
                <h6 className="m-0 font-weight-bold text-primary">Basic Family - Monthly Budget</h6>
                <span className="budget-header-buttons">
                    <a href="#" className="btn btn-success btn-icon-split" onClick={handleAddBudgetItem}>
                        <span className="icon text-white-50">
                            <FontAwesomeIcon icon={faPlusCircle} />
                        </span>
                        <span className="text">New Item</span>
                    </a>
                </span>
                <BudgetItemModal budgetItem={editItem} modal={openModal} toggle={handleToggleModal} saveBudgetItem={handleSaveBudgetItem} />
            </div>
            <div className="card-body">
                {
                    budgetItems &&
                    budgetItems.length > 0 &&
                    budgetItems.map((budgetItem, index) => (
                        <BudgetItem key={index} item={budgetItem} maxAmount={getMaxMount()} handleEdit={handleEditBudgetItem} handleDelete={handleDeleteBudgetItem} />
                    ))
                }

                {
                    budgetItems &&
                    budgetItems.length === 0 &&
                    <div className="row mb-1 budget-entry">
                        <div className="col-lg-12">
                            <strong>No Item</strong>
                        </div>
                    </div>
                }
                
                
                <div className="row mb-1 budget-entry">
                    <div className="col-lg-6">
                        <div className="card bg-danger text-white shadow">
                            <div className="card-body">
                            { getTotalExpenses().toLocaleString(navigator.language, {minimumFractionDigits: 2}) }
                            <div className="text-white-50 small">Total Expenses</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card bg-success text-white shadow">
                            <div className="card-body">
                            { getTotalIncome().toLocaleString(navigator.language, {minimumFractionDigits: 2}) }
                            <div className="text-white-50 small">Total Income</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-1 budget-entry">
                    <div className="col-lg-12">
                        <div className="card bg-info text-white shadow">
                            <div className="card-body">
                            { (getTotalIncome() - getTotalExpenses()).toLocaleString(navigator.language, {minimumFractionDigits: 2}) }
                            <div className="text-white-50 small">Excess / Deficit</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Budget;