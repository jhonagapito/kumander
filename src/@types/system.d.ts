declare module System {
    type BudgetItem = {
        itemId: string;
        itemType: string;
        itemName: string;
        itemAmount: number;
    };

    type ModalProps = {
        budgetItem?: System.BudgetItem | null;
        modal: boolean;
        toggle: () => void;
        saveBudgetItem: (item: System.BudgetItem) => void;
    };
}
