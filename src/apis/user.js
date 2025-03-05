import httpInstance from "@/utils/http"

export const loginAPI  = ({account, password}) => {
    return httpInstance({
        method: 'POST',
        url: "/login",
        data:{account, password}
    })
}