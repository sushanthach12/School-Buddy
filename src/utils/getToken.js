import { useSelector } from "react-redux"

export const GetAuthToken = () => {
    const user = useSelector((state) => state.users.user);
    if (user.token) {
        return user.token
    }
    return null
}