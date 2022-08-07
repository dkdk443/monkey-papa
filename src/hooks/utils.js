import { useMediaQuery } from "../components/useMediaQuery";

export const useIsSmall = () => useMediaQuery('(max-width: 600px)');
