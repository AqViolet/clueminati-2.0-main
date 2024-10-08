export interface signupProps {
  name: string;
  email: string;
  password: string;
  key: string;
}

export interface updateProps {
  name: string | undefined;
  password: string | undefined;
}

export interface updateScoreProps {
  teamCode: string;
  questionId: string;
  points: number;
  key: string;
}

export interface LoginResponse {
  message: string;
  data: {
    name: string;
    email: string;
    teamId: string;
    token: string;
  };
}
