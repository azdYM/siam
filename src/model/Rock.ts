import Case from "./Case";
import ICaseContent from "./ICaseContent";

export default class Rock implements ICaseContent {
    constructor(
        public id: string,
        public cell: Case,
    ) {}

    getCurrentCell(): Case {
        return this.cell
    }

    updateCurrentCell(cell: Case): void {
        this.cell = cell
    }

    getInitialName(): ("RO" | "E" | "R") {
        return "RO"
    }

    getId() {
        return this.id
    }
    
}