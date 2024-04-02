import { atom } from "recoil";

export const theme = atom({
    key: "themeAtom",
    default: window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":localStorage.getItem("theme")==="dark"?"dark":"light"
})

export const websiteSlogan = atom({
    key: "websiteSloganAtom",
    default: ["Dive into Style!", "Explore the Depths of Fashion.", "Make Waves with Every Wear.", "Where Trends Ebb and Flow.", "Fashion as Boundless as the Sea.", "Sail into Style with Outfit Ocean.", "Uncover the Treasures of Trend."]
})

export const loadingStatus = atom({
    key: "loadingStatusAtom",
    default: false
})

export const shopName = atom({
    // we can use a selector instead of this inorder to get data from the backend in the intial stage and store it to avoid unnecessary reloads
    key: "shopNameAtom",
    default: "Shop"
})

export const product = atom({
    key: "productsKey",
    default: []
})