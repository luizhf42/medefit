export type Sex = "male" | "female";

export interface UserInputs {
	sex: Sex;
	weight: number;
	height: number;
	neck: number;
	waist: number;
	hip: number;
	areInputsValid: boolean;
}
