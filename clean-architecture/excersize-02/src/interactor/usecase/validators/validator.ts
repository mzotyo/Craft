export interface MessageValidator {
	(message: string): Error | void;
}

export const MessageValidator: MessageValidator = (
	message: string
): Error | void => {
	if (message.length === 0) {
		return new Error('Input message cannot be empty');
	}
	if (message.length > 100) {
		return new Error('Input message is too long');
	}
};
