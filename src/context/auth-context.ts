import {useContext} from 'react';
import {AuthContext} from 'src/providers/auth-provider';

export const useAuthContext = () => useContext(AuthContext);
