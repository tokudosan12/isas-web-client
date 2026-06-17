
import { useAuth } from './useAuth';
import { UserRole, type UserRoleType } from '../types/auth.types';

export const useRole = () => {
  const { user } = useAuth();


  const hasRole = (role: UserRoleType): boolean => {
    return user?.role === role;
  };

  const hasAnyRole = (roles: UserRoleType[]): boolean => {
    return user ? roles.includes(user.role) : false;
  };

  const isAdmin = (): boolean => hasRole(UserRole.ADMIN);
  const isHR = (): boolean => hasRole(UserRole.HR);
  const isInterviewer = (): boolean => hasRole(UserRole.INTERVIEWER);
  const isCandidate = (): boolean => hasRole(UserRole.CANDIDATE);

  return {
    hasRole,
    hasAnyRole,
    isAdmin,
    isHR,
    isInterviewer,
    isCandidate,
    userRole: user?.role ?? null,
  };
};
