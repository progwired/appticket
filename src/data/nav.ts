import { routes } from "@/routes";

export const navData = {
    main: [
        {
            label: "dashboard",
            href: routes.home()
        },
        {
            label: "tickets",
            href: routes.tickets()
        },
        {
            label: "users",
            href: routes.users()
        },
    ],
    user: [
        {
            label: "login",
            href: routes.login()
        },
        {
            label: "signup",
            href: routes.signup()
        }
    ]
}