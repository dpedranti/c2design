export class ContactModel {
  constructor(
    public name: string,
    public email: string,
    public city: string,
    public state: string,
    public country: string,
    public company?: string,
    public address?: string,
    public zip?: string,
    public comments?: string,
  ) { }
}
