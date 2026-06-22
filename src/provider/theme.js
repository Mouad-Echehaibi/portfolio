export const setTheme = (theme) => {
    localStorage.setItem("theme", theme);
    // documentElement = html :
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
};

export const getTheme = () => {
    return localStorage.getItem("theme") || "dark";
};