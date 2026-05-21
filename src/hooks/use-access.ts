import { useSession } from "@/session";

export const useApiAccess = () => {
  const { session, isFetching, isEnabled } = useSession();

  const getOrgAccess = () => {
    const hasOrganization = !!session?.user?.sessions.find((s) => s.current)
      ?.org_uuid?.length;

    if (isFetching || !isEnabled) {
      return false;
    }

    // simple user
    if (!session.user?.is_superuser) {
      return hasOrganization;
    }

    // super user, inside org
    if (hasOrganization) {
      return true;
    }

    // super user, outside org
    return false;
  };

  return { orgAccess: getOrgAccess() };
};
