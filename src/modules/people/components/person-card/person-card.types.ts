import { IPerson } from "../../types";

interface IPersonCardProps extends Pick<IPerson, "name" | "image" | "id"> {}

export type { IPersonCardProps };
