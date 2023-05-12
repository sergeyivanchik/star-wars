import { catchError } from "../api";
import { notification } from "antd";

const notificationError = (error: any, message?: string) => {
	const description = catchError(error);
	notification.error({ message: message || "Error request", description });
};

export { notificationError };
