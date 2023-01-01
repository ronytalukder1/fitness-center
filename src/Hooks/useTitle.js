import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - CreativeIT Demo`;
    }, [title])
};

export default useTitle;