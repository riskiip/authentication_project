export class Login {
  email!: string;
  password!: string;
  data?: Data;
}

export class Data {
  status!: string;
  authToken!: string | undefined;
}
