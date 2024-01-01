import service from "@/utils/request/index";

export function getArticleTitleList() {
    return service({
        url: "/article/getArticleTitleList",
        method: "GET"
    })
}