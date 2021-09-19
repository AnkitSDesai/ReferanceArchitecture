export default class User:IUser {
    constructor(
        public id: string,
        public name: string,
        public email: string, 
        public type: string,
        public Company:string,
        public isAdmin:boolean

        ) 
        {
        
         }
}
