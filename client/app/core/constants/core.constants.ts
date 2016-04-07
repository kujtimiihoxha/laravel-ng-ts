module App.Core.Constants {
    export class UserRoles {
        static Guest = "guest";
        static User = "user";
        static Admin = "admin";
    }
    export class AccessLevels {
        static public: UserRoles[] = [UserRoles.Guest, UserRoles.User, UserRoles.Admin];
        static user: UserRoles[] = [UserRoles.User, UserRoles.Admin];
        static admin: UserRoles[] = [UserRoles.Admin];
    }
}
