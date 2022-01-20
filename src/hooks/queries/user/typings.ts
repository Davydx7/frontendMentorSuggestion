import { UseMutationResult } from 'react-query';

export type UseAuthUser = () => UseMutationResult<any, Error, Auth>;
