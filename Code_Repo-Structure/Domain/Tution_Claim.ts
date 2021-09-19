// Claim Constructor

export default class Claim {
    readonly id: ClaimId;
    name: Name;
    description?: Description;
    status: ClaimStatus;
    period: Period;
    data:PayLoad;
    private constructor(id: ClaimId, name: Name, status: ClaimStatus, period: Period, description?: Description,data:Payload) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.status = status;
        this.period = period;
        this.data=data;

    }
}
