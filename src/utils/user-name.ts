import { SessionData } from "@/session";
import { components } from "@/types/api-swagger";

export function userName(
  user:
    | SessionData["user"]
    | components["schemas"]["OrganizationUser"]["user"]
    | components["schemas"]["UserSuperLight"],
) {
  const firstName = user?.doctor?.is_registered
    ? user.doctor.first_name
    : user?.first_name;
  const lastName = user?.doctor?.is_registered
    ? user.doctor.last_name
    : user?.last_name;
  return { firstName, lastName };
}
