import { createContext } from 'react';
import { UserContextType } from '../types/ContextType';

export const UsersContext = createContext<UserContextType>({
	stateUsers: [],
	handlerSetUsers: () => [],
});
