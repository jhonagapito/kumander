import React, { useState } from 'react';

import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BudgetItemModal from './BudgetItemModal';

const Budget : React.FC = () => {

    const [openModal, toggleModal] = useState(false);

    const handleToggleModal = () => {
        toggleModal(!openModal);
    }
    return (
        <div className="card shadow mb-4">
            <div className="card-header py-3 budget-header-label">

                        <h6 className="m-0 font-weight-bold text-primary">Basic Family - Monthly Budget</h6>

                        <span className="budget-header-buttons">
                            <a href="#" className="btn btn-success btn-icon-split" onClick={handleToggleModal}>
                                <span className="icon text-white-50">
                                    <FontAwesomeIcon icon={faPlusCircle} />
                                </span>
                                <span className="text">New Item</span>
                            </a>
                        </span>
                        <BudgetItemModal modal={openModal} toggle={handleToggleModal} />


            </div>
            <div className="card-body">
                <div className="row mb-1 budget-entry">
                    <div className="col-lg-6"></div>
                    <div className="col-lg-6">
                        <h4 className="small font-weight-bold">Income <span className="float-right">10,000</span></h4>
                        <div className="progress mb-2">
                            <div className="progress-bar bg-success" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
                        </div>
                    </div>
                </div>

                <div className="row mb-1 budget-entry">
                    <div className="col-lg-6">
                        <h4 className="small font-weight-bold">Savings <span className="float-left">2,000</span></h4>
                        <div className="progress mb-2 outflow">
                            <div className="progress-bar bg-info" role="progressbar" style={{width: '20%'}} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}></div>
                        </div>
                    </div>
                    <div className="col-lg-6"></div>
                </div>

                <div className="row mb-1 budget-entry">
                    <div className="col-lg-6">
                        <h4 className="small font-weight-bold">Expenses <span className="float-left">8,000</span></h4>
                        <div className="progress mb-2 outflow">
                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}></div>
                        </div>
                    </div>
                    <div className="col-lg-6"></div>
                </div>
                
                <div className="row mb-1 budget-entry">
                    <div className="col-lg-6">
                        <div className="card bg-danger text-white shadow">
                            <div className="card-body">
                            10,000
                            <div className="text-white-50 small">Total Expenses</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card bg-success text-white shadow">
                            <div className="card-body">
                            10,000
                            <div className="text-white-50 small">Total Income</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default Budget;