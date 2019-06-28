declare module System {
    type BudgetItem = {
        itemType: string;
        itemName: string;
        itemAmount: number;
    };

    type ModalProps = {
        budgetItem?: System.BudgetItem;
        modal: boolean;
        toggle: () => void;
        saveBudgetItem: (item: System.BudgetItem) => void;
    };
}
